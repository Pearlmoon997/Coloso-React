import React, { useState } from "react";

export default function Counter() {
  // useState를 이용 (Hook)
  // 스테이트(상태)라는걸 적용할 수 있게 해줌.
  // 상태값이 바뀌면, Rerender 실행 선언

  const [count, setCount] = useState(0); // 내부적으로 캐싱
  console.log("Re return : Counter");

  let count2 = 0;
  return (
    <main className="container">
      <h1>카운터 예제</h1>
      <h2>
        현재 카운트 : {count}/{count2}{" "}
      </h2>
      <div className="grid">
        <button
          onClick={() => {
            setCount(count + 1);
            // set Count = 파라미터로 들어온 값을 count에 할당
            console.log("count++", count);
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            console.log("count--", count);
          }}
        >
          감소
        </button>
        <button
          onClick={() => {
            count2++;
            console.log("count2++", count2);
          }}
        >
          증가2
        </button>
        <button
          onClick={() => {
            count2--;
            console.log("count2--", count2);
          }}
        >
          감소2
        </button>
      </div>
    </main>
  );
}
