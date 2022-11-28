export default [
  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/home', name: '首页', icon: 'smile', component: './Home' },
  {
    path: '/new-article',
    name: '新增文章',
    redirect: '/new-article/add',
  },
  {
    path: '/new-article/add',
    layout: false,
    component: './NewArticle',
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
  {
    path: '/settings',
    name: '设置中心',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/settings', redirect: '/settings/basic' },
      { path: '/settings/basic', name: '基础信息', component: './Settings' },
    ],
  },
  { path: '/', redirect: '/home' },
  { path: '*', layout: false, component: './404' },
];
