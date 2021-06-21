'use strict';
let userName = prompt('what\'s your name?');
console.log(userName);
alert('Hi '+userName+' welcome to my webisit ');
let q1 = prompt('do you want to play a simple guessing game about me?(y/n)').toLowerCase();
switch (q1) {
case'y':
//   console.log('nice let\'s get started!');
  alert('nice let\'s get started!');
  break;
case'n':
//   console.log('it\'s ok nice to meet you!');
  alert('it\'s ok nice to meet you');
  break;
default:
  alert('please answer with y or n');
  break;
}
let nation = prompt('am i jordanian?(y/n)').toLowerCase();
switch (nation) {
case'y':
//   console.log('it would be my pleasure.but no im syrian');
  alert('it would be my pleasure.but no im syrian');
  break;
case'n':
//   console.log('excellent.im syrian');
  alert('excellent.im syrian');
  break;
default:
  alert('please answer with y or n');
  break;
}
let study = prompt('Have i finished my bachelor degree?(y/n)').toLowerCase();
switch (study) {
case'y':
//   console.log('that\'s right! keep going');
  alert('that\'s right! keep going');
  break;
case'n':
//   console.log('wrong answer!i have finshed my study actualy');
  alert('wrong answer!i have finshed my study actualy');
  break;
default:
  alert('please answer with y or n');
  break;
}
let pet = prompt('Do i like pets?(y/n)').toLowerCase();
switch (pet) {
case'y':
//   console.log('that\'s right!');
  alert('that\'s right!');
  break;
case'n':
//   console.log('nope sorry.i love pets');
  alert('nope sorry.i love pets');
  break;
default:
  alert('please answer with y or n');
  break;
}
let food = prompt('do i like fast food?(y/n)').toLowerCase();
switch (food) {
case'y':
//   console.log('that\'s right especially burgerrz');
  alert('that\'s right especially burgerrz');
  break;
case'n':
//   console.log('it\'s ok nice to meet you');
  alert('it\'s ok nice to meet you');
  break;
default:
  alert('please answer with y or n');
  break;
}
alert('that\'s all nice to meet you '+ userName +' have a lovely day');

