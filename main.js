const reset = document.querySelector('#reset');
const resultDisplay = document.querySelector('.display');
let turn = 'x';
let depth = 0

import { tiles,xChild,oChild,board } from "./js/data.js";
import { isEnd } from "./js/controllers.js";
import { winTiles } from "./js/scoreGenerate.js";
import { bestMove } from "./js/AImove.js";


tiles.forEach(tile => {
    tile.addEventListener('click',()=>{
        if (makeMove(tile) != false){
            bestMove(board,depth)
        }
    })
})
reset.addEventListener('click',()=>{
    window.location.reload()
})

function makeMove(tile){
    const tilePos = tile.dataset.set.split('-');
    if (board[Number(tilePos[0])][Number(tilePos[1])]==' '){
        depth++;
        board[Number(tilePos[0])][Number(tilePos[1])] = turn;
        tile.innerHTML = turn === 'x' ? xChild : oChild;
        tile.classList.add('full');
        turn = turn === 'x' ? 'o' : 'x';

        const endChecker = isEnd(board)
        if (endChecker.end()){
            tiles.forEach((tile,index) => {
                if (!winTiles.includes(index)){
                    tile.classList.add('endShadow');
                }
            })
            const test = endChecker.score
            switch (test){
                case -10:
                    resultDisplay.innerText = `O is the winner`
                    resultDisplay.classList.add('playerO');
                    break;
                case 10:
                    resultDisplay.innerText = 'X is the winner';
                    resultDisplay.classList.add('playerX');
                    break;
                case 0:
                    resultDisplay.innerText = 'DRAW there is no winner!'
                    resultDisplay.classList.add('draw');
                    break;
            }
        }
    }
    else{
        return false;
    }
}

export default makeMove;