// TODO: BugFix for Render
import { Avatar, List, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRequest } from 'umi';

import { getColumns } from '@/services/api/contentManage';

const ColumnMainArea: React.FC<{
  handleEdit: (columnRecord: API.Column) => void;
}> = ({ handleEdit }) => {
  const [list, setList] = useState<API.Columns>([]);
  const { data, error, loading } = useRequest(() => {
    return getColumns();
  });

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <List
      className='demo-loadmore-list'
      itemLayout='horizontal'
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key='list-loadmore-edit' onClick={() => handleEdit(item)}>
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
export default ColumnMainArea;
