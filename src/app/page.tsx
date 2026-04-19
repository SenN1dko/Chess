"use client";

import { Cell } from "@/components/ui/Cell";
import { useChessStore } from "@/store";

export default function Home() {
  const { Board } = useChessStore();

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-8 w-fit">
          {Board.map((row, rowIndex) =>
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
