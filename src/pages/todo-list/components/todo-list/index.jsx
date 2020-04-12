import React from "react";
import { List } from 'antd'
import TodoItem from '../todo-item'

import css from './index.module.less'

export default function TodoList(props) {
  const { list, onItemClick } = props

  const handleItemClick = id => {
    onItemClick(id)
  }
  console.log('list...')
  return (
    <div className={css["list-wrapper"]}>
      <List
        dataSource={list}
        bordered
        renderItem={(item) => (
          <List.Item>
            <TodoItem item={item} onClick={handleItemClick} />
          </List.Item>
        )}
      />
    </div>
  );
}
