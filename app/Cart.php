<?php

namespace App;

use Illuminate\Support\Facades\Cookie;

class Cart
{
    //
    public $items = null ;
    public $totalQty = 0 ;
    public $totalPrice = 0 ;

    public function __construct($oldCart)
    {
        if($oldCart){
            $this->items = $oldCart->items;
            $this->totalQty = $oldCart->totalQty;
            $this->totalPrice = $oldCart->totalPrice;
        }
    }

    public function add( $item ){
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
            if(array_key_exists($item->id.$optionString,$this->items)){
                $storedItem = $this->items[$item->id.$optionString];
            }
        }
        if(!$storedItem){
            $cookie = strtolower(Cookie::get('currency'));
            $currency = $cookie ? $cookie : 'usd';
            if ($item->isOffer){
                $currency = "offer_price_$currency";
                $price = $item->$currency;
            }else{
                $currency = "price_$currency";
                $price = $item->$currency;
            }
            $storedItem  = [
                'qty'           => 0,
                'price'         => $price,
                'item'          => $item,
                'options'       => $optionsArray,
                'totalPriceQty' => 0,
            ];
        }
        if($storedItem['qty'] < $item->quantity){
            $this->totalPrice -= $storedItem['totalPriceQty'];
            $storedItem['qty']++;
            $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
            $this->items[$item->id.$optionString] = $storedItem;
            $this->totalQty++;
            $this->totalPrice += $storedItem['totalPriceQty'];
            return true;
        }
        return false;

    }

    public function addWithQtyOptions($item,$options){
        $cookie = strtolower(Cookie::get('currency'));
        $currency = $cookie ? $cookie : 'usd';
        $optionsArray = [];
        $optionsPrices = 0;
        $optionsQty = [] ;
        $storedItem = null;
        if($this->items){
            if(array_key_exists($item->id.$options['string'],$this->items)){
                unset($this->items[$item->id.$options['string']]);
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
                $optionsQty[] = $singleSubOption->quantity;
            }
            $optionsQty[] = $item->quantity;
        }

        if ($item->isOffer) {
            $currency = "offer_price_$currency";
            $price = $item->$currency;
        } else {
            $currency = "price_$currency";
            $price = $item->$currency;
        }
        $storedItem = [
            'qty' => $options['qty'],
            'price' => $price + $optionsPrices,
            'item' => $item,
            'options' => $optionsArray,
            'totalPriceQty' => 0,
        ];
        if($storedItem['qty'] < min($optionsQty)){
            $this->totalPrice -= $storedItem['totalPriceQty'];
            $storedItem['totalPriceQty'] = $storedItem['price'] * $storedItem['qty'];
            $this->items[$item->id.$options['string']] = $storedItem;
            $this->totalQty++;
            $this->totalPrice += $storedItem['totalPriceQty'];
            return true;
        }
        return false;
    }

    public function deleteAProduct($item,$optionsString = null){
        if($this->items){
            if(array_key_exists($item->id.$optionsString,$this->items)){
                $storedItem = $this->items[$item->id.$optionsString];
                $this->totalQty -= $storedItem['qty'];
                $this->totalPrice -= $storedItem['totalPriceQty'];
                unset($this->items[$item->id.$optionsString]);
                return true;
            }
        }
        return false;
    }

    public function deleteAll(){
        $this->items = null;
        $this->totalQty = null;
        $this->totalPrice = null;
    }





}


