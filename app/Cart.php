<?php

namespace App;

use Arr;
use Illuminate\Support\Facades\Cookie;

class Cart
{
    //
    public $items = null ;
    public $totalPrice = 0 ;
    public $couponTotalPrice = 0 ;
    public $cookie ;
    public $coupon ;

    public function __construct($oldCart)
    {
        $this->cookie = Cookie::get('currency') ? Cookie::get('currency') : 'usd';
        if($oldCart){
            $this->items = $oldCart->items;
            $this->totalPrice = $oldCart->totalPrice;
            $this->coupon = $oldCart->coupon;
            $this->couponTotalPrice = $oldCart->couponTotalPrice;
        }
    }

    public function add( $item, $username ){
        $storedItem = null;
        $optionString = null;
        $foundItem = null;
        $qty = $item->isOffer ? $item->quantity_offer : $item->quantity;
        $options = $item->details()
            ->with('subDetailsWithoutImage')
            ->without('subDetails')
            ->get();
        $optionsArray = [];
        if ($options){
            foreach ($options as $option){
                $optionsArray[$option->name] = [
                    'id'    => $option->subDetailsWithoutImage[0]->id,
                    'id_option' => $option->id,
                    'name'    => $option->subDetailsWithoutImage[0]->name,
                ];
                $optionString .= ('.'.$option->subDetailsWithoutImage[0]->id);
            }
        }
        if($this->items){
            if(array_key_exists($item->id.$optionString.$username,$this->items)){
                $storedItem = $this->items[$item->id.$optionString.$username];
                $foundItem = true;
            }
        }
        if(!$storedItem){
            $currency = $this->cookie ;
            if ($item->isOffer){
                $currency = "offer_price_$currency";
                $price = $item->$currency;
            }else{
                $currency = "price_$currency";
                $price = $item->$currency;
            }
            $storedItem  = [
                'for'           => $username,
                'name'          => $item->name,
                'slug'          => $item->slug,
                'qty'           => 0,
                'price'         => $price,
                'couponPrice'   => null,
                'couponTotalPrice'   => null,
                'item'          => $item,
                'options'       => $optionsArray,
                'totalPriceQty' => 0,
                'minQty'        => $qty,
            ];
        }
        if($storedItem['qty'] < $qty){
            $this->totalPrice -= $storedItem['totalPriceQty'];
            $storedItem['qty']++;
            $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
            $this->items[$item->id.$optionString.$username] = $storedItem;
            $this->totalPrice += $storedItem['totalPriceQty'];
            $this->totalPrice = round($this->totalPrice, 2);
            if ($this->coupon){
                $this->coupon($this->coupon);
            }
            return true;
        }
        if ($foundItem){
            return false;
        }
        return null;
    }

    public function addWithQtyOptions($item,$options){
        $currency = $this->cookie ;
        $optionsArray = [];
        $optionsPrices = 0;
        $optionsQty = [] ;
        $storedItem = null;
        $oldItem = null;
        $qty = $item->isOffer ? $item->quantity_offer : $item->quantity;
        $keyProduct = $item->id.$options['string'];
        if($this->items){
            if(array_key_exists($keyProduct,$this->items)){
                $oldItem = $this->items[$keyProduct];
                unset($this->items[$keyProduct]);
            }elseif (array_key_exists($options['string'],$this->items)){
                $oldItem = $this->items[$options['string']];
                if(array_key_exists($item->id.$options['subOptions'].$oldItem['for'],$this->items)){
                    $oldItem = $this->items[$item->id.$options['subOptions'].$oldItem['for']];
                    $options['qty'] += $oldItem['qty'];
                }else{
                    $oldItem = $this->items[$options['string']];
                }
                unset($this->items[$options['string']]);
                $keyProduct = $item->id.$options['subOptions'].$oldItem['for'];
            }
        }
        if ($options['options']) {
            $optionsItem = $item->details()
                ->with('subDetailsWithoutImage')
                ->without('subDetails')
                ->get();
            foreach ($options['options'] as $option) {
                $singleOption = $optionsItem->find($option['id']);
                $singleSubOption = $singleOption->subDetailsWithoutImage->find($option['sub']);
                $optionsArray[$singleOption->name] = [
                    'id' => $singleSubOption->id,
                    'id_option' => $singleOption->id,
                    'name' => $singleSubOption->name,
                ];
                $optionsPrices += $singleSubOption['price_' . $currency];
                if ($singleSubOption->quantity > 0){
                    $optionsQty[] =  $singleSubOption->quantity;
                }
            }
        }
        if ($item->isOffer) {
            $currency = "offer_price_$currency";
            $price = $item->$currency;
        } else {
            $currency = "price_$currency";
            $price = $item->$currency;
        }
        if ( $qty != 0){
            $optionsQty[] =  $qty ;
        }
        $storedItem = [
            'for'           => $oldItem ? $oldItem['for'] : null ,
            'name'          => $item->name,
            'slug'          => $item->slug,
            'qty'           => $options['qty'],
            'price'         => $price + $optionsPrices,
            'couponPrice'   => null,
            'couponTotalPrice'   => null,
            'item'          => $item,
            'options'       => $optionsArray,
            'totalPriceQty' => 0,
            'minQty'        => min($optionsQty),
        ];
        if($storedItem['qty'] <= min($optionsQty)){
            $this->totalPrice -= $oldItem ? $oldItem['totalPriceQty'] : 0 ;
            $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
            $this->items[$keyProduct] = $storedItem;
            $this->totalPrice += $storedItem['totalPriceQty'];
            $this->totalPrice = round($this->totalPrice, 2);
            if ($this->coupon){
                $this->coupon($this->coupon);
            }
            return true;
        }
        return false;
    }

    public function deleteAProduct($item){
        if($this->items){
            if( array_key_exists($item,$this->items) ){
                $storedItem = $this->items[$item];
                $this->totalPrice -= $storedItem['totalPriceQty'];
                $this->totalPrice = round($this->totalPrice, 2);
                if ($this->coupon){
                    $this->couponTotalPrice -= $storedItem['couponTotalPrice'];
                    $this->couponTotalPrice = round($this->couponTotalPrice , 2);
                }
                unset($this->items[$item]);
                return true;
            }
        }
        return false;
    }

    public function qtyUpdate($index,$qty){
        if(array_key_exists($index,$this->items)){
            $storedItem = $this->items[$index];
            if($storedItem['minQty'] == $storedItem['qty']){
                return false;
            } elseif ($qty <= $storedItem['minQty']){
                if ($this->coupon){
                    $this->couponTotalPrice -= $storedItem['couponTotalPrice'];
                    $storedItem['couponTotalPrice'] = round($storedItem['couponPrice'] * $qty,2);
                    $this->couponTotalPrice += $storedItem['couponTotalPrice'];
                }
                $this->totalPrice -= $storedItem['totalPriceQty'] ;
                $storedItem['qty'] = $qty;
                $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
                $this->items[ $index ] = $storedItem;
                $this->totalPrice += $storedItem['totalPriceQty'];
                $this->totalPrice = round($this->totalPrice, 2);
                if ($this->coupon){
                    $this->coupon($this->coupon);
                }
                return true;
            }
            return false;
        }
    }

    public function updateItems($currency){
        $this->cookie = $currency ;
        if($this->items){
            $total = 0;
            $optionsPrices = 0;
            $optionsArray = [];
            $minQtyArray = [];
            $deletedItems = [];
            $ids = Arr::pluck($this->items, 'item.id');
            $products = Product::findMany($ids)->keyBy('slug_en');
            $products->each(function ($item){
                unset($item->description_ar);
                unset($item->description_en);
            });
            foreach ($this->items as $index => $item){
                $product = $products[$item['item']->slug_en];
                if ($product->isOffer) {
                    $currency = "offer_price_$this->cookie";
                    $minQtyArray[]= $product->quantity_offer;
                } else {
                    $currency = "price_$this->cookie";
                    $minQtyArray[]= $product->quantity;
                }
                if ($item['options']) {
                    $optionsItem = $product->details()
                        ->with('subDetailsWithoutImage')
                        ->without('subDetails')
                        ->get();
                    foreach ($item['options'] as $option) {
                        $singleOption = $optionsItem->find($option['id_option']);
                        $singleSubOption = $singleOption->subDetailsWithoutImage->find($option['id']);
                        $optionsArray[$singleOption->name] = [
                            'id' => $singleSubOption->id,
                            'id_option' => $singleOption->id,
                            'name' => $singleSubOption->name,
                        ];
                        $optionsPrices += $singleSubOption['price_' . $currency];
                        if ($singleSubOption->quantity > 0){
                            $minQtyArray[] =  $singleSubOption->quantity;
                        }
                    }
                }
                $storedItem = [
                    'for'           => $item['for'],
                    'name'          => $product->name,
                    'slug'          => $product->slug,
                    'qty'           => $item['qty'],
                    'price'         => $product->$currency + $optionsPrices,
                    'couponPrice'   => null,
                    'couponTotalPrice'   => null,
                    'item'          => $product,
                    'options'       => $optionsArray,
                    'totalPriceQty' => $product->$currency * $item['qty'],
                    'minQty'        => min($minQtyArray),
                ];
                if ( $product->isOffer != $item['item']->isOffer){
                    $storedItem['message'] = $product->isOffer ?
                        trans("The Offer Started!!! You can add the product to cart with new price.")
                        : trans('The Offer Ended.') ;
                    $deletedItems[] = $storedItem;
                    unset($this->items[$index]);
                }elseif ($storedItem['qty'] > $storedItem['minQty']){
                    $storedItem['message'] = trans('Sorry But Quantity of The Product Is Over');
                    $deletedItems[] = $storedItem;
                    unset($this->items[$index]);
                }else{
                    $total += $storedItem['totalPriceQty'];
                    $this->items[$index] = $storedItem;
                }
                $optionsArray = [];
            }
            $this->totalPrice = $total;
            if ($this->coupon){
                $this->coupon($this->coupon);
            }
            return $deletedItems;
        }

    }

    public function deleteAll(){
        $this->items = [];
        $this->totalPrice = null;
        $this->cookie = null;
        $this->coupon = null;
    }

    public function coupon($coupon){
        if ($this->coupon){
            $this->removeCoupon();
        }
        if ($coupon->seller_id){
            $this->seller($coupon,$coupon->seller_id);
        }elseif ($coupon->product_id){
            $this->product($coupon,$coupon->product_id);
        }elseif ($coupon->sub_categories_id){
            $this->subcategory($coupon,$coupon->sub_categories_id);
        }else{
            $this->allItems($coupon);
        }
        $this->coupon = $coupon;
    }

    protected function seller($coupon,$seller_id){
        $total = $this->totalPrice;
        $i = 0;
        foreach ($this->items as $index => $item){
            if ($item['item']->seller_id === $seller_id){
                $storedItem = $this->items[$index];
                $storedItem['couponPrice'] = $this->couponPrice($coupon,$storedItem['price']);
                $total -= $storedItem['totalPriceQty'];
                $storedItem['couponTotalPrice'] = $storedItem['couponPrice'] * $storedItem['qty'];
                $this->items[ $index ] = $storedItem;
                $this->couponTotalPrice += $storedItem['couponTotalPrice'];
                $i++;
                if ($i === $coupon->count){
                    break;
                }
            }
        }
        $this->couponTotalPrice = $this->couponTotalPrice + $total;
        $this->couponTotalPrice = round($this->couponTotalPrice, 2);
    }

    protected function product($coupon,$product){
        $total = $this->totalPrice;
        $i = 0;
        foreach ($this->items as $index => $item){
            if ($item['item']->id === $product){
                $storedItem = $this->items[$index];
                $storedItem['couponPrice'] = $this->couponPrice($coupon,$storedItem['price']);
                $total -= $storedItem['totalPriceQty'];
                $storedItem['couponTotalPrice'] = $storedItem['couponPrice'] * $storedItem['qty'];
                $this->items[ $index ] = $storedItem;
                $this->couponTotalPrice += $storedItem['couponTotalPrice'];
                $i++;
                if ($i === $coupon->count){
                    break;
                }
            }
        }
        $this->couponTotalPrice = $this->couponTotalPrice + $total;
        $this->couponTotalPrice = round($this->couponTotalPrice, 2);
    }

    protected function subcategory($coupon,$subCategories){
        $SubCategoryProducts = SubCategory::with('products')
                ->where('id',$subCategories)
                ->first()
                ->products->pluck('productable.id', 'id')
                ->toArray();
        $total = $this->totalPrice;
        $i = 0;
        foreach ($this->items as $index => $item){
            if (in_array($item['item']->id,$SubCategoryProducts)) {
                $storedItem = $this->items[$index];
                $storedItem['couponPrice'] = $this->couponPrice($coupon,$storedItem['price']);
                $total -= $storedItem['totalPriceQty'];
                $storedItem['couponTotalPrice'] = $storedItem['couponPrice'] * $storedItem['qty'];
                $this->items[$index] = $storedItem;
                $this->couponTotalPrice += $storedItem['couponTotalPrice'];
                $i++;
                if ($i === $coupon->count){
                    break;
                }
            }
        }
        $this->couponTotalPrice = $this->couponTotalPrice + $total;
        $this->couponTotalPrice = round($this->couponTotalPrice, 2);
    }

    protected function allItems($coupon){
        $total = $this->totalPrice;
        $i=0;
        foreach ($this->items as $index => $item){
                $storedItem = $this->items[$index];
                $storedItem['couponPrice'] = $this->couponPrice($coupon,$storedItem['price']);
                $total -= $storedItem['totalPriceQty'];
                $storedItem['couponTotalPrice'] = $storedItem['couponPrice'] * $storedItem['qty'];
                $this->items[ $index ] = $storedItem;
                $this->couponTotalPrice += $storedItem['couponTotalPrice'];
                $i++;
                if ($i === $coupon->count){
                    break;
                }

        }
        $this->couponTotalPrice = $this->couponTotalPrice + $total;
        $this->couponTotalPrice = round($this->couponTotalPrice, 2);

    }

    public function removeCoupon()
    {
        $this->couponTotalPrice = 0 ;
        $this->coupon = null;
        foreach ($this->items as $index => $item){
            $storedItem = $this->items[$index];
            $storedItem['couponPrice'] = null ;
            $storedItem['couponTotalPrice'] = null ;
            $this->items[ $index ] = $storedItem;
        }
    }

    protected function couponPrice($coupon,$price){
        if($coupon->is_percent){
            return round(((100 - $coupon->discount) * 0.01) *  $price, 2);
        }else{
            return $price - $coupon->price();
        }
    }


}


