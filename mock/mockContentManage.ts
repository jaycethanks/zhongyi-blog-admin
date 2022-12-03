import { Request, Response } from 'express';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  'GET /api/admin/columns': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(100);
    res.send({
      success: true,
      data: [
        {
          colid: 'lasjdaij',
          name: 'React',
          description:
            '这是一个很流行的前端框架，由Facebook 开源并维护，具有快速开发，易于拓展的特点。',
          visible: true,
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240/technics',
        },
        {
          colid: 'ajafasjhdka',
          name: 'Prisma',
          description:
            'Prisma 是一个快速构建 GraphQL 服务、REST API、数据库服务的后端框架 已支持 MySQL, PostgreSQL, MongoDB 等数据库。',
          visible: true,
          cover: '',
        },
        {
          colid: 'lkajjiosdb',
          name: 'NestJS',
          description:
            'Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。',
          visible: false,
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240/fashion',
        },
      ],
    });
  },
  'GET /api/admin/tags': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(100);
    res.send({
      success: true,
      data: [
        {
          tagid: 'o',
          name: '前端',
          visible: true,
        },
        {
          tagid: 'j',
          name: '后端',
          visible: true,
        },
        {
          tagid: 's',
          name: '数据库',
          visible: false,
        },
        {
          tagid: 'm',
          name: 'Vue/React',
          visible: true,
        },
      ],
    });
  },
  'GET /api/admin/categorys': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(100);
    res.send({
      success: true,
      data: [
        {
          catid: 'o',
          name: '前端',
          description: 'optio earum laudantium',
          visible: true,
        },
        {
          catid: 'j',
          name: '后端',
          description:
            'Unde architecto est voluptatem sit repellendus sint corporis nisi commodi. Optio incidunt consequatur velit nesciunt ut a. Corporis similique impedit cupiditate beatae inventore. Minima culpa molestiae quaerat.',

          visible: true,
        },
        {
          catid: 's',
          name: '数据库',
          description: 'Molestiae qui sit nesciunt deserunt aut et sequi.',

          visible: false,
        },
        {
          catid: 'm',
          name: 'Vue/React',
          description: 'Qui pariatur omnis sed est perspiciatis.',

          visible: true,
        },
      ],
    });
  },

  'GET /api/admin/articlelist': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(100);
    res.send({
      success: true,
      data: [
        {
          createdAt: '2021-07-14T05:29:58.195Z',
          title: 'quibusdam-iste-quam',
          description: 'eius ab aut',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '2',
          linking: '1',
          comments: '8',
          visible: true,
          artid: '1',
        },
        {
          createdAt: '2068-06-29T07:17:43.824Z',
          title: 'officiis-fuga-aspernatur',
          description: 'modi odit dicta',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '4',
          linking: '9',
          comments: '2',
          visible: true,
          artid: '2',
        },
        {
          createdAt: '2039-01-25T04:07:58.121Z',
          title: 'ipsam-ducimus-alias',
          description: 'voluptates rerum ducimus',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '3',
          linking: '2',
          comments: '2',
          visible: true,
          artid: '3',
        },
        {
          createdAt: '2036-10-14T23:44:28.870Z',
          title: 'illo-saepe-laudantium',
          description: 'error voluptas libero',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '8',
          linking: '4',
          comments: '2',
          visible: true,
          artid: '4',
        },
        {
          createdAt: '2057-03-13T15:22:16.091Z',
          title: 'ullam-nesciunt-eligendi',
          description: 'quisquam adipisci ad',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '8',
          linking: '2',
          comments: '3',
          visible: true,
          artid: '5',
        },
        {
          createdAt: '2012-09-24T01:43:09.849Z',
          title: 'vero-iste-veritatis',
          description: 'expedita maiores facere',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '4',
          linking: '5',
          comments: '9',
          visible: false,
          artid: '6',
        },
        {
          createdAt: '2012-02-23T09:05:29.474Z',
          title: 'pariatur-facilis-dolorum',
          description: 'ipsa provident harum',
          cover:
            'https://img1.baidu.com/it/u=3978839646,47376523&fm=253&fmt=auto&app=138&f=JPEG?w=320&h=240',
          readers: '7',
          linking: '5',
          comments: '2',
          visible: false,
          artid: '7',
        },
      ],
    });
  },
  'GET /api/admin/getArticleByid': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(100);
    res.send({
      success: true,
      data: {
        artid: 'nasldnasd',
        title: '测试标题',
        content: '测试文章内容',
        description: '这是一段文章描述',
        cover: 'http://placeimg.com/640/480',
        visible: true,
        category: '这是一个分类的value(id)',
        tags: ['c1212', 'c1313'],
        column: '1',
        isbanner: true,
        password: '1234',
      },
    });
  },

  'GET /api/rule': [{ name: '12' }],
  'POST /api/rule': (req: Request, res: Response, u: string) => {
    res.send({
      success: true,
    });
  },
};
