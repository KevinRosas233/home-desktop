$( document ).ready(function() {
    $('.menu-toggle').click(function () {
        $('.navigation').toggleClass('active');
        $('.banner').toggleClass('active');

    });

    $('ul.submenu').hide();
    $('li.navigation-item a').click(function () {
        var findArticle = $(this).next('ul.submenu');
        var findWrapper = $(this).closest('ul.navigation');

        if (findArticle.is(':visible')){
            findArticle.slideUp();
        }
        else {
            findWrapper.find('ul.submenu').slideUp();
            findArticle.slideDown();
        }
    });

    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

});