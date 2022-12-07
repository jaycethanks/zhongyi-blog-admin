// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  return {
    routes: {"1":{"path":"/user","layout":false,"id":"1"},"2":{"name":"登录","path":"/user/login","parentId":"1","id":"2"},"3":{"path":"/home","name":"首页","icon":"homeOutlined","parentId":"ant-design-pro-layout","id":"3"},"4":{"path":"/editor/drafts","name":"新增文章","icon":"editOutlined","redirect":"/editor/drafts/new","parentId":"ant-design-pro-layout","id":"4"},"5":{"path":"/editor/drafts/new","layout":false,"id":"5"},"6":{"path":"/editor/drafts/edit/:artid","layout":false,"id":"6"},"7":{"path":"/content","name":"内容管理","icon":"blockOutlined","parentId":"ant-design-pro-layout","id":"7"},"8":{"path":"/content","redirect":"/content/article","parentId":"7","id":"8"},"9":{"path":"/content/article","name":"文章管理","parentId":"7","id":"9"},"10":{"path":"/content/category","name":"分类管理","icon":"crown","parentId":"7","id":"10"},"11":{"path":"/content/tags","name":"标签管理","parentId":"7","id":"11"},"12":{"path":"/content/column","name":"专栏管理","parentId":"7","id":"12"},"13":{"path":"/settings","name":"设置中心","icon":"settingOutlined","parentId":"ant-design-pro-layout","id":"13"},"14":{"path":"/settings","redirect":"/settings/basic","parentId":"13","id":"14"},"15":{"path":"/settings/basic","name":"基础信息","parentId":"13","id":"15"},"16":{"path":"/","redirect":"/home","parentId":"ant-design-pro-layout","id":"16"},"17":{"path":"*","layout":false,"id":"17"},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true},"umi/plugin/openapi":{"path":"/umi/plugin/openapi","id":"umi/plugin/openapi"}},
    routeComponents: {
'1': React.lazy(() => import( './EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__User__Login__index" */'@/pages/User/Login/index.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__Home" */'@/pages/Home.tsx')),
'4': React.lazy(() => import( './EmptyRoute')),
'5': React.lazy(() => import(/* webpackChunkName: "p__NewArticle__index" */'@/pages/NewArticle/index.tsx')),
'6': React.lazy(() => import(/* webpackChunkName: "p__NewArticle__index" */'@/pages/NewArticle/index.tsx')),
'7': React.lazy(() => import( './EmptyRoute')),
'8': React.lazy(() => import( './EmptyRoute')),
'9': React.lazy(() => import(/* webpackChunkName: "p__Content__Article__index" */'@/pages/Content/Article/index.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__Content__Category__index" */'@/pages/Content/Category/index.tsx')),
'11': React.lazy(() => import(/* webpackChunkName: "p__Content__Tags__index" */'@/pages/Content/Tags/index.tsx')),
'12': React.lazy(() => import(/* webpackChunkName: "p__Content__Column__index" */'@/pages/Content/Column/index.tsx')),
'13': React.lazy(() => import( './EmptyRoute')),
'14': React.lazy(() => import( './EmptyRoute')),
'15': React.lazy(() => import(/* webpackChunkName: "p__Settings__index" */'@/pages/Settings/index.tsx')),
'16': React.lazy(() => import( './EmptyRoute')),
'17': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'/home/jayce/Desktop/Projects/zhongyi-blog-admin/src/.umi/plugin-layout/Layout.tsx')),
'umi/plugin/openapi': React.lazy(() => import(/* webpackChunkName: "umi__plugin-openapi__openapi" */'/home/jayce/Desktop/Projects/zhongyi-blog-admin/src/.umi/plugin-openapi/openapi.tsx')),
},
  };
}
