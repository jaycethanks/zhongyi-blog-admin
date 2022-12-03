// @ts-ignore
/* eslint-disable */

declare namespace API {
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
  };

  type Categorys = Category[];

  type ArticleInfo = {
    artid: string;
    title: string;
    description?: string;
    cover?: string;
    createAt: string;
    readers?: number;
    linking?: number;
    visible: boolean;
    comments?: number;
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
