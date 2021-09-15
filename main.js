// Handles game logic
const gameBoard = (() => {

  // DOM handling and array for determining game length
  const cell = document.querySelectorAll('.cell')
  const declareWinner = document.querySelector('.declareWinner')
  const declareWinnerText = document.querySelector('.declareWinnerText')
  const currentTurn = document.createElement('div')
  let gameArray = []

  // Selectors for individual board cells
  const div1 = document.querySelector('.div1')
  const div2 = document.querySelector('.div2')
  const div3 = document.querySelector('.div3')
  const div4 = document.querySelector('.div4')
  const div5 = document.querySelector('.div5')
  const div6 = document.querySelector('.div6')
  const div7 = document.querySelector('.div7')
  const div8 = document.querySelector('.div8')
  const div9 = document.querySelector('.div9')

  // Messages to be displayed on game end
  const xWinner = () => {
    declareWinnerText.textContent = 'X WINS'
  }

  const oWinner = () => {
    declareWinnerText.textContent = 'O WINS'
  }

  const draw = () => {
    declareWinnerText.textContent = 'Draw'
  }

  //Checks for win, loss or draw according to cells text content
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
  return {
    declareWinner,
    gameArray,
    cell,
    currentTurn,
    checkArray
  }

})();

// Handles visuals
const displayController = (() => {

  const restartButton = document.querySelector('.restartButton')

  //Handles marker changing on mouseclick
  const changeMarker = (e) => {
    gameBoard.currentTurn.classList.toggle('turnChange')
    if (gameBoard.currentTurn.classList.contains('turnChange')) {
      e.target.textContent = 'X'
      gameBoard.gameArray.push('X')
    } else {
      e.target.innerText = 'O'
      gameBoard.gameArray.push('O')
    }
  }

  const handleClick = () => {
    gameBoard.cell.forEach(cell => {
      cell.addEventListener('click', changeMarker, {once: true}),
      cell.addEventListener('click', gameBoard.checkArray)
    })
  }
  handleClick()

  // Clears board and array on clicking button
  const clearBoard = () => {
    handleClick()
    gameBoard.currentTurn.classList.remove('turnChange')
    gameBoard.declareWinner.classList.remove('active')
    gameBoard.gameArray = []

    gameBoard.cell.forEach (cell => {
      cell.textContent = ''
    })
  }
  restartButton.addEventListener('click', clearBoard)
})()
