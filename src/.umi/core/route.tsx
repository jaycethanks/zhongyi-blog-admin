// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  return {
    routes: {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"登录","path":"/user/login","parentId":"1","id":"2"},"3":{"path":"/home","name":"首页","icon":"smile","parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/new-article","name":"新增文章","redirect":"/new-article/add","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/new-article/add","layout":false,"id":"5"},"6":{"path":"/content","name":"内容管理","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"6"},"7":{"path":"/content","redirect":"/content/article","parentId":"6","id":"7"},"8":{"path":"/content/article","name":"文章管理","parentId":"6","id":"8"},"9":{"path":"/content/column","name":"专栏管理","parentId":"6","id":"9"},"10":{"path":"/settings","name":"设置中心","icon":"crown","access":"canAdmin","parentId":"ant-design-pro-layout","id":"10"},"11":{"path":"/settings","redirect":"/settings/basic","parentId":"10","id":"11"},"12":{"path":"/settings/basic","name":"基础信息","parentId":"10","id":"12"},"13":{"path":"/","redirect":"/home","parentId":"ant-design-pro-layout","id":"13"},"14":{"path":"*","layout":false,"id":"14"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}},
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Home" */'@/pages/Home.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import(/* webpackChunkName: "p__NewArticle__index" */'@/pages/NewArticle/index.tsx')),
'6': React.lazy(() => import( './EmptyRoute')),
'7': React.lazy(() => import( './EmptyRoute')),
'8': React.lazy(() => import(/* webpackChunkName: "p__Content__index" */'@/pages/Content/index.tsx')),
'9': React.lazy(() => import(/* webpackChunkName: "p__Content__Column__index" */'@/pages/Content/Column/index.tsx')),
'10': React.lazy(() => import( './EmptyRoute')),
'11': React.lazy(() => import( './EmptyRoute')),
'12': React.lazy(() => import(/* webpackChunkName: "p__Settings__index" */'@/pages/Settings/index.tsx')),
'13': React.lazy(() => import( './EmptyRoute')),
'14': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/home/jayce/Desktop/workspace_personal/zhongyi-blog-admin/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/home/jayce/Desktop/workspace_personal/zhongyi-blog-admin/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
