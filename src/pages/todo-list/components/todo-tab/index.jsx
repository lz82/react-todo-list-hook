import React from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

export default function TodoTab(props) {
  const { filter, onTabChange } = props;

  const handleChange = (key) => {
    onTabChange(key);
  };
  return (
    <div>
      <Tabs activeKey={filter} onChange={handleChange}>
        <TabPane tab="全部" key="all"></TabPane>
        <TabPane tab="未完成" key="todo"></TabPane>
        <TabPane tab="已完成" key="complete"></TabPane>
      </Tabs>
    </div>
  );
}
