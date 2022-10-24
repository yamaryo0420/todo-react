import React, { useState } from "react";
import "./style.css";
import {InputTodos} from "./components/InputTodos.jsx";
import {IncompleteTodos} from "./components/IncompleteTodos.jsx";
import {CompleteTodos} from "./components/CompleteTodos.jsx";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // テキスト入力の処理
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  // 追加ボタンの処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  // 削除ボタンの処理
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンの処理
  const onClickComplete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻すボタンの処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newInCompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };

  return (
    <>
      <InputTodos 
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}>
      </InputTodos>
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          消化しろ！
        </p>
      )}
      <IncompleteTodos 
        todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}>
      </IncompleteTodos>
      <CompleteTodos 
        todos={completeTodos} onClickBack={onClickBack}>
      </CompleteTodos>
    </>
  );
};
