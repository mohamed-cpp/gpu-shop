<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Comment
 *
 * @property int $id
 * @property string $commentable_type
 * @property int $commentable_id
 * @property int $product_id
 * @property int|null $parent_id
 * @property string $body
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property-read \Illuminate\Database\Eloquent\Model|\Eloquent $commentable
 * @property-read \App\Comment|null $parent
 * @property-read \App\Product $product
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Comment[] $replies
 * @property-read int|null $replies_count
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\Comment onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereBody($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereCommentableId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereCommentableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereParentId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Comment whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\Comment withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\Comment withoutTrashed()
 * @mixin \Eloquent
 */
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
