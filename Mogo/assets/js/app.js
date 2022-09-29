$(function() {

    let header = $("#header");
    let intro = $("#intro");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();

    /* fixed header */

    checkScroll(scrollOffset, introH);

    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset, introH);
    });

    function checkScroll(scrollOffset, introH) {
        
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);

        let blockID = $this.data("scroll");
        let blockOffset = $(blockID).offset().top;

        $("#nav a").removeClass("active");
        $("#nav").removeClass("active");
        $("#nav_toggle").removeClass("active");
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    /* Burger */

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Accordion */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockID = $this.data("collapse");

        // $(this).toggleClass("active");
        $(blockID).slideToggle();
    });

    /* slider */
 
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });


});