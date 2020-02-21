<?php

namespace App\Policies;

use App\Client;
use App\Order;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any orders.
     *
     * @param Client $user
     * @return mixed
     */
    public function viewAny(Client $user)
    {
        //
    }

    /**
     * Determine whether the user can view the order.
     *
     * @param Client $user
     * @param Order $order
     * @return mixed
     */
    public function view(Client $user, Order $order)
    {
        return $user->id === $order->client_id;
    }

    /**
     * Determine whether the user can create orders.
     *
     * @param Client $user
     * @return mixed
     */
    public function create(Client $user)
    {
        //
    }

    /**
     * Determine whether the user can update the order.
     *
     * @param Client $user
     * @param Order $order
     * @return mixed
     */
    public function update(Client $user, Order $order)
    {
        return $user->id === $order->client_id;
    }

    /**
     * Determine whether the user can delete the order.
     *
     * @param Client $user
     * @param Order $order
     * @return mixed
     */
    public function delete(Client $user, Order $order)
    {
        //
    }

    /**
     * Determine whether the user can restore the order.
     *
     * @param Client $user
     * @param Order $order
     * @return mixed
     */
    public function restore(Client $user, Order $order)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the order.
     *
     * @param Client $user
     * @param Order $order
     * @return mixed
     */
    public function forceDelete(Client $user, Order $order)
    {
        //
    }
}
