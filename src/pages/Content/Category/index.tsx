import { Button, Card, Tabs } from 'antd';
import React from 'react';
import styles from './index.module.less';
import NewCateModal from './NewCateModal/index';
import { useState } from 'react';
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
        <Button type='primary' onClick={() => setOpen(true)}>
          新建分类
        </Button>
      </div>
      <NewCateModal
        open={open}
        onFinish={onFinish}
        onModalClose={onModalClose}
      />
    </>
  );
};

const PageTabs: React.FC = () => {
  const items = [
    { label: '分类(9)', key: 'category', children: '' }, // remember to pass the key prop
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
