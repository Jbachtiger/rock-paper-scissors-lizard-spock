// global variables
const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h2')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
let userChoice
let computerChoice


// click event for each of the choices buttons
const handleClick = (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = 'You chose: ' + userChoice
    generateComputerChoice()
}

// generates a random choice for computer
const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)] // uses choices array index to determin what to return
    computerChoice = randomChoice
    computerChoiceDisplay.innerHTML = 'Computer chose: ' + computerChoice
}

// loops through choices and create a button element for each, with a corresponding id and html text
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices [i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)
}