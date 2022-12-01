import { Button, Input, Card, Tabs } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import NewColumnModal from './newColumnModal/index';
import ColumnMainArea from './ColumnMainArea';
import { useState } from 'react';
const RightOperation: React.FC<{ setOpen: () => void }> = ({ setOpen }) => {
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
    </>
  );
};

const PageTabs: React.FC = () => {
  const items = [
    {
      label: '专栏(9)',
      key: 'essays',
      children: <ColumnMainArea />,
    }, // remember to pass the key prop
  ];

  const [open, setOpen] = useState(false);
  const handleEdit = () => {
    setOpen(false);
  };
  const onFinish = (values: any) => {
    console.log('[values]: ', values);
    console.log('onFinish');
  };
  const onModalClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tabs
        tabBarExtraContent={<RightOperation setOpen={setOpen} />}
        items={items}
      />
      <NewColumnModal
        open={open}
        onFinish={onFinish}
        onModalClose={onModalClose}
      />
    </>
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
