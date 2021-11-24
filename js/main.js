$(document).ready(function(){


    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });

    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
    });

    $('.search_toggler').click(function(){
        $('.search_modal').toggleClass('show');
    });

    $('.content table.my').wrap('<div class="table_wrap"></div>');

});


