# MTYSUN Advanced Website

这是一个用于 MTYSUN 官网升级的进阶版源码，包含前端官网、后台内容管理原型、SEO 配置、多语言内容模型、产品中心、新闻中心、询盘管理和内容更新计划。

## 启动

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 页面

- `/en` 英文官网首页
- `/zh` 中文官网首页
- `/en/products` 产品中心
- `/en/news` 新闻中心
- `/en/about` 关于我们
- `/en/contact` 联系我们
- `/admin` 后台管理系统

## 后台账号

这是一个可运行的 CMS 原型，账号校验在前端模拟：

- 用户名：`admin@mtysun.com`
- 密码：`Mtysun2026`

## 后续接入生产环境建议

- CMS：Directus 或 Strapi
- 数据库：PostgreSQL
- 文件存储：S3/OSS + CDN
- 表单：接入邮件、WhatsApp、HubSpot 或企业微信
- 部署：Vercel、阿里云或腾讯云 Docker
