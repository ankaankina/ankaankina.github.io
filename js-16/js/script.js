'use strict';

function Human() {
  this.name = 'Hooman';
  this.age = '28 years';
  this.sex = 'male';
  this.height = '180 cm';
  this.weight = '80 kg';
}
var human = new Human();
console.log('human:', human);

function Worker() {
  this.job = 'The National Bank';
  this.salary = '3500 USD';
};
Worker.prototype.works = (function () {
  console.log('Hooman as a worker:');
})();
var worker = new Worker();
worker.__proto__ = human;
console.log(worker);

function Student() {
  this.study = 'Cambridge';
  this.scholarship = '800 USD';
}
Student.prototype.studies = (function () {
  console.log('Hooman as a student:');
})();
var student = new Student();
student.__proto__ = human;
console.log(student);
