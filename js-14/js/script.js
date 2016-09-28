$(document).ready(init);
'use strict';

function init() {
  var html = $('#test').html();
  var userAnswer = [];
  var overlay = $('.overlay');
  var modalWindow = $('.modal-window');
  var reloadButton = $('.reload');
  var testPage = {
    questions: [
      {
        id: 'id-1',
        question: 'К какому участку скрипта применяется строгое правило ‘use strict’?',
        answers: ['Либо во всем скрипте, либо в отдельной функции.', 'Внутри блока {}', 'Во всем скрипте.'],
        rightAnswer: 0,
      },
      {
        id: 'id-2',
        question: 'Выберите правильный вариант фрагмента JSON-файла',
        answers: ['{‘name’: ‘Иван’ }', '{name: "Иван" }', '{"name": "Иван" }'],
        rightAnswer: 2,
      },
      {
        id: 'id-3',
        question: 'Какие данные можно сохранять в локальное хранилище?',
        answers: ['Только примитивные данные: строки, числа, булевые', 'Только строки', 'Любые данные'],
        rightAnswer: 1,
      }]};

  localStorage.setItem('testPage', JSON.stringify(testPage));
  var testing = localStorage.getItem('testPage');
  var content = tmpl(html, {
    questions: testPage.questions
  });
  $('body').append(content);


  function hideModal() {
    overlay.css('display', 'none');
    $('input').removeAttr('disabled');
    $('input').removeAttr('checked');
  };

  function checkAnswer() {
    var result;
    for (var i = 0; i < testPage.questions.length; i++) {
      for (var j = 0; j < testPage.questions[i].answers.length; j++) {
        if (document.querySelector('#' + testPage.questions[i].id+i+j).checked) {
          if (testPage.questions[i].rightAnswer == j) {
            userAnswer[i] = true;
            result = true;
            break;
          } else {
            userAnswer[i] = false;
            result = false;
            break;
          }
        } else {userAnswer[i] = false; result = false;}
      };
      }

    var indx = testPage.questions.map(function(el, i) {
      var el = testPage.questions
      return i + el.rightAnswer * 3
    });
    $('input').each(function(i) {
      if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked) result = false
    });

    $('input').each(function(i) {
      if ($(this).attr('checked')) {
        if (testPage.questions[i].answers[j] == testPage.questions.rightAnswer) {
          result = true;
        } else { result = false };
      }
    });

    if (result) {
      return false;
    }
    else {
      $('.results').html('<h3>Вы правильно ответили:</h3>');
      for (var i = 0; i < testPage.questions.length; i++) {
        if (userAnswer[i]) {
          $('.results').append('<p><b>' + testPage.questions[i].question + '</b></p><p class="green">' + testPage.questions[i].answers[testPage.questions[i].rightAnswer] + '</b></p>')
          result = false;
        };
      }
      $('input').removeAttr('checked');
    }
    // else {
    //   $('.results').html('<h4>Вы ответили неправильно.<br>Попробуйте еще раз.</h4>');
    //   $('input').removeAttr('checked');
    // };

    showModal();
  };

  function showModal() {
    overlay.css('display', 'block');
    $('input').attr('disabled', true);

    overlay.on('click', hideModal);
    reloadButton.on('click', reloadPage);
  };

  function reloadPage() {
    location.reload();
  };

  $('.btn-info').on('click', checkAnswer);

}
