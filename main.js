const gameBoard = (() => {

})();

const displayController = (() => {

})()

const Player = () => {

  return {}
}

const cell = document.querySelectorAll('.cell')

const xTurn = 'X'
const oTurn = 'O'

const changeCell = (e) => {
  foo = e
  cell.forEach((e) => {
    e.classList.toggle('turnChange')
    if  (e.classList.contains('turnChange')) {
      foo.target.innerText = 'X'
    } else
    foo.target.innerText = 'O'
  })

}

cell.forEach(cell => {
  cell.addEventListener('click', changeCell, {once: true})
})
