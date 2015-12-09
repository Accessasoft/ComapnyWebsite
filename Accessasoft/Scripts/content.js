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
    var startchange = $('#scrolltotoptest1');
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function () {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".navbar-fixed-top").addClass("change-nav-top")
                $(".navbar-fixed-top").removeClass("change-nav-top2")
                //$(".navbar-fixed-top").css('padding', '1vh 0');
            } else {
                $(".navbar-fixed-top").removeClass("change-nav-top")
                $(".navbar-fixed-top").addClass("change-nav-top2")
                //$('.navbar-fixed-top').css('background-color', 'transparent');
                //$(".navbar-fixed-top").css('padding', '.5vh 0');
            }
        });
    }

    /* End Scroll Portion */

    $("#button1").click(function () {
        $('html, body').animate({
            scrollTop: $("#scrolltotoptest1").offset().top
        }, 2000);
    });
    $("#button2").click(function () {
        $('html, body').animate({
            scrollTop: $("#scrolltotoptest2").offset().top
        }, 2000);
    });
    $("#button3").click(function () {
        $('html, body').animate({
            scrollTop: $("#scrolltotoptest3").offset().top
        }, 2000);
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