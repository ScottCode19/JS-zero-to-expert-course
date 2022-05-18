'use strict';
//grabbing the elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// starting conditions

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

init();

// dice roll functionality

rollBtn.addEventListener('click', function () {
  if (playing) {
    //generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //show the dice as per the random number
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check if its a 1
    // if it isnt a 1...
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    //if it is...
    else {
      switchPlayer();
    }
  }
});
//hold button functionality
holdBtn.addEventListener('click', function () {
  if (playing) {
    // add current score to the active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if its 100 or more
    if (scores[activePlayer] >= 10) {
      //end the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //if so finish the game
      switchPlayer();
    }
    //else switch to next player
  }
});
//reset button functionality
newBtn.addEventListener('click', init);
