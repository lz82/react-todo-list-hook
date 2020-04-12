import React, { useState } from "react";

import TodoTab from "./containers/todo-tab";
import TodoInput from "./containers/todo-input";
import List from "./containers/todo-list";

import css from "./index.module.less";
let index = 1;
export default function TodoList() {
  console.log('init')
  const [filter, setFilter] = useState("all");
  const [list, setList] = useState([
    {
      id: index++,
      txt: "吃饭",
      complete: true,
    },
    {
      id: index++,
      txt: "睡觉",
      complete: false,
    },
    {
      id: index++,
      txt: "打豆豆",
      complete: false,
    },
  ]);

  const handleFilterChange = (val) => {
    setFilter(val);
  };

  const handleItemClick = (id) => {
    const newList = list.map((item) =>
      item.id === id
        ? {
            ...item,
            complete: !item.complete,
          }
        : item
    );
    setList(newList);
  };

  return (
    <div className={css["todo-list-wrapper"]}>
      <TodoInput />
      <TodoTab filter={filter} onChange={handleFilterChange} />
      <List list={list} onItemClick={handleItemClick} />
    </div>
  );
}
