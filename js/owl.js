
myfunc = () => {


    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".navbar-default").addClass("fix-nav");
        } else {
            $(".navbar-default").removeClass("fix-nav");
        }
    });

    $(document).ready(function () {
        $("#owl-demo").owlCarousel({
            autoplay: true,
            loop: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            items: 5,
            margin: 0,
            nav: false,
            dots: true,
            responsiveClass: true,
            responsive: {
                1000: {
                    items: 5
                },
                768: {
                    items: 3
                },
                650: {
                    items: 2
                },
                600: {
                    items: 2
                },
                550: {
                    items: 1
                },
                400: {
                    items: 1,
                },
                460: {
                    items: 1,
                },
                350: {
                    items: 1,
                },
                300: {
                    items: 1,
                }
            }
        });
    });

}