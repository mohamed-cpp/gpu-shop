<?php


namespace Tests\Feature;

use App\Admin;
use App\SubCategory;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class ProductsAdminTest extends TestCase
{

    use DatabaseTransactions;


    public function setUp()  :void {
        parent::setUp();
        $this->admin = Admin::first();
        $this->product = create('App\Product');
    }

    public function test_user_can_see_create_page_sub(){
        $this->actingAs($this->admin,'web');
        $this->get(route('products.index'))
            ->assertStatus(200)
            ->assertViewIs('admin.product.index');
    }

    public function test_delete_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $this->delete(route('products.destroy',[$this->product]));
        $this->assertNotEquals($this->product->fresh()->deleted_at,null);
    }

    public function test_enable_or_disable_a_subcategories(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->admin,'web');
        $this->patch(route('products.quick.buttons',[$this->product]));
        $this->assertEquals($this->product->fresh()->approved,1);
    }

    public function test_enable_or_disable_a_subcategories2(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->admin,'web');
        $this->patch(route('products.rejected.button',[$this->product]));
        $this->assertEquals($this->product->fresh()->approved,2);
    }

    public function test_user_can_see_edit_page_sub(){
        $this->actingAs($this->admin,'web');
        $this->get(route('products.edit',[$this->product]))
            ->assertStatus(200)
            ->assertViewIs('admin.product.edit');
    }

    public function test_update_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $arrayProduct = array_merge( $this->product->toArray(),['images'=>[],'subcategories'=>[6,5],'tags'=>'Hard,SSD,Memory']);
        unset($arrayProduct['main_image']);
        $arrayProduct['name_en'] = 'New Name2';
        $this->patch(route('products.update',[$this->product]),$arrayProduct)
            ->assertStatus(302)
            ->assertRedirect(route('products.index'));
        $this->assertDatabaseHas('products',['name_en' => 'New Name2']);
    }

    public function test_validate_update_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $arrayProduct = array_merge( $this->product->toArray(),['images'=>[],'subcategories'=>[6,5]]);
        unset($arrayProduct['main_image']);
        unset($arrayProduct['name_en']);
        $arrayProduct['name_ar'] = 'New Name';
        $this->patch(route('products.update',[$this->product]),$arrayProduct)
            ->assertSessionHasErrors();
        $this->assertDatabaseMissing('products',['name_ar' => 'New Name']);
    }



}
