# 快速开始 Quick Start

## 本地运行 Local Development

### 1. 安装依赖 Install Dependencies

```bash
npm install
```

如果你使用 yarn 或 pnpm：
```bash
yarn install
# 或
pnpm install
```

### 2. 启动开发服务器 Start Dev Server

```bash
npm run dev
```

### 3. 打开浏览器 Open Browser

访问 [http://localhost:3000](http://localhost:3000)

你应该会看到一个呼吸的文字，随着节奏缓慢脉动。

---

## 如何使用 How to Use

### 基础操作 Basic Controls

| 操作 | 效果 |
|------|------|
| **点击任意位置** | 切换到下一条咒语 |
| **长按 0.8 秒** | 暂停/恢复呼吸动画 |
| **空格键** | 切换下一条 |
| **P 键** | 暂停/恢复 |
| **⌘/Ctrl + M** | 打开设置菜单 |

### 体验建议

1. **第一次访问**：只是静静地看着文字呼吸，感受节奏
2. **停留 10 秒以上**：周围会渐渐浮现相关的内容
3. **不要急着切换**：每条咒语都值得停留
4. **使用长按暂停**：当你想仔细阅读或截图时

---

## 自定义内容 Customize Content

### 编辑内容文件

打开 `data/content.json`，你可以：

- 添加新的咒语
- 修改现有文本
- 调整相关性连接
- 添加新的场景和理论

### 内容结构示例

```json
{
  "id": "your_unique_id",
  "category": "core_mantra",
  "text_cn": "你的中文咒语",
  "text_en": "Your English Mantra",
  "related": ["other_id_1", "other_id_2"],
  "context": "使用这条咒语的场景",
  "elaboration": "详细解释"
}
```

### 内容分类

- `core_mantra`: 核心咒语（最常显示）
- `principle`: 原则
- `parenting`: 育儿场景
- `theory`: 理论洞察
- `daily`: 日常应用

---

## 部署到 Vercel Deploy to Vercel

### 方式一：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel
```

### 方式二：通过 GitHub

1. 将代码推送到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 导入你的 GitHub 仓库
4. 点击 Deploy

---

## 常见问题 FAQ

### Q: 为什么看不到相关内容？
A: 相关内容会在停留 12 秒后渐进显示。保持耐心，让页面自然生长。

### Q: 如何更改呼吸速度？
A: 按 `⌘/Ctrl + M` 打开设置菜单，选择慢/中/快三种速度。

### Q: 可以添加自己的图片吗？
A: 当前版本专注于文字和呼吸。过多视觉元素会分散注意力。

### Q: 能否导出或分享某条咒语？
A: 未来版本会考虑添加卡片分享功能。当前建议截图保存。

---

## 下一步 Next Steps

- 🎨 尝试不同的主题（深色/浅色/深蓝）
- 🌍 切换语言看看英文版本
- ✍️ 添加你自己的咒语到 `data/content.json`
- 🚀 部署到 Vercel，随时随地访问
- 📱 添加到手机主屏幕，作为快捷方式

---

**记住**：这个页面的目的不是让你记住什么，
而是让你**回到当下**。
