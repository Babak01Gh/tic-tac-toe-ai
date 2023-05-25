import { scoreGenerator } from "./scoreGenerate.js"

function isTherePlace(board){
    for (let i = 0 ; i<3 ; i++){
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === ' '){
                return true
            }
        }
    }
    return false
}

function isEnd(board){
    const status = {
        score: scoreGenerator(board),
        end : function() {
            return !isTherePlace(board) || Boolean(this.score)
        }
    }
    return status
}

export {isTherePlace,isEnd}