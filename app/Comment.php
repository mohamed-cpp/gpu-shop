<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comment extends Model
{
    use SoftDeletes;


    /**
     * @var array
     */
    protected $fillable=[
        'commentable_type', 'commentable_id', 'product_id',
        'parent_id', 'body',
        ];

    protected $with = ['commentable'];

    public static function boot()
    {
        parent::boot();
        static::deleting(function($comment) {
            $comment->replies()->each(function ($item) {
                $item->delete();
            });
        });

    }

    public function replies(){
        return $this->hasMany(Comment::class,'parent_id');
    }

    public function parent(){
        return $this->belongsTo(Comment::class,'parent_id');
    }

    public function product(){
        return $this->belongsTo(Product::class,'product_id');
    }

    public function commentable()
    {
        return $this->morphTo();
    }
}
