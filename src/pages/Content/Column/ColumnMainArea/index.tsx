import { useRequest } from 'umi';
import { getColumns } from '@/services/api/contentManage';
export default () => {
  const { data, error, loading } = useRequest(() => {
    return getColumns();
  });
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data}</div>;
};
