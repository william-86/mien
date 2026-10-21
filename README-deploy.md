# Mien Web MVP — 部署手册

部署目标：10 月第一周前上线，作为 TikTok bio 链接落点（`@facesaysmore` 内容测试的转化与测量仪器）。

## 文件清单

```
mien-web/
├── index.html        # 四屏应用（真实扫脸 + 真实排盘 + 分享卡 + UTM 捕获）
├── privacy.html      # 一页式隐私政策（含 BIPA 端侧定位）
└── README-deploy.md  # 本文件
```

纯静态站点，零构建、零后端。MediaPipe 模型与 WASM 从 CDN 加载（首载约 4MB，仅进入扫脸时懒加载）。

---

## 〇、当前线上地址（GitHub Pages，已发布）

**https://william-86.github.io/mien/**

- 仓库：https://github.com/william-86/mien （public，`main` 分支根目录发布）
- 隐私政策：https://william-86.github.io/mien/privacy.html
- 已实测：扫脸 → 五行判定、八字排盘（2000-01-01 12:00 → 庚辰/戊子/戊午/戊午）、分享卡均正常
- 更新发布：在 `mien-web/` 内 `git add -A && git commit -m "..." && git push`，Pages 约 1 分钟自动重建

> 注意：GitHub Pages 是 `https://`，摄像头 `getUserMedia` 可按要求工作；但域名带 `/mien/` 子路径，**所有资源引用必须保持相对路径**（当前代码已满足）。

---

## 一、部署到 Vercel（5 分钟）

**方式 A（推荐，命令行）：**
```bash
cd mien-web
npx vercel          # 首次会要求登录，全部默认回车
npx vercel --prod   # 生产部署
```

**方式 B（网页拖拽）：**
打开 https://vercel.com/new → 把 `mien-web` 文件夹拖进去 → Deploy。

部署后你会得到 `xxx.vercel.app` 临时域名，**先在手机上实测摄像头路径**（Vercel 自带 HTTPS，`getUserMedia` 只在安全上下文可用——这就是为什么本地 `http://局域网IP` 打不开摄像头是正常的，localhost 除外）。

## 二、域名（上线前完成）

候选（按优先级，先去注册商查可用性）：

| 候选 | 说明 |
|---|---|
| `mien.app` | 首选。`.app` 强制 HTTPS（正好），单词实词，贵也值得 |
| `mienapp.com` | 便宜稳妥的替补 |
| `facesaysmore.com` | 与账号名一致，可做跳转域或备用主域 |
| `getmien.com` | 常规 SaaS 风格替补 |

**绑定步骤**：Vercel 项目 → Settings → Domains → Add → 按提示到注册商加 DNS 记录（`A 76.76.21.21` 或 `CNAME cname.vercel-dns.com`）。

**注意**：绑定域名后，把 `index.html` 里两处占位改掉——`og:url` 的 `https://mien.app`、页脚的 `mien.app`（若用其他域名）。

## 三、邮箱收集（Formspree，5 分钟）

现在 `FORM_ENDPOINT` 为空 = 本地成功态兜底（不丢任何 UI 流程，但收不到邮件）。

接入步骤：
1. 注册 https://formspree.io 免费版（每月 50 封，验证期够用）
2. 创建 Form → 复制 endpoint，形如 `https://formspree.io/f/xxxxxxxx`
3. 打开 `index.html`，找到顶部 `CONFIG` 里的：
   ```js
   FORM_ENDPOINT: "",  /* paste your Formspree endpoint here */
   ```
   粘贴进去，重新部署。

提交的字段：`email` / `form`（waitlist 或 save_chart）/ `attribution`（UTM 来源，供内容归因）。

## 四、埋点（可选但强烈建议）

在 `index.html` 的 `</head>` 前插入（二选一）：

**Plausible（轻量、无 cookie、隐私叙事一致，推荐）：**
```html
<script defer data-domain="你的域名" src="https://plausible.io/js/script.js"></script>
```

**PostHog（漏斗更细）：**
```html
<script>
  !function(t,e){...按 PostHog 官方 snippet 替换...}()
</script>
```

关键漏斗事件（后续可手动加）：`scan_started` / `scan_completed` / `chart_created` / `email_submitted`。

## 五、面相阈值校准（上线后第一周做）

分类阈值集中在 `index.html` 顶部 `CONFIG.TH`（初版为几何直觉值）：

```js
TH: {
  lwWood: 1.42,      // 脸长/脸宽 超过 → 偏木
  lwRound: 1.28,     // 低于 → 偏圆（水/土）
  chinJawFire: 0.42, // 下巴宽/下颌宽 低于 → 偏火（尖）
  jawFaceMetal: 0.86,
  foreFaceEarth: 0.80
}
```

**校准方法**：扫脸后打开浏览器控制台，页面会打印度量对象（`L/W · jaw/W · 三停比`）。找 15–20 张不同脸型的真实人脸（朋友照片），记录他们的"体感正确分类"与度量值，微调阈值。每改一次重新 `npx vercel --prod`。

排盘引擎已回归验证（2000-01-01 12:00 → 庚辰 / 戊子 / 戊午 / 戊午，年柱、日柱、五鼠遁时柱与史实一致）；月柱用固定节气近似边界，结果页已标注 "demo chart · li chun boundary approximated"——正式版接真太阳时后再摘掉。

## 六、上线前 Checklist（10/1 前）

- [ ] `npx vercel --prod` 部署成功
- [ ] 域名购买并绑定，HTTPS 生效
- [ ] **手机实测**：摄像头扫脸全流程（iOS Safari + Android Chrome 各一次）
- [ ] 手机实测：照片上传路径
- [ ] 排盘自查：输入自己的生日，四柱对照任何一个中文排盘网站
- [ ] Formspree 接入，测试邮箱能收到
- [ ] 埋点脚本插入（可选）
- [ ] TikTok @facesaysmore 简介里放上最终 URL
- [ ] 第一条转化款内容（W1 周五 C1）链接带 UTM：`?utm_source=tiktok&utm_medium=bio&utm_campaign=c1`

## 已知限制（诚实清单）

1. 摄像头路径无法无头测试，靠降级逻辑保障（权限拒绝→提示上传；模型加载失败→提示重试/上传）
2. 阈值未用大规模人脸校准（见第五节）
3. 分享卡的「下载/分享」按钮当前为占位 toast——正式排期在生产构建
4. MediaPipe 依赖 CDN（jsdelivr + Google 存储），若需完全自托管可后续把 wasm 与模型放进本仓库（约 8MB）
