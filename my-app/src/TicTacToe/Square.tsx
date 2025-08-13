/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-fallthrough */
/* eslint-disable react/react-in-jsx-scope */

export type SquareValue = "O" | "X" | "-";
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

export function Square({ value, onClick }: SquareProps) {
  // 1. 비어있을때는 -
  // 2. 클릭했을때는 O, X
  // 3. value 값이 계속 바뀐다
  // 4. click 이벤트 있음
  let className = "outline";
  switch (value) {
    case "O":
      className = "";
      break;
    case "X":
      className = "secondary";
      break;
  }
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}
