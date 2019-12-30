'use strict';
const MIN_POCKET = 0;
const MAX_ATTEMPTS = 3;
const MAX_POCKET_DEFAULT = 8;
const PRIZE_DEFAULT = 100;
const EARNED_PRIZE_DEFAULT = 0;
const PRIZE_FACTOR = 0.5;
const MAX_POCKET_INCREASE = 4;
const PRIZE_INCREASE_FACTOR = 2;
let maxPocket = MAX_POCKET_DEFAULT;
let prize = PRIZE_DEFAULT;
let earnedPrize = EARNED_PRIZE_DEFAULT;
let possPrize;
let gameFinished = false;
do {
    if (confirm('Do you want to play a game?')) {
        let randomNumber = Math.floor(Math.random() * (maxPocket + 1));
        for (let attempts = 0; attempts < MAX_ATTEMPTS; attempts++) {
            switch(attempts) {
                case 0:
                    possPrize = prize;
                    break;
                case 1:
                    possPrize = prize * PRIZE_FACTOR;
                    break;
                default:
                    possPrize = prize * PRIZE_FACTOR * PRIZE_FACTOR;
                    break;
            }
            let userChoice = parseInt(prompt(`Choose a roulette pocket number from ${MIN_POCKET} to ${maxPocket}
Attempts left: ${MAX_ATTEMPTS-attempts}
Total prize: ${earnedPrize}$ 
Possible prize on current attempt: ${possPrize}$`, ''));
            if (isNaN(userChoice)) {
                alert('Invalid choice');
            } else if (userChoice === randomNumber) {
                earnedPrize += possPrize;
                if (confirm(`Congratulation, you won!   Your prize is: ${earnedPrize}$. Do you want to continue?`)) {
                    maxPocket+=MAX_POCKET_INCREASE;
                    prize*=PRIZE_INCREASE_FACTOR;
                    break;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${earnedPrize}$`);
                    if (!confirm('Do you want to play again?')) {
                        maxPocket = MAX_POCKET_DEFAULT;
                        prize = PRIZE_DEFAULT;
                        earnedPrize = EARNED_PRIZE_DEFAULT;
                        break;
                    } else {
                        gameFinished = true;
                        break;
                    }
                }
            } else {
                continue;
            }
        }
    } else {
        alert('You did not become a billionaire, but can.');
        gameFinished = true;
    }
} while (!gameFinished);