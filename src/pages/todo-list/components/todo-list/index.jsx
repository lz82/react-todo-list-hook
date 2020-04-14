import React, { useEffect } from "react";
import { List } from 'antd'
import TodoItem from '../todo-item'

import css from './index.module.less'

export default function TodoList(props) {
  console.log('todolist...')
  const { list, isLoading, onItemClick, onListInit } = props;
  console.log('list init...')
  useEffect(() => {
    onListInit()
  }, [onListInit])

  const handleItemClick = id => {
    onItemClick(id)
  }
  return (
    <div className={css["list-wrapper"]}>
      <List
        dataSource={list}
        bordered
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <TodoItem item={item} onClick={handleItemClick} />
          </List.Item>
        )}
      />
    </div>
  );
}
