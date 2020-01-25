<?php

namespace App;

use Illuminate\Support\Facades\Cookie;

class Cart
{
    //
    public $items = null ;
    public $totalPrice = 0 ;
    public $cookie ;

    public function __construct($oldCart)
    {
        $this->cookie = Cookie::has('currency') ? strtolower(Cookie::get('currency')) : 'usd';
        if($oldCart){
            $this->items = $oldCart->items;
            $this->totalPrice = $oldCart->totalPrice;
        }
    }

    public function add( $item, $username ){
        $storedItem = null;
        $optionString = null;
        $options = $item->details()
            ->with('subDetailsWithoutImage')
            ->without('subDetails')
            ->get();
        $optionsArray = [];
        if ($options){
            foreach ($options as $option){
                $optionsArray[$option->name] = [
                    'id'    => $option->subDetailsWithoutImage[0]->id,
                    'name'    => $option->subDetailsWithoutImage[0]->name,
                ];
                $optionString .= ('.'.$option->subDetailsWithoutImage[0]->id);
            }
        }
        if($this->items){
            if(array_key_exists($item->id.$optionString.$username,$this->items)){
                $storedItem = $this->items[$item->id.$optionString.$username];
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
                'qty'           => 0,
                'price'         => $price,
                'item'          => $item,
                'options'       => $optionsArray,
                'totalPriceQty' => 0,
                'minQty'        => $item->quantity,
            ];
        }
        if($storedItem['qty'] < $item->quantity){
            $this->totalPrice -= $storedItem['totalPriceQty'];
            $storedItem['qty']++;
            $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
            $this->items[$item->id.$optionString.$username] = $storedItem;
            $this->totalPrice += $storedItem['totalPriceQty'];
            return true;
        }
        return false;

    }

    public function addWithQtyOptions($item,$options){
        $currency = $this->cookie ;
        $optionsArray = [];
        $optionsPrices = 0;
        $optionsQty = [] ;
        $storedItem = null;
        $oldItem = $this->items[$options['string']];
        $keyProduct = $item->id.$options['string'];
        if($this->items){
            if(array_key_exists($keyProduct,$this->items)){
                $oldItem = $this->items[$keyProduct];
                unset($this->items[$keyProduct]);
            }elseif (array_key_exists($options['string'],$this->items)){
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
        $optionsQty[] = $item->quantity;
        $storedItem = [
            'for'           => $oldItem ? $oldItem['for'] : null ,
            'qty'           => $options['qty'],
            'price'         => $price + $optionsPrices,
            'item'          => $item,
            'options'       => $optionsArray,
            'totalPriceQty' => 0,
            'minQty'        => min($optionsQty),
        ];
        if($storedItem['qty'] < min($optionsQty)){
            $this->totalPrice -= $oldItem ? $oldItem['totalPriceQty'] : 0 ;
            $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
            $this->items[$keyProduct] = $storedItem;
            $this->totalPrice += $storedItem['totalPriceQty'];
            return true;
        }
        return false;
    }

    public function deleteAProduct($item){
        if($this->items){
            if( array_key_exists($item,$this->items) ){
                $storedItem = $this->items[$item];
                $this->totalPrice -= $storedItem['totalPriceQty'];
                unset($this->items[$item]);
                return true;
            }
        }
        return false;
    }

    public function qtyUpdate($index,$qty){
        if(array_key_exists($index,$this->items)){
            $storedItem = $this->items[$index];
            if($qty <= $storedItem['minQty']){
                $this->totalPrice -= $storedItem['totalPriceQty'] ;
                $storedItem['qty'] = $qty;
                $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
                $this->items[ $index ] = $storedItem;
                $this->totalPrice += $storedItem['totalPriceQty'];
            }
        }
    }

    public function deleteAll(){
        $this->items = [];
        $this->totalPrice = null;
        $this->cookie = null;
    }





}


