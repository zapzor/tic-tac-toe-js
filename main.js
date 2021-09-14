const gameBoard = (() => {

})();

const displayController = (() => {

})()

const Player = () => {

  return {}
}

const board = document.querySelector('.boardContainer')
const cell = document.querySelectorAll('.cell')
const restartButton = document.querySelector('.restartButton')
gameArray = []
let currentTurn = document.createElement('div')

const change = (e) => {
  currentTurn.classList.toggle('turnChange')
  if (currentTurn.classList.contains('turnChange')) {
    e.target.innerText = 'X'
    gameArray.push('X')
  } else {
    e.target.innerText = 'O'
    gameArray.push('O')
  }
}

cell.forEach(cell => {
  cell.addEventListener('click', change, {once: true})
})

const clearBoard = () => {
  cell.forEach (cell => {
    cell.innerText = ''
  })
  gameArray = []
}

restartButton.addEventListener('click', clearBoard)

const declareWinner = () => {
  if (gameArray.length == 9) {
  }
}
