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
  const { setSelectedSquare, selectedSquare, movePiece, turn } =
    useChessStore();

  const isSelected = selectedSquare?.c === cols && selectedSquare?.r === row;
  const isEven = (row + cols) % 2 === 0;

  const handleClick = () => {
    if (
      selectedSquare &&
      (selectedSquare.c !== cols || selectedSquare.r !== row)
    ) {
      movePiece(row, cols);
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
        "border border-black flex items-center justify-center transition-colors",

        isSelected ? "bg-red-500" : isEven ? "bg-black/50" : "bg-white/50",
      )}
      style={{ width: `${BOARD_SIZE}rem`, height: `${BOARD_SIZE}rem` }}
      onClick={() => {
        handleClick();
      }}
    >
      <PieceIcon type={type} />
    </div>
  );
}
