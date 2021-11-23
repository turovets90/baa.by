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




    /*

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });


    $('.dropdown_toggle').each(function(){
        var toggler=$(this);
        var toggler_next=$(this).next();
        $(toggler).click(function(){
            $(toggler).toggleClass('act');
            $(toggler_next).toggleClass('open');
            return false;
        });

    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest(".dropdown_menu.open").length) {
            $(".dropdown_menu.open").removeClass('open');
            //$("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });

    $('.mm_toggler').each(function(){
        var mm_toggler=$(this);
        var mm_toggler_next=$(mm_toggler).next();
        var mm_toggler_next_back=$(mm_toggler_next).find('.back');
        $(mm_toggler).click(function (){
            $(mm_toggler_next).toggleClass('active');
        });
        $(mm_toggler_next_back).click(function(){
            $(mm_toggler_next).removeClass('active');
        });
    });

    $('.tabs li ').each(function(){
        var tab_link=$(this).index();
        var tab_content=$('.tabs_content .tabs_content_item').index();
        console.log(tab_link);
        $(this).click(function(){
            console.log(tab_link);
            $('.tabs li ').removeClass('act');
            $('.tabs_content .tabs_content_item').removeClass('active');
            $(this).addClass('act');
            $('.tabs_content .tabs_content_item').eq(tab_link).addClass('active');
        });
    });

    $('.add_wishlist').click(function(){
        $(this).addClass('act');
    });



    $('.range_values').each(function(){
        var range=$(this).find('.range');
        $(range).slider({
            range: true,
            min: 5,
            max: 350,
            values: [5, 150],
            sliderValueNoteDisplay: true,
            step: 1,
            slide: function(event, ui) {
                $(range).children("span.ui-slider-handle").first().html('<span class="slider-left-value">' +ui.values[ 0 ]+' BYN</span>');
                $(range).children("span.ui-slider-handle").last().html('<span class="slider-right-value">' +ui.values[ 1 ]+' BYN</span>');
            }
        });

        $(range).children("span.ui-slider-handle").first().html('<span class="slider-left-value">5 BYN</span>');
        $(range).children("span.ui-slider-handle").last().html('<span class="slider-right-value">150 BYN</span>');
    });


    $('.filter_item_title').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('act');
    })

    $('.show_filter').click(function(){
        $('.filter').addClass('show');
        $('html').addClass('no_scroll');
    });

    $('.close_filter').click(function(){
        $('.filter').removeClass('show');
        $('html').removeClass('no_scroll');
    });


    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    if($('.product_slider .item').length > 1){
        $('.product_slider').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

     */




});


