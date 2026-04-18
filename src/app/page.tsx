import { Cell } from "@/components/ui/Cell";
import { TABLE } from "@/constants/Figures";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-8 w-fit">
          {TABLE.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <Cell key={`${rowIndex}-${cellIndex}`} type={cell}></Cell>
            )),
          )}
        </div>
      </div>
    </>
  );
}
