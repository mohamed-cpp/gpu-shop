<?php


namespace Tests\Feature;


use App\SubCategory;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class CategotiresAdminTest extends TestCase
{

    use DatabaseTransactions;

    public function setUp()  :void {
        parent::setUp();
        $this->admin = create('App\Admin');
        $this->category = create('App\Category');
        $this->subcategory = create('App\SubCategory');


    }

    public function test_user_can_see_page(){

        $this->actingAs($this->admin,'web');
        $this->get(route('categories.index'))
            ->assertStatus(200)
            ->assertViewIs('admin.categories.index_category');
    }

    public function test_user_can_see_create_page(){
        $this->actingAs($this->admin,'web');
        $this->get(route('categories.create'))
            ->assertStatus(200)
            ->assertViewIs('admin.categories.create_category');
    }

    public function test_user_can_see_store_a_categories(){
        $this->actingAs($this->admin,'web');
        $this->post(route('categories.store'),[
            'name_en' => 'Mobile',
            'name_ar' => 'Mobile',
            'sort'    => '1',
            'status'  => '1',
        ])
            ->assertStatus(302)
            ->assertRedirect(route('categories.index'));
        $this->assertDatabaseHas('categories',['name_en' => 'Mobile']);
    }

    public function test_validate_store_a_categories(){
        $this->actingAs($this->admin,'web');
        $this->post(route('categories.store'),[
            'name_en' => 'Mobile',
            'name_ar' => 'Mobile',
            'sort'    => '1',
            'status'  => '2',
        ])
            ->assertSessionHasErrors();
    }

    public function test_user_can_see_edit_page(){
        $this->actingAs($this->admin,'web');
        $this->get(route('categories.edit',[$this->category]))
            ->assertStatus(200)
            ->assertViewIs('admin.categories.edit_category');
    }

    public function test_update_a_categories(){
        $this->actingAs($this->admin,'web');
        $this->patch(route('categories.update',[$this->category]),[
            'name_en' => 'Mobile',
            'name_ar' => 'Mobile',
            'sort'    => '1',
            'status'  => '1',
        ])
            ->assertStatus(302)
            ->assertRedirect(route('categories.index'));
        $this->assertDatabaseHas('categories',['name_en' => 'Mobile']);
    }

    public function test_validate_update_a_categories(){
        $this->actingAs($this->admin,'web');
        $this->patch(route('categories.update',[$this->category]),[
            'name_en' => 'Mobile',
            'name_ar' => 'Mobile',
            'sort'    => 'word',
            'status'  => '1',
        ])
            ->assertSessionHasErrors();
    }

    public function test_delete_a_categories(){
        $this->actingAs($this->admin,'web');
        $this->delete(route('categories.destroy',[$this->category]))
            ->assertRedirect(route('categories.index'));
        $this->assertNotEquals($this->category->fresh()->deleted_at,null);
    }

    public function test_enable_or_disable_a_categories(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->admin,'web');
        $this->patch(route('quick.buttons',[$this->category]));
        $this->assertNotEquals($this->category->fresh()->status,true);
    }
    public function test_user_can_see_sub_categories_page(){
        $this->actingAs($this->admin,'web');
        $this->get(route('categories.show',[$this->category]))
            ->assertStatus(200)
            ->assertViewIs('admin.categories.index_sub_category');
    }
    /**
     * @subcategory
    */

    public function test_user_can_see_create_page_sub(){
        $this->actingAs($this->admin,'web');
        $this->get(route('subcategories.create'))
            ->assertStatus(200)
            ->assertViewIs('admin.categories.create_sub_category');
    }

        public function test_store_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $file = UploadedFile::fake()->image('avatar.jpg',1920,500);
        $this->post(route('subcategories.store'),[
            'category_id' => $this->category->id,
            'name_en' => 'MobileSub',
            'name_ar' => 'MobileAR',
            'slug_en' => 'Apple_Mobile',
            'slug_ar' => 'Apple_MobileAR',
            'sort'    => '1',
            'status'  => '1',
            'image'   => $file
        ])
            ->assertStatus(302)
            ->assertRedirect(route('categories.show',[$this->category->id]));
        $this->assertDatabaseHas('sub_categories',['name_en' => 'MobileSub']);
        $name = SubCategory::where('name_en','MobileSub')->first()->image;
        $exist =  file_exists(public_path().'/'. $name);
        $this->assertEquals($exist,true);
    }

    public function test_validate_store_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $file = UploadedFile::fake()->image('avatar.jpg',100,100);
        $this->post(route('subcategories.store'),[
            'category_id' => $this->category->id,
            'name_en' => 'MobileSub',
            'name_ar' => 'MobileAR',
            'slug_en' => 'Apple_Mobile',
            'slug_ar' => 'Apple_MobileAR',
            'sort'    => '1',
            'status'  => '1',
            'image'   => $file
        ])
            ->assertSessionHasErrors();
        $this->assertDatabaseMissing('sub_categories',['name_en' => 'MobileSub']);
    }

    public function test_delete_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $this->delete(route('subcategories.destroy',[$this->subcategory]));
        $this->assertNotEquals($this->subcategory->fresh()->deleted_at,null);
    }

    public function test_enable_or_disable_a_subcategories(){
        $this->withoutExceptionHandling();
        $this->actingAs($this->admin,'web');
        $this->patch(route('sub.quick.buttons',[$this->subcategory]));
        $this->assertNotEquals($this->subcategory->fresh()->status,true);
    }

    public function test_user_can_see_edit_page_sub(){
        $this->actingAs($this->admin,'web');
        $this->get(route('subcategories.edit',[$this->subcategory]))
            ->assertStatus(200)
            ->assertViewIs('admin.categories.edit_sub_category');
    }

    public function test_update_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $this->patch(route('subcategories.update',[$this->subcategory]),[
            'category_id' => $this->category->id,
            'name_en' => 'MobileSub',
            'name_ar' => 'MobileAR',
            'slug_en' => 'Apple_Mobile',
            'slug_ar' => 'Apple_MobileAR',
            'sort'    => '1',
            'status'  => '1',
        ])
            ->assertStatus(302)
            ->assertRedirect(route('categories.show',[$this->category->id]));
        $this->assertDatabaseHas('sub_categories',['name_en' => 'MobileSub']);
    }

    public function test_validate_update_a_subcategories(){
        $this->actingAs($this->admin,'web');
        $this->patch(route('subcategories.update',[$this->subcategory]),[
            'category_id' => $this->category->id,
            'name_en' => 'MobileSub',
            'name_ar' => 'MobileAR',
            'slug_en' => 'Apple_Mobile',
            'slug_ar' => 'Apple_MobileAR',
            'sort'    => '1',
            'status'  => '3',
        ])
            ->assertSessionHasErrors();
        $this->assertDatabaseMissing('sub_categories',['name_en' => 'MobileSub']);
    }




}
