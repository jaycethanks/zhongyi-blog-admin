import { useRequest } from 'umi';
import { getColumns } from '@/services/api/contentManage';
import { List, Avatar, Tag } from 'antd';
import { useState, useEffect } from 'react';
import React from 'react';
interface DataType {
  colid: string;
  cover?: string;
  name: string;
  description?: string;
  visible: boolean;
}

interface handleEditProp {
  handleEdit: () => void;
}

const ColumnMainArea: React.FC<{
  dataSrouce?: API.Columns;

  // handleEdit: handleEditProp;
}> = ({ dataSrouce }) => {
  // }> = ({ dataSrouce, handleEdit }) => {
  const [list, setList] = useState<API.Columns>([]);
  useEffect(() => {
    dataSrouce && setList(dataSrouce);
  }, []);
  return (
    <List
      className='demo-loadmore-list'
      itemLayout='horizontal'
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key='list-loadmore-edit'>
              {/* <a key='list-loadmore-edit' onClick={() => handleEdit}> */}
              edit
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.cover} />}
            title={<a href='https://ant.design'>{item.name}</a>}
            description={item.description}
          />
          {/* <div>content</div> */}

          {item.visible ? (
            <Tag color='processing'>可见</Tag>
          ) : (
            <Tag color='error'>不可见</Tag>
          )}
        </List.Item>
      )}
    />
  );
};

export default (handleEdit: handleEditProp) => {
  const { data, error, loading } = useRequest(() => {
    return getColumns();
  });
  console.log('[data]: ', data);
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <ColumnMainArea dataSrouce={data} />;
  // return <ColumnMainArea dataSrouce={data} handleEdit={handleEdit} />;
};
