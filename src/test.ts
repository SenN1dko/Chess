  const r = 2
  const c = 1
  
  const offsets = [
        [r + 2, c + 1],[r + 2, c - 1],
        [r - 2, c + 1],[r - 2, c - 1],
        [r - 1, c + 2],[r - 1, c - 2],
        [r + 1, c + 2],[r + 1, c - 2]
    ]

    offsets.forEach(([r,c], index) => {

        console.log([r,c],index)
    })