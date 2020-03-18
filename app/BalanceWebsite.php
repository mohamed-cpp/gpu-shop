<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\BalanceWebsite
 *
 * @property int $id
 * @property int $balance_id
 * @property string $balanceable_type
 * @property float $available_balance_egp
 * @property float $available_balance_usd
 * @property float $balance_egp
 * @property float $balance_usd
 * @property float $fee_egp
 * @property float $fee_usd
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static bool|null forceDelete()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite newQuery()
 * @method static \Illuminate\Database\Query\Builder|\App\BalanceWebsite onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite query()
 * @method static bool|null restore()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereAvailableBalanceEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereAvailableBalanceUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereBalanceEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereBalanceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereBalanceUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereBalanceableType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereFeeEgp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereFeeUsd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereUpdatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\BalanceWebsite withTrashed()
 * @method static \Illuminate\Database\Query\Builder|\App\BalanceWebsite withoutTrashed()
 * @mixin \Eloquent
 * @property int $balanceable_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\BalanceWebsite whereBalanceableId($value)
 */
class BalanceWebsite extends Model
{
    use SoftDeletes;
    /**
     * @var array
     */
    protected $fillable = [
        'balance_id', 'balanceable_type', 'available_balance_egp', 'available_balance_usd',
        'balance_egp', 'balance_usd', 'fee_egp', 'fee_usd',
    ];
}
