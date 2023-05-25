let winTiles = [];
function scoreGenerator(board){
    winTiles = [];
    for (let i=0 ; i<3 ; i++){
        if (board[i][0]==board[i][1] && board[i][1]==board[i][2]){
            if (board[i][0] == 'x'){
                winTiles = [i*3+0,i*3+1,i*3+2]
                return 10
            }
            else if (board[i][0] == 'o'){
                winTiles = [i*3+0,i*3+1,i*3+2]
                return -10
            }
        }
    }
    for (let j = 0; j < 3; j++) {
        if (board[0][j] == board[1][j] && board[1][j] == board[2][j]){
            if (board[0][j] == 'x'){
                winTiles = [0+j,3+j,6+j]
                return 10
            }
            else if (board[0][j] == 'o'){
                winTiles = [0+j,3+j,6+j]
                return -10 
            }
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]){
        if (board[0][0] == 'x'){
            winTiles = [0,4,8]
            return 10
        }
        else if (board[0][0] == 'o'){
            winTiles = [0,4,8]
            return -10
        }
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]){
        if (board[1][1] == 'x'){
            winTiles = [2,4,6]
            return 10
        }
        else if (board[1][1] == 'o'){
            winTiles = [2,4,6]
            return -10
        }
    }
    return 0
}

export {winTiles,scoreGenerator}