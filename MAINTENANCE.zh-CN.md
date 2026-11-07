# Zhenzhen Huang 学术主页维护说明

这份网站沿用 Academic Pages 的 Jekyll 结构。日常更新主要编辑 Markdown（`.md`）和 YAML（`.yml`），不需要改网页代码。网站正文使用英文，本说明使用中文。

网站已发布至 [https://zhenzhen-nancy.github.io/](https://zhenzhen-nancy.github.io/)，源码仓库为 [Zhenzhen-Nancy/Zhenzhen-Nancy.github.io](https://github.com/Zhenzhen-Nancy/Zhenzhen-Nancy.github.io)。实际验证范围及剩余检查见 [VERIFICATION.zh-CN.md](VERIFICATION.zh-CN.md)。

## 1. 先认识常用文件

| 要修改的内容 | 文件或目录 |
| --- | --- |
| 网站标题、主要邮箱、单位、侧栏简介、头像、学术链接 | `_config.yml` 的网站设置及 `author` 部分 |
| 首页简介、教育概览、学校邮箱 | `_pages/about.md` |
| 研究方向 | `_pages/research.md` |
| 教育、培训、研究与工作经历 | `_pages/experience.md` |
| 奖项 | `_pages/awards.md` |
| 导航菜单 | `_data/navigation.yml` |
| 每一篇论文 | `_publications/` 内的一个 Markdown 文件 |
| 论文汇总页的分组和排序 | `_pages/publications.html`；日常新增论文无需编辑它 |
| 每一条动态 | `_data/news.yml` |
| News 页面展示方式 | `_pages/news.md`；日常新增动态无需编辑它 |
| 照片 | `images/` |
| 可公开的 CV 等附件 | `files/` |
| 配色及样式覆盖 | `_sass/_custom.scss`（由 `assets/css/main.scss` 引入） |
| GitHub Pages 构建和部署 | `.github/workflows/jekyll.yml` |

Markdown 页面开头两个 `---` 之间是配置，下面才是正文。保留既有 `permalink` 可以避免分享出去的旧网址失效。YAML 缩进使用空格，不使用 Tab；包含冒号的文字宜放在引号内。

首页中的近期动态从同一份新闻数据读取，无需维护两份内容。

## 2. 新增一篇论文

1. 在 `_publications/` 找一篇现有论文并复制为新文件，例如 `2027-04-01-short-paper-name.md`。文件名必须唯一。
2. 修改开头的标题、作者、链接、日期、年份、状态、期刊、卷期页和完整引文。
3. 给 `permalink` 一个唯一、简短、长期稳定的地址，例如 `/publication/short-paper-name/`。
4. 根据实际信息更新正文；没有可确认的贡献描述、代码或数据链接时，直接不填写，不建立空按钮。
5. 检查作者顺序、作者姓名的论文原始拼写、卷期、页码／文章号、DOI 和发表状态，然后提交。

常用字段：

| 字段 | 用法 |
| --- | --- |
| `title` | 论文正式标题 |
| `authors` | 单个字符串，按论文真实作者顺序列出作者；可用 Markdown `**Zhen-Zhen Huang**` 加粗自己的署名 |
| `collection` | 保持 `publications` |
| `category` | 当前期刊论文保持 `manuscripts` |
| `permalink` | 唯一的站内详情页地址 |
| `date` | `YYYY-MM-DD` 格式的内部排序日期 |
| `publication_year` | 前台显示的正式出版年份 |
| `last_modified_at` | 此网站条目的实际编辑日期，用于 sitemap；不是论文出版日期，编辑条目时更新为当天 |
| `status` | 仅使用下表的三个值 |
| `venue` | 期刊、会议或预印本平台的准确名称 |
| `venue_details` | 字符串，填写卷期与页码／文章号，例如 `"29(5), 3478–3487"` |
| `paperurl` | 完整 DOI 或论文页面地址，例如 `https://doi.org/...` |
| `citation` | 完整作者、标题、期刊、年份、卷期页；可用 `<strong>` 加粗自己的署名 |
| `excerpt` | 可选的简短介绍，只写已确认的内容 |

列表使用 `authors`、`venue` 和 `venue_details`，详情页还展示完整 `citation`。修改作者或卷期页时，需要同步更新 `citation`，避免列表与详情页不一致。

| 真实状态 | `status` | 页面文案 |
| --- | --- | --- |
| 已正式发表 | `published` | Published |
| 已正式接收，尚未正式发表 | `accepted` | Accepted for publication |
| 已公开的预印本 | `preprint` | Preprint |

缺失或拼错 `status` 的条目不会进入三个正常列表分组，因此应在提交前检查。初版三篇论文都已核对为正式发表。不要依据 DOI 中的年份改写最终期刊年份：TCGAN 使用 **2025**，LPCA 使用 **2024**。

如果只知道出版年份，`date` 可以使用该年 `01-01` 作为内部排序键，并保留说明注释；`publication_year` 才是显示给访客的年份。不要将这个内部日期写成论文的真实出版月日。已知月份而不知具体日期时，同理可以用该月第一天作排序键。

`paperurl` 指向 DOI 时按钮显示为 **DOI**，不承诺提供可下载全文。没有公开 PDF、代码或数据时不添加相关链接。准备公开作者稿之前，请确认有相应公开权限。

在投稿件不能仅靠隐藏导航、设置 `published: false` 或放入草稿目录保密：公开仓库的源文件仍可被访问。未经明确同意的在投信息不要提交到公开仓库。

## 3. 新增一条 News

编辑 `_data/news.yml`，复制其中一条记录并修改。下面只是填写格式，方括号中的内容必须替换为真实信息后再使用：

```yaml
- date: "2027-04"
  date_label: "April 2027"
  title: "[A concise English news title]"
  content: >-
    [One or two sentences describing the confirmed event.]
  url: /publication/short-paper-name/
  link_label: "View publication"
```

- `date` 使用带引号的 `YYYY-MM`，页面会自动按它倒序排列；同月多条记录可按需要调整数据中的顺序，并检查预览。
- `date_label` 是访客看到的日期文字，应与 `date` 一致。不要填写不知道的月份；若只知道年份，需要先调整新闻模板的日期处理再使用年精度。
- `content` 支持简单 Markdown，例如 `*Journal Name*`。
- 没有相关页面时，整行删除 `url` 和 `link_label` 即可。
- 当前 `url` 用于站内路径，以 `/` 开头。外部网址可直接放在 `content` 中写为 Markdown 链接。
- 不要把尚未确认的接收消息写成正式发表。

## 4. 更换头像与上传 CV

### 头像

已接入本人提供的照片 `images/zhenzhen-huang.jpg`，保留原有 3:4 比例并使用轻微圆角。以后可按以下步骤替换：

1. 选择你同意公开的照片，建议使用裁切合适的 JPG 或 PNG，约 600–1000 像素宽，并检查图片没有包含不希望公开的位置等元数据。
2. 将照片放入 `images/`，例如 `images/zhenzhen-huang.jpg`。
3. 在 `_config.yml` 的 `author` 下设置：

   ```yaml
   avatar: "zhenzhen-huang.jpg"
   ```

4. 文件名区分大小写。只写文件名，不重复添加 `images/`。
5. 头像替代文字自动使用 `author.name`。清空 `avatar` 后，整个头像区域会隐藏。

使用同名照片替换时无需修改配置；使用新文件名时同步更新 `author.avatar`。

### CV

初版没有 CV 下载按钮，也没有生成 CV 内容。准备好可公开的英文 PDF 后：

1. 将文件保存为 `files/Zhenzhen_Huang_CV.pdf`。
2. 在 `_pages/about.md` 的适当位置加入：

   ```markdown
   [Download my CV (PDF)]({{ '/files/Zhenzhen_Huang_CV.pdf' | relative_url }})
   ```

3. 更新 CV 时覆盖同名文件即可保留原链接；发布后实际点击一次确认下载的是新版。
4. 如果决定改文件名，同时修改所有引用它的链接。

不建议在公开 CV 中放家庭住址、证件信息、签名或未经同意的推荐人私人联系方式。删除公开文件也不能保证已经下载或缓存的副本消失。

## 5. 更换学校、职位和联系方式

主要修改 `_config.yml` 中的 `author.bio`、`author.employer`、`author.location`、`author.email` 和相关个人资料链接；同时更新 `_pages/about.md` 与 `_pages/experience.md`。

- 当前 Gmail 是长期主要邮箱，学校邮箱位于 About 的 Contact 部分。
- 学校或职位变动后，更新当前状态；保留过去教育和工作经历的历史事实，并补全相应结束日期。
- Google Scholar、ORCID 使用完整链接；`author.github` 填用户名 `Zhenzhen-Nancy`，不填整个网址。
- 修改 `_config.yml` 后，本地 Jekyll 需要停止并重新启动；它不会自动重载该文件。
- 继续使用个人 GitHub 账号和现有域名，就不需要因更换学校而更换网站地址。

奖项比例当前按本人确认为 **Award rate** 展示，不表示 Top X% 排名。其统计范围尚未提供；未来补充范围时直接编辑 `_pages/awards.md`，不要自行推断。

## 6. 首次创建与发布步骤（留作参考）

本项目已于 2026-11-07 完成首次发布：将本地已定制的 Academic Pages 项目上传到公开仓库，默认分支为 `main`，Pages Source 为 **GitHub Actions**。日常修改请直接按第 7 节操作。以下步骤仅供重新建站参考，不需要再次创建仓库或覆盖现有内容。

创建仓库、推送源码及开启公开发布都会改变 GitHub 上的状态。请先审阅本地页面和待上传文件，并在准备公开后执行以下步骤。不要将 GitHub 密码、令牌或登录验证码发给协作者；仅在 GitHub 官方登录页面完成登录。

### A. 从官方模板创建仓库

1. 登录 GitHub，打开 [Academic Pages 模板仓库](https://github.com/academicpages/academicpages.github.io)。
2. 点击 **Use this template → Create a new repository**。
3. Owner 选择 **Zhenzhen-Nancy**，Repository name 填 **Zhenzhen-Nancy.github.io**。
4. 选择 **Public**，只复制默认分支即可，然后创建仓库。
5. 此时仓库中仍是模板内容，暂时不要启用 Pages。接下来必须替换为本项目的完整、已清理源码。

### B. 用 GitHub Desktop 替换模板内容

推荐 [GitHub Desktop](https://desktop.github.com/)：它可以图形化显示新增、修改和删除，避免模板的假论文或旧附件残留。

1. 在 GitHub Desktop 登录自己的 GitHub 账号。
2. 选择 **File → Clone repository**，找到新建的 `Zhenzhen-Nancy.github.io` 并克隆到一个新的本地目录。
3. 先备份克隆目录中原有的模板内容。保留该目录里的隐藏 `.git` 文件夹，其余模板内容用交付的干净源码完整替换。
4. 复制交付源码时包含 `.github`、`.gitignore` 等必要隐藏文件；**不要复制另一份 `.git`，也不要复制 `node_modules`、`vendor`、`.bundle`、`_site`、`.jekyll-cache`、本地检查截图或临时文件**。macOS Finder 可按 `Command + Shift + .` 显示隐藏文件。
5. 回到 GitHub Desktop，检查变更列表：应能看到示例论文、示例 CV、旧页面和附件被删除，而不只是新文件被添加。
6. 填写提交说明，例如 `Build Zhenzhen Huang academic website`，点击 **Commit to [当前分支名]**。
7. 确认要公开这些文件后点击 **Push origin**。

**不要只用网页 Upload files 覆盖同名文件。** 这种方式不会自动删除模板中不再需要的页面和附件，旧示例可能仍可通过网址直接访问。初次完整替换建议使用 GitHub Desktop；之后的小更新可以直接在网页中编辑。

仓库中的 `.github/workflows/jekyll.yml` 已按实际默认分支运行，默认分支叫 `main` 或 `master` 都可以，不必为了套教程改名。

### C. 启用 GitHub Pages

1. 进入仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**，不要选择旧教程中的 **Deploy from a branch**。
3. 不要再添加一份 GitHub 推荐的同类工作流；仓库已经包含 Jekyll 构建和 Pages 部署步骤。
4. 打开 **Actions → Build and deploy academic website**，手动点击 **Run workflow**，选择仓库默认分支。若启用 Pages 前已有失败任务，也可以重新运行该任务。
5. 等待 `build` 与 `deploy` 都成功；绿色仅代表流程成功，还需要打开网站检查页面。
6. 从 **Settings → Pages** 打开实际站点链接，预期地址是 `https://zhenzhen-nancy.github.io/`。检查 HTTPS 和六个导航入口。

主站配置应保持：

```yaml
url: "https://zhenzhen-nancy.github.io"
baseurl: ""
repository: "Zhenzhen-Nancy/Zhenzhen-Nancy.github.io"
```

如果未来故意改为普通项目仓库，例如 `academic-profile`，其地址通常变为 `https://zhenzhen-nancy.github.io/academic-profile/`，此时 `url` 仍只填域名，`baseurl` 改成 `/academic-profile`，`repository` 改成对应仓库。不要把仓库子路径同时放进 `url` 和 `baseurl`。

本项目从官方快照 `9e19e6318817bd3a6060a76d5af98124d394f3a0` 定制，保留许可证和主题署名，不需要向 Academic Pages 官方仓库提交个人内容。

## 7. 以后怎样修改和确认更新

### GitHub 网页端编辑

1. 在自己的仓库打开要修改的文件。
2. 点击铅笔按钮，修改英文正文或 YAML 数据。
3. 点击 **Commit changes**，填写简短说明，提交到默认分支。提交到其他分支的变更需合并到默认分支后才会部署。
4. 新增文件可以使用 **Add file → Create new file**；新增图片或 PDF 可使用 **Add file → Upload files**。
5. 到 **Actions** 检查最新运行，确认它对应刚才的提交，并等待 build 和 deploy 成功。
6. 重新打开公开页面；必要时强制刷新浏览器或使用无痕窗口，确认改动出现。

### 本地编辑

先在 GitHub Desktop 点击 **Fetch origin／Pull origin** 获取最新内容，再编辑本地文件。预览后检查变更、Commit、Push。不要在尚未同步远端更新时同时使用网页端和本地版本覆盖同一个文件。

正常更新可能需要几分钟。若页面没有变化，优先查看 Actions 的状态、运行对应的分支和提交，而不是连续反复提交相同内容。

## 8. 本地预览

网页端维护不要求安装本地环境。需要预览时，可以从下面两个方式中选择一个。项目使用 Jekyll 4，macOS 自带的 Ruby 2.6 不适用。

在本机已经安装依赖后，可以在 Finder 中双击项目内的 **`preview.command`**，然后打开 `http://127.0.0.1:4000/`。它只启动本地服务，不会推送或发布。预览结束在终端按 `Ctrl + C`。如果端口 4000 已被另一个预览占用，请先停止旧服务。

### 方式 A：Ruby 3.3 + Node 24

先安装并确认终端实际使用 Ruby 3.3、Bundler 和 Node 24。`ruby -v`、`bundle -v`、`node -v` 可查看版本；系统里装有新版并不代表终端已经选择它。不要使用 `sudo gem install` 改写 macOS 系统 Ruby。

本机使用 Homebrew 安装的 Ruby 3.3，先在当前终端执行：

```bash
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
ruby -v
bundle -v
node -v
```

这仅调整当前终端的命令选择，不修改 macOS 系统 Ruby。重新打开终端后需要再次执行；其他电脑请使用其实际安装路径。

在终端进入项目目录，首次执行：

```bash
bundle config set --local path vendor/bundle
bundle install
npm ci
npm run build:js
bundle exec jekyll serve --config _config.yml,_config_docker.yml --host 127.0.0.1
```

打开 `http://127.0.0.1:4000/`。停止服务按 `Ctrl + C`。

普通 Markdown 修改通常会自动重新构建；修改 `_config.yml` 后重启服务；修改 JavaScript 后重新运行 `npm run build:js`。当前模板的正确命令是 **`npm run build:js`**，不是 `npm run build`。

只检查生产构建可执行：

```bash
npm run build:js
JEKYLL_ENV=production bundle exec jekyll build
```

输出位于 `_site/`，它是构建产物，不需要提交到源码仓库。

本机若重新安装依赖时遇到 `unknown architecture arm64e.x1`，原因可能是旧 Xcode 编译器与新版 SDK 混配。已核验可在**该次命令**指定现有 Command Line Tools，不必改变全局设置：

```bash
DEVELOPER_DIR=/Library/Developer/CommandLineTools SDKROOT=/Library/Developer/CommandLineTools/SDKs/MacOSX27.0.sdk bundle install
```

上述 SDK 路径是本机本次检查结果；其他电脑请使用实际已安装的兼容工具链。

### 方式 B：Docker

需要先安装并启动 Docker Desktop 或其他兼容的 Docker 运行环境。只有 Docker CLI 并不足以运行容器。本机初始检查时没有可运行的 Docker Desktop，因此容器预览是否通过应以之后的实际检查结果为准。

在项目目录执行：

```bash
docker compose up --build
```

如果本机提示 `docker: unknown command: docker compose`，但存在独立 Compose 命令，可改用：

```bash
docker-compose up --build
```

首次需要下载镜像和依赖。看到 Jekyll 服务就绪后，打开 `http://localhost:4000/`。终端按 `Ctrl + C` 停止；之后可用对应的 `docker compose down` 或 `docker-compose down` 清理本项目容器。

容器使用 Ruby 3.3 和 Node 24，自动构建 JS 并启动 Jekyll；端口只绑定本机。源码编辑会通过挂载更新，配置修改后应重新启动容器。若未来修改 Node 依赖且容器仍使用旧依赖，需要更新容器的依赖卷；普通内容修改不需要处理依赖卷。

`package-lock.json` 应与 `package.json` 一起保留。不要手工编辑锁文件；它用于让本地与 Actions 的 `npm ci` 安装同一组依赖。Ruby 依赖变动也应同步维护 `Gemfile` 和生成的 `Gemfile.lock`。

## 9. 常见问题

| 现象 | 优先检查 |
| --- | --- |
| 网站返回 404 | 仓库是否正确命名、Pages 是否启用、deploy 是否成功、访问网址是否正确 |
| Actions 没有部署最新内容 | 是否推送到了实际默认分支；其他分支会被本流程跳过 |
| Configure GitHub Pages 失败 | Settings → Pages 的 Source 是否设为 GitHub Actions，仓库／组织是否允许 Pages |
| YAML／Liquid 构建报错 | Actions 的具体文件与行号；缩进、引号、冒号、遗漏 `---` 或模板标签 |
| npm ci 报错 | `package-lock.json` 是否存在，且与 `package.json` 一致 |
| Ruby／Gem 安装失败 | Ruby 版本是否为项目要求的 3.3；不要使用系统 Ruby 2.6 |
| 图片或 CSS 404 | 路径大小写、文件是否提交、`url` 与 `baseurl` 是否正确 |
| 新论文没有出现在列表 | 是否在 `_publications`，`status` 是否准确，front matter 是否有效 |
| 修改后页面未变化 | 最新 Actions 是否成功并对应本次提交；是否浏览器缓存；是否误改了非默认分支 |
| Docker 无法连接 daemon | Docker 运行环境是否已安装并启动；仅安装 CLI 不够 |
| 本地 4000 端口被占用 | 是否已有预览服务；先停止自己之前启动的服务 |
| DOI 或学术网站自动检查失败 | 可能是反自动访问或登录限制；请手动打开核对，不直接判定链接不存在 |

遇到 Actions 错误，打开失败的运行，再展开红色步骤；先处理最早出现的明确错误。无需把密码、令牌或任何私密配置贴到公开 issue 或网站文件里。

## 10. 公开前检查与尚待补充内容

公开网站以及公开仓库内的文件可能被任何人访问、搜索或下载。**移除菜单项不等于停止页面发布，Jekyll 排除文件也不等于让公开仓库中的源文件保密。**

每次有较大更新时，建议检查：

- 首页、六个导航和论文详情可打开，内部链接和附件有效。
- 手机约 390px 宽度下正文、长标题和菜单可读，无横向溢出。
- 键盘可以操作菜单和链接，焦点清楚；头像存在时有正确替代文字。
- 没有模板示例人物、假论文、旧 CV、私人资料或未获授权的在投稿件。
- 论文状态、作者顺序、年份和新闻日期正确；没有把接收或预印本写成正式发表。
- 发布后打开实际 HTTPS 网址，确认内容与最新成功部署的提交一致。

尚待本人补充或决定的内容：

1. 可公开的英文 CV PDF；准备好后再启用下载链接。
2. 华为经历和医院合作研究的起止时间；当前不推测。
3. 四项奖项获奖比例的统计范围；当前保留本人确认的比例，不推测人群或排名。
4. 可公开的论文代码、数据或作者稿链接；当前不显示空链接。
5. 如需添加导师主页、Talks、Teaching 或项目页，先准备真实内容，再添加页面和导航。

后续增加页面时可复制现有 Markdown 页、修改标题与 `permalink`，然后在 `_data/navigation.yml` 添加对应路径。无需为了未来可能用到的内容提前建立空页面。
