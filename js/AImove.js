import { scoreGenerator } from "./scoreGenerate.js"
import { isTherePlace } from "./controllers.js"
import makeMove from "../main.js"
import { tiles } from "./data.js"

function minmaxTree(board, length, isMax){
    const score = scoreGenerator(board)
    if (score == 10){
        return 10-length
    }
    else if (score == -10){
        return -10+length
    }
    else{
        if (!isTherePlace(board)){
            return 0
        }
    }
    if (isMax){
        let best = -Infinity;
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (board[i][j] == ' '){
                    board[i][j] = 'x'
                    best = Math.max(best , minmaxTree(board, length+1, !isMax))
                    board[i][j] = ' '
                }

            }
        }
        return best
    }
    else{
        let best = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] == ' '){
                    board[i][j] = 'o'
                    best = Math.min(best , minmaxTree(board,length+1, !isMax))
                    board[i][j] = ' '
                }
                
            }
            
        }
        return best
    }
}

export function bestMove(board,length){
    let firstBest = 1000;
    let bestmove = false;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if (board[i][j] == ' '){
                board[i][j] = 'o';
                let secBest = minmaxTree(board,length+1,true);
                board[i][j] = ' ';
                if (secBest<firstBest){
                    bestmove = [i,j];
                    firstBest = secBest;
                }
            }
        }
    }

    if (bestmove){
        makeMove(tiles[bestmove[0]*3+bestmove[1]])
    }
}