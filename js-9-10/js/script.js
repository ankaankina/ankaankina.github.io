'use strict'

$(document).ready(function () {

  // DROP DOWN MENU
  var dropDownMenuItem = $('.menu-item-dropdown');
  var dropDownSubMenuItem = $('.sub-menu-link-dropdown');

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



})
