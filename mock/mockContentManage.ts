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
    await waitTime(1000);
    res.send({
      success: true,
      data: [
        {
          colid: 'lasjdaij',
          name: 'React',
          description:
            '这是一个很流行的前端框架，由Facebook 开源并维护，具有快速开发，易于拓展的特点。',
          visible: true,
          cover: 'http://placeimg.com/640/480/technics',
        },
        {
          colid: 'ajafasjhdka',
          name: 'Prisma',
          description:
            'Prisma 是一个快速构建 GraphQL 服务、REST API、数据库服务的后端框架 已支持 MySQL, PostgreSQL, MongoDB 等数据库。',
          visible: true,
          cover: 'http://placeimg.com/640/480/nature',
        },
        {
          colid: 'lkajjiosdb',
          name: 'NestJS',
          description:
            'Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的开发框架。',
          visible: false,
          cover: 'http://placeimg.com/640/480/fashion',
        },
      ],
    });
  },

  'GET /api/rule': [{ name: '12' }],
  'POST /api/rule': (req: Request, res: Response, u: string) => {
    res.send({
      success: true,
    });
  },
};
