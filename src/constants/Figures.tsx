export const PIECE_VALUES = {
  PAWN: 1,
  KNIGHT: 3,
  BISHOP: 3,
  ROOK: 5,
  QUEEN: 9,
  KING: 0,
} as const;

export const PIECE_TYPES = {
  PAWN: "p",
  KNIGHT: "n",
  BISHOP: "b",
  ROOK: "r",
  QUEEN: "q",
  KING: "k",
};

export const COLORS = {
  WHITE: "w",
  BLACK: "b",
} as const;

export const BOARD_SIZE = 6;
