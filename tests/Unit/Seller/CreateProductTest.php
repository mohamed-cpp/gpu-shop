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

}
