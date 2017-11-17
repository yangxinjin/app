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
    $('.carousel-menu li').mouseenter(function() {
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
    $('.top').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })
    $('.small .small-img').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })
    $('.p-img li').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })
    $('.saoma').hover(function() {
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
    })
})