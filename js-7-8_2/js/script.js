'use strict';
$(document).ready(function () {

var $button = $('button');

var $tips = $('.tips');
var $tip1 = $('.tip-1');
var $tip2 = $('.tip-2');
var $tip3 = $('.tip-3');

var $label1 = $('.label-1');
var $label2 = $('.label-2');
var $label3 = $('.label-3');

$button.on('click', function () {
  $tips.css('display', 'block');
});

$label1.hover(function () {
  $tip1.css('display', 'block');},
function () {
  $tip1.css('display', 'none');}
);

$label2.hover(function () {
  $tip2.css('display', 'block');},
function () {
  $tip2.css('display', 'none');}
);

$label3.hover(function () {
  $tip3.css('display', 'block');},
function () {
  $tip3.css('display', 'none');}
);

})
