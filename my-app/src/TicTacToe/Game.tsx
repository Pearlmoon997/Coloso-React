/* eslint-disable react/react-in-jsx-scope */

import { Board } from "./Board";

// 1. 보드 만들기
// 2. 보드에 square 구성
// 3. square 클릭 이벤트 추가
// 4. Click 되면 상태가 변경되고, 보드의 state를 관리
// 5. 보드에 승리 로직 추가
export default function Game() {
  return (
    <main className="container">
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </main>
  );
}
