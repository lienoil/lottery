jQuery(document).ready(function ($) {
    $('.navbar').affix({
        offset: {
            top: $('body > header').height() + 60
        },
    });
});