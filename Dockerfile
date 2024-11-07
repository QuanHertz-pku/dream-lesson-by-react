# 使用官方的 Node 镜像作为基础镜像
FROM node:20.18.0 AS build

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件并安装依赖
COPY package*.json ./
RUN npm install

# 复制源代码
COPY . .

# 构建 React 应用
RUN npm run build

# 使用 nginx 提供静态文件服务
FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
