# GitHub Pages 苹果风格个人网站 - 实施计划

> 文档版本：v1.0
> 创建日期：2025-11-29
> 目标路径：docs/design/homepage-design.md

---

## 项目概述

创建一个苹果风格的单页滚动式个人网站，用于展示开发项目和 GitHub 作品集。

**技术栈**：Vue 3 + Vite + 纯 CSS
**部署方式**：GitHub Actions → GitHub Pages

---

## 个人信息（来自 GitHub）

- **昵称**：lostsheep
- **用户名**：anlostsheep
- **简介**：A lostsheep
- **邮箱**：13413684909@163.com
- **GitHub 成就**：Starstruck, YOLO, Arctic Code Vault Contributor, Pull Shark

### 技术栈（从项目推断）
- **主方向**：黑苹果（Hackintosh）EFI 开发
- **后端**：Java（设计模式、爬虫框架）
- **前端**：JavaScript、TypeScript

### 精选项目展示

| 项目名 | 描述 | 技术 | Stars |
|--------|------|------|-------|
| hackintosh-colorful-b460i | 七彩虹 B460I CVN 黑苹果 EFI | OpenCore | 24 ⭐ |
| hackintosh-rog-z490-g | ROG Z490-G 黑苹果 EFI | OpenCore | 10 ⭐ |
| ms-icraft-z790itx-hackintosh | MS-iCraft Z790ITX 黑苹果 | OpenCore | - |
| ripples | 涟漪微博 | JavaScript | 3 forks |
| java-design-mode | Java 设计模式实践 | Java | - |
| technology-learning | 技术学习笔记 | Java | - |

---

## 设计规范（苹果风格）

### 视觉特征
- **配色**：深色/浅色区块交替，主色调黑白灰
- **字体**：系统字体栈（-apple-system, BlinkMacSystemFont, "SF Pro"）
- **布局**：全屏区块，内容居中，大量留白
- **导航**：固定顶部，毛玻璃效果（backdrop-filter: blur）

### 页面区块（自上而下滚动）
1. **Hero 区块**：
   - 大标题「lostsheep」
   - 副标题「Hackintosh 爱好者 & 开发者」
   - 突出 Hackintosh 身份定位

2. **Hackintosh 专区**（深色背景，类似苹果产品展示）：
   - 标题「Hackintosh EFI 分享」
   - 3 个黑苹果项目大卡片展示：
     - hackintosh-colorful-b460i (24⭐) - 七彩虹 B460I
     - hackintosh-rog-z490-g (10⭐) - ROG Z490-G
     - ms-icraft-z790itx-hackintosh - MS-iCraft Z790ITX
   - 每个卡片显示：主板名称、CPU、Stars、OpenCore 版本标签
   - 类似苹果官网 iPhone/Mac 产品展示风格

3. **其他项目区块**（浅色背景）：
   - 标题「其他开源项目」
   - 小卡片网格：ripples、java-design-mode、technology-learning

4. **技能区块**：
   - OpenCore（突出显示）
   - macOS / Hackintosh
   - Java / JavaScript

5. **联系区块**：GitHub 链接 + 邮箱

---

## 实施步骤

### 第 1 步：清理项目 & 初始化 Vue 项目

**操作**：
1. 删除 Jekyll 相关文件（`_config.yml`, `README.md`）
2. 在项目根目录初始化 Vite + Vue 3 项目
3. 配置 `vite.config.js` 支持 GitHub Pages 路径

**文件变更**：
- 删除：`_config.yml`, `README.md`
- 新增：`package.json`, `vite.config.js`, `index.html`, `src/` 目录

### 第 2 步：创建基础项目结构

**目录结构**：
```
anlostsheep.github.io/
├── index.html              # 入口 HTML
├── package.json
├── vite.config.js
├── src/
│   ├── main.js            # Vue 应用入口
│   ├── App.vue            # 根组件
│   ├── assets/
│   │   └── styles/
│   │       ├── main.css   # 全局样式
│   │       └── variables.css # CSS 变量
│   └── components/
│       ├── NavBar.vue     # 顶部导航
│       ├── HeroSection.vue    # Hero 区块
│       ├── SkillsSection.vue  # 技能区块
│       ├── ProjectsSection.vue # 项目区块
│       ├── AboutSection.vue   # 关于区块
│       └── ContactSection.vue # 联系区块
├── public/
│   └── favicon.ico
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions 部署配置
```

### 第 3 步：实现全局样式（苹果风格）

**关键 CSS**：
- 系统字体栈
- CSS 变量定义颜色、间距
- 平滑滚动（scroll-behavior: smooth）
- 毛玻璃导航栏

### 第 4 步：实现各个组件

**NavBar.vue**：
- 固定顶部
- 毛玻璃背景效果
- 滚动时显示/隐藏或变色
- 点击跳转到对应区块

**HeroSection.vue**：
- 全屏高度
- 居中大标题 + 副标题
- 可选：打字机效果或简单淡入

**SkillsSection.vue**：
- 技术图标网格展示
- 简洁的图标 + 名称

**ProjectsSection.vue**：
- 项目卡片网格
- 卡片包含：项目名、描述、技术标签、GitHub 链接
- 悬停效果

**AboutSection.vue**：
- 个人简介文字
- 可选头像

**ContactSection.vue**：
- 社交链接图标（GitHub、邮箱等）
- 简洁的页脚

### 第 5 步：配置 GitHub Actions 自动部署

**deploy.yml 配置**：
- 触发条件：push 到 master 分支
- 构建步骤：安装依赖 → npm run build
- 部署：将 dist 目录部署到 gh-pages 分支

---

## 关键文件内容概要

### vite.config.js
```javascript
export default {
  base: '/',  // 用户名.github.io 项目使用根路径
  build: {
    outDir: 'dist'
  }
}
```

### .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 部署后验证

1. 推送代码到 master 分支
2. 等待 GitHub Actions 完成构建
3. 访问 https://anlostsheep.github.io 验证

---

## 后续可扩展

- 添加暗色模式切换
- 集成 GitHub API 动态获取项目
- 添加博客功能（可考虑 VitePress）
- 添加更多动画效果
