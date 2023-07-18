import { request } from '@umijs/max';

export async function upsert(
  body: API.submitAbout,
  options?: { [key: string]: any },
) {
  return request<API.CommonRes>('/api/admin/about/upsert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
