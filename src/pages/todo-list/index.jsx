import React, { useState, useEffect } from "react";

import TodoTab from "./components/todo-tab";
import TodoInput from "./components/todo-input";
import List from "./components/todo-list";

import css from "./index.module.less";

export default function TodoList() {
  const [todoInput, setTodoInput] = useState("");
  const [filter, setFilter] = useState("all");
  let index = 1;
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
  const [currentList, setCurrentList] = useState(list)

  useEffect(() => {
    switch (filter) {
      case "all":
        setCurrentList(list);
        break;
      case "todo":
        setCurrentList(list.filter((item) => !item.complete));
        break;
      case "complete":
        setCurrentList(list.filter((item) => item.complete));
        break;
      default:
        setCurrentList(list);
    }
  }, [list, filter])

  const handleInputChange = (val) => {
    setTodoInput(val);
  };

  const handleFilterChange = (val) => {
    setFilter(val);
  };

  const handelAddClick = () => {
    const newList = [
      {
        id: index++,
        txt: todoInput,
        complete: false,
      },
      ...list,
    ];
    setList(newList);
    setTodoInput("");
  };

  const handleItemClick = (id) => {
    const newList = list.map((item) => 
      item.id === id
        ? {
            ...item,
            complete: !item.complete,
          }
        :item
    );
    setList(newList)
  };

  return (
    <div className={css["todo-list-wrapper"]}>
      <TodoInput
        value={todoInput}
        onChange={handleInputChange}
        onClick={handelAddClick}
      />
      <TodoTab filter={filter} onChange={handleFilterChange} />
      <List list={currentList} onItemClick={handleItemClick} />
    </div>
  );
}
