# Vercel 部署指南

你的呼吸页面已经准备好部署了！这里有两种部署方式：

---

## 方式一：通过 Vercel 网站部署（最简单）⭐

### 步骤 1：推送代码到 GitHub

代码已经在分支 `claude/breathing-page-S57Wb` 上了。如果你想在主分支部署，可以：

```bash
# 切换到主分支（如果有的话）
git checkout main

# 合并你的功能分支
git merge claude/breathing-page-S57Wb

# 推送到远程
git push origin main
```

或者直接从当前分支部署也可以。

### 步骤 2：连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择你的 `Breath` 仓库
5. 选择分支：`claude/breathing-page-S57Wb` 或 `main`

### 步骤 3：配置项目

Vercel 会自动检测到这是一个 Next.js 项目。

**保持默认配置即可：**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**不需要添加任何环境变量**（MVP版本无需配置）

### 步骤 4：部署

点击 **"Deploy"** 按钮，等待 2-3 分钟。

部署完成后，你会得到一个 URL，类似：
```
https://breath-xxx.vercel.app
```

---

## 方式二：通过 Vercel CLI 部署

### 步骤 1：安装 Vercel CLI

```bash
npm install -g vercel
```

### 步骤 2：登录

```bash
vercel login
```

会打开浏览器让你授权。

### 步骤 3：部署

在项目目录下运行：

```bash
cd /home/user/Breath
vercel
```

首次部署时会问你几个问题：
- Set up and deploy? → **Yes**
- Which scope? → 选择你的账号
- Link to existing project? → **No**
- What's your project's name? → **breath** (或其他名字)
- In which directory is your code located? → **./** (默认)

然后会自动检测到 Next.js 并部署。

### 步骤 4：生产部署

开发部署成功后，运行生产部署：

```bash
vercel --prod
```

---

## 部署后的优化

### 自定义域名

1. 在 Vercel 项目设置中选择 "Domains"
2. 添加你的域名，如：`breathe.movingdot.com`
3. 按照提示配置 DNS

### 自动部署

使用 GitHub 集成后，每次推送代码都会自动部署：
- 推送到主分支 → 生产环境自动更新
- 推送到其他分支 → 预览环境

---

## 预期结果

部署成功后，你应该能：

1. ✅ 访问你的呼吸页面
2. ✅ 看到核心咒语随呼吸脉动
3. ✅ 点击切换不同的咒语
4. ✅ 在移动端也能完美显示
5. ✅ 设置菜单（⌘+M）可以切换主题和语言

---

## 如果遇到问题

### 构建失败？

检查 Vercel 构建日志，通常是因为：
- 依赖安装失败 → 确认 `package.json` 正确
- TypeScript 错误 → 运行 `npm run build` 本地测试

### 页面显示空白？

- 检查浏览器控制台是否有错误
- 确认 `data/content.json` 文件存在且格式正确

### 想要回滚？

Vercel 保留所有部署历史，可以一键回滚到任何之前的版本。

---

## 下一步建议

部署成功后：

1. **分享链接**：发给朋友体验
2. **添加到主屏幕**：移动端可以像 App 一样使用
3. **收集反馈**：看看呼吸节奏、文字大小是否需要调整
4. **持续更新**：在 `data/content.json` 添加新的咒语，推送后自动部署

---

**你准备好了吗？去 [vercel.com](https://vercel.com) 开始部署吧！** 🚀
