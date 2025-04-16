let currentDice = 20;

document.addEventListener('DOMContentLoaded', () => {
    const diceContainer = document.querySelector('.dice-result-container');
    diceContainer.style.backgroundColor = 'white';
});

document.getElementById('roll-d20').addEventListener('click', function () {
    currentDice = 20;
    rollDice(currentDice);
});

document.getElementById('roll-d6').addEventListener('click', function () {
    currentDice = 6;
    rollDice(currentDice);
});

document.getElementById('roll-d8').addEventListener('click', function () {
    currentDice = 8;
    rollDice(currentDice);
});

document.getElementById('roll-d12').addEventListener('click', function () {
    currentDice = 12;
    rollDice(currentDice);
});

document.getElementById('roll-d10').addEventListener('click', function () {
    currentDice = 10;
    rollDice(currentDice);
});

document.getElementById('roll-d4').addEventListener('click', function () {
    currentDice = 4;
    rollDice(currentDice);
});

document.getElementById('roll-dice-btn').addEventListener('click', function () {
    rollDice(currentDice);
});

function rollDice(sides) {
    const resultElement = document.getElementById('dice-result');
    const diceContainer = document.querySelector('.dice-result-container');

    let size, clipPath;
    switch (sides) {
        case 20:
            size = 150;
            clipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
            break;
        case 12:
            size = 130;
            clipPath = 'polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)';
            break;
        case 10:
            size = 120;
            clipPath = 'polygon(50% 0%, 85% 20%, 100% 50%, 85% 80%, 50% 100%, 15% 80%, 0% 50%, 15% 20%)';
            break;
        case 8:
            size = 110;
            clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
            break;
        case 6:
            size = 100;
            clipPath = 'none';
            break;
        case 4:
            size = 90;
            clipPath = 'polygon(50% 0%, 100% 100%, 0% 100%)';
            break;
        default:
            size = 100;
            clipPath = 'none';
    }

    diceContainer.style.width = `${size}px`;
    diceContainer.style.height = `${size}px`;
    diceContainer.style.clipPath = clipPath;

    let counter = 0;

    const interval = setInterval(() => {
        const randomValue = Math.floor(Math.random() * sides) + 1;
        resultElement.textContent = randomValue;

        // Add animation class for a bounce effect
        resultElement.classList.add('bounce');
        setTimeout(() => resultElement.classList.remove('bounce'), 200);

        counter++;

        if (counter > 10) {
            clearInterval(interval);
            const finalResult = Math.floor(Math.random() * sides) + 1;
            resultElement.textContent = finalResult;

            const color = getColorBasedOnResult(finalResult, sides);
            diceContainer.style.background = `linear-gradient(135deg, ${color}, #1f6feb)`;
        }
    }, 100);
}

function getColorBasedOnResult(result, sides) {
    const hue = Math.floor((result / sides) * 120);
    return `hsl(${hue}, 70%, 50%)`;
}