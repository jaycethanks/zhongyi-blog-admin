import { Divider, Table } from 'antd';
import React from 'react';
import { useRequest } from 'umi';

import Loading from '@/components/Loading';
import { getCategorys } from '@/services/api/content';

import type { ColumnsType } from 'antd/es/table';
const TagsMainArea: React.FC<{
  handleEdit: (categoryRecord: API.Category) => void;
}> = ({ handleEdit }) => {
  const { data, error, loading } = useRequest(() => {
    return getCategorys();
  });

  interface DataType {
    key: React.Key;
    name: string;
    description: string;
    visible: boolean;
  }
  // const columns: ColumnsType<DataType> = [
  const columns: any = [
    {
      title: '序号',
      dataIndex: '',
      key: 'no',
      render: (_: any, __: any, index: number) => {
        return <span>{++index}</span>;
      },
      width: '4rem',
      align: 'center',
    },
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
      width: '12rem',
    },
    {
      title: '分类描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '可见性',
      dataIndex: 'visible',
      key: 'visible',
      width: '6rem',
      render: (visible: boolean) => {
        return visible ? '可见' : '不可见';
      },
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      width: '8rem',
      render: (record: API.Category) => {
        return (
          <>
            <a onClick={() => handleEdit(record)}>编辑</a>
            <Divider type='vertical' />
            <a>删除</a>
          </>
        );
      },
    },
  ];

  if (loading) {
    return <Loading />;
  } else {
    console.log('[data]: ', data);
    return <Table rowKey='catid' dataSource={data} columns={columns} />;
  }
};

export default TagsMainArea;
