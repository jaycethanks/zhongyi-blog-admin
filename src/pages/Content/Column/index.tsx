import { Button, Card, Input, message, Tabs } from 'antd';
import React, { useState } from 'react';

import { getCounts, newColumn } from '@/services/api/content';
import { SearchOutlined } from '@ant-design/icons';
import { useRequest } from '@umijs/max';

import ColumnMainArea from './ColumnMainArea';
import styles from './index.module.less';
import NewColumnModal from './NewColumnModal/index';

const RightOperation: React.FC<{ handleAdd: () => void }> = ({ handleAdd }) => {
  return (
    <>
      <div className={styles['right-operation']}>
        <Input
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          placeholder='输入搜索内容'
        />
        <Button type='primary' onClick={() => handleAdd()}>
          新建专栏
        </Button>
      </div>
    </>
  );
};

const PageTabs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'add' | 'edit'>('add');
  const [initialValues, setInitialValues] = useState<API.Column>();
  const handleEdit = (columnRecord: API.Column) => {
    console.log('[columnRecord]: ', columnRecord);
    setInitialValues(columnRecord);
    setType('edit');
    setOpen(true);
  };
  const handleAdd = () => {
    setInitialValues(undefined);
    setType('add');
    setOpen(true);
  };

  const onValidateFinish = async (values: any) => {
    const res = await newColumn(values);
    if (res.code === 0) {
      message.success(res.message);
      setOpen(false);
    } else {
      message.error(res.message);
    }
  };

  const { data } = useRequest(() => {
    return getCounts('columns');
  });

  return (
    <>
      <Tabs
        tabBarExtraContent={<RightOperation handleAdd={handleAdd} />}
        items={[
          {
            label: `专栏(${data ?? 'querying...'})`,
            key: 'essays',
            children: <ColumnMainArea handleEdit={handleEdit} />,
          }, // remember to pass the key prop
        ]}
      />
      <NewColumnModal
        open={open}
        type={type}
        initialValues={initialValues}
        onValidateFinish={onValidateFinish}
        onModalClose={() => setOpen(false)}
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
