import { BOARD_SIZE } from "@/constants/Figures";
import { PieceIcon } from "./PieceIcon";

interface Props {
  type: string;
}

export function Cell({ type }: Props) {
  return (
    <div
      className="border border-black flex items-center justify-center"
      style={{ width: `${BOARD_SIZE}rem`, height: `${BOARD_SIZE}rem` }}
    >
      <PieceIcon type={type} />
    </div>
  );
}
