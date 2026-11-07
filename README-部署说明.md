# CAE–WANN 五语种科研网页：部署与维护说明

## 一、文件说明

本目录是完整静态网站，不依赖 Node.js、后台服务器或构建工具。

| 文件 | 用途 |
| --- | --- |
| `index.html` | 网页页面及研究内容 |
| `styles.css` | 响应式排版、科研图表和 RTL 布局 |
| `i18n.js` | 中文、英文、俄语、法语和阿拉伯语的文案及交互逻辑 |
| `images/` | 原始论文压缩包内的 9 张科研图表，未修改其中标注 |
| `CAE-WANN-Paper.pdf` | 附件中提供的论文原文 |
| `CAE-WANN.bib` | 根据第二个附件 RIS 记录生成的 BibTeX |
| `citation.ris` | 第二个附件的原始 RIS 引文记录 |
| `favicon.svg` | 网站图标 |

## 二、GitHub Pages 部署

1. 新建 GitHub 仓库，例如 `cae-wann`。
2. 将**本目录内的所有文件**上传到仓库根目录，确保 `index.html` 位于根目录、`images` 目录与其同级。
3. 打开仓库 Settings → Pages，在 Build and deployment 中选择 **Deploy from a branch**；设置为主分支 `main` 和 `/(root)` 后保存。
4. 部署完成后，通过 GitHub Pages 显示的链接访问网站。若使用 `username.github.io/reponame/` 形式，页面中的相对资源路径也可正常使用。

本地预览：双击 `index.html` 即可浏览。若浏览器对本地文件施加额外限制，可在本站目录执行 `python -m http.server 8000` 并访问 `http://localhost:8000/`。

## 三、界面语言

页面右上角支持简体中文 (`zh`)、英语 (`en`)、俄语 (`ru`)、法语 (`fr`) 和阿拉伯语 (`ar`)。默认根据浏览器语言识别，切换后尝试记住用户选择；阿拉伯语自动启用从右到左的布局，数字、网络图和 BibTeX 保持正确方向。网站的正文、导航、图注、图像替代文本、操作按钮等均有五语种内容。

`i18n.js` 文件中的 `TRANSLATIONS` 对象保存各语言的完整翻译，可直接修改。英文原文保存在 `index.html` 中。原始论文图表中嵌入的英文标签保持原样，以保证科研图片的准确性。

## 四、BibTeX 对照

引用依据第二个附件 `pericles_exported_citations(1).txt` 中的 RIS 信息：

- 作者：Shisheng Zhong; Dan Liu; Lin Lin; Minghang Zhao; Xuyun Fu; Feng Guo。
- 期刊：*Quality and Reliability Engineering International*。
- 年份：2022；卷：38；期：6；页码：3116–3134。
- DOI：`10.1002/qre.3113`；ISSN：`0748-8017`。

BibTeX 同时显示在页面的引用区，支持复制；`CAE-WANN.bib` 可直接下载并导入参考文献管理软件。

## 五、设计与功能

- 深色科技风格首页、浅色科研阅读区、统一的卡片和图表容器；
- 正文两端对齐，宽屏适配及多断点响应式布局；
- 图像按其原始长宽比显示，点击图像可放大；
- 移动端折叠菜单、当前章节标记、阅读进度条；
- PDF 原文访问、BibTeX 一键复制和 `.bib` / `.ris` 下载；
- 图片的 `alt`、可访问性标签及基本键盘交互支持。

**注意：** Web 字体通过 Google Fonts 加载；无法连接时自动回退到系统字体，不影响阅读和功能。原论文 PDF 与插图按附件原样保留；部署前请确认拥有合适的展示与传播权限。
