import { Card, Input, Tabs } from 'antd';
import React from 'react';

import { SearchOutlined } from '@ant-design/icons';

import Drafts from './Drafts';
import Essays from './Essays';

const PageTabs: React.FC = () => {
  const items = [
    {
      label: '文章(999)',
      key: 'essays',
      children: <Essays />,
    }, // remember to pass the key prop
    { label: '草稿箱(66)', key: 'drafts', children: <Drafts /> },
  ];
  return (
    <Tabs
      tabBarExtraContent={
        <Input
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          placeholder='输入搜索内容'
        />
      }
      items={items}
    />
  );
};

export default () => {
  return (
    <>
      <Card>
        <PageTabs />
      </Card>
    </>
  );
};
