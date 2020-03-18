@component('mail::message')
# Hello

New Order.
<br>
Order Id:{{$order}}.

@component('mail::button', ['url' => '#'])
View Order
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
