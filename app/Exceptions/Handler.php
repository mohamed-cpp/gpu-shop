<?php

namespace App\Exceptions;

use App\GpuException;
use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param \Exception $exception
     * @return void
     * @throws Exception
     */
    public function report(Exception $exception)
    {
        if ($exception instanceof TokenMismatchException) {
            $this->recordLog($exception,request(),'tokenMismatch');
            return redirect()->back()->with([
                'flash',
                'The form has expired. Please try again.'
            ]);
        }elseif ($exception instanceof ValidationException) {
            $this->recordLog($exception,request(),'validationLog');
        } elseif($exception instanceof NotFoundHttpException){
            $this->recordLog($exception,request(),'notFoundHttp');
        } else {
            GpuException::reportException($exception);
        }
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Exception $exception
     * @return \Illuminate\Http\Response
     * @throws Exception
     */
    public function render($request, Exception $exception)
    {
        return parent::render($request, $exception);
    }

    private function recordLog($e,$r,$channel){
        Log::channel($channel)->info($e,[
           'url' => $r->url(),
           'ip' => $r->ip(),
           'input' => $r->all(),
        ]);
    }
}
