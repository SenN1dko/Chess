
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
    const offsetsB = [
        [r - 1 , c],
    ]
    const offsetsW = [
        [r + 1 , c],
    ]
    const offsets = color === 'B' ? offsetsB : offsetsW
    offsets.forEach(([newR,newC]) => {
        if(newR >= 0 && newR < 8 && newC >= 0 && newC < 8){
            const targetPiece = board[newR][newC]
            const targetNearPieceR = board[newR][newC + 1] 
            const targetNearPieceL = board[newR][newC - 1] 
            const canDoubleMove = (color === 'B' && r === 6) || (color === 'W' && r === 1)
            const doubleMoveR = color === 'B' ? r - 2 : r + 2
            const canGoForward = targetPiece === ''
            const canGoDiagonalR = targetNearPieceR !== '' && targetNearPieceR?.[0] !== color
            const canGoDiagonalL = targetNearPieceL !== '' && targetNearPieceL?.[0] !== color
            if(canGoForward && canDoubleMove && board[doubleMoveR][c] === ''){
                if(canGoDiagonalR){
                    moves.push({r:newR,c:newC + 1})
                }
                if(canGoDiagonalL){
                    moves.push({r:newR,c:newC - 1})
                }
               moves.push({r:newR,c:newC}, {r:doubleMoveR,c:newC})
            }else if(targetPiece[0] === color){
                return
            }else{
                if(canGoForward){ 
                    moves.push({r:newR,c:newC})
                    if(canGoDiagonalL){
                        moves.push({r:newR,c:newC - 1})
                    }
                    if(canGoDiagonalR){
                        moves.push({r:newR,c:newC + 1})
                    }
                }else{
                     if(canGoDiagonalL){
                        moves.push({r:newR,c:newC - 1})
                    }
                    if(canGoDiagonalR){
                        moves.push({r:newR,c:newC + 1})
                    }
                }
            
                
        }
    }
    })
return moves
}