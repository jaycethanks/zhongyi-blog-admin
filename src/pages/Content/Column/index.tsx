import { Button, Input, Card, Tabs } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import NewColumnModal from './newColumnModal/index';
import { useState } from 'react';
import type { FormInstance } from 'antd/es/form';
const RightOperation = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log('[values]: ', values);
    console.log('onFinish');
  };
  const onModalClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className={styles['right-operation']}>
        <Input
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          placeholder='输入搜索内容'
        />
        <Button type='primary' onClick={() => setOpen(true)}>
          新建专栏
        </Button>
      </div>
      <NewColumnModal
        open={open}
        onFinish={onFinish}
        onModalClose={onModalClose}
      />
    </>
  );
};

const PageTabs: React.FC = () => {
  const items = [
    { label: '专栏(9)', key: 'essays', children: '' }, // remember to pass the key prop
  ];
  return (
    <Tabs
      tabBarExtraContent={<RightOperation></RightOperation>}
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
