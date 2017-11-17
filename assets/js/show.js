$(function() {
    $('.topbar a').hover(function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        })
    $('.last-1').mouseenter(function() {
        $('.gwc').slideDown(500);
    }).mouseleave(function() {
        $('.gwc').hide();
    })
    $('.topbar-list input').focus(function() {
        console.log(123);
        $(this).addClass('active');
        $('.topbar-list .search-content').show();
        $('.topbar-list i').addClass('active');
        $('.topbar-list .list-content').css('display', 'none');
    }).blur(function() {
        $(this).removeClass('active');
        $('.topbar-list .search-content').hide();
        $('.topbar-list i').removeClass('active');
        $('.topbar-list .list-content').css('display', 'block');
    })

    $('.list-center').mouseenter(function() {
        $('.hide').stop(true).slideDown();
    }).mouseleave(function() {
        $('.hide').slideUp();
        $('.hide').removeClass('active');
    })
    var aindex;
    $('.list-center a').mouseover(function() {
        $('.hide ul').eq(aindex).hide();

        aindex = $(this).index();
        $('.hide ul').eq(aindex).show().addClass('active');
        $('.hide').addClass('active');
    })
    $('.hide').mouseover(function() {

        $(this).stop().addClass('active');
    }).mouseout(function() {
        $(this).slideUp().removeClass('active');
    })
    $('.header .list-center1').mouseenter(function() {
        $('.carousel-image .carousel-menu').show();
    }).mouseleave(function() {
        $('.carousel-image .carousel-menu').hide();
    })
    $('.carousel-image .carousel-menu').mouseenter(function() {
        $(this).show();
    }).mouseleave(function() {
        $(this).hide();
    })
    $('.carousel-menu li').mouseover(function() {
        var index = $(this).index();
        $('.carousel .box').eq(index).show()
    }).mouseleave(function() {
        var index = $(this).index();
        $('.carousel .box').eq(index).hide()
    })
    $('.box ul').mouseover(function() {
        $(this).parent().show();
        var index = $(this).parent().index();
        $('.carousel-menu li').eq(index - 1).css('background-color', '#ff6700');
        $('.carousel-image .carousel-menu').show();
    }).mouseout(function() {
        $(this).parent().hide();
        var index = $(this).parent().index();
        $('.carousel-menu li').eq(index - 1).css('background-color', '');
        $('.carousel-image .carousel-menu').hide();
    })
    $(window).scroll(function() {
        $('.title-center').animate({ top: 322 }, 1000);
        $('.vedio .er').animate({ top: 462 }, 1000);
        $('.vedio .el').animate({ top: 462 }, 1000);
        $('.vedio .title-top').animate({ top: 278 }, 1000);
        $('.vedio .phone').animate({ bottom: 0 }, 1000);
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 205) {
            console.log(123);
            $('.fix').nextAll().slideDown();
            $('.title-center').animate({ top: 322 }, 1000);
        } else {
            $('.fix').nextAll().slideUp();
        }
        if (scrollTop > 450) {
            $('.name-1 span').animate({ top: 0 }, 1000);
            $('.name-1 .p1').animate({ bottom: 140 }, 1000);
            $('.name-1 .p2').animate({ bottom: 96 }, 1000);
            $('.name-1 .img').animate({ bottom: 0 }, 1000);
        }
        if (scrollTop > 1023) {
            $('.leijun p').animate({ top: 295 }, 1000);
            $('.leijun span').animate({ top: 414 }, 1000);
            $('.leijun a').animate({ top: 465 }, 1000);
        }
        if (scrollTop > 1636) {
            $('.screen p').animate({ top: 104 }, 1000);
            $('.screen span').animate({ top: 144 }, 1000);
            $('.screen .screen-1').animate({ top: 260 }, 1000);
        }

    })

})