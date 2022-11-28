export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/home', name: '首页', icon: 'smile', component: './Home' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
    ],
  },
  {
    path: '/content',
    name: '内容管理',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/content', redirect: '/content/article' },
      { path: '/content/article', name: '文章管理', component: './Content' },
      {
        path: '/content/column',
        name: '专栏管理',
        component: './Content/Column',
      },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/home' },
  { path: '*', layout: false, component: './404' },
];
