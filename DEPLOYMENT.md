# CODPAL 官网部署指南

## Vercel 部署

### 1. 连接 GitHub 仓库

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择 `safevisa/operatingvalue.com` 仓库
5. 点击 "Import"

### 2. 配置项目设置

- **Framework Preset**: Next.js
- **Root Directory**: `./` (默认)
- **Build Command**: `npm run build`
- **Output Directory**: `.next` (默认)
- **Install Command**: `npm install`

### 3. 环境变量配置

在 Vercel Dashboard 的项目设置中添加以下环境变量：

```bash
NODE_ENV=production
```

### 4. 域名配置

#### 自定义域名
1. 在 Vercel Dashboard 中进入项目设置
2. 选择 "Domains" 标签
3. 添加您的自定义域名
4. 配置 DNS 记录指向 Vercel

#### 推荐域名
- `operatingvalue.com` (主域名)
- `www.operatingvalue.com` (带 www 的域名)

### 5. 部署配置

项目已包含优化的 `vercel.json` 配置文件：

- **安全头**: 配置了 XSS 保护、内容类型保护等
- **缓存策略**: 静态资源缓存优化
- **CORS 配置**: API 接口跨域支持
- **重定向规则**: 首页重定向配置

### 6. 自动部署

项目已配置 GitHub Actions，每次推送到 main 分支会自动触发部署：

- **工作流文件**: `.github/workflows/deploy.yml`
- **触发条件**: push 到 main 分支
- **部署环境**: Vercel

### 7. 性能优化

#### 已实现的优化
- ✅ Next.js 14 最新版本
- ✅ 静态生成 (SSG)
- ✅ 图片优化
- ✅ 代码分割
- ✅ 缓存策略
- ✅ CDN 加速 (Vercel Edge Network)

#### 建议的进一步优化
1. **图片优化**: 使用 WebP 格式
2. **字体优化**: 使用 `next/font` 优化字体加载
3. **Bundle 分析**: 定期分析打包大小

### 8. 监控和分析

#### Vercel Analytics
1. 在 Vercel Dashboard 中启用 Analytics
2. 查看性能指标和用户行为数据

#### 错误监控
建议集成 Sentry 或其他错误监控服务：

```bash
npm install @sentry/nextjs
```

### 9. SEO 优化

项目已实现：
- ✅ 动态 meta 标签
- ✅ Open Graph 协议
- ✅ 结构化数据
- ✅ Sitemap 生成
- ✅ Robots.txt 配置

### 10. 多语言支持

- ✅ 中英文切换
- ✅ 路由本地化
- ✅ SEO 友好的 URL 结构

### 11. 故障排除

#### 常见问题

1. **构建失败**
   - 检查 Node.js 版本 (推荐 18.x)
   - 确保所有依赖都已安装

2. **页面 404**
   - 检查路由配置
   - 确认文件路径正确

3. **样式问题**
   - 检查 Tailwind CSS 配置
   - 确认 CSS 文件正确导入

#### 调试命令

```bash
# 本地开发
npm run dev

# 构建测试
npm run build

# 启动生产环境
npm start

# 代码检查
npm run lint
```

### 12. 维护指南

#### 定期维护任务
- [ ] 更新依赖包
- [ ] 检查安全漏洞
- [ ] 优化图片资源
- [ ] 更新内容
- [ ] 监控性能指标

#### 备份策略
- 代码: GitHub 自动备份
- 数据库: 如有数据库，建议定期备份
- 文件: Vercel 自动备份部署

### 13. 联系支持

如遇到部署问题，可以：
1. 查看 Vercel 官方文档
2. 检查 GitHub Issues
3. 联系技术支持

---

**部署完成后，您的网站将在以下地址可用：**
- Vercel 域名: `https://operatingvalue.com.vercel.app`
- 自定义域名: `https://operatingvalue.com` (配置后)
