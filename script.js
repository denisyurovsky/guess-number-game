'use strict';

const checkButton = document.querySelector('.check');
const body = document.querySelector('body');
const rightAnswer = document.querySelector('.number');
const againButton = document.querySelector('.again');
const highscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');

againButton.addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';
  scoreValue = 20;
  score.textContent = 20;
  rightAnswer.textContent = '?';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  rightAnswer.style.width = '15rem';
});

let scoreValue = 20;
let highscoreNumber = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const correctNumber = 'Correct Number!';

checkButton.addEventListener('click', () => {
  const guessNumber = guess.value;

  if (scoreValue > 1) {
    if (!guessNumber) {
      displayMessage('Provide a number!');
    }
    if (guessNumber > 20 || guessNumber < 1) {
      displayMessage('Provide a number between 1 to 20');
    }

    if (guessNumber !== secretNumber) {
      guessNumber > secretNumber
        ? displayMessage('Too high!')
        : displayMessage('Too low!');

      decreaseScore();
    }

    if (guessNumber == secretNumber) {
      displayMessage('Correct!');
      body.style.backgroundColor = '#60b347';
      rightAnswer.textContent = secretNumber;
      rightAnswer.style.width = '30rem';

      if (scoreValue > highscoreNumber) {
        highscoreNumber = scoreValue;
        highscore.textContent = scoreValue;
      }
    }
  } else {
    displayMessage('You lost!');
    if (scoreValue >= 1) {
      decreaseScore();
    }
  }
});

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function decreaseScore() {
  scoreValue--;
  document.querySelector('.score').textContent = scoreValue;
}
