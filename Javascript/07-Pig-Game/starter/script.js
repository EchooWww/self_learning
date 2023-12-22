'use strict';

const score0container = document.querySelector('#score--0');
const score1container = document.getElementById('score--1');
const curr0 = document.getElementById('current--0');
const curr1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
const dicebtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');

const section0 = document.querySelector('.player--0');
const section1 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

function init() {
  score0container.textContent = '0';
  score1container.textContent = '0';

  curr0.textContent = 0;
  curr1.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  section0.classList.remove('player--winner');
  section1.classList.remove('player--winner');
  section0.classList.add('player--active');
  section1.classList.remove('player--active');
}

init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  section0.classList.toggle('player--active');
  section1.classList.toggle('player--active');
}

dicebtn.addEventListener('click', () => {
  if (playing) {
    diceEl.classList.remove('hidden');
    let number = Math.ceil(Math.random() * 6);
    diceEl.src = `dice-${number}.png`;

    if (number !== 1) {
      // add the dice to the current score
      currentScore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to the other player
      switchPlayer();
    }
  }
});

holdbtn.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }

    switchPlayer();
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  init();
});
