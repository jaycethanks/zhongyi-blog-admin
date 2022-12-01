import { Button, Card, Input, Tabs } from 'antd';
import React, { useState } from 'react';

import { SearchOutlined } from '@ant-design/icons';

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
  const [initialValues, setInitialValues] = useState();
  const handleEdit = (columnRecord: API.Column) => {
    // TODO: BugFix
    console.log('[columnRecord]: ', columnRecord);
    if (columnRecord) {
      setInitialValues(columnRecord);
    }
    setType('edit');
    setOpen(true);
  };
  const handleAdd = () => {
    setType('add');
    setOpen(true);
  };

  const onValidateFinish = (values: any) => {
    console.log('[values]: ', values);
    console.log('onFinish');
  };

  return (
    <>
      <Tabs
        tabBarExtraContent={<RightOperation handleAdd={handleAdd} />}
        items={[
          {
            label: '专栏(9)',
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
