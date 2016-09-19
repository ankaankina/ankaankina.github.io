'use strict'

$(document).ready(function () {

  // DROP DOWN MENU
  var dropDownMenuItem = $('.menu-item-dropdown');

  dropDownMenuItem.hover(function(){
      $(this).children('.sub-menu').slideDown(200);
    }, function(){
      $(this).children('.sub-menu').slideUp(200);
    })


  // SLIDER
  $(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});

  $(function() {
    $('.jcarousel').jcarousel({
      list: '.jcarousel-list'
    });
  });

  var $buttonLinks = $('.jcarousel-btn');
  $buttonLinks.on('click', function (e) {
    e.preventDefault();
  })

  $('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
  });

  $('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
  });


  // JQUERY CHECKBOX
  $('.niceCheck').mousedown(
    function () {
      changeCheck($(this));
    });

  $('.niceCheck').each(
    function () {
      changeCheckStart($(this));
    });


  // SELECT
  var params = {
  		changedEl: ".lineForm select",
  		visRows: 5,
  		scrollArrows: true
  	}

  	cuSel(params);

  	var params = {
  		changedEl: "#selectList",
  		scrollArrows: false
  	}

  	cuSel(params);
})




// JQUERY CHECKBOX
function changeCheck(el) {
  var el = el,
    input = el.find('input.jCheck').eq(0);
  if (input.attr('disabled')) {
    el.addClass('niceCheckedDisabled');
    input.attr('disabled');
  } else {
    if (!input.attr('checked')) {
      el.css('background-position', '0 -17px');
      input.attr('checked', true);
    } else {
      el.css('background-position', '0 0');
      input.attr('checked', false)
    }
    return true;
  }
}

function changeCheckStart(el) {
  var el = el,
      input = el.find('input.jCheck').eq(0);
    if (input.attr('checked')) {
      el.addClass('niceChecked');
    }
    if (input.attr('disabled')) {
      el.addClass('niceCheckedDisabled');
      input.attr('disabled');
    }
  return true;
}
