$(document).ready(function() {
  var $checkbox1 = $('#button-1');
  $checkbox1.attr('checked');

  var $label1 = $('#label-1');
  $label1.addClass('blue');

  var $text1 = $('.text-1');
  $text1.css('display', 'block');

  var $checkbox2 = $('#button-2');
  var $checkbox3 = $('#button-3');

  var $label2 = $('#label-2');
  var $label3 = $('#label-3');

  var $text2 = $('.text-2');
  var $text3 = $('.text-3');

  $text2.css('display', 'none');
  $text3.css('display', 'none');

  $checkbox1.on( 'click', function() {
    $( "input#checkbox1:checked" ).val();
    $label1.addClass('blue');
    $label2.removeClass('blue');
    $label3.removeClass('blue');

    $text1.css('display', 'block');
    $text2.css('display', 'none');
    $text3.css('display', 'none');
  });

  $checkbox2.on( 'click', function() {
    $( "input#checkbox2:checked" ).val();
    $label2.addClass('blue');
    $label1.removeClass('blue');
    $label3.removeClass('blue');

    $text2.css('display', 'block');
    $text1.css('display', 'none');
    $text3.css('display', 'none');
  });

  $checkbox3.on( 'click', function() {
    $( "input#checkbox3:checked" ).val();
    $label3.addClass('blue');
    $label2.removeClass('blue');
    $label1.removeClass('blue');

    $text3.css('display', 'block');
    $text1.css('display', 'none');
    $text2.css('display', 'none');
  });


});
