$(document).ready(function () {

    /**슬라이드**/
    if ($('.slide_container').length) {
        $.getScript('js/slide.js');
    }

    /**드래그**/
    if ($('.drag_container').length) {
        $.getScript('js/drag.js');
    }

    // 스크롤
    var navBtn = $('nav button');
    $(navBtn).on('click', function () {
        var scrollTarget = $(this).attr('data-target');
        var scrollPosition = $(scrollTarget).offset().top;

        if (scrollTarget === '#sec01') {
            scrollPosition -= 53;
        };

        $('html, body').animate({
            scrollTop: scrollPosition
        }, 'smooth');
    });
});



