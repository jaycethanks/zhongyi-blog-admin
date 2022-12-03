import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */
export async function getColumns() {
  return request<{
    data: API.Columns;
  }>('/api/admin/columns', {
    method: 'GET',
  });
}

export async function getTags() {
  return request<{
    data: API.Tags;
  }>('/api/admin/tags', {
    method: 'GET',
  });
}

export async function getCategorys() {
  return request<{
    data: API.Tags;
  }>('/api/admin/categorys', {
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
