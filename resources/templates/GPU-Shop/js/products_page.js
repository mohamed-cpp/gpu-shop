(function() {
    $(function animateByMe(time = 500) {
        $('.offer').animate({
            fontWeight:'200',
        },time, function () {
            $(this).animate({
                fontWeight:'750',
            },time);
        });
        setTimeout(animateByMe, 200);
    }());



    window.inputNumber = function(el) {

        var min = el.attr('min') || false;
        var max = el.attr('max') || false;

        var els = {};

        els.dec = el.prev();
        els.inc = el.next();

        el.each(function() {
            init($(this));
        });

        function init(el) {

            els.dec.on('click', decrement);
            els.inc.on('click', increment);

            function decrement() {
                var value = el[0].value;
                value--;
                if(!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment() {
                var value = el[0].value;
                value++;
                if(!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();

inputNumber($('.input-number'));