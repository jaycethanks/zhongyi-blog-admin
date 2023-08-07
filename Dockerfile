
# build
# FROM node:alpine AS builder
# # Create app directory
# WORKDIR /usr/src/app
# # 安装 libc6-compat 库，这是一个兼容性库，用于在 Alpine Linux 上运行使用 glibc 编译的程序
# RUN apk add --no-cache libc6-compat

# COPY . .

# ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com/
# RUN npm install -g pnpm
# # Install app dependencies
# RUN npm install
# RUN npm run build



# serve
FROM nginx AS server


COPY ./nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html
# COPY --from=builder /usr/src/app/dist /usr/share/nginx/html




EXPOSE 80

# 容器启动时执行的命令
CMD ["nginx", "-g", "daemon off;"]