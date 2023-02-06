'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const curent0El = document.getElementById('current--0');
const curent1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
let scores, activePlayer, playing, curentScore;
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  curentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
const init = function () {
  playing = true;
  activePlayer = 0;
  scores = [0, 0];
  curentScore = 0;

  curent0El.textContent = 0;
  curent1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--winner');
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// const reset = function () {
//   diceEl.classList.add('hidden');
//   scores = [0, 0];
//   if (playing) {
//     //   const curent0El = document.getElementById('curent--0');
//     let dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     if (dice !== 1) {
//       curentScore = curentScore + dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         curentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// };

btnRoll.addEventListener('click', function () {
  if (playing) {
    //   const curent0El = document.getElementById('curent--0');
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      curentScore = curentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        curentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += curentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
