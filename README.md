# CODPAL 全球私域电商支付与履约解决方案官网

## 项目概述

CODPAL官网是一个高端、科技感强的企业级招商展示网站，采用现代化的设计理念和最新的前端技术栈构建。网站支持中英双语切换，具有丰富的动画效果和交互体验。

## 技术栈

- **前端框架**: Next.js 14
- **开发语言**: TypeScript
- **样式框架**: Tailwind CSS
- **动画库**: Framer Motion
- **国际化**: next-i18next
- **图标库**: Lucide React
- **部署平台**: Vercel (推荐)

## 功能特性

### 🎨 视觉设计
- 科技蓝主色调 (#2D7CFF) + 银白色 (#F8F9FA)
- 3D浮动球体、六边形网络、线性渐变动效
- 玻璃拟态效果和发光交互
- 响应式设计，完美适配各种设备

### 🌐 多语言支持
- 中英文双语切换
- 无刷新语言切换
- 完整的国际化配置

### ⚡ 动画效果
- Parallax 滚动视差效果
- Fade-In / Slide-Up 动效
- 鼠标悬停交互效果
- 动态粒子与3D旋转特效

### 📱 响应式布局
- PC端优化设计
- 平板设备适配
- 移动端友好界面

## 页面结构

```
首页 (Home)
├─ Hero Banner - 主视觉区域
├─ Mission Section - 品牌使命
├─ Products Section - 产品与技术
├─ Solutions Section - 解决方案
├─ Investment Section - 投资与加盟
└─ Contact Section - 联系我们
```

## 快速开始

### 环境要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 开发模式
```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 构建生产版本
```bash
npm run build
npm start
# 或
yarn build
yarn start
```

## 项目结构

```
codpal-website/
├── components/           # React组件
│   ├── Layout.tsx       # 页面布局组件
│   ├── Header.tsx       # 导航头部
│   ├── Footer.tsx       # 页脚
│   ├── HeroBanner.tsx   # 主视觉区域
│   ├── MissionSection.tsx # 品牌使命
│   ├── ProductsSection.tsx # 产品展示
│   ├── SolutionsSection.tsx # 解决方案
│   ├── InvestmentSection.tsx # 投资加盟
│   └── ContactSection.tsx # 联系我们
├── pages/               # Next.js页面
│   ├── _app.tsx        # 应用入口
│   ├── _document.tsx   # HTML文档
│   └── index.tsx       # 首页
├── public/             # 静态资源
│   └── locales/        # 多语言文件
├── styles/             # 样式文件
│   └── globals.css     # 全局样式
├── utils/              # 工具函数
├── next.config.js      # Next.js配置
├── tailwind.config.js  # Tailwind配置
└── tsconfig.json       # TypeScript配置
```

## 部署指南

### Vercel部署 (推荐)
1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 配置环境变量（如需要）
4. 自动部署完成

### 其他平台部署
- **Netlify**: 支持Next.js静态导出
- **阿里云ECS**: 需要配置Node.js环境
- **Docker**: 可使用官方Next.js镜像

## 自定义配置

### 修改主题色彩
在 `tailwind.config.js` 中修改颜色配置：

```javascript
colors: {
  primary: {
    500: '#2D7CFF', // 主色调
    // ...其他色阶
  }
}
```

### 添加新语言
1. 在 `public/locales/` 下创建新的语言文件夹
2. 复制 `common.json` 并翻译内容
3. 在 `next-i18next.config.js` 中添加新语言代码

### 自定义动画
在 `utils/animations.ts` 中添加新的动画配置。

## 性能优化

- 图片优化：使用Next.js Image组件
- 代码分割：自动按页面分割
- 缓存策略：静态资源长期缓存
- CDN加速：建议使用全球CDN

## 浏览器支持

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证。

## 联系方式

- 官网: https://codpal.com
- 邮箱: contact@codpal.com
- 技术支持: support@codpal.com

---

© 2024 CODPAL. 保留所有权利。
