$(document).ready(function () {
    var $btnDesign = $('#btnDesign');
    var $btnDevelop = $('#btnDevelop');
    var $btnRespond = $('#btnRespond');
    var $qbDesign = $('#qbDesign');
    var $qbDevelop = $('#qbDevelop');
    var $qbRespond = $('#qbRespond');
    var $arrowDesign = $('#arrowDesign');
    var $arrowDevelop = $('#arrowDevelop');
    var $arrowRespond = $('#arrowRespond');
    var $quotebox = $('.quotebox');
    var $circleArrow = $('.circleArrow');
    var $ourMission = $('#ourMission');
    var $space = $('#space');

    /* Top Scroll Portion */
    var scroll_start = 0;
    var startchange = $('#home');
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-fixed-top").addClass("change-nav-top")
                $(".navbar-fixed-top").removeClass("change-nav-top2")
            } else {
                $(".navbar-fixed-top").removeClass("change-nav-top")
                $(".navbar-fixed-top").addClass("change-nav-top2")
            }
        });
    }

    /* End Scroll Portion */


    /* Scroll To Links on Navbar */
    $("#button1").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });
    $("#button2").click(function () {
        $('html, body').animate({
            scrollTop: $ourMission.offset().top - 70
        }, 1500);
    });
    $("#button3").click(function () {
        $('html, body').animate({
            scrollTop: $("#ourteam").offset().top - 70
        }, 1500);
    });
    $("#button4").click(function () {
        $('html, body').animate({
            scrollTop: $("#ourWork").offset().top - 70
        }, 1500);
    });
    $("#button5").click(function () {
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });
    $("#button6").click(function () {
        $('html, body').animate({
            scrollTop: $ourMission.offset().top - 70
        }, 1500);
    });
    $("#button7").click(function () {
        $('html, body').animate({
            scrollTop: $("#ourteam").offset().top - 70
        }, 1500);
    });
    $("#button8").click(function () {
        $('html, body').animate({
            scrollTop: $("#ourwork").offset().top - 70
        }, 1500);
    });
    $("#button9").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 70
        }, 1500);
    });
    $("#button10").click(function () {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top - 70
        }, 1500);
    });
    /* End Scroll To Links on Navbar */


    $('#home').imagesLoaded({ background: true }, function () {
        $(".loading").fadeOut("slow");;
    });

    $arrowDevelop.hide();
    $arrowRespond.hide();

    $btnDesign.on('click', function () {
        $quotebox.hide();
        $qbDesign.slideDown("slow");
        $("body").animate({ scrollTop: $ourMission.offset().top }, { duration: 600, queue: false });
        $circleArrow.hide();
        $arrowDesign.slideDown("slow");
    });

    $btnDevelop.on('click', function () {
        $quotebox.hide();
        $qbDevelop.slideDown("slow");
        $("body").animate({ scrollTop: $ourMission.offset().top }, { duration: 600, queue: false });
        $circleArrow.hide();
        $arrowDevelop.slideDown("slow");
    });

    $btnRespond.on('click', function () {
        $quotebox.hide();
        $qbRespond.slideDown("slow");
        $("body").animate({ scrollTop: $ourMission.offset().top }, { duration: 600, queue: false });
        $circleArrow.hide();
        $arrowRespond.slideDown("slow");
    });
});