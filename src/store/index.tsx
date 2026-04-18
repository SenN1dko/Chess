import { create } from "zustand";

interface ISelectedSquare {
  r: number | null;
  c: number | null;
  whichPiece: string | null;
  setSquareData: (r: number, c: number, piece: string) => void;
  clearSelection: () => void;
}
export const useSelectedSquare = create<ISelectedSquare>((set) => ({
  c: null,
  r: null,
  whichPiece: null,
  setSquareData: (newC, newR, piece) =>
    set({ r: newR, c: newC, whichPiece: piece }),
  clearSelection: () => set({ c: null, r: null }),
}));
