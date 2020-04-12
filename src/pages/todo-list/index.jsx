import React from "react";

import TodoTab from "./containers/todo-tab";
import TodoInput from "./containers/todo-input";
import List from "./containers/todo-list";

import css from "./index.module.less";

export default function TodoList() {
  return (
    <div className={css["todo-list-wrapper"]}>
      <TodoInput />
      <TodoTab />
      <List />
    </div>
  );
}
