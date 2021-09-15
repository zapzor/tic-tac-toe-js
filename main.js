// Handles game logic
const gameBoard = (() => {
  // DOM handling and array for determining game length
  const boardCells = document.querySelectorAll('.cell');
  const declareWinner = document.querySelector('.declareWinner');
  const declareWinnerText = document.querySelector('.declareWinnerText');
  const currentTurn = document.createElement('div');
  let gameArray = [];

  // Selectors for individual board cells

  // Messages to be displayed on game end
  const xWinner = () => {
    declareWinnerText.textContent = 'X WINS';
  };

  const oWinner = () => {
    declareWinnerText.textContent = 'O WINS';
  };

  const draw = () => {
    declareWinnerText.textContent = 'Draw';
  };

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const checkWinner = (text) => {
    return winConditions.some((combos) => {
      return combos.every((index) => {
        return boardCells[index].textContent.includes(text);
      });
    });
  };

  //Checks for win, loss or draw according to cells text content
  const announceWinner = () => {
    if (gameArray.length === 9) {
      declareWinner.classList.add('active');
      draw();
    } else if (checkWinner('X')) {
      declareWinner.classList.add('active');
      xWinner();
    } else if (checkWinner('O')) {
      declareWinner.classList.add('active');
      oWinner();
    }
  };
  return {
    declareWinner,
    gameArray,
    boardCells,
    currentTurn,
    announceWinner,
  };
})();

// Handles visuals
const displayController = (() => {
  const restartButton = document.querySelector('.restartButton');

  //Handles marker changing on mouseclick
  const changeMarker = (e) => {
    gameBoard.currentTurn.classList.toggle('turnChange');
    if (gameBoard.currentTurn.classList.contains('turnChange')) {
      e.target.textContent = 'X';
      gameBoard.gameArray.push('X');
      gameBoard.announceWinner();
    } else {
      e.target.innerText = 'O';
      gameBoard.gameArray.push('O');
      gameBoard.announceWinner();
    }
  };

  const handleClick = () => {
    gameBoard.boardCells.forEach((cell) => {
      cell.addEventListener('click', changeMarker, { once: true });
    });
  };
  handleClick();

  // Clears board and array on clicking button
  const clearBoard = () => {
    handleClick();
    gameBoard.currentTurn.classList.remove('turnChange');
    gameBoard.declareWinner.classList.remove('active');
    gameBoard.gameArray = [];

    gameBoard.boardCells.forEach((cell) => {
      cell.textContent = '';
    });
  };
  restartButton.addEventListener('click', clearBoard);
  return {};
})();
