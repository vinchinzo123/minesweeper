
class Cell {
  constructor(cellNumber, boardIndex, hasBeenClicked, isBomb, numOfSurroundingBomb, hasFlag, hasQuestionMark) {
    this.cellNumber = cellNumber
    this.boardIndex = boardIndex
    this.hasBeenClicked = hasBeenClicked || false
    this.isBomb = isBomb || false
    this.numOfSurroundingBomb = numOfSurroundingBomb || 0
    this.hasFlag = hasFlag || false
    this.hasQuestionMark = hasQuestionMark || false
  }

  cellReset() {
    this.hasBeenClicked = false
    this.isBomb = false
    this.numOfSurroundingBomb = 0
    this.hasFlag = 0
  }

  checkForSurroundingBombs(board) {
    let column = this.boardIndex[0]
    let cell = this.boardIndex[1]
    if (board[column][cell + 1]) {
      if (board[column][cell + 1].isBomb) {
        this.numOfSurroundingBomb++
      }
    }
    if (board[column][cell - 1]) {
      if (board[column][cell - 1].isBomb) {
        this.numOfSurroundingBomb++
      }
    }
    if (board[column - 1]) { //checks previous column if undefined
      // if (board[column - 1][cell])// checks inner array if undefinded
      if (board[column - 1][cell].isBomb) {// checks inner array if undefinded
        this.numOfSurroundingBomb++
      }
      if (board[column - 1][cell - 1]) {
        if (board[column - 1][cell - 1].isBomb) {
          this.numOfSurroundingBomb++
        }
      }
      if (board[column - 1][cell + 1]) {
        if (board[column - 1][cell + 1].isBomb) {
          this.numOfSurroundingBomb++
        }
      }
    }
    if (board[column + 1]) { //checks previous column if undefined
      // if (board[column - 1][cell])// checks inner array if undefinded
      if (board[column + 1][cell].isBomb) {// checks inner array if undefinded
        this.numOfSurroundingBomb++
      }
      if (board[column + 1][cell - 1]) {
        if (board[column + 1][cell - 1].isBomb) {
          this.numOfSurroundingBomb++
        }
      }
      if (board[column + 1][cell + 1]) {
        if (board[column + 1][cell + 1].isBomb) {
          this.numOfSurroundingBomb++
        }
      }
    }
  }

  cellFloodFill(board) { //NEED TO ADD right check bottom
    // bottom check left
    // left checks top
    // top check right
    console.log(this.cellNumber)
    let column = this.boardIndex[0]
    let cell = this.boardIndex[1]

    if (board[column][cell + 1]) { //flood fill bottom
      if (!board[column][cell + 1].isBomb && board[column][cell + 1].numOfSurroundingBomb === 0
        && !board[column][cell + 1].hasBeenClicked) {
        board[column][cell + 1].hasBeenClicked = true

        board[column][cell + 1].cellFloodFill(board)
      } else if (!board[column][cell + 1].isBomb && !board[column][cell + 1].hasBeenClicked) {
        board[column][cell + 1].hasBeenClicked = true
      }
    }
    if (board[column][cell - 1]) { // flood fill top
      if (!board[column][cell - 1].isBomb && board[column][cell - 1].numOfSurroundingBomb === 0
        && !board[column][cell - 1].hasBeenClicked) {
        board[column][cell - 1].hasBeenClicked = true

        board[column][cell - 1].cellFloodFill(board)
      } else if (!board[column][cell - 1].isBomb && !board[column][cell - 1].hasBeenClicked) {
        board[column][cell - 1].hasBeenClicked = true
      }
    }

    if (board[column - 1]) { //flood fill left
      if (!board[column - 1][cell].isBomb && board[column - 1][cell].numOfSurroundingBomb === 0
        && !board[column - 1][cell].hasBeenClicked) {
        board[column - 1][cell].hasBeenClicked = true

        board[column - 1][cell].cellFloodFill(board)
      } else if (!board[column - 1][cell].isBomb && !board[column - 1][cell].hasBeenClicked) {
        board[column - 1][cell].hasBeenClicked = true
      }
    }
    if (board[column + 1]) { //flood fill right
      if (!board[column + 1][cell].isBomb && board[column + 1][cell].numOfSurroundingBomb === 0
        && !board[column + 1][cell].hasBeenClicked) {
        board[column + 1][cell].hasBeenClicked = true

        board[column + 1][cell].cellFloodFill(board)
      } else if (!board[column + 1][cell].isBomb && !board[column + 1][cell].hasBeenClicked) {
        board[column + 1][cell].hasBeenClicked = true
      }
    }

    if (board[column + 1]) { // diagnoal bottom right
      if (board[column + 1][cell + 1]) {
        if (!board[column + 1][cell + 1].isBomb && !board[column + 1][cell + 1].hasBeenClicked) {
          board[column + 1][cell + 1].hasBeenClicked = true

          if (board[column + 1][cell + 1].numOfSurroundingBomb === 0) {
            board[column + 1][cell + 1].cellFloodFill(board)
          }
        }
      }
    }

    if (board[column - 1]) {// diagnoal bottom left
      if (board[column - 1][cell + 1]) {
        if (!board[column - 1][cell + 1].isBomb && !board[column - 1][cell + 1].hasBeenClicked) {
          board[column - 1][cell + 1].hasBeenClicked = true

          if (board[column - 1][cell + 1].numOfSurroundingBomb === 0) {
            board[column - 1][cell + 1].cellFloodFill(board)
          }
        }
      }
    }

    if (board[column - 1]) {// diagnoal top left
      if (board[column - 1][cell - 1]) {
        if (!board[column - 1][cell - 1].isBomb && !board[column - 1][cell - 1].hasBeenClicked) {
          board[column - 1][cell - 1].hasBeenClicked = true

          if (board[column - 1][cell - 1].numOfSurroundingBomb === 0) {
            board[column - 1][cell - 1].cellFloodFill(board)
          }
        }
      }
    }

    if (board[column + 1]) {// diagnoal top right
      if (board[column + 1][cell - 1]) {
        if (!board[column + 1][cell - 1].isBomb && !board[column + 1][cell - 1].hasBeenClicked) {
          board[column + 1][cell - 1].hasBeenClicked = true

          if (board[column + 1][cell - 1].numOfSurroundingBomb === 0) {
            board[column + 1][cell - 1].cellFloodFill(board)
          }
        }
      }
    }
  }
}
// create another class a game class

// create an onclick class
const randomNumberGenerator = function () {
  return Math.ceil(Math.random() * 64)
}

const randomHomeForBombs = function (numBombs) {
  let bombCellArr = []
  for (let i = 0; i < numBombs; i++) {
    let newBomb = randomNumberGenerator()
    if (bombCellArr.every(num => num != newBomb)) {
      bombCellArr.push(newBomb)
    } else {
      i--
    }
  }
  return bombCellArr.sort((a, b) => a - b)
}

const createBoardModel = function (bombArray) {
  let boardModel = []
  let counter = 1

  for (let i = 0; i < 8; i++) { //standard size 8
    boardModel[i] = []
    for (let j = 0; j < 8; j++) {
      let modelCell = new Cell(counter, [i, j])
      boardModel[i].push(modelCell)
      for (let k = 0; k < bombArray.length; k++) {
        if (bombArray[k] === counter) {
          modelCell.isBomb = true
        }
      }
      counter++
    }
  }
  return boardModel
}

// how can I put this function in the cell class
const checkForBombs = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j].checkForSurroundingBombs(board)
    }
  }
  return board
}

const createDiv = function (divType, cellNumber) {
  if (divType === "column") {
    let newCol = document.createElement("div")
    newCol.setAttribute("class", "column")
    return newCol
  }
  else if (divType === "cell") {
    let newCell = document.createElement("button")
    newCell.setAttribute("id", "notClicked")
    newCell.setAttribute("class", "cell")
    newCell.setAttribute("data-number", cellNumber)
    return newCell
  }

}

const writeBoardToDOM = function (board) {
  let counter = 1
  let htmlGrid = document.querySelector("#gameGrid")
  for (let i = 0; i < board.length; i++) {
    let column = createDiv("column")
    for (let j = 0; j < board.length; j++) {
      let cell = createDiv("cell", counter)
      if (board[i][j].isBomb) {
        cell.className = "cell bomb"
        cell.innerHTML = 'B' //leave for now until bomb img is add in style.css
      } else if (boardModel[i][j].numOfSurroundingBomb !== 0) {
        cell.innerHTML = boardModel[i][j].numOfSurroundingBomb
      }
      column.appendChild(cell)
      counter++
    }
    htmlGrid.appendChild(column)
  }
  return htmlGrid
}

const updateBoardModel = function (cellProp, cellNum) {
  for (let i = 0; i < boardModel.length; i++) {
    for (let j = 0; j < boardModel.length; j++) {
      if (boardModel[i][j].cellNumber == cellNum) {
        if (boardModel[i][j][cellProp]) {
        }
        boardModel[i][j][cellProp] = true
        return boardModel[i][j]
      }
    }
  }
}

const leftCellCick = function (e) { //breakdown into smaller functions
  if(timer === undefined){
    startTimer()
  } 
  let cellNum = e.target.dataset.number

  if (e.target.className == "cell bomb") {
    loosesGame()
  } else if (e.target.innerHTML !== "") {
    let cell = updateBoardModel("hasBeenClicked", cellNum)
    console.log(cell)
  } else {
    // iterates to find the clicked model cell
    let cell = updateBoardModel("hasBeenClicked", cellNum)
    cell.cellFloodFill(boardModel)
  }
  // iterates to update the DOM
  revealClickedCells()
  checkWinsGame()
}

const rightClick = function (e) { // needs to call the checkCellFlag function
  let cellNum = e.target.dataset.number
  updateBoardModel("hasFlag", cellNum)
  if (e.target.id === "flag") {
    e.target.id = "notClicked"
    flagCounter++
    flagLabel.innerHTML = flagCounter

  } else if (e.target.id === "notClicked") {
    e.target.id = "flag"
    flagCounter--
    flagLabel.innerHTML = flagCounter

  }
}

const assignClickHandlers = function () {
  let cells = document.querySelectorAll(".cell")
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', leftCellCick)
    cells[i].addEventListener('auxclick', rightClick)
    cells[i].oncontextmenu = e => e.preventDefault()
  }
  return cells;
}

const removeCellClickHandlers = function () {
  let cells = document.querySelectorAll(".cell")
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', leftCellCick)
    // cells[i].addEventListener('mousedown', /* need a click function */e => e.target.id = "notClicked heldDown")
    cells[i].removeEventListener('auxclick', rightClick)
    cells[i].oncontextmenu = e => e.preventDefault()
  }
  return cells;
}

const revealClickedCells = function () {
  for (let i = 0; i < boardModel.length; i++) {
    for (let j = 0; j < boardModel[i].length; j++) {
      if (boardModel[i][j].hasBeenClicked) {
        let domCell = document.querySelector(`[data-number="${boardModel[i][j].cellNumber}"]`)
        domCell.id = ""
      }
    }
  }
}

const revealAllBombs = function () {
  for (let i = 0; i < boardModel.length; i++) {
    for (let j = 0; j < boardModel[i].length; j++) {
      if (boardModel[i][j].isBomb) {
        boardModel[i][j].hasBeenClicked = true
      }
    }
  }
  revealClickedCells()
}

const revealUnflaggedBombs = function () {
  for (let i = 0; i < boardModel.length; i++) {
    for (let j = 0; j < boardModel.length; j++) {
      if (!boardModel[i][j].hasFlag && boardModel[i][j].isBomb) {
        boardModel[i][j].hasBeenClicked = true
      }
    }
  }
  revealClickedCells()
}

const loosesGame = function () {
  console.log("loose")
  removeCellClickHandlers()
  revealAllBombs()
  stopTimer()
  //  writes message to the DOM and the text in the button says "reset game"
}


const checkWinsGame = function () {
  for (let i = 0; i < boardModel.length; i++) {
    for (let j = 0; j < boardModel[i].length; j++) {
      if (boardModel[i][j].isBomb) {
      } else if (!boardModel[i][j].hasBeenClicked) {
        return
      }
    }
  }
  console.log(" YOU WIN")
  revealUnflaggedBombs()
  stopTimer()
}

function incrementCurrentTime() {
  currentTime++
  timeLabel.innerHTML = currentTime
}

function startTimer() {
  timer = setInterval(incrementCurrentTime, 1000)
}
function stopTimer() {
  clearInterval(timer)
  
}


let flagLabel = document.querySelector("#bombCounter")
let timeLabel = document.querySelector("#timer")
let resetLabel = document.querySelector("#faceButton")

resetLabel.addEventListener("click", resetGame)

let bombArr = randomHomeForBombs(9) //standard size is 9
let flagCounter = bombArr.length
let boardModel = createBoardModel(bombArr)
boardModel = checkForBombs(boardModel)
writeBoardToDOM(boardModel)
assignClickHandlers()
flagLabel.innerHTML = flagCounter
let currentTime = 0
let timer



function resetGame (){
  removeCellClickHandlers()
  stopTimer()
  bombArr = randomHomeForBombs(9)
  flagCounter = bombArr.length
  flagLabel.innerHTML = flagCounter
  boardModel = createBoardModel(bombArr)
  boardModel = checkForBombs(boardModel)
  let htmlGrid = document.querySelector("#gameGrid")
  htmlGrid.innerHTML = ""
  timeLabel.innerHTML = ""
  writeBoardToDOM(boardModel)
  assignClickHandlers()
  currentTime = 0
  timer = undefined
  
}


