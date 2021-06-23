'use strict';
let score= 0;
let userName = prompt('what\'s your name?');
console.log(userName);
alert('Hi ' + userName + ' welcome to my webisite ');
function reask() {
  let q1 = prompt('do you want to play a simple guessing game about me?(y/n)').toLowerCase();
  switch (q1) {
  case 'y':
    //   console.log('nice let\'s get started!');
    alert('nice let\'s get started!');
    break;
  case 'n':
    //   console.log('it\'s ok nice to meet you!');
    alert('it\'s ok nice to meet you');
    break;
  default:
    alert('please answer with y or n');
    reask();
    break;
  }
}
reask();

function reask1() {

  let nation = prompt('am i jordanian?(y/n)').toLowerCase();
  switch (nation) {
  case 'y':
    //   console.log('it would be my pleasure.but no im syrian');
    alert('it would be my pleasure.but no im syrian');
    break;
  case 'n':
    //   console.log('excellent.im syrian');
    alert('excellent.im syrian');
    score++;
    break;
  default:
    alert('please answer with y or n');
    reask1();
    break;
  }
}
reask1();

function reask2() {
  let study = prompt('Have i finished my bachelor degree?(y/n)').toLowerCase();
  switch (study) {
  case 'y':
    //   console.log('that\'s right! keep going');
    alert('that\'s right! keep going');
    score++;
    break;
  case 'n':
    //   console.log('wrong answer!i have finshed my study actualy');
    alert('wrong answer!i have finshed my study actualy');
    break;
  default:
    alert('please answer with y or n');
    reask2();
    break;
  }
}
reask2();

function reask3() {
  let pet = prompt('Do i like pets?(y/n)').toLowerCase();
  switch (pet) {
  case 'y':
    //   console.log('that\'s right!');
    alert('that\'s right!');
    score++;
    break;
  case 'n':
    //   console.log('nope sorry.i love pets');
    alert('nope sorry.i love pets');
    break;
  default:
    alert('please answer with y or n');
    reask3();
    break;
  }
}
reask3();
function reask4() {
  let food = prompt('do i like fast food?(y/n)').toLowerCase();
  switch (food) {
  case 'y':
    //   console.log('that\'s right especially burgerrz');
    alert('that\'s right especially burgerrz');
    score++;
    break;
  case 'n':
    //   console.log('it\'s ok nice to meet you');
    alert('it\'s ok nice to meet you');
    break;
  default:
    alert('please answer with y or n');
    reask4();
    break;
  }
}
reask4();
// alert('that\'s all nice to meet you '+ userName +' have a lovely day');



let answer = 8;
function reask5() {
  for (let i = 1; i <= 4; i++) {
    let guess = Number(prompt('guess a number from 1 to 10'));
    if (guess > answer) {
      alert('your number is high try again');
    } else if (guess < answer) {
      alert('your guess is low try again');
    } else {
      alert('right answer');
      score++;
      break;
    }
  }
  alert('the correct answer is 8');
}
reask5();


function reask6() {
  let cars = ['kia', 'audi', 'bmw', 'fiat'];
  for (let attempt = 1; attempt <= 6; attempt++) {
    let answer2 = prompt('can you guess one my fav car types?').toLocaleLowerCase();
    for (let i = 0; i < cars.length; i++) {
      if (answer2 == cars[i]) {
        alert('thats right');
        score++;
        attempt = 9;
        break;
      }
    }
  }
}
reask6();
alert('your final score is '+score+' out of 6 thank you for playing');
