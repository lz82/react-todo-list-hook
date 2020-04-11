import React from "react";
import { List } from 'antd'

import css from './index.module.less'

export default function TodoList(props) {
  const { list } = props

  return (
    <div className={css['list-wrapper']}>
      <List
        dataSource={list}
        bordered
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
}
