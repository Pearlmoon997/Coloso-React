/* eslint-disable react/jsx-key */
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  key: string; //uuid
  todoText: string;
  isCompleted: boolean;
}

let global_id = 3;
export function Todolist() {
  const [inputValue, setInputValue] = useState("");
  const [todolist, setTodolist] = useState<Todo[]>([
    { key: uuidv4(), todoText: "밥먹기", isCompleted: false },
    { key: uuidv4(), todoText: "숨쉬기", isCompleted: true },
    { key: uuidv4(), todoText: "잠자기", isCompleted: false },
  ]);

  // 1. todolist 입력을 받아서 추가할 수 있게
  // 2. Complete 를 Click으로 완료할 수 있게
  return (
    <main className="container">
      <h1>해야할 일</h1>
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault(); // 리프레시 하지않음
          if (inputValue != "") {
            // todolist.push() -> state 관리 안됨
            // spread 연산자 ...
            setTodolist([
              ...todolist,
              {
                key: uuidv4(),
                todoText: inputValue,
                isCompleted: false,
              },
            ]);

            setInputValue("");
          }
        }}
      >
        <fieldset role="group">
          <input
            type="text"
            name="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="해야할 일을 적어주세요!"
          />
          <input type="submit" value="추가" />
        </fieldset>
      </form>
      <div>
        <ul>
          {todolist.map((todo, index) => (
            <li
              onClick={() => {
                // todo.isCompleted = !todo.isCompleted;
                // state를 이용해야한다
                const updatedTodolist = todolist.map((innerTodo) => {
                  return innerTodo.key === todo.key
                    ? { ...innerTodo, isCompleted: !todo.isCompleted }
                    : innerTodo;
                });
                setTodolist(updatedTodolist);
              }}
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.todoText}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
