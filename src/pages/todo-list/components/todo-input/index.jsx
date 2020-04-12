import React, { useRef } from "react";
import { Input, Button } from 'antd'

import css from './index.module.less'

export default function TodoInput(props) {
  const inputRef = useRef()
  const { todoInputVal, todoInputChange, todoInputAddClick } = props;
  const handelOnChange = e => {
    todoInputChange(e.target.value);
  }

  const handleClick = () => {
    todoInputAddClick();
    inputRef.current.focus()
  }

  return (
    <div className={css["todo-input-wrapper"]}>
      <Input ref={inputRef} value={todoInputVal} onChange={handelOnChange} />
      <Button type="primary" className={css["btn"]} onClick={handleClick}>
        Add
      </Button>
    </div>
  );
}
