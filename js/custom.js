$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .gnb').toggleClass('on')
    });


    $('#header .gnb>ul>li>a').on('click', function (e) {
        /*반응형 메뉴 열리게 하는 방법*/
        if ($('#header .gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('#header .gnb>ul>li ul').stop().slideUp();
            $(this).next().slideDown()
            /*그냥 열리려면 show 부드럽게 열리려면 slideDown*/
        };
    });

    $(window).on('resize', function () {
        /* 반응형 아닐때 메뉴 뜨는거 없애는 방법 */
        $('#header .gnb').removeClass('on');
        $('.mbtn').removeClass('on');
        $('#header .gnb>ul>li ul').removeAttr('style');

    });

});
