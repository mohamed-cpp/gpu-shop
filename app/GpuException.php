<?php

namespace App;

use Exception;
use Illuminate\Database\Eloquent\Model;

class GpuException extends Model
{
    protected $fillable = ['code','message','trace','ip','url','user','request','header','method'];

    public static function reportException(Exception $exception)
    {
        if(auth('client')->check()){
            $user = auth('client')->user();
        }elseif(auth('seller')->check()){
            $user = auth('seller')->user();
        }elseif (auth('web')->check()){
            $user = auth('web')->user();
        }else{
            $user = null;
        }
        return self::create([
            'code'    => trim($exception->getCode()),
            'message' => trim($exception->getMessage()),
            'trace'   => trim($exception->getTraceAsString()),
            'method'  => request()->getMethod(),
            'ip'      => request()->ip(),
            'url'     => request()->fullUrl(),
            'user'    => $user,
            'request' => json_encode(request()->except(array_keys(request()->allFiles()))),
            'header'  => json_encode(request()->headers->all()),
        ]);
    }
}
