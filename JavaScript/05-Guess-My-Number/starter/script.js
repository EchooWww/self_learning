'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 5;
let highscore = 0;
// refactor the display message code so that it will look cleaner
const displayMsg = message => {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no valid input
  if (!guess) {
    displayMsg('⛔ No valid number!');
    // when the player wins
  } else if (guess === secretNumber) {
    displayMsg('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highscore = Math.max(score, highscore);
    // when the guess is to high
  } else {
    displayMsg(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
    score--;
  }
  // when the player lose
  if (score <= 0) displayMsg('💥 You lost!');

  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  displayMsg('Start guessing...');
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
});
