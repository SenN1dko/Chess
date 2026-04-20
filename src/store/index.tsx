import { Board } from "@/types/Board.types";
import { create } from "zustand";
import { knightMoves, pawnMoves } from "@/logic/figuresPermittedMoves";
interface IChessStore {
  Board: Board;
  legalMoves: { r: number; c: number }[];
  turn: "B" | "W";
  selectedSquare: { r: number; c: number } | null;
  setSelectedSquare: (r: number, c: number) => void;
  clearSelection: () => void;
  movePiece: (toR: number, toC: number) => void;
}
export const useChessStore = create<IChessStore>((set, get) => ({
  Board: [
    ["Wr", "Wn", "Wb", "Wq", "Wk", "Wb", "Wn", "Wr"],
    ["Wp", "Wp", "Wp", "Wp", "Wp", "Wp", "Wp", "Wp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["Bp", "Bp", "Bp", "Bp", "Bp", "Bp", "Bp", "Bp"],
    ["Br", "Bn", "Bb", "Bk", "Bq", "Bb", "Bn", "Br"],
  ],
  turn: "W",
  legalMoves: [],
  selectedSquare: null,

  setSelectedSquare: (C, R) => {
    const { Board } = get();
    const piece = Board[R][C];

    if (!piece) return;
    let moves: { r: number; c: number }[] = [];
    const type = piece[1];
    const color = piece[0] as "W" | "B";
    if (type === "n") {
      moves = knightMoves(R, C, Board, color);
    } else if (type === "p") {
      moves = pawnMoves(R, C, Board, color);
      console.log(moves);
    }

    set({ selectedSquare: { r: R, c: C }, legalMoves: moves });
  },

  movePiece: (toR, toC) => {
    const { Board, legalMoves, selectedSquare, turn } = get();

    const isValid = legalMoves.some((m) => m.c === toC && m.r === toR);

    if (isValid && selectedSquare) {
      const { c: fromC, r: fromR } = selectedSquare;
      const newBoard = [...Board.map((row) => [...row])];
      const piece = Board[fromR][fromC];
      newBoard[toR][toC] = piece;
      newBoard[fromR][fromC] = "";
      set({
        legalMoves: [],
        Board: newBoard,
        selectedSquare: null,
        turn: turn === "B" ? "W" : "B",
      });
    }
  },
  clearSelection: () => set({ selectedSquare: null }),
}));
