function playGame(choice, player) {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoiceElement = document.getElementById(`player${player}Choice`);
    const resultElement = document.getElementById('result');
    
    const playerChoice = choices[Math.floor(Math.random() * choices.length)];
    playerChoiceElement.textContent = playerChoice;

    const result = determineWinner(choice, playerChoice);
    resultElement.textContent = result;
}

function determineWinner(choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    } else if (
        (choice1 === 'rock' && choice2 === 'scissors') ||
        (choice1 === 'scissors' && choice2 === 'paper') ||
        (choice1 === 'paper' && choice2 === 'rock')
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}
