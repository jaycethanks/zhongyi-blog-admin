import { request } from '@umijs/max';

/** 获取当前的用户 GET /api/currentUser */

export async function newColumn(body: any, options?: { [key: string]: any }) {
  return request<{
    code: number;
    message: string;
    data: any;
  }>('/api/admin/column/upsert', {
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
    code: number;
    message: string;
  }>('/api/admin/column/findall', {
    method: 'GET',
  });
}

export async function deleteColById(colid: string) {
  return request<{
    data: API.Columns;
    code: number;
    message: string;
  }>('/api/admin/column/delete', {
    method: 'DELETE',
    params: {
      colid,
    },
  });
}

export async function newTag(body: any, options?: { [key: string]: any }) {
  return request<{
    code: number;
    message: string;
    data: any;
  }>('/api/admin/tag/upsert', {
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
    code: number;
    message: string;
    data: API.Tags;
  }>('/api/admin/tag/findall', {
    method: 'GET',
  });
}

export async function deleteTagById(tagid: string) {
  return request<{
    data: API.Tags;
    code: number;
    message: string;
  }>('/api/admin/tag/delete', {
    method: 'DELETE',
    params: {
      tagid,
    },
  });
}

export async function newCategory(body: any, options?: { [key: string]: any }) {
  return request<{
    code: number;
    message: string;
    data: any;
  }>('/api/admin/category/upsert', {
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
    data: API.Categorys;
    code: number;
    message: string;
  }>('/api/admin/category/findall', {
    method: 'GET',
  });
}

export async function deleteCateById(catid: string) {
  return request<{
    data: API.Tags;
    code: number;
    message: string;
  }>('/api/admin/category/delete', {
    method: 'DELETE',
    params: {
      catid,
    },
  });
}

/**
 *
 * @param type 1: 发布 0:草稿
 * @returns
 */
export async function getArticleList(type: 0 | 1) {
  return request<{
    code: number;
    message: string;
    data: API.ArticleList;
  }>('/api/admin/article/findall', {
    method: 'GET',
    params: { type },
  });
}

export async function getArticleByid(artid: string) {
  return request<{
    code: number;
    message: string;
    data: API.EditorArticle;
  }>('/api/admin/article/findById', {
    method: 'GET',
    params: { artid },
  });
}

export async function getCounts(
  type: 'articles' | 'drafts' | 'tags' | 'columns' | 'categorys',
) {
  return request<{
    data: number;
    code: number;
    message: string;
  }>('/api/admin/content/getCounts', {
    method: 'GET',
    params: { type },
  });
}
