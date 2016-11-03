'use strict';
  var request = new XMLHttpRequest();

  function getjson(word) {
    request.open('GET', 'https://api.riffsy.com/v1/search?tag=hello%20world&key=' + word + '&limit=10');
    request.onreaystatechange = function() {
      if (request.status === 200 && request.readyState === 4) {
        var resText = JSON.parse(request.responseText);
        var imgSrc = resText.results[0].url;

        console.log(resText.results[0].url);
        $('.image img').attr('src', imgSrc);

      } else if (request.status !== 200) {
        console.log('false');
      }
    }
    request.send();
  }
  console.log(request);

  $('.mbtn').click(function() {
    var inputValue = $('.text-field').val();
    console.log(inputValue);
    getjson(inputValue);
  })
