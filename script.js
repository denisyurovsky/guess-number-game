'use strict';

const message = document.querySelector('.message');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let scoreValue = 20;

console.log(document.querySelector('.score'));

const correctNumber = 'Correct Number!';

const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (scoreValue > 1) {
    if (!guess) {
      message.textContent = 'Provide a number!';
    }
    if (guess > 20 || guess < 1) {
      message.textContent = 'Provide a number between 1 to 20';
    }

    if (guess > secretNumber) {
      message.textContent = 'Too high!';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    }

    if (guess < secretNumber) {
      message.textContent = 'Too low!';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    }

    if (guess == secretNumber) {
      message.textContent = 'Correct!';
    }
  } else {
    message.textContent = 'You lost!';
  }
});
