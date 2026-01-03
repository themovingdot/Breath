# Breath - 呼吸

> 意识唤醒装置 | A consciousness awakening device

## 哲学

这不是一个"信息展示"应用，而是一个**意识唤醒装置**。

- 每次访问是一次 micro-meditation，一次 re-calibration
- 页面随呼吸脉动，提醒你"你也在呼吸"
- 不是"记住什么"，是"回到当下"

## 特性

### 核心功能
- **呼吸动画**：文字随呼吸节奏缓慢脉动（吸气-呼气-循环）
- **智能内容**：随机显示核心咒语，停留后渐进显示相关内容
- **极简交互**：点击切换、长按暂停、无干扰设计

### 可配置选项
- **主题**：深色 / 浅色 / 深蓝
- **语言**：中文 / English
- **呼吸速度**：慢（12秒）/ 中（8秒）/ 快（5秒）

## 技术栈

- **框架**：Next.js 14 + React 18 + TypeScript
- **样式**：Tailwind CSS + 自定义CSS动画
- **部署**：Vercel（推荐）

## 快速开始

### 1. 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 2. 本地运行

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 3. 构建生产版本

```bash
npm run build
npm run start
```

## 部署到 Vercel

### 方式一：一键部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/breath)

### 方式二：命令行部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 使用方式

### 交互操作

- **点击任意位置**：切换到下一条咒语
- **长按 0.8 秒**：暂停/恢复呼吸动画
- **空格键**：切换下一条
- **⌘/Ctrl + M**：显示/隐藏设置菜单
- **P 键**：暂停/恢复

### 内容展示逻辑

1. **0-10秒**：只显示主咒语，随呼吸节奏脉动
2. **10-12秒**：加载相关内容
3. **12秒后**：周围渐进显示3-5条相关内容（更小、更透明、不同呼吸相位）

## 内容结构

内容数据位于 `data/content.json`，包含：

- **核心咒语**（core_mantra）：5条核心提醒
- **原则**（principle）：3条核心原则
- **场景应用**（parenting, daily）：具体场景的应用
- **理论洞察**（theory）：深层次的思考

每条内容包含：
```json
{
  "id": "唯一标识",
  "category": "分类",
  "text_cn": "中文文本",
  "text_en": "英文文本",
  "related": ["相关内容ID"],
  "context": "使用场景",
  "elaboration": "详细说明"
}
```

## 自定义内容

编辑 `data/content.json` 添加你自己的咒语和提醒。

## 设计原则

### 要坚持的 ✓
- **极简**：没有导航、搜索、分类
- **呼吸**：永远在呼吸，永远在当下
- **留白**：大量空间，不拥挤
- **随机**：放弃控制，信任流动
- **距离**：观察但不抓取

### 要避免的 ✗
- 信息过载（太多内容同时显示）
- 过度设计（花哨但分散注意力）
- 功能膨胀（添加太多features）
- 社交化（点赞、评论、分享）
- 数据焦虑（统计、分析、优化）

## 未来规划

### Phase 2 - 深度功能
- [ ] 时间权重算法（早晨显示清明类，傍晚显示安住类）
- [ ] 使用频率反向权重
- [ ] 个人journal entries集成

### Phase 3 - 多模态
- [ ] 语音版本
- [ ] 每日通知推送
- [ ] 桌面/手机 Widget

### Phase 4 - 内容管理
- [ ] Notion API集成（方便内容管理）
- [ ] 自动内容同步
- [ ] 相关性算法优化

## License

MIT

---

**记住**：这个页面的目的不是让你记住什么，而是让你**回到当下**。
