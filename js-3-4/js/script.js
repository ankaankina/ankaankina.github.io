var page = {
  body: function () {
    body = document.body;
    body.style.width = '100%';
    body.style.backgroundColor = '#c8c8c8';
},

  addContainer: function (containerClass) {
    container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('row');
    container.style.width = '800px';
    container.style.margin = '50px auto';
    container.style.backgroundColor = '#fff';
    document.body.appendChild(container);
  },

  addHeader: function (headerTag, headerText, headerClass) {
    var header = document.createElement('h3');
    header.classList.add('text-center');
    header.innerHTML = 'Тест по программированию';
    container.appendChild(header);
  },

  addQuestionsBlock: function (listQuestions, listAnswers) {
    var questForm = document.createElement('form');
    questForm.style.width = '100%';
    container.appendChild(questForm);

    var questionsUl = document.createElement('ul');
    questForm.appendChild(questionsUl);

    for (var i = 1; i <= 3; i++) {
      var questionsText = document.createElement('ol');
      questionsText.style.marginTop = '10px';
      questionsUl.appendChild(questionsText);

      var questionsTextP = document.createElement('p');
      questionsTextP.classList.add('lead');
      questionsTextP.innerHTML = i +'. Вопрос №' + i;
      questionsText.appendChild(questionsTextP);

      var listAnswersUl = document.createElement('ul');
      questionsText.appendChild(listAnswersUl);

      for (var k = 1; k <= 3; k++) {
        var listAnswersLi = document.createElement('li');
        listAnswersLi.style.listStyle = 'none';
        listAnswersLi.style.marginLeft = '25px';
        questionsText.appendChild(listAnswersLi);

        var answer = document.createElement('label');
        answer.innerHTML = 'Вариант ответа №' + k;
        answer.style.cursor = 'pointer';
        answer.style.fontWeight = 'normal';
        listAnswersLi.appendChild(answer);

        var answerInput = document.createElement('input');
        answerInput.setAttribute('type', 'checkbox');
        answerInput.classList.add('checkbox');
        answerInput.style.float = "left";
        answerInput.style.marginRight = '5px';
        answer.appendChild(answerInput);
      };
    };

    var submit = document.createElement('button');
    submit.setAttribute('type', 'submit');
    submit.classList.add('btn');
    submit.classList.add('btn-info');
    submit.innerHTML = 'Проверить мои результаты';
    submit.style.margin = '25px 35%';
    questForm.appendChild(submit);
  },
};

page.body();
page.addContainer();
page.addHeader();
page.addQuestionsBlock();
