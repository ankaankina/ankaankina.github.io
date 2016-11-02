$(document).ready(slider);

function slider() {
  // var leftUIEl = $('.carousel-arrow-left');
  // var rightUIEl = $('.carousel-arrow-right');
  var elementsList = $('.carousel-list');

  var pixelOffset = 1160;
  var currentLeftValue = 0;
  var elementsCount = elementsList.find('li').length;
  var minimumOffset = -((elementsCount - 5) * pixelOffset);
  var maximumOffset = 0;

  // leftUIEl.on('click', slideLeft);
  // rightUIEl.on('click', slideRight);

  function slideLeft() {
    if (currentLeftValue != maximumOffset) {
      currentLeftValue += 175;
      elementsList.animate({left: currentLeftValue + 'px'}, 500);
    };
  };

  setInterval(slideRight, 3000);
  function slideRight() {
    if (currentLeftValue != minimumOffset) {
      currentLeftValue -= 175;
      elementsList.animate({left: currentLeftValue + 'px'}, 800);
    };
  };
}
