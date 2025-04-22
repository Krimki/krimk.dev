document.addEventListener('DOMContentLoaded', () => {
    const suits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    const dealerCards = document.getElementById('dealer-cards');
    const playerCards = document.getElementById('player-cards');
    const dealerScoreDisplay = document.getElementById('dealer-score');
    const playerScoreDisplay = document.getElementById('player-score');
    const resultDisplay = document.getElementById('result');
    const hitButton = document.getElementById('hit');
    const standButton = document.getElementById('stand');
    const restartButton = document.getElementById('restart');

    let deck = [];
    let playerHand = [];
    let dealerHand = [];

    function createDeck() {
        deck = [];
        suits.forEach(suit => {
            values.forEach(value => {
                deck.push({ suit, value });
            });
        });
        deck = deck.sort(() => Math.random() - 0.5);
    }

    function drawCard() {
        return deck.pop();
    }

    function calculateHandValue(hand) {
        let value = 0;
        let aces = 0;
        hand.forEach(card => {
            if (card.value === 1) {
                aces += 1;
                value += 11;
            } else if (card.value >= 11) {
                value += 10;
            } else {
                value += card.value;
            }
        });
        while (value > 21 && aces > 0) {
            value -= 10;
            aces -= 1;
        }
        return value;
    }

    function renderCards(container, hand) {
        container.innerHTML = ''; // Clear the container to remove old cards
        hand.forEach((card, index) => {
            const cardElement = document.createElement('img');
            cardElement.src = `sprites/${card.suit} ${card.value}.png`;
            cardElement.className = 'card';
            cardElement.style.animation = `slideIn 0.5s ease ${index * 0.2}s forwards`;
            cardElement.style.opacity = '0';
            container.appendChild(cardElement);
        });
    }

    function updateScores() {
        const playerValue = calculateHandValue(playerHand);
        const dealerValue = calculateHandValue(dealerHand);
        playerScoreDisplay.textContent = `Score: ${playerValue}`;
        dealerScoreDisplay.textContent = `Score: ${dealerValue}`;
    }

    function checkWinner() {
        const playerValue = calculateHandValue(playerHand);
        const dealerValue = calculateHandValue(dealerHand);

        if (playerValue > 21) {
            return 'You busted! Dealer wins.';
        } else if (dealerValue > 21) {
            return 'Dealer busted! You win!';
        } else if (playerValue === dealerValue) {
            return 'It\'s a tie!';
        } else if (playerValue > dealerValue) {
            return 'You win!';
        } else {
            return 'Dealer wins.';
        }
    }

    async function dealerTurn() {
        while (calculateHandValue(dealerHand) < 17) {
            dealerHand.push(drawCard());
            renderCards(dealerCards, dealerHand);
            updateScores();
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before drawing the next card
        }
        resultDisplay.textContent = checkWinner();
    }

    function startGame() {
        createDeck();
        playerHand = [drawCard(), drawCard()];
        dealerHand = [drawCard(), drawCard()];

        renderCards(playerCards, playerHand);
        renderCards(dealerCards, dealerHand);
        updateScores();

        resultDisplay.textContent = '';
    }

    hitButton.addEventListener('click', () => {
        playerHand.push(drawCard());
        renderCards(playerCards, playerHand);
        updateScores();

        if (calculateHandValue(playerHand) > 21) {
            resultDisplay.textContent = 'You busted! Dealer wins.';
            hitButton.disabled = true;
            standButton.disabled = true;
        }
    });

    standButton.addEventListener('click', () => {
        hitButton.disabled = true;
        standButton.disabled = true;
        dealerTurn();
    });

    restartButton.addEventListener('click', () => {
        hitButton.disabled = false;
        standButton.disabled = false;
        startGame();
    });

    startGame();

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .card {
            opacity: 0;
            transform: translateX(-50px);
        }

        @keyframes slideIn {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);
});