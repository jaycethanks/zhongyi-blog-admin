import { Button, Card, Tabs } from 'antd';
import React from 'react';
import styles from './index.module.less';
import NewTagModal from './NewTagModal/index';
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
          新建标签
        </Button>
      </div>
      <NewTagModal
        open={open}
        onFinish={onFinish}
        onModalClose={onModalClose}
      />
    </>
  );
};

const PageTabs: React.FC = () => {
  const items = [
    { label: '标签(11)', key: 'labels', children: '' }, // remember to pass the key prop
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
