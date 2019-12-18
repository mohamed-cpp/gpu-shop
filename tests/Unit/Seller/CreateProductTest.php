<?php


namespace Tests\Feature;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class CreateProductTest extends TestCase
{

    use DatabaseTransactions;


    public function setUp()  :void {
        parent::setUp();
        $this->seller = create('App\Seller');
        $this->product = create('App\Product',['seller_id'=>$this->seller->id]);
    }

    public function test_user_can_see_page(){

        $this->actingAs($this->seller,'seller');
        $this->get(route('product.index'))
            ->assertStatus(200)
            ->assertViewIs('seller.product.index');
    }

    public function test_user_can_see_create_page(){
        $this->actingAs($this->seller,'seller');
        $this->get(route('product.create'))
            ->assertStatus(200)
            ->assertViewIs('seller.product.create');
    }

    public function test_user_can_store_a_product(){
        $this->actingAs($this->seller,'seller');
        $file = UploadedFile::fake()->image('product.jpg',400,400);
        $file2 = UploadedFile::fake()->image('product2.jpg',400,400);
        $product = make('App\Product',['main_image'=>$file]);
        $arrayProduct = array_merge( $product->toArray(),['images'=>[$file2],'subcategories'=>[6,5],'tags'=>'Hard,SSD,Memory']);
        $this->post(route('product.store'),$arrayProduct)
            ->assertStatus(302)
            ->assertRedirect(route('product.index'));
        $this->assertDatabaseHas('products',['name_en' => $product->name_en]);
    }

    public function test_validate_store_a_product(){
        $this->actingAs($this->seller,'seller');
        $file = UploadedFile::fake()->image('product.jpg',400,400);
        $product = make('App\Product',['main_image'=>$file]);
        $this->post(route('product.store'),$product->toArray());
        $this->assertDatabaseMissing('sub_categories',['name_en' => 'MobileSub']);
    }

    public function test_delete_a_product(){
        $this->actingAs($this->seller,'seller');
        $this->delete(route('product.destroy',[$this->product]));
        $this->assertNotEquals($this->product->fresh()->deleted_at,null);
    }

    public function test_enable_or_disable_a_product(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->seller,'seller');
        $this->patch(route('product.quick.buttons',[$this->product]));
        $this->assertNotEquals($this->product->fresh()->status,true);
    }

    public function test_user_can_see_edit_products(){
        $this->actingAs($this->seller,'seller');
        $this->get(route('product.edit',[$this->product]))
            ->assertStatus(200)
            ->assertViewIs('seller.product.edit');
    }

    public function test_can_not_another_seller_edit_product(){
        $seller = create('App\Seller');
        $this->actingAs($seller,'seller');
        $this->get(route('product.edit',[$this->product]))
            ->assertStatus(403);
    }

    public function test_update_a_products(){
        $this->actingAs($this->seller,'seller');
        $arrayProduct = array_merge( $this->product->toArray(),['images'=>[],'subcategories'=>[6,5],'tags'=>'SDD,APPLE']);
        unset($arrayProduct['main_image']);
        $arrayProduct['name_en'] = 'New Name';
        $this->patch(route('product.update',[$this->product]),$arrayProduct)
            ->assertStatus(302)
            ->assertRedirect(route('product.index'));
        $this->assertDatabaseHas('products',['name_en' => 'New Name']);
    }

    public function test_validate_update_a_product(){
        $this->actingAs($this->seller,'seller');
        $arrayProduct = array_merge( $this->product->toArray(),['images'=>[],'subcategories'=>[6,5]]);
        unset($arrayProduct['main_image']);
        unset($arrayProduct['name_en']);
        $arrayProduct['name_ar'] = 'New Name';
        $this->patch(route('product.update',[$this->product]),$arrayProduct)
            ->assertSessionHasErrors();
        $this->assertDatabaseMissing('products',['name_ar' => 'New Name']);
    }

    public function test_user_can_see_details_page(){
        $this->actingAs($this->seller,'seller');
        $this->get(route('product.details.create',$this->product))
            ->assertStatus(200)
            ->assertViewIs('seller.product.further');
    }

    public function test_user_can_create_a_details(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->seller,'seller');
        $file = UploadedFile::fake()->image('product.jpg',100,100);
        $details = make('App\ProductDetails',['product_id'=>$this->product->id]);
        $data = [
            "main_name_en_details" => $details->name_en,
            "main_name_ar_details"=> $details->name_ar,
            "name_en_details"   => ['name_en_details','name_en_details2'],
            "name_ar_details"   => ['name_ar_details','name_ar_details2'],
            'quantity_details'  => [123,132],
            'price_egp_details'  => [132,132],
            'price_usd_details'  => [321,321],
            'images_details2'   => [$file]
        ];
        $this->post(route('product.details.store',$this->product),$data)
            ->assertStatus(302)
            ->assertRedirect(route('product.index'));
        $this->assertDatabaseHas('product_details',['name_en' => $details->name_en]);
        $this->assertDatabaseHas('product_sub_details',['name_en' => 'name_en_details']);
        $this->assertDatabaseHas('product_sub_details',['name_en' => 'name_en_details2']);
    }

    public function test_create_validate_a_details(){
        $this->actingAs($this->seller,'seller');
        $file = UploadedFile::fake()->create('book.pdf');
        $details = make('App\ProductDetails',['product_id'=>$this->product->id]);
        $data = [
            "main_name_en_details" => $details->name_en,
            "main_name_ar_details"=> $details->name_ar,
            "name_en_details"   => ['name_en_details','name_en_details2'],
            "name_ar_details"   => ['name_ar_details','name_ar_details2'],
            'quantity_details'  => [123,132],
            'price_egp_details'  => [132,132],
            'price_usd_details'  => [321,321],
            'images_details2'   => [$file]
        ];
        $this->post(route('product.details.store',$this->product),$data)
            ->assertSessionHasErrors();
        $this->assertDatabaseMissing('product_details',['name_en' => $details->name_en]);
        $this->assertDatabaseMissing('product_sub_details',['name_en' => 'name_en_details']);
    }

    public function test_user_can_see_edit_details_page(){
        $details = create('App\ProductDetails',['product_id'=>$this->product->id]);
        $this->actingAs($this->seller,'seller');
        $this->get(route('product.details.edit',$details))
            ->assertStatus(200)
            ->assertViewIs('seller.product.edit_further');
    }

    public function test_auth_edit_details_page(){
        $details = create('App\ProductDetails',['product_id'=>$this->product->id]);
        $seller = create('App\Seller');
        $this->actingAs($seller,'seller');
        $this->get(route('product.details.edit',$details))
            ->assertStatus(403);
    }

    public function test_update_a_details(){
        $this->actingAs($this->seller,'seller');
        $details = create('App\ProductDetails',['product_id'=>$this->product->id]);
        $subdetails = create('App\ProductSubDetails',['details_id'=>$details]);
        $data = [
            "main_name_en_details" => $details->name_en,
            "main_name_ar_details"=> $details->name_ar,
            "name_en_details"   => [$subdetails->name_en,'name_en_details2'],
            "name_ar_details"   => ['new text','name_ar_details2'],
            'quantity_details'  => [123,132],
            'price_egp_details'  => [132,132],
            'price_usd_details'  => [321,321],
        ];
        $this->post(route('product.details.update',$details),$data)
            ->assertStatus(302)
            ->assertRedirect(route('product.index'));
        $this->assertDatabaseHas('product_sub_details',['name_en' => 'name_en_details2']);
        $this->assertDatabaseHas('product_sub_details',['name_ar' => 'new text']);
            /** @delete_sub_details */
        $data = [
            "main_name_en_details" => $details->name_en,
            "main_name_ar_details"=> $details->name_ar,
            "name_en_details"   => [$subdetails->name_en,'name_en_details2'],
            "name_ar_details"   => ['new text','name_ar_details2'],
            'quantity_details'  => [123,132],
            'price_egp_details'  => [132,132],
            'price_usd_details'  => [321,321],
            'deleteSubDetails'  => [$subdetails->id]
        ];
        $this->post(route('product.details.update',$details),$data)
            ->assertStatus(302)
            ->assertRedirect(route('product.index'));
        $this->assertDatabaseMissing('product_sub_details',['name_en' => $details->name_en]);
    }

    public function test_validate_update_a_details(){
        $this->actingAs($this->seller,'seller');
        $details = create('App\ProductDetails',['product_id'=>$this->product->id]);
        $data = [
            "main_name_en_details" => $details->name_en,
            "name_ar_details"   => ['new text','name_ar_details2'],
            "name_en_details"   => ['new text','name_ar_details2'],
            'quantity_details'  => [123,132],
            'price_egp_details'  => [132,132],
            'price_usd_details'  => [321,321],
        ];
        $this->post(route('product.details.update',$details),$data)
            ->assertSessionHasErrors();
    }

    public function test_delete_a_details(){
        $this->actingAs($this->seller,'seller');
        $details = create('App\ProductDetails',['product_id'=>$this->product->id]);
        $this->assertDatabaseHas('product_details',['name_en' => $details->name_en]);
        $this->delete(route('product.details.delete',$details));
        $this->assertDatabaseMissing('product_details',['name_en' => $details->name_en]);
    }


}
