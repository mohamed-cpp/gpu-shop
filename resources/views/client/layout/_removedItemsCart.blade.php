<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1 class="cart-heading" style="color: red">Removed Items From Cart</h1>
        <h4>While updating your cart to checkout we found out there are {{Str::plural('change',count($removedItems))}}</h4>
        <div class="table-content table-responsive">
            <table>
                <thead>
                <tr>
                    <th class="product-price">images</th>
                    <th class="product-name">Product</th>
                    <th class="product-quantity">Message</th>
                </tr>
                </thead>
                <tbody>
                @foreach($removedItems as $removedItem)
                    <tr>
                        <td class="product-thumbnail">
                            <a href="{{route('show.product.client', $removedItem['slug'])}}">
                                <img width="80" height="80" src="{{asset('storage/product/images/thumbnail/'.$removedItem['item']->main_image)}}" alt="">
                            </a>
                        </td>
                        <td class="product-name"><a href="{{route('show.product.client', $removedItem['slug'])}}">{{$removedItem['name']}} </a></td>
                        <td class="product-quantity">
                            <p>{{$removedItem['message']}}</p>
                        </td>

                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>