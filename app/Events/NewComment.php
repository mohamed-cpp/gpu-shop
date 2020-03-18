<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class NewComment
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $comment;
    public $user;
    public $request;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($comment,$user,$request)
    {
        //
        $this->comment = $comment;
        $this->user = $user;
        $this->request = $request;
    }

}
