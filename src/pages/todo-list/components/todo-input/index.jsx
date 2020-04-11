import React from "react";
import { Input, Button } from 'antd'

import css from './index.module.less'

export default function TodoInput(props) {
  const { value, onChange, onClick } = props;

  const handelOnChange = e => {
    onChange(e.target.value)
  }

  const handleClick = () => {
    onClick()
  }

  return <div className={css['todo-input-wrapper']}>
    <Input value={value} onChange={handelOnChange} />
    <Button 
      type="primary" 
      className={css['btn']}
      onClick={handleClick}
    >
        Add
      </Button>
  </div>;
}
