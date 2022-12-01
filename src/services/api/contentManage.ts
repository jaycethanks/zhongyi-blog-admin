import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function getColumns() {
  return request<{
    data: API.Columns;
  }>('/api/admin/columns', {
    method: 'GET',
  });
}
