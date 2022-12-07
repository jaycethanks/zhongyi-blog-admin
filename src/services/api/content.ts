import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */

export async function newColumn(body: any, options?: { [key: string]: any }) {
  return request<any>('/api/admin/column/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getColumns() {
  return request<{
    data: API.Columns;
  }>('/api/admin/column/findall', {
    method: 'GET',
  });
}

export async function newTag(body: any, options?: { [key: string]: any }) {
  return request<any>('/api/admin/tag/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
export async function getTags() {
  return request<{
    data: API.Tags;
  }>('/api/admin/tag/findall', {
    method: 'GET',
  });
}

export async function newCategory(body: any, options?: { [key: string]: any }) {
  return request<any>('/api/admin/category/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getCategorys() {
  return request<{
    data: API.Tags;
  }>('/api/admin/category/findall', {
    method: 'GET',
  });
}

export async function getArticleList() {
  return request<{
    data: API.ArticleList;
  }>('/api/admin/articlelist', {
    method: 'GET',
  });
}

export async function getArticleByid(artid: string) {
  return request<{
    data: API.EditorArticle;
  }>('/api/admin/getArticleByid', {
    method: 'GET',
    params: { artid },
  });
}

export async function getCounts(
  type: 'articles' | 'drafts' | 'tags' | 'columns' | 'categorys',
) {
  return request<{
    data: number;
  }>('/api/admin/content/getCounts', {
    method: 'GET',
    params: { type },
  });
}
