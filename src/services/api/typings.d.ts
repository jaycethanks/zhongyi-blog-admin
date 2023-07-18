// @ts-ignore
/* eslint-disable */

declare namespace API {
  type submitAbout = {
    avatar: string;
    msg: string;
    links: string;
  };
  type SubmitArticle = {
    artid?: string;
    title: string;
    content: string;
    category: string;
    tags: string[];
    cover: string;
    column: string;
    banner: 0 | 1;
    description: string;
    password: string;
    visible: 0 | 1;
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
    visible: 0 | 1;
  };
  type Columns = Column[];

  type Tag = {
    tagid?: string;
    name?: string;
    visible: 0 | 1;
  };
  type Tags = Tag[];

  type Tag = {
    tagid?: string;
    name?: string;
    visible: 0 | 1;
  };

  type Category = {
    catid?: string;
    name?: string;
    description?: string;
    visible: 0 | 1;

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
    visible: 0 | 1;
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
    visible: 0 | 1;
    category?: string;
    tags: string[] | [] | Array<{ tagid: string }>;
    column?: string;
    banner: 0 | 1;
    password: string;
    colid?: string;
    catid?: string;
  };
}
