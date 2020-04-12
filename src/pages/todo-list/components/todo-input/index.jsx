import React, { useRef } from "react";
import { Input, Button } from 'antd'

import css from './index.module.less'

export default function TodoInput(props) {
  const inputRef = useRef()
  const { value, onChange, onClick } = props;

  const handelOnChange = e => {
    onChange(e.target.value)
  }

  const handleClick = () => {
    onClick()
    inputRef.current.focus()
  }

  return (
    <div className={css["todo-input-wrapper"]}>
      <Input ref={inputRef} value={value} onChange={handelOnChange} />
      <Button type="primary" className={css["btn"]} onClick={handleClick}>
        Add
      </Button>
    </div>
  );
}
