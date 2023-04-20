const gameBoard = document.querySelector('#gameboard')
const startCells = ["", "", "", "", "", "", "", "", "",]
let turn = 'circle'
const infoDisplay= document.querySelector('#info')
infoDisplay.innerHTML = "Circle goes First!"
infoDisplay.style.fontsize ="x-large"


function createBoard(){
    //foreach can accept 3 parameters, currentItem, index, and an array
    //currentItem parameter is the only one that is required.
    //index is optional, it represents the index number
    //array parameter is also optional
    //you can rename currentItem, index and array parameters toa nything you prefer
    startCells.forEach((cell, index)=>{
        const cellElem = document.createElement('div')
        cellElem.classList.add('square')
        cellElem.id = index
        cellElem.addEventListener('click', takeTurn)
        gameBoard.append(cellElem)

    })
}
createBoard()

function takeTurn(event){
    const currentTurn = document.createElement('div')
    currentTurn.classList.add(turn)
    event.target.append(currentTurn)
    if(turn === 'circle'){
        turn = 'x'
    }
    else{
        turn = 'circle'
    }
    infoDisplay.textContent = "It Is now " + turn + "'s turn"
    event.target.removeEventListener("click", takeTurn)
    checkScore()
}
const allSquares = document.querySelectorAll('.square')
console.log(allSquares)
function checkScore(){

    console.log("hello")
    const winners = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    winners.forEach(array => {
        let circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
        if(circleWins){
            infoDisplay.textContent = "Circle Wins"

            return
        }
    })
    winners.forEach(array =>{
        let xWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('x'))
        if(xWins){
            infoDisplay.innerHTML = "X's Win"
            return
        }
    })
}


