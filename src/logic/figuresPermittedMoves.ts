
export const knightMoves = (r:number,c:number,board:string[][],color:'W'|'B') =>{
    const moves:{r:number,c:number}[] = []

    const offsets = [
        [r + 2, c + 1], [r + 2, c - 1],
    [r - 2, c + 1], [r - 2, c - 1],
    [r + 1, c + 2], [r + 1, c - 2],
    [r - 1, c + 2], [r - 1, c - 2],
    ]

    offsets.forEach(([newR,newC]) => {
  
        if(newR >= 0 && newR < 8 && newC >= 0 && newC < 8){
                  console.log([newR,newC])
            const targetPiece = board[newR][newC]

            if(targetPiece === '' && targetPiece[0] !== color){
                moves.push({r:newR,c:newC})
            }
        }
    }
)
return moves;
}