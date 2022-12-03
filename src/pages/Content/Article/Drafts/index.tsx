import { List, Space } from 'antd';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'umi';

import Loading from '@/components/Loading';
import { getArticleList } from '@/services/api/contentManage';

import styles from './index.module.less';

const Essays: React.FC = () => {
  // const [list, setList] = useState<API.Columns>([]);
  const { data, error, loading } = useRequest(() => {
    return getArticleList();
  });

  const navigate = useNavigate();

  const handleEdit = (artid: string) => {
    navigate('/editor/drafts/edit/' + artid);
  };
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
      itemLayout='vertical'
      dataSource={data}
      renderItem={(item) => (
        <List.Item
          extra={
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
                {item.title}
              </div>
            )
          }
          actions={[
            <a key='list-item-edit' onClick={() => handleEdit(item.artid)}>
              编辑
            </a>,
            [<a key='list-item-delete'>删除</a>],
          ]}
        >
          <List.Item.Meta
            title={
              <a
                style={{ fontWeight: 600, fontSize: '1.1rem' }}
                href='https://ant.design'
              >
                {item.title}
              </a>
            }
            description={item.description}
          />
          {/* <div>content</div> */}
          {/* <span style={{ width: '4rem', textAlign: 'start' }}>
            {item.visible ? '可见' : '不可见'}
          </span> */}
        </List.Item>
      )}
    />
  );
};
export default Essays;
