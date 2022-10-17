$(function () {
    const observer = lozad('.lazy', {
        threshold: 0.1,
        enableAutoReload: true
    });
    observer.observe();

    $('.range-slider-option').rangeSlider();

    $('#workExampleGallery').lightSlider({
        gallery: true,
        item: 1,
        vThumbWidth: 105,
        thumbItem: 5,
        thumbMargin: 30,
        slideMargin: 0,
        adaptiveHeight:true,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    vThumbWidth: 52,
                    thumbMargin: 2,
                }
            }
        ]
    });

    $('#staffSlider').lightSlider({
        item: 4,
        pager: false,
        controls: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    item: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    item: 1,
                }
            }
        ]
    });

    $('#projectExampleGallery').lightSlider({
        gallery: true,
        item: 1,
        vThumbWidth: 74,
        thumbItem: 5,
        thumbMargin: 15,
        slideMargin: 0,
        controls: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    vThumbWidth: 53,
                    thumbMargin: 10,
                }
            }
        ]
    });
});

