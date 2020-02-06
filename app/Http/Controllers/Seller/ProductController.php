<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddProductDetailsRequest;
use App\Http\Requests\ProductCreateRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Product;
use App\ProductDetails;
use App\ProductSubDetails;
use App\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:update,product')->except('index','filter','create','store','editDetails','updateDetails','destroyDetails');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('seller.product.index',[
            'products' => auth('seller')->user()->products()->paginate(15),
        ]);
    }

    public function filter(Request $request){
        $column = "name_" . App::getLocale();
        $products = Product::where([
            ['seller_id', auth('seller')->user()->id],
            [$column, 'LIKE', $request->name ],
            ['price_'.$request->currency, 'LIKE', '%' . $request->price . '%'],
            ['approved', 'LIKE', '%' . $request->approved . '%'],
            ['status', 'LIKE', '%' . $request->status . '%' ],
        ])->paginate(15);

        return view('seller.product.index',[
            'products' => $products,
            'request' => $request
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $subcategories = SubCategory::where('status',true)->get();
        $seller = auth('seller')->user();
        $fee =
            [
                'isFixed' => $seller->is_fixed,
                'fee' => $seller->fee,
                'egp'     => $seller->fee_egp,
                'usd'     => $seller->fee_usd,
            ];
        return view('seller.product.create',[
            'subcategories' => $subcategories,
            'fee' => $fee
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductCreateRequest $request
     * @return void
     */
    public function store(ProductCreateRequest $request)
    {
        $input = $request->all();
        $seller = auth('seller')->user();
        $input = $this->storeFee($input,$seller);
        $image = $request->file('main_image');
        $input['main_image'] = $this->moveImage($image);
        $product = $seller->products()->create($input);
        $product->tag($input['tags']);
        $images = [];
        if ($request->file('images')){
            foreach ($request->file('images') as $requestImage){
                $images[] = new \App\Image(['path' => $this->moveImage($requestImage)]) ;
            }
        }
        $subcategories = [];
        foreach ($input['subcategories'] as $subcategor){
            $subcategories[] = new \App\SubcatProduct(['subcategoryable_id' => $subcategor]);
        }
        $product->images()->saveMany($images);
        $product->subcategories()->saveMany($subcategories);
        if ($request->agree){
            return redirect(route('product.details.create',$product->slug));
        }
        return redirect(route('product.index'))->with('flash','The Product Added Successfully');
    }

    public function addDetails(Product $product)
    {
        return view('seller.product.further',[
            'product' => $product->withoutRelations(),
        ]);
    }

    public function storeDetails(AddProductDetailsRequest $request, Product $product)
    {
        $input = $request->all();
        $finalValues = [];
        foreach ( $input['name_en_details'] as $i => $nameEn){
            if ($input['price_egp_details'][$i] === null || $i == 0 ){
                $input['price_egp_details'][$i] = 0;
                $input['price_usd_details'][$i] = 0;
                $input['quantity_details'][$i] = 0;
            }
            $finalValues[] =[
                'name_en' => $nameEn,
                'name_ar' => $input['name_ar_details'][$i],
                'price_egp'=> $input['price_egp_details'][$i],
                'price_usd'=> $input['price_usd_details'][$i],
                'quantity' =>  $input['quantity_details'][$i],
            ];
        }
        if ($request->file()){
            $Allimages = [];
            foreach ($request->file() as $i => $requestImages){
                $this->validate($request, ["$i.*" => 'sometimes|mimes:jpeg,png,jpg']);
                $images = [];
                foreach ($requestImages as $requestImage) {
                    $images[] = ['path' => $this->moveImage($requestImage),'imagesNumber'=> $i];
                }
                $Allimages[] = $images;
            }
        }
        $details = $product->details()->create(['name_en' => $input['main_name_en_details'],'name_ar' => $input['main_name_ar_details']]);
        try {
            $subdetails = $details->subDetails()->createMany($finalValues);
        } catch (\Illuminate\Database\QueryException $e) {
            dd($e->getMessage(), $e->errorInfo,'here');
        }
        if(!empty($Allimages)) {
            $subdetails->each(function ($item, $key) use ($Allimages) {
                $plus = $key+1;
                $images = $this->searchImages($Allimages , "images_details$plus");
                if(!empty($images)){
                    $item->images()->createMany($images);
                }
            });
        }
        if ($request->agree){
            return redirect(route('product.details.create',$product->slug));
        }
        return redirect(route('product.index'))->with('flash','The Product Added Successfully');
    }

    public function editDetails(ProductDetails $details)
    {
        $this->authorize('editDetails', $details->product()->without('images')->first());
        return view('seller.product.edit_further',[
            'details' => $details,
        ]);
    }

    public function updateDetails(AddProductDetailsRequest $request, ProductDetails $details){
        $this->authorize('editDetails', $details->product()->without('images')->first());
        $input = $request->all();

        $subdetails = $details->subDetails();
        $subdetailsIDs = $subdetails->pluck('id')->toArray();
        $details->update(['name_en' => $input['main_name_en_details'],'name_ar' => $input['main_name_ar_details']]);
        foreach ( $input['quantity_details'] as $i => $quantity){
            $finalValues =[
                'name_en' => $input['name_en_details'][$i],
                'name_ar' => $input['name_ar_details'][$i],
                'price_egp'=> $i == 0 ? 0 : $input['price_egp_details'][$i],
                'price_usd'=> $i == 0 ? 0 : $input['price_usd_details'][$i],
                'quantity' => $i == 0 ? 0 : $quantity,
            ];
            $id = !empty($subdetailsIDs[$i]) ? $subdetailsIDs[$i] : null;
            $details->subDetails()->updateOrCreate(['id'=>$id],$finalValues);
        }
        if ($request->deleteSubDetails){
            $subdetails->findMany($request->deleteSubDetails)->each->delete();
        }
        if ($request->file()){
            $Allimages = [];
            foreach ($request->file() as $i => $requestImages){
                $this->validate($request, ["$i.*" => 'sometimes|mimes:jpeg,png,jpg']);
                $images = [];
                foreach ($requestImages as $requestImage) {

                    $images[] = ['path' => $this->moveImage($requestImage),'imagesNumber'=> $i];
                }
                $Allimages[] = $images;
            }
        }
        if(!empty($Allimages)) {
            $subdetails->get()->each(function ($item, $key) use ($Allimages) {
                $plus = $key+1;
                $images = $this->searchImages($Allimages , "images_details$plus");
                $imageItem = $item->images();
                if (!empty($images)){
                    $item->images()->delete();
                    $imageItem->createMany($images);
                }
            });
        }
        return redirect(route('product.index'))->with('flash','The Product Added Successfully');
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Product $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        $subcategories = SubCategory::where('status',true)->get();
        $seller = auth('seller')->user();
        if ($product->fee){
            $fee = [
                'isFixed' => false,
                'productFee' => true,
                'egp'     => $product->fee_egp,
                'usd'     => $product->fee_usd,
                'offer_egp'     => $product->offer_fee_egp,
                'offer_usd'     => $product->offer_fee_usd,
            ];
        }else{
            $fee = [
                'isFixed' => $seller->is_fixed,
                'productFee' => false,
                'fee' => $seller->fee,
                'egp'     => $seller->fee_egp,
                'usd'     => $seller->fee_usd,
            ];
        }
        return view('seller.product.edit',[
            'product' => $product,
            'subcategories' => $subcategories,
            'subcategories_id' => $product->subcategories_ids->toArray(),
            'fee' => $fee,
            'prices' => $product->only('price_egp','price_usd','offer_price_egp','offer_price_usd'),
        ]);
    }

    /**
     * @param ProductUpdateRequest $request
     * @param Product $product
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
//        dd(strip_tags($request->description_en));
        $input = $request->all();
        $seller = auth('seller')->user();
        $input = $this->addFee($input,$product,$seller);
        if($image = $request->file('main_image')){
            $input['main_image'] = $this->moveImage($image);
        }
        $product->update($input);
        if ($input['tags'] != $product->tagList){
            $product->detag();
            $product->tag($input['tags']);
        }
        $product->subcategories()->whereIn('subcategoryable_id',array_diff($product->subcategories_ids->toArray(),$input['subcategories']))->delete();
        $subcategories = [];
        foreach (array_diff($input['subcategories'], $product->subcategories_ids->toArray()) as $new ){
            $subcategories[] = ['subcategoryable_id'=>$new];
        }
        $product->subcategories()->createMany($subcategories);
        if ($request->deleteImages){
            $product->images()->findMany($request->deleteImages)->each->delete();
        }
        if ($request->file('images')){
            $images = [];
            foreach ($request->file('images') as $requestImage){
                $images[] = ['path' => $this->moveImage($requestImage)];
            }
            $product->images()->createMany($images);
        }
        if (auth('web')->check()){
            return redirect(route('products.index'))->with('flash','The Product Updated Successfully');
        }
        return redirect(route('product.index'))->with('flash','The Product Updated Successfully');
    }

    public function destroyDetails(ProductDetails $details)
    {
        $this->authorize('editDetails', $details->product()->without('images')->first());
        $details->delete();
        return redirect(route('product.index'))->with('flash','The Product Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Product $product
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return back()->with('flash','The Product Deleted Successfully');
    }

    public function quickButtons(Product $product){
        $product->update([
            'status' => !$product->status
        ]);
        $product->save();
        $status = $product->status == true ? 'Enabled' : 'Disabled';
        return back()->with('flash',"The Product $status Successfully");
    }

    public function moveImage($image){
        $path = 'storage/product/images/';
        $image->move(public_path($path),$name = md5(Str::random(10).$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension());
        $this->addWatermark($name);
        $this->addWatermark($name,'storage/product/images/thumbnail/',true);
        return $name;
    }
    protected function addWatermark($name,$path = 'storage/product/images/',$thumbnail=false){
        $img = Image::make(public_path('storage/product/images/'.$name));
        $img->insert(public_path('assets/img/logo/watermark.png'), 'bottom-left', 10, 10);
        if($thumbnail === true) {$img->resize(365, 302);}
        $img->save(public_path($path.$name));
    }
    protected function searchImages($imagesArray , $value){
        foreach ($imagesArray as $key => $val) {
            if ($val[0]['imagesNumber'] == $value) {
                unset($val[0]['imagesNumber']);
                return $val;
            }
        }
        return null;
    }
    protected function addFee($input,$product,$seller){
        if($product->fee){
            $fee_egp = $product->fee_egp;
            $fee_usd = $product->fee_usd;
            $offer_fee_egp = $product->offer_fee_egp;
            $offer_fee_usd = $product->offer_fee_usd;
        }else{
            if ($seller->is_fixed){
                $fee_egp = (($seller->fee * 0.01) * $input['price_egp'] );
                $fee_usd = (($seller->fee * 0.01) * $input['price_usd'] ) ;
                $offer_fee_egp = (($seller->fee * 0.01) * $input['offer_price_egp'] ) ;
                $offer_fee_usd = (($seller->fee * 0.01) * $input['offer_price_usd'] ) ;
            }else{
                $fee_egp =  $seller->fee_egp;
                $fee_usd =   $seller->fee_usd;
                $offer_fee_egp =  $seller->fee_egp;
                $offer_fee_usd =  $seller->fee_usd;
            }
        }
        if ( $input['price_egp'] != $product->price_egp){
            $input['price_egp'] = $fee_egp + $input['price_egp'];
            if(!$product->fee){
                $input['fee_egp'] = $fee_egp  ;
            }
        }
        if ( $input['price_usd'] != $product->price_usd){
            $input['price_usd'] = $fee_usd + $input['price_usd'];
            if(!$product->fee){
                $input['fee_usd'] = $fee_usd  ;
            }
        }
        if ( $input['offer_price_egp'] != $product->offer_price_egp){
            $input['offer_price_egp'] = $offer_fee_egp + $input['offer_price_egp'];
            if(!$product->fee){
                $input['offer_fee_egp'] = $offer_fee_egp  ;
            }
        }
        if ( $input['offer_price_usd'] != $product->offer_price_usd){
            $input['offer_price_usd'] = $offer_fee_usd + $input['offer_price_usd'];
            if(!$product->fee){
                $input['offer_fee_usd'] = $offer_fee_usd  ;
            }
        }
        return $input;
    }

    protected function storeFee($input,$seller){
        if($seller->is_fixed){
            $egp =  (($seller->fee * 0.01) * $input['price_egp'] ) ;
            $usd =  (($seller->fee * 0.01) * $input['price_usd'] ) ;
            if ($input['offer_price_egp']){
                $offerEgp =  (($seller->fee * 0.01) * $input['offer_price_egp'] ) ;
                $offerUsd =  (($seller->fee * 0.01) * $input['offer_price_usd'] ) ;
                $input['offer_price_usd'] = $offerUsd + $input['offer_price_usd'] ;
                $input['offer_price_egp'] = $offerEgp + $input['offer_price_egp'] ;
                $input['offer_fee_egp'] = $offerEgp ;
                $input['offer_fee_usd'] = $offerUsd ;
            }
        }else{
            $egp =  $seller->fee_egp  ;
            $usd =  $seller->fee_usd ;
            if ($input['offer_price_egp']){
                $input['offer_price_usd'] = $seller->fee_usd + $input['offer_price_usd'] ;
                $input['offer_price_egp'] = $seller->fee_egp + $input['offer_price_egp'] ;
                $input['offer_fee_egp'] = $seller->fee_egp ;
                $input['offer_fee_usd'] = $seller->fee_usd ;
            }
        }
        $input['price_egp'] = $egp + $input['price_egp'] ;
        $input['price_usd'] = $usd + $input['price_usd'] ;
        $input['fee_egp'] = $egp ;
        $input['fee_usd'] = $usd ;
        return $input;
    }
}
