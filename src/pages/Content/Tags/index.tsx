import { Button, Card, message, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

import Loading from '@/components/Loading';
import { getCounts, getTags, newTag } from '@/services/api/content';

import NewTagModal from './NewTagModal/index';
import TagsMainArea from './TagsMainArea';

const PageTabs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'add' | 'edit'>('add');
  const [initialValues, setInitialValues] = useState<API.Tag>();
  const [list, setList] = useState<API.Tags>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
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

  const loadData = async () => {
    const loadTags = async () => {
      const res = await getTags();
      if (!res.data) {
        message.error(res.message);
      }
      setList(res.data);
    };

    const loadTagCount = async () => {
      const res = await getCounts('tags');
      if (res.code !== 0) {
        message.error(res.message);
      }
      setCount(res.data);
    };

    setLoading(true);
    Promise.allSettled([loadTags(), loadTagCount()]).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onValidateFinish = async (values: any) => {
    const res = await newTag(values);
    if (res.code === 0) {
      message.success(res.message);
      setOpen(false);
    } else {
      message.error(res.message);
    }
    loadData();
  };

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
            label: `标签(${loading ? 'querying...' : count})`,
            key: 'essays',
            children: loading ? (
              <Loading />
            ) : (
              <TagsMainArea handleEdit={handleEdit} data={list} />
            ),
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
