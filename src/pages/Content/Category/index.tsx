import { Button, Card, Tabs } from 'antd';
import React, { useState } from 'react';

import CategoryMainArea from './CategoryMainArea';
import NewCategoryModal from './NewCategoryModal/index';

const PageTabs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'add' | 'edit'>('add');
  const [initialValues, setInitialValues] = useState<API.Category>();
  const handleEdit = (tagRecord: API.Category) => {
    if (tagRecord) {
      setInitialValues(tagRecord);
    }
    setType('edit');
    setOpen(true);
  };
  const handleAdd = () => {
    setInitialValues(undefined);
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
        tabBarExtraContent={
          <Button type='primary' onClick={() => handleAdd()}>
            新建分类
          </Button>
        }
        items={[
          {
            label: '分类(9)',
            key: 'category',
            children: <CategoryMainArea handleEdit={handleEdit} />,
          }, // remember to pass the key prop
        ]}
      />
      <NewCategoryModal
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
