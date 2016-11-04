$(init);


function init() {
  'use strict';

  // SLIDER
  $('#owl-example').owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true

    // "singleItem:true" is a shortcut for:
    // items : 1,
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
  });






  // BLOG TEMPLATE
  var html = $('#news').html();
  var newsItem = [
    {
      header: 'Advanced machinery helps improve quality',
      image: 'img/news-1.jpg',
      month: 'Jan',
      day: '23',
      author: 'cmsmasters',
      comments: 6,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      header: 'Powerful techniques for advanced service',
      image: 'img/news-2.jpg',
      month: 'Jan',
      day: '21',
      author: 'cmsmasters',
      comments: 3,
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  var content = tmpl(html, {
    data: newsItem
  });

  $('.blog__container__news').append(content);


  //ACCORDION PANEL
  (function panelOnStart() {
    $('.blog__container__panel__text-1').addClass('blog__active__text');
  })();

  $('.blog__container__panels__block > input').on('click', changePanelMode);

  function changePanelMode() {
    if ($(this.checked)) {
      $('.blog__container__panel__text').removeClass('blog__active__text');
      $(this).siblings('p.blog__container__panel__text').addClass('blog__active__text');
    }
  };


}
