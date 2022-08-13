// global variables
const userChoiceDisplay = document.createElement('h2')
const computerChoiceDisplay = document.createElement('h2')
const resultDisplay = document.createElement('h2')
const gameGrid = document.getElementById('game')
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay)

// hand choices
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

// click event for each of the choices buttons
const handleClick = () => {
    console.log('clicked')
}

// loops through choices and create a button element for each, with a corresponding id and html text
for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button')
    button.id = choices [i]
    button.innerHTML = choices[i]
    button.addEventListener('click', handleClick)
    gameGrid.appendChild(button)

}