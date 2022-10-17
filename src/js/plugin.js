(function ($) {
    $.fn.rangeSlider = function () {
        return this.each(function () {
            const $this = $(this);
            const $rangeSlider = $this.find('.range-slider');
            const $minInput = $this.find('.min-input');
            const $maxInput = $this.find('.max-input');

            $rangeSlider.slider({
                range: true,
                min: $this.data('min'),
                max: $this.data('max'),
                values: [+$minInput.val(), +$maxInput.val()],
                slide: function (event, ui) {
                    $minInput.val(ui.values[0]);
                    $maxInput.val(ui.values[1]);
                }
            });
        });
    }
})(jQuery)