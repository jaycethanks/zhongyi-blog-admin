import { Button, Card, message, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

import Loading from '@/components/Loading';
import { getCategorys, getCounts, newCategory } from '@/services/api/content';
import { useRequest } from '@umijs/max';

import CategoryMainArea from './CategoryMainArea';
import NewCategoryModal from './NewCategoryModal/index';

const PageTabs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<'add' | 'edit'>('add');
  const [initialValues, setInitialValues] = useState<API.Category>();
  const [list, setList] = useState<API.Categorys>([]);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
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

  const loadData = async () => {
    const loadCategorys = async () => {
      const res = await getCategorys();
      if (!res.data) {
        message.error(res.message);
      }
      setList(res.data);
    };

    const loadCateCount = async () => {
      const res = await getCounts('categorys');
      if (res.code !== 0) {
        message.error(res.message);
      }
      setCount(res.data);
    };

    setLoading(true);
    Promise.allSettled([loadCategorys(), loadCateCount()]).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const onValidateFinish = async (values: any) => {
    const res = await newCategory(values);
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
            新建分类
          </Button>
        }
        items={[
          {
            label: `分类(${loading ? 'querying...' : count})`,
            key: 'category',
            children: loading ? (
              <Loading />
            ) : (
              <CategoryMainArea handleEdit={handleEdit} data={list} />
            ),
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
