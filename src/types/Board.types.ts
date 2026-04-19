export type PieceType = "p" | "n" | "b" | "r" | "q" | "k";
export type Color = "W" | "B";
export type Piece = `${Color}${PieceType}` | "";
export type Board = Piece[][];