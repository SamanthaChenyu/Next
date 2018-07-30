(function($) {
    $(function() {
        var jchange = $('.jchange');

        jchange
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width;
                } else if (width >= 350) {
                    width = width;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        // $('.jchange-control-prev')
        //     .jcarouselControl({
        //         target: '-=1'
        //     });

        // $('.jchange-control-next')
        //     .jcarouselControl({
        //         target: '+=1'
        //     });

        $('.jchange-wrapper').jcarouselAutoscroll({
            autostart: true,
            interval: 3000
        });

        $('.jchange-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);