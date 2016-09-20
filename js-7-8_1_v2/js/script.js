'use strict';

$(document).ready(function() {

  (function setBoxOnStart() {
    $('#button-1').attr('checked');
    $('#label-1').addClass('blue');
    $('.text-1').css('display', 'block');
  })();

  $('#button-1').on('click', chooseBox1);
  $('#button-2').on('click', chooseBox2);
  $('#button-3').on('click', chooseBox3);

});

// HIDING BOXES
function hideBox(label, text) {
  var label = label;
  var text = text;
  label.removeClass('blue');
  text.css('display', 'none');
}

// SHOWING BOXES
function showBox(label, text) {
  var label = label;
  var text = text;
  label.addClass('blue');
  text.css('display', 'block');
}

function chooseBox1() {
  $( "input#checkbox1:checked" ).val();
  showBox($('#label-1'), $('.text-1'));
  hideBox($('#label-2'), $('.text-2'));
  hideBox($('#label-3'), $('.text-3'));
}

function chooseBox2() {
  $( "input#checkbox2:checked" ).val();
  showBox($('#label-2'), $('.text-2'));
  hideBox($('#label-1'), $('.text-1'));
  hideBox($('#label-3'), $('.text-3'));
}

function chooseBox3() {
  $( "input#checkbox3:checked" ).val();
  showBox($('#label-3'), $('.text-3'));
  hideBox($('#label-2'), $('.text-2'));
  hideBox($('#label-1'), $('.text-1'));
}
