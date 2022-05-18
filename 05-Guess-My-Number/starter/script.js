'use strict';
// document.querySelector('.message').textContent = 'Correct Number 🎉';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 24;
// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const setMessageContent = function (text) {
  document.querySelector('.message').textContent = text;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //invalid input
  if (!guess || guess > 20) {
    setMessageContent('Its between 1 an 20 dummy!');
  }
  //correct guess
  else if (secretNumber === guess) {
    setMessageContent('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //wrong guess
  else if (guess !== secretNumber) {
    //high guess
    if (score > 1) {
      setMessageContent(guess > secretNumber ? 'Too High' : 'Too Low');
      score -= 1;

      document.querySelector('.score').textContent = score;
      //low guess
    } else {
      setMessageContent('You Lose!');
    }
  }
  //again clicked
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    setMessageContent('Start guessing...');
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
  });
});
