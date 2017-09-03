// variables
//==========
var videos = [], videoBoxes = $('.video-wrap');

// player staff
var progressBars = [], persents = [], progressAnimation;

// creating iframes
//=================

function onYouTubeIframeAPIReady() {
    videoBoxes.each(function(i, el) {
        var target = 'video-'+(i+1),
            targetId = $(el).data('id');

        var player = new YT.Player(target, {
            height: '390',
            width: '640',
            videoId: targetId,
            playerVars: {
                'controls': '0',
                'iv_load_policy': '3',
                'showinfo': '0'
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });

        videos.push(player);
    });

    for (var i=0; i<videos.length; i++) {
        progressBars.push(0);
        persents.push(0);
    }
}

// video events
//=============

function onPlayerStateChange(event) {
    var $this = $(event.target.a).eq(0);
    var el = $this.parents('.video-wrap'), target = el.data('video');
    var player = videos[target-1];

    var state = player.getPlayerState();
    var persent = player.getDuration()/100;

    switch(state) {
        case 0 :
            clearInterval(progressAnimation);
            el.removeClass('is-playing');
            el.find('.pause').fadeOut(200, function() {
                el.find('.play').stop().fadeIn(200);
            });
            break;
        case 1:
            progressAnimation = setInterval(function() {
                progress =  Math.round(player.getCurrentTime() / persent);
                var firstPart = Math.floor(player.getCurrentTime()/60);
                var secondPart = Math.round(player.getCurrentTime());
                secondPart = secondPart % 60;

                if (firstPart < 10) firstPart = "0"+firstPart;
                if (secondPart < 10) secondPart = "0"+secondPart;

                var timeString = firstPart + ":" + secondPart;

                if (progress < 10) {
                    el.find('.tooltip-body').css('transform','translateX('+5*(10-progress)+'px)');
                } else if (progress > 90) {
                    el.find('.tooltip-body').css('transform','translateX(-'+5*(10-(100-progress))+'px)');
                } else {
                    el.find('.tooltip-body').css('transform','');
                }

                el.find('.time').text(timeString);
                el.find('.progress').css({
                    'transform': 'translateX('+progress+'%)'
                });
            }, 1000);
            el.addClass('is-playing');
            el.find('.play').fadeOut(200, function() {
                el.find('.pause').stop().fadeIn(200);
            });
            el.find('.video-mask').css('opacity','0');
            break;

        case 2:
            clearInterval(progressAnimation);
            el.removeClass('is-playing');
            el.find('.pause').fadeOut(200, function() {
                el.find('.play').stop().fadeIn(200);
            });
            break;
    }
}

// player controls handlers
//=========================

$(".play").click(function() {
    var thisIframe = $(this).closest('.video-single').find('iframe'),
        wrap = thisIframe.parents('.video-wrap'),
        target = wrap.data('video'),
        player = videos[target-1];

    player.playVideo();
});

$(".pause").click(function() {
    var thisIframe = $(this).closest('.video-single').find('iframe'),
        wrap = thisIframe.parents('.video-wrap'),
        target = wrap.data('video'),
        player = videos[target-1];

    player.pauseVideo();
});

$('.progress-bar').click(function(e) {
    var bar = $(this);

    var wrap = bar.parents('.video-wrap'),
        target = wrap.data('video'),
        player = videos[target-1],
        state = player.getPlayerState(),
        persent,
        position = e.pageX - bar.offset().left;

    if (state == 1 || state == 2 || state == 0) {
        persent = bar.width()/100;

        var progress = Math.round(position / persent);
        persent = player.getDuration()/100;

        var firstPart = Math.floor(player.getCurrentTime()/60);
        var secondPart = Math.round(player.getCurrentTime());
        secondPart = secondPart % 60;

        if (firstPart < 10) firstPart = "0"+firstPart;
        if (secondPart < 10) secondPart = "0"+secondPart;

        var timeString = firstPart + ":" + secondPart;

        if (progress < 10) {
            bar.find('.tooltip-body').css('transform','translateX('+5*(10-progress)+'px)');
        } else if (progress > 90) {
            bar.find('.tooltip-body').css('transform','translateX(-'+5*(10-(100-progress))+'px)');
        } else {
            bar.find('.tooltip-body').css('transform','');
        }

        bar.find('.time').text(timeString);

        bar.find('.progress').css({
            'transform': 'translateX('+progress+'%)'
        });

        player.seekTo(progress*persent);
    }
});

$('.open-fullscreen').click(function() {
    var target = $(this);
    openFullscreen(target);
});

$('.close-fullscreen').click(function() {
    var target = $(this);
    closeFullscreen(target);
});

$(window).on('slide-change', function() {
    $('.video-wrap').each(function() {
        var video = $(this);

        if (!$(this).hasClass('is-fullscreen')) return;

        closeFullscreen(video.find('.close-fullscreen'));
    })
});

// player helpers
//===============

function openFullscreen($this) {
    var videoWrap = $this.closest('.video-wrap');
    var videoWidth = videoWrap.width(), videoHeight = videoWrap.height();

    videoWrap.attr('data-width', videoWidth);
    videoWrap.attr('data-height', videoHeight);

    videoWrap.css({
        'z-index':'9999999',
        'right':'0',
        'top':'0',
        'width':'100vw',
        'height':'100vh',
        'padding-bottom': '0px',
        'position': window.innerWidth >= 1024 ? 'absolute' : 'fixed',
        'transform':'translateZ(0)'
    });

    $('html').css('overflow','hidden');

    $this.hide();
    $this.parent().find('.close-fullscreen').show();

    videoWrap.addClass('is-fullscreen');
    $(window).trigger('open-fullscreen');
}

function closeFullscreen($this) {
    var videoWrap = $this.closest('.video-wrap');
    var videoWidth = videoWrap.data('width'), videoHeight = videoWrap.data('height');

    videoWrap.css({
        'z-index':'',
        'right':'',
        'top':'',
        'width': '',
        'height': '',
        'position':'',
        'transform':'',
        'padding-bottom': '56.25%'
    });

    videoWrap.css({
        'transition':'',
    });
    $('html').css('overflow','');
    $('.column').css('overflow','');

    videoWrap.css({
        'width':videoWidth+'px',
        'height':videoHeight+'px'
    });

    $this.hide();
    $this.parent().find('.open-fullscreen').show();

    videoWrap.removeClass('is-fullscreen');
    $(window).trigger('close-fullscreen');
}
