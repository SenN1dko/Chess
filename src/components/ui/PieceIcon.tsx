import {
  ChessPawn,
  ChessBishop,
  ChessQueen,
  ChessKing,
  ChessRook,
  ChessKnight,
} from "lucide-react";

interface Props {
  type: string;
}

export function PieceIcon({ type }: Props) {
  switch (type) {
    case "Wp":
      return <ChessPawn fill="white" className="text-white" />;
    case "Bp":
      return <ChessPawn fill="black" className="text-black" />;
    case "Wr":
      return <ChessRook fill="white" className="text-white" />;
    case "Br":
      return <ChessRook fill="black" className="text-black " />;
    case "Wn":
      return <ChessKnight fill="white" className="text-white" />;
    case "Bn":
      return <ChessKnight fill="black" className="text-black" />;
    case "Wk":
      return <ChessKing fill="white" className="text-white" />;
    case "Bk":
      return <ChessKing fill="black" className="text-black " />;
    case "Wq":
      return <ChessQueen fill="white" className="text-white" />;
    case "Bq":
      return <ChessQueen fill="black" className="text-black" />;
    case "Wb":
      return <ChessBishop fill="white" className="text-white" />;
    case "Bb":
      return <ChessBishop fill="black" className="text-black  " />;
    default:
      return null;
  }

  return <></>;
}
