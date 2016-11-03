$(document).ready(slider);

function slider() {
  var leftUIEl = $('.arrowl-1');
  var rightUIEl = $('.arrowr-1');
  var elementsList = $('#slider_1');

  var pixelOffset = 900;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('.slide').length;
  var minimumOffset = -((elementsCount - 5) * pixelOffset);
  var maximumOffset = 0;

  leftUIEl.on('click', slideLeft);
  rightUIEl.on('click', slideRight);

  function slideLeft() {
    if (currentLeftValue != maximumOffset) {
      currentLeftValue += 300;
      elementsList.animate({left: currentLeftValue + 'px'}, 500);
    };
  };

  function slideRight() {
    if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 300;
      elementsList.animate({left: currentLeftValue + 'px'}, 800);
    };
  };
}
