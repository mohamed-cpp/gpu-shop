<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GpuException extends Model
{
    protected $fillable = ['code','message','trace','ip','url','user','request','header','method'];

//    public static function report(PHPException $exception)
//    {
//        return self::create([
//            'code'    => trim($exception->getCode()),
//            'message' => trim($exception->getMessage()),
//            'trace'   => trim($exception->getTraceAsString()),
//            'request' => serialize(request()->except(array_keys(request()->allFiles()))),
//            'header'  => serialize(request()->headers->all()),
//            'url'     => request()->fullUrl(),
//            'method'  => request()->getMethod()
//        ]);
//    }
}
