$(document).ready(function () {

    var slideWidth = 100; // 각 슬라이드의 너비 (vw)
    var totalSlides = $('.slide_content').length;  // 슬라이드컨텐츠 갯수
    var currentIndex = 0;

    function showSlide(index) {
        $('.slide_wrap').css('left', -slideWidth * index + 'vw');
        currentIndex = index;
    }

    $('.next').click(function () {
        if (currentIndex < totalSlides - 1) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    });

    $('.prev').click(function () {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(totalSlides - 1);
        }
    });
});

