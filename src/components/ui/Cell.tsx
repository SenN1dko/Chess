import { BOARD_SIZE } from "@/constants/Figures";
import { PieceIcon } from "./PieceIcon";
import { Piece } from "@/app/page";
import { useSelectedSquare } from "@/store";
import cn from "clsx";

interface Props {
  type: Piece;
  row: number;
  cols: number;
}

export function Cell({ type, row, cols }: Props) {
  const { r, c, setSquareData, whichPiece } = useSelectedSquare();

  const isSelected = c === cols && r === row;
  const isEven = (row + cols) % 2 === 0;

  console.log(r, c, whichPiece);

  return (
    <div
      className={cn(
        "border border-black flex items-center justify-center transition-colors",

        isSelected ? "bg-red-500" : isEven ? "bg-black/50" : "bg-white/50",
      )}
      style={{ width: `${BOARD_SIZE}rem`, height: `${BOARD_SIZE}rem` }}
      onClick={() => setSquareData(cols, row, type)}
    >
      <PieceIcon type={type} />
    </div>
  );
}
