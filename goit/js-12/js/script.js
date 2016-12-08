$(function() {

  var html = $('#page').html();
  var profile = [
    {
      title: 'Денисова Анна Андреевна',
      position: 'Вечный студент',
      myGoals: 'Хочу учить фронтенд, потому что...',
      goal1: 'Кушать хочется',
      goal2: 'А денег нет...',
      goal3: 'Хочу работать в свободное время',
      contact: 'Мой контактный номер телефона:',
      tel: '+380 99 *** ** **',
      social: 'Мой профиль Вконтакте:',
      link: 'vk.com',
      feedback: 'Мой фидбек:',
      answer: 'Всем спасибо, все свободны.'
    }];


  var content = tmpl(html, {
    data: profile
  });

  $('body').append(content);

})
