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
        $('.hide .hide1').stop(true).slideDown();

    }).mouseleave(function() {
        $('.hide .hide1').slideUp();
        $('.hide').removeClass('active');
    })
    var aindex;
    $('.list-center a').mouseover(function() {
        $('.hide1 ul').eq(aindex).hide();

        aindex = $(this).index();
        $('.hide1 ul').eq(aindex).show().addClass('active');
        $('.hide').addClass('active');
    })
    $('.hide1').mouseenter(function() {
        $(this).stop();
        $('.hide').addClass('active');
    }).mouseleave(function() {
        $(this).slideUp();
        $('.hide').removeClass('active');
    })
    var index = 0;
    var timer = 0;
    var len = $('.carousel-image li').length;

    function remove() {
        $('.carousel-image li:eq(' + index + ')').removeClass('active');
        $('.carousel-index li:eq(' + index + ')').removeClass('active');
    }

    function add() {
        $('.carousel-image li:eq(' + index + ')').addClass('active');
        $('.carousel-index li:eq(' + index + ')').addClass('active');
    }

    function run() {
        timer = setInterval(function() {
            remove();
            index++;
            if (index > len - 1) {
                index = 0;
            }

            add();

        }, 2000);
    }
    run();
    $('.carousel').mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        run();
    })
    $('.carousel-index li').mouseover(function() {
        remove();
        index = $(this).index();
        add();
    })
    $('.carousel-left').click(function() {
        remove();
        index--;
        if (index < 0) {
            index = len - 1;
        }
        add();
    })
    $('.carousel-right').click(function() {
        remove();
        index++;
        if (index > len - 1) {
            index = 0;
        }
        add();
    })
    var index1 = 0;
    var timer2 = 0;

    function Aadd() {
        $('.show-button a:eq(0)').addClass('active');
        $('.show-button a:eq(1)').removeClass('active');
    }

    function Aremove() {
        $('.show-button a:eq(0)').removeClass('active');
        $('.show-button a:eq(1)').addClass('active');
    }

    function run1() {
        timer2 = setInterval(function() {
            index1++;
            if (index1 > 1) {
                index1 = 0;
                $('.list-img ol').css('left', '0');
                Aadd();
            } else if (index1 = 1) {
                $('.list-img ol').css('left', '-1250px');
                Aremove();
            }

        }, 3000);
    }
    run1();
    $('.show-button a:eq(0)').click(function(ent) {
        ent.preventDefault();
        clearInterval(timer2);

        Aremove();
        $('.list-img ol').css('left', '-1250px');
        run1();

    })
    $('.show-button a:eq(1)').click(function(ent) {
        ent.preventDefault();
        clearInterval(timer2);
        Aadd();
        $('.list-img ol').css('left', '0px');
        run1();
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
        $('.carousel-menu li').eq(index - 2).css('background-color', '#ff6700');
        $('.carousel-image .carousel-menu').show();
    }).mouseout(function() {
        $(this).parent().hide();
        var index = $(this).parent().index();
        $('.carousel-menu li').eq(index - 2).css('background-color', '');
        $('.carousel-image .carousel-menu').hide();
    })

    $('.carousel-image .carousel-menu').mouseenter(function() {
        $(this).show();
    }).mouseleave(function() {
        $(this).hide();
    })
    $('.jiadian-list a').mouseover(function(ent) {
        ent.preventDefault();
        $('.jiadian-list a').removeClass('active');
        $(this).addClass('active');
        $('.jd-img:eq(0) ul').removeClass('active');

        var index = $(this).index();

        console.log(index);
        $('.jd-img:eq(0) ul').eq(index).addClass('active');

    })
    $('.jiadian-list1 a').mouseover(function(ent) {
        ent.preventDefault();
        $('.jiadian-list1 a').removeClass('active');
        $(this).addClass('active');
        $('.jd-img:eq(1) ul').removeClass('active');

        var index = $(this).index();

        console.log(index);
        $('.jd-img:eq(1) ul').eq(index).addClass('active');

    })
    $('.jiadian a').click(function() {

        $.get('php/1.php', function(data) {
            var content = '';
            data.forEach(function(value, key) {
                content += '<li>';
                content += '<a class="audio-1" href=""><img src="' + value.img + '" alt=""></a>';
                content += '<a class="audio-2" href=""><i class="iconfont icon-bofang"></i></a>';
                content += '<a class="audio3" href="">' + value.audio3 + '</a>';
                content += '<p>一场关于小米Mix 2 极致工艺的巅峰对话</p>';
                content += '</li>';
                console.log(content);
            });
            $('.audio').append(content);
        }, 'json')
    })
})