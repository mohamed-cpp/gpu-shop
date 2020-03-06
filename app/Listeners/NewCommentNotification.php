<?php

namespace App\Listeners;

use App\Events\NewComment;
use App\Notifications\NotificationNewReply;
use App\Notifications\SellerNotificationCommentProduct;
use Illuminate\Support\Facades\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NewCommentNotification implements ShouldQueue
{
    /**
     * The name of the queue the job should be sent to.
     *
     * @var string|null
     */
    public $queue = 'medium';

    /**
     * Handle the event.
     *
     * @param  NewComment  $event
     * @return void
     */
    public function handle(NewComment $event)
    {
        if($event->comment->parent_id){
            $users = [];
            $comment = $event->comment->parent()->get()->first()->load('replies');
            $product = $comment->product()->first();

            if(get_class($comment->commentable) != "App\Seller" &&
                $comment->commentable->username != $event->user->username)
            {
                $comment->commentable->notify(new NotificationNewReply($product,$event->user));
            }

            foreach ($comment->replies as $reply){
                if(get_class($reply->commentable) != "App\Seller" &&
                    $reply->commentable->username != $event->user->username)
                {
                    $users[$reply->commentable->username] = $reply->commentable;
                }
            }
            Notification::send($users, new NotificationNewReply($product,$event->user));
            $seller = $product->seller()->get()->first();
        }else{
            $product = $event->comment->product()->first();
            $seller = $product->seller()->get()->first();
        }

        $seller->notify(new SellerNotificationCommentProduct($product));

    }
}
