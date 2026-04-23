import { BOARD_SIZE } from "@/constants/Figures";
import { PieceIcon } from "./PieceIcon";
import { useChessStore } from "@/store";
import cn from "clsx";
import { Piece } from "@/types/Board.types";

interface Props {
  type: Piece;
  row: number;
  cols: number;
}

export function Cell({ type, row, cols }: Props) {
  const {
    setSelectedSquare,
    selectedSquare,
    movePiece,
    turn,
    legalMoves,
    clearSelection,
  } = useChessStore();

  const isSelected = selectedSquare?.c === cols && selectedSquare?.r === row;
  const isPossibleMove = legalMoves?.some((m) => m.r === row && m.c === cols);

  const handleClick = () => {
    if (
      selectedSquare &&
      (selectedSquare.c !== cols || selectedSquare.r !== row)
    ) {
      movePiece(row, cols);
      clearSelection();
    } else if (type !== "") {
      const pieceColor = type[0];

      if (pieceColor === turn) {
        setSelectedSquare(cols, row);
      } else {
        console.log(`It's ${turn}'s turn!`);
      }
    }
  };

  return (
    <div
      className={cn(
        "border relative border-black flex items-center justify-center transition-colors",
        (row + cols) % 2 === 0 ? "bg-black/50" : "bg-white/50",
      )}
      style={{ width: `${BOARD_SIZE}rem`, height: `${BOARD_SIZE}rem` }}
      onClick={() => {
        handleClick();
      }}
    >
      {isSelected && (
        <div className="absolute w-full h-full  border-2 border-red-500"></div>
      )}
      {isPossibleMove && (
        <div className="absolute w-full h-full border-2 border-red-500"></div>
      )}
      <PieceIcon type={type} />
    </div>
  );
}
