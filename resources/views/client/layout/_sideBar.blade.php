{{--    side bar--}}
<div class="clickable-mainmenu-btn">
    <a class="clickable-mainmenu-active" href="#" aria-label="side bar"><i class="ion-navicon"></i></a>
</div>


<div class="clickable-mainmenu text-center">
    <div class="clickable-mainmenu-icon">
        <button class="clickable-mainmenu-close" aria-label="mainmenu-close">
            <span class="ion-android-close"></span>
        </button>
    </div>
    <div id="menu" class="text-left">
        <ul>
            <li><a href="/">home</a></li>
            <li><a href="/">about us</a></li>
            @foreach($categories as $category)
                <li><a href="/">{{$category->name}}</a>
                    <ul class="dropdown">
                        @foreach($category->subCategories as $sub_category )
                            @if($sub_category->parent && $sub_category->child)
                                <li><a href="#" class="next">{{$sub_category->name}}</a>
                                    <ul class="" style="display: none;">
                                @foreach($sub_category->child as $child)
                                        <li><a href="{{route('show.products',$child)}}">{{$child->name}}</a></li>
                                @endforeach
                                    </ul>
                                </li>
                            @else
                            <li><a href="{{route('show.products',$sub_category)}}">{{$sub_category->name}}</a></li>
                            @endif
                        @endforeach
                    </ul>
                </li>
            @endforeach
        </ul>
    </div>
</div>