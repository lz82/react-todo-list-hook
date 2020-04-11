import React, { useState } from "react";

import TodoTab from "./components/todo-tab";
import TodoInput from "./components/todo-input";
import List from "./components/todo-list";

import css from './index.module.less'

export default function TodoList() {
  const [todoInput, setTodoInput] = useState('')
  const [filter, setFilter] = useState('all')
  const [list, setList] = useState(['aaa', 'bbb'])

  const handleInputChange = (val) => {
    setTodoInput(val);
  };

  const handleFilterChange = val => {
    setFilter(val)
  }

  const handelAddClick = () => {
    const newList = [todoInput, ...list]
    setList(newList)
    setTodoInput('')
    // todo: 获取焦点
  }

  return (
    <div className={css["todo-list-wrapper"]}>
      <TodoInput
        value={todoInput}
        onChange={handleInputChange}
        onClick={handelAddClick}
      />
      <TodoTab filter={filter} onChange={handleFilterChange} />
      <List list={list} />
    </div>
  );
}
