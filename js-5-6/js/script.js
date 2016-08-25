var watch = document.querySelector('.main-block');

var hours = document.querySelector('.numbers--hours');
var minutes = document.querySelector('.numbers--mins');
var seconds = document.querySelector('.numbers--sec');
var milliseconds = document.querySelector('.numbers--millisec');
var h = 0;
var m = 0;
var s = 0;
var ms = 0;
var right = true;
var count;
var init = 0;

var startButton = document.querySelector('.btn-start');
var pauseButton = document.querySelector('.btn-pause');
var continueButton = document.querySelector('.btn-continue');
var clearButton = document.querySelector('.btn-danger');

function timer() {
  ms++;
  if (ms == 1000) {
    ms = 0;
    s++
  };
  if (s == 60) {
    s = '00';
    m++;
  };
  if (m == 60) {
    m = '00';
    h++;
  };
  if (h == 24) {
    h = '00';
  };

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  milliseconds.innerHTML = ms;

  if (hours.innerHTML == 0) hours.innerHTML = '0' + hours.innerHTML;
  if (hours.innerHTML < 10 && hours.innerHTML.charAt(0) !=0) {
    hours.innerHTML = '0' + hours.innerHTML;
  };

  if (minutes.innerHTML == 0) minutes.innerHTML = '0' + minutes.innerHTML;
  if (minutes.innerHTML < 10 && minutes.innerHTML.charAt(0) !=0) {
    minutes.innerHTML = '0' + minutes.innerHTML;
  };

  if (seconds.innerHTML == 0) seconds.innerHTML = '0' + seconds.innerHTML;
  if (seconds.innerHTML < 10 && seconds.innerHTML.charAt(0) !=0) {
    seconds.innerHTML = '0' + seconds.innerHTML;
  };

  if (milliseconds.innerHTML < 10 && milliseconds.innerHTML.charAt(0) !=0) {
    milliseconds.innerHTML = '0' + milliseconds.innerHTML;
  };
};

var update = function() {
  if (right) {
    count = setInterval(timer, 1);
    startButton.style.display = 'none';
    pauseButton.style.display = 'block';
  };
  right = false;
};

var pause = function () {
  clearInterval(count);
  console.log(count);
  continueButton.style.display = 'block';
  pauseButton.style.display = 'none';
  startButton.style.display = 'none';
  return milliseconds;
};

var continuing = function () {
  count = setInterval(timer, 1);
  console.log('new');
  startButton.style.display = 'none';
  pauseButton.style.display = 'block';
  continueButton.style.display = 'none';
}

var clear = function () {
  if (right == false) {
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    continueButton.style.display = 'none';
    pauseButton.style.display = 'none';
    startButton.style.display = 'block';
    clearInterval(count);
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '0';
  } right = true;
}

startButton.addEventListener('click', update);
pauseButton.addEventListener('click', pause);
continueButton.addEventListener('click', continuing);
clearButton.addEventListener('click', clear);
