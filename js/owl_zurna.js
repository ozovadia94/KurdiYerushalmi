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
                // 1000: {
                //     items: 5
                // },
                // 768: {
                //     items: 3
                // },
                // 650: {
                //     items: 2
                // },



                // 700: {
                //     items: 5
                // },
                // 520: {
                //     items: 4,
                // },
                // 370: {
                //     items: 3,
                // },
                // 300: {
                //     items: 2,
                // },
                // 250: {
                //     items: 2,
                // },
                // 200: {
                //     items: 1,
                // }
                1000: {
                    items: 7
                },
                840: {
                    items: 6
                },
                680: {
                    items: 5,
                },
                520: {
                    items: 4,
                },
                360: {
                    items: 3,
                },
                200: {
                    items: 2,
                },
                160: {
                    items: 1,
                }
            }
        });
    });

}