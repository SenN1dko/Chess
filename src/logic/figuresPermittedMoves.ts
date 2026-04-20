
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
            const targetPiece = board[newR][newC]
            if(targetPiece === '' || targetPiece[0] !== color){
                moves.push({r:newR,c:newC})
            }
        }
    }
)
return moves;
}

export const pawnMoves = (r:number , c:number , board:string[][], color:'W'|'B') => {
    const moves:{r:number,c:number}[] = [] 
    const offsets = [
        [r + 1 , c],[r - 1 , c],
    ]
    offsets.forEach(([newR,newC]) => {
        if(newR >= 0 && newR < 8 && newC >= 0 && newC < 8){
            const targetPiece = board[newR][newC]
            const targetNearPieceR = board[newR][newC + 1]
            const targetNearPieceL = board[newR][newC - 1]
            if((targetPiece === '' || targetPiece[0] !== color)){
                if(targetNearPieceR !== '' && targetNearPieceR[0] !== color) moves.push({r:newR,c:newC},{r:newR,c:newC + 1})
                if(targetNearPieceL !== '' && targetNearPieceL[0] !== color) moves.push({r:newR,c:newC},{r:newR,c:newC - 1})
               moves.push({r:newR,c:newC})
            }
        }
    })
return moves
}