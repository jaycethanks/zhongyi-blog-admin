// @ts-ignore
/* eslint-disable */

declare namespace API {
  type SubmitArticle = {
    artid?: string;
    title: string;
    content: string;
    category: string;
    tags: string[];
    cover: string;
    column: string;
    isbanner: boolean;
    description: string;
    password: string;
    visible: boolean;
  };
  type CommonRes = {
    code: number;
    data?: { access_token: string };
    success: boolean;
    message: string;
  };
  type LoginForm = {
    account: string;
    password: string;
  };

  type LoginRes = {
    code: number;
    data?: { access_token: string };
    success: boolean;
    message: string;
  };
  type Column = {
    colid?: string;
    name?: string;
    description?: string;
    cover?: string;
    visible: boolean;
  };
  type Columns = Column[];

  type Tag = {
    tagid?: string;
    name?: string;
    visible: boolean;
  };
  type Tags = Tag[];

  type Tag = {
    tagid?: string;
    name?: string;
    visible: boolean;
  };

  type Category = {
    catid?: string;
    name?: string;
    description?: string;
    visible: boolean;

    sort?: number;
    relateCount?: number;
    userid?: string;
  };

  type Categorys = Category[];

  type ArticleInfo = {
    artid: string;
    title: string;
    description?: string;
    cover?: string;
    createdAt: string;
    readers?: number;
    liking?: number;
    visible: boolean;
    comments?: number;
    password?: string;
  };
  type ArticleList = ArticleInfo[];

  type EditorArticle = {
    artid: string;
    title: string;
    content: string;
    description?: string;
    cover?: string;
    visible: boolean;
    category: string;
    tags: string[];
    column: string;
    isbanner: boolean;
    password: string;
  };
}
