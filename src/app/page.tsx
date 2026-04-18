"use client";

import { Cell } from "@/components/ui/Cell";
import { useState } from "react";

type PieceType = "p" | "n" | "b" | "r" | "q" | "k";
type Color = "W" | "B";
export type Piece = `${Color}${PieceType}` | "";
type Board = Piece[][];
type Selected = {
  r: string;
  c: string;
};
export default function Home() {
  const [cell, setCell] = useState<Board>([
    ["Wr", "Wn", "Wb", "Wq", "Wk", "Wb", "Wn", "Wr"],
    ["Wp", "Wp", "Wp", "Wp", "Wp", "Wp", "Wp", "Wp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["Bp", "Bp", "Bp", "Bp", "Bp", "Bp", "Bp", "Bp"],
    ["Br", "Bn", "Bb", "Bk", "Bq", "Bb", "Bn", "Br"],
  ]);
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-8 w-fit">
          {cell.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <Cell
                cols={cellIndex}
                row={rowIndex}
                key={`${rowIndex}-${cellIndex}`}
                type={cell}
              />
            )),
          )}
        </div>
      </div>
    </>
  );
}
