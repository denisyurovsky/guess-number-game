'use strict';

const message = document.querySelector('.message');

const correctNumber = 'Correct Number!';

const checkButton = document.querySelector('.check');

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = 'Provide a number!';
  }
});
