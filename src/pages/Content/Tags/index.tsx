import { Button, Card, Tabs } from 'antd';
import React, { useState } from 'react';

import { getCounts } from '@/services/api/contentManage';
import { useRequest } from '@umijs/max';

import NewTagModal from './NewTagModal/index';
import TagsMainArea from './TagsMainArea';

const PageTabs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'add' | 'edit'>('add');
  const [initialValues, setInitialValues] = useState<API.Tag>();
  const handleEdit = (tagRecord: API.Tag) => {
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

  const { data } = useRequest(() => {
    return getCounts('tags');
  });

  return (
    <>
      <Tabs
        tabBarExtraContent={
          <Button type='primary' onClick={() => handleAdd()}>
            新建标签
          </Button>
        }
        items={[
          {
            label: `标签(${data ?? 'querying...'})`,
            key: 'essays',
            children: <TagsMainArea handleEdit={handleEdit} />,
          }, // remember to pass the key prop
        ]}
      />
      <NewTagModal
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
