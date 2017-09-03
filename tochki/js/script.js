'use strict';

$(document).ready(function() {
    openPopUp();
    initParallax();
    // maskingCodes();

    if ($(window).width() > 1023) {
        ScrollSliderOn();
    }

    if ($(window).width() < 1024) {
        $(window).scroll(function() {
            var popup = $('.pop-up-more');

            if ($(this).scrollTop() > 0 && popup.hasClass('open')) {
                popup.removeClass('open');
            }
        });
    }

    // $('.code-row button[type="submit"]').on("click", function(e) {
    //     e.preventDefault();
    //     $('.form-registration').removeClass('visible');
    //     setTimeout(function() {
    //         $('.form-select').addClass('visible')
    //     }, 200);
    // })

    $(window).on('open-fullscreen', hidePopup);
    $(window).on('close-fullscreen', showPopup);
});

function hidePopup() {
    var popup = $('.pop-up-more');

    popup.addClass('is-hidden');
}

function showPopup() {
    var popup = $('.pop-up-more');

    popup.removeClass('is-hidden');
}

function openPopUp() {
    var popUpInfo = $('.pop-up-more');
    var popUpInfoBtn = $('.pop-up-more .right-part');

    popUpInfoBtn.click(function() {
        popUpInfo.toggleClass("open");
    });

    setTimeout(function() {
        popUpInfo.addClass("open");
    }, 2000);
}

function ScrollSliderOn() {

    var duration = 700;

    $('head').append('<link rel="stylesheet" href="landing/css/jquery.fullPage.css" />')
    $('main').fullpage({
        css3: true,
		scrollingSpeed: duration,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		dragAndMove: true,
		offsetSections: false,
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,
        anchors: ['1', '2', '3', '4', '5', '6', '7', '8'],
    sectionSelector: 'section',
    afterLoad: function(anchorLink, index) {
        var popup = $('.pop-up-more');
        if (popup.hasClass('open')) popup.removeClass('open');

      var $section = $(this);

      if (index <= 1 && !$section.hasClass('is-showed')) setTimeout(function() {
        $section.addClass('is-showed');
      }, 50);
    },

    onLeave: function(index, nextIndex, direction){
        if (nextIndex === 3 || nextIndex === 5) {
            var nextSection = $(this).next('.fp-section');

            if (!nextSection.hasClass('is-showed')) setTimeout(function() {
                nextSection.addClass('is-showed');
            }, duration - 200);
        }

        $(window).trigger('slide-change');
    }
  });
}

// function maskingCodes() {
//     $('input[type="tel"]').mask("+380 (00) 000 00 00", {placeholder: "+380 (xx) xxx xx xx"});
//     $('input[type="text"]').mask("AA AA", {placeholder: "xx    xx"});
// }

// $('.form-registration button').on('click',function() {
//     $('.form-registration').removeClass('visible');
//     setTimeout(function() {
//         $('.form-select').addClass('visible');
//     }, 400);
// });


function initParallax() {

    var el = $('[data-parallax-element]');

    el.each(function() {
        var $this = $(this);
        var limit = parseInt($this.data('parallax-element')) || 15;

        window.addEventListener('mousemove', function(event) {
            var cx = event.clientX;
            var cy = event.clientY;

            var rx = cx - (window.innerWidth / 2);
            var ry = cy - (window.innerHeight / 2);

            var px = (rx / (window.innerWidth / 2)).toFixed(2);
            var py = (ry / (window.innerHeight / 2)).toFixed(2);

            var x = px * limit;
            var y = py * limit;

            $this.css('transform', 'translate(' + x + 'px, ' + y + 'px)');
        });
    })

}
