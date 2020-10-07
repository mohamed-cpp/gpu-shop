<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

/**
 * App\GpuShopSetting
 *
 * @property int $id
 * @property string $name
 * @property string $val
 * @property string $type
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\GpuShopSetting whereVal($value)
 * @mixin \Eloquent
 */
class GpuShopSetting extends Model
{
    const WATERMARK = "assets/img/logo/watermark.png";

    /**
     * @var array
     */
    protected $fillable = ['val','type','name'];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::updated(function () {
            self::flushCache();
        });

        static::created(function() {
            self::flushCache();
        });

        static::deleted(function() {
            self::flushCache();
        });
    }

    /**
     * caste value into respective type
     *
     * @param $val
     * @param $castTo
     * @return bool|int
     */
    public static function castValue($val, $castTo)
    {
        switch ($castTo) {
            case 'int':
            case 'integer':
                return intval($val);
                break;

            case 'bool':
            case 'boolean':
                return boolval($val);
                break;
            case 'json':
                return json_decode($val,true);
                break;

            default:
                return $val;
        }
    }
    /**
     * Get all the settings
     *
     * @return mixed
     */
    public static function getAllSettings()
    {
        return Cache::rememberForever('settings', function() {
            return self::all();
        });
    }

    /**
     * Flush the cache
     */
    public static function flushCache()
    {
        Cache::forget('settings');
    }
}
