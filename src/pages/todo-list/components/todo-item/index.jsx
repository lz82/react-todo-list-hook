import React from "react";
import css from './index.module.less'

export default function TodoItem(props) {
  const { item, onClick } = props;

  const getCls = (status) => {
    let cls = [css["item"]];
    if (status) {
      cls.push(css["complete"]);
    }
    return cls.join(" ");
  };


  const handleClick = () => {
    onClick(item.id)
  }

  return (
    <div className={css["todo-item-wrapper"]} onClick={handleClick}>
      <span className={getCls(item.complete)}>{item.txt}</span>
    </div>
  );
}
