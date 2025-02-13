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
                1820: {
                    items: 7
                },
                1530: {
                    items: 6
                },
                1240: {
                    items: 5,
                },
                945: {
                    items: 4,
                },
                650: {
                    items: 3,
                },
                360: {
                    items: 2,
                },
                300: {
                    items: 1,
                },
                200: {
                    items: 1,
                }
            }
        });
    });

}