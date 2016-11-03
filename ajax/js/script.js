$(searchInit());

function searchInit() {
  'use strict';

  var request = new XMLHttpRequest();

  $('.mbtn').click(function() {
    var inputValue = $('.text-field').val();
    console.log(inputValue);
    getjson(inputValue);
  });

  function getjson(word) {
    request.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag=' + word + '&limit=10');
    request.onreadystatechange = function() {
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
  };
  // console.log(request);

}
