{{--    side bar--}}
<div class="clickable-mainmenu-btn">
    <a class="clickable-mainmenu-active" href="#"><i class="ion-navicon"></i></a>
</div>


<div class="clickable-mainmenu text-center">
    <div class="clickable-mainmenu-icon">
        <button class="clickable-mainmenu-close">
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
                            <li><a href="{{$sub_category->slug}}">{{$sub_category->name}}</a></li>
                        @endforeach
                    </ul>
                </li>
            @endforeach
        </ul>
    </div>
</div>