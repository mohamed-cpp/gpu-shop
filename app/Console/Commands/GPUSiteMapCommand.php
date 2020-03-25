<?php

namespace App\Console\Commands;

use App\Product;
use App\SubCategory;
use Spatie\Sitemap\SitemapIndex;
use Spatie\Sitemap\Tags\Sitemap;
use Illuminate\Console\Command;
use Spatie\Sitemap\Tags\Url;
use Spatie\Sitemap\SitemapGenerator;

class GPUSiteMapCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'GPU-Shop:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate sitemap Products & Subcategories';


    protected $products;
    protected $sub_categories;


    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();

        $this->products = Product::enabled()->get();
        $this->sub_categories = SubCategory::status()->where('parent',false)->get();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $products_ar_sitemap = SitemapGenerator::create(config("app.url"))->getSitemap();
        $products_en_sitemap = SitemapGenerator::create(config('app.url'))->getSitemap();
        $products_en_sitemap->add(
            Url::create(config('app.url').'/en')
                ->setLastModificationDate(now())
                ->setChangeFrequency('daily')
        );
        $products_ar_sitemap->add(
            Url::create(config('app.url').'/ar')
                ->setLastModificationDate(now())
                ->setChangeFrequency('daily')
        );
        foreach ($this->products as $product) {
            $products_en_sitemap->add(
                Url::create('en/p/'.$product->slug_en)
                    ->setLastModificationDate($product->updated_at)
                    ->setChangeFrequency(0.1)
            );

            $products_ar_sitemap->add(
                Url::create('ar/p/'.$product->slug_ar)
                    ->setLastModificationDate($product->updated_at)
                    ->setChangeFrequency(0.1)
            );
        }
        $products_en_sitemap->writeToFile(public_path("products_en_sitemap.xml"));
        $products_ar_sitemap->writeToFile(public_path("products_ar_sitemap.xml"));


        $sub_categories_ar_sitemap = SitemapGenerator::create(config('app.url'))->getSitemap();
        $sub_categories_en_sitemap = SitemapGenerator::create(config('app.url'))->getSitemap();
        foreach ($this->sub_categories as $sub_category) {
            $sub_categories_en_sitemap->add(
                Url::create('en/s/'.$sub_category->slug_en)
                    ->setLastModificationDate($sub_category->updated_at)
                    ->setChangeFrequency(0.1)
            );

            $sub_categories_ar_sitemap->add(
                Url::create('ar/s/'.$sub_category->slug_ar)
                    ->setLastModificationDate($sub_category->updated_at)
                    ->setChangeFrequency(0.1)
            );
        }
        $sub_categories_en_sitemap->writeToFile(public_path("sub_categories_en_sitemap.xml"));
        $sub_categories_ar_sitemap->writeToFile(public_path("sub_categories_ar_sitemap.xml"));

        
        SitemapIndex::create()
            ->add('/products_en_sitemap.xml')
            ->add('/products_ar_sitemap.xml')
            ->add('/sub_categories_en_sitemap.xml')
            ->add('/sub_categories_ar_sitemap.xml')
            ->writeToFile(public_path().'/sitemap.xml');
    }
}
