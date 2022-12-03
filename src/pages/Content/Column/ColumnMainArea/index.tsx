import { List } from 'antd';
import React from 'react';
import { useRequest } from 'umi';

import Loading from '@/components/Loading';
import { getColumns } from '@/services/api/contentManage';

import styles from './index.module.less';

const ColumnMainArea: React.FC<{
  handleEdit: (columnRecord: API.Column) => void;
}> = ({ handleEdit }) => {
  // const [list, setList] = useState<API.Columns>([]);
  const { data, error, loading } = useRequest(() => {
    return getColumns();
  });

  // useEffect(() => {
  //   if (data) {
  //     setList(data);
  //   }
  // }, [data]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <List
      className='demo-loadmore-list'
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          actions={[
            <a key='list-item-edit' onClick={() => handleEdit(item)}>
              编辑
            </a>,
            [<a key='list-item-delete'>删除</a>],
          ]}
        >
          <List.Item.Meta
            avatar={
              item.cover ? (
                <div
                  className={styles['cover']}
                  style={{ backgroundImage: `url(${item.cover})` }}
                ></div>
              ) : (
                <div
                  className={styles['cover-holder']}
                  style={{
                    height: '6rem',
                    width: '12rem',
                  }}
                >
                  {item.name}
                </div>
              )
            }
            title={
              <a
                style={{ fontWeight: 600, fontSize: '1.1rem' }}
                href='https://ant.design'
              >
                {item.name}
              </a>
            }
            description={item.description}
          />
          {/* <div>content</div> */}
          <span style={{ width: '4rem', textAlign: 'start' }}>
            {item.visible ? '可见' : '不可见'}
          </span>
        </List.Item>
      )}
    />
  );
};
export default ColumnMainArea;
