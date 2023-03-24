'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const getNewRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = getNewRandomNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      displayMessage('😥 You lost the game!');
    }
    document.querySelector('.score').textContent = --score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getNewRandomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
});
