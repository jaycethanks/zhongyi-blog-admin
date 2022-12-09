import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function get() {
  return request<{
    data: API.Columns;
  }>('/api/admin/article/create', {
    method: 'GET',
  });
}

export async function upsert(
  body: API.SubmitArticle,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes>('/api/admin/article/upsert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
