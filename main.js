const gameBoard = (() => {

})();

const displayController = (() => {

})()

const Player = () => {

  return {}
}


const cell = document.querySelectorAll('.cell')
const restartButton = document.querySelector('.restartButton')
const declareWinner = document.querySelector('.declareWinner')
const declareWinnerText = document.querySelector('.declareWinnerText')
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')
const div4 = document.querySelector('.div4')
const div5 = document.querySelector('.div5')
const div6 = document.querySelector('.div6')
const div7 = document.querySelector('.div7')
const div8 = document.querySelector('.div8')
const div9 = document.querySelector('.div9')


let gameArray = []
let currentTurn = document.createElement('div')

const changeMarker = (e) => {
  currentTurn.classList.toggle('turnChange')
  if (currentTurn.classList.contains('turnChange')) {
    e.target.textContent = 'X'
    gameArray.push('X')
  } else {
    e.target.innerText = 'O'
    gameArray.push('O')
  }
}

const xWinner = () => {
  declareWinnerText.textContent = 'X WINS'
}

const oWinner = () => {
  declareWinnerText.textContent = 'O WINS'
}

const draw = () => {
  declareWinnerText.textContent = 'Draw'
}

const checkArray = () => {
  if (gameArray.length === 9) {
    declareWinner.classList.add('active')
    draw()
  }
  else if (div1.textContent === 'X' && div2.textContent === 'X' && div3.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div4.textContent === 'X' && div5.textContent === 'X' && div6.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div7.textContent === 'X' && div8.textContent === 'X' && div9.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div1.textContent === 'X' && div5.textContent === 'X' && div9.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div3.textContent === 'X' && div5.textContent === 'X' && div7.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div1.textContent === 'X' && div4.textContent === 'X' && div7.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div2.textContent === 'X' && div5.textContent === 'X' && div8.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div3.textContent === 'X' && div6.textContent === 'X' && div9.textContent === 'X') {
    declareWinner.classList.toggle('active')
    xWinner()
  }
  else if (div1.textContent === 'O' && div2.textContent === 'O' && div3.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div4.textContent === 'O' && div5.textContent === 'O' && div6.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div7.textContent === 'O' && div8.textContent === 'O' && div9.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div1.textContent === 'O' && div5.textContent === 'O' && div9.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div3.textContent === 'O' && div5.textContent === 'O' && div7.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div1.textContent === 'O' && div4.textContent === 'O' && div7.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div2.textContent === 'O' && div5.textContent === 'O' && div8.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
  else if (div3.textContent === 'O' && div6.textContent === 'O' && div9.textContent === 'O') {
    declareWinner.classList.toggle('active')
    oWinner()
  }
}

const handleClick = () => {
  cell.forEach(cell => {
    cell.addEventListener('click', changeMarker, {once: true}),
    cell.addEventListener('click', checkArray)
  })
}
handleClick()

const clearBoard = () => {
  handleClick()
  currentTurn.classList.remove('turnChange')
  declareWinner.classList.remove('active')
  gameArray = []

  cell.forEach (cell => {
    cell.textContent = ''
  })
}
restartButton.addEventListener('click', clearBoard)
