<?php

namespace App\Http\Middleware;

use App\Product;
use App\SubCategory;
use Closure;

class ChangeSlugMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (!preg_match('/\b'. app()->getLocale().'\b/', url()->previous()) &&
            array_key_exists(request()->segment(1),config('laravellocalization.supportedLocales'))
        ){
            if (strpos($request->getPathInfo(), '/p/') !== false){
                $updateRoute = false;
                $UrlProduct= request()->segment(3);
                $product = Product::where('slug_ar',$UrlProduct)
                    ->orWhere('slug_en',$UrlProduct)
                    ->firstOrFail();
                $parameter = request()->route()->parameters();
                if (app()->isLocale("ar") && $parameter['product'] !=  $product->slug_ar ){
                    $parameter["product"] = $product->slug_ar;
                    $updateRoute = true;
                }elseif (app()->isLocale("en") && $parameter['product'] !=  $product->slug_en){
                    $parameter["product"] = $product->slug_en;
                    $updateRoute = true;
                }
                if ($updateRoute) {
                    return redirect(route("show.product.client", $parameter));
                }
            }elseif (strpos($request->getPathInfo(), '/s/') !== false){
                $subcategory= request()->segment(3);
                $updateRoute = $this->changeSlug($subcategory);
                if ($updateRoute[0]) {
                    return redirect(route("show.products", $updateRoute[1]));
                }
            }elseif (strpos($request->getPathInfo(), '/offer/') !== false){
                $subcategory= request()->segment(3);
                $updateRoute = $this->changeSlug($subcategory);
                if ($updateRoute[0]) {
                    return redirect(route("offers.product.client", $updateRoute[1]));
                }
            }elseif (strpos($request->getPathInfo(), '/f/') !== false){
                $subcategory= request()->segment(3);
                $updateRoute = $this->changeSlug($subcategory);
                $parameters =  $request->all();
                if ($updateRoute[0]) {
                    $parameters['subcategory'] = $updateRoute[1]['subcategory'];
                    return redirect(route("filter.product.client", $parameters ));
                }
            }
        }

        return $next($request);
    }
    protected function changeSlug($subcategory){
        $updateRoute = false;
        $subcategory = SubCategory::findBySlugsOrFail($subcategory);
        $parameter = request()->route()->parameters();
        if (app()->isLocale("ar") && $parameter['subcategory'] !=  $subcategory->slug_ar ){
            $parameter["subcategory"] = $subcategory->slug_ar;
            $updateRoute = true;
        }elseif (app()->isLocale("en") && $parameter['subcategory'] !=  $subcategory->slug_en){
            $parameter["subcategory"] = $subcategory->slug_en;
            $updateRoute = true;
        }
        return [$updateRoute,$parameter];
    }
}
