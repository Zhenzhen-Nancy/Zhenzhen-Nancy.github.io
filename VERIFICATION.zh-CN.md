# 初版验证记录

初版本地检查：2026-11-06；线上部署验证：2026-11-07。网站已通过 GitHub Actions 发布至 [https://zhenzhen-nancy.github.io/](https://zhenzhen-nancy.github.io/)。此记录区分静态检查、实际网络访问与尚未完成的浏览器视觉检查。

## 已实际完成

| 项目 | 结果 |
| --- | --- |
| 模板来源 | Academic Pages `9e19e6318817bd3a6060a76d5af98124d394f3a0`，保留 Jekyll 结构与许可证 |
| 内容 | 六个独立栏目、三篇论文、三条动态；清理模板示例页、示例论文、CV 和附件 |
| JavaScript | `npm run build:js` 成功，导航与交互脚本语法检查通过 |
| Ruby 依赖 | Ruby 3.3.13、Bundler 4.0.23；`bundle install`、`bundle check` 成功 |
| 生产构建 | `JEKYLL_ENV=production bundle exec jekyll build` 成功 |
| 构建产物 | 13 个 HTML 文件（含重定向），其中 3 个论文详情页；内部页面、资源链接、锚点检查零错误 |
| 源码交付包 | 已解压干净 ZIP 并再次完成 Jekyll 构建；包含主题依赖源码，不含本机缓存、日志和安装目录 |
| 本机服务 | Jekyll 在 `127.0.0.1:4000` 成功启动，首页实际返回 HTTP 200 |
| 论文状态 | 实际渲染检查 published、accepted、preprint、未知状态四种情况；没有把后三者显示为已发表 |
| 论文日期 | 页面及 SEO 不输出用于内部排序的具体月日；sitemap 使用网站条目的实际编辑日期 |
| 标题与头像 | 非重定向页面各有一个 H1；没有头像时不生成图片元素；头像模板使用转义后的姓名作为 alt |
| 配色 | 正文、标题、链接、辅助文字在白底及浅灰底均达到 4.5:1；链接最低 5.10:1 |
| 键盘支持代码 | 增加跳过导航、可聚焦主题按钮、菜单／Contact 的 ARIA 状态与 Escape 关闭返焦；五种主题／存储情形通过脚本行为检查 |
| 公开输出 | 未发现默认假身份、假论文附件、虚假 CV、维护文档、开发配置或本地绝对路径 |
| 部署配置 | YAML 与 `docker-compose config` 检查通过；工作流只部署实际默认分支 |
| GitHub Pages | 公开仓库已建立，默认分支为 `main`，Pages Source 为 GitHub Actions，HTTPS 已启用；首次 build 与 deploy 均成功，公开首页实际返回 HTTP 200 |

本地生产构建仍有上游 Sass 弃用警告，来自模板的旧 Sass 语法。它们没有造成构建失败；首版未大规模重写主题。已保留依赖锁文件，减少后续依赖漂移。

## 外部信息与链接

- 三篇论文的标题、作者顺序、期刊、卷期页和正式出版年份已通过 Crossref 元数据核对。年份为 2026、2025、2024；综述出版月份为 July 2026。
- Google Scholar、GitHub、ORCID、DEIB 英文个人页实际返回 HTTP 200。Scholar、GitHub、DEIB 的页面内容对应本人；ORCID 的姓名关联由论文 Crossref 元数据支持。
- BSPC DOI 返回 HTTP 200 并进入 Elsevier 跳转页；两个 IEEE DOI 解析到对应文献 ID，但终点为 HTTP 202／空页，未验证完整出版商页面。
- 导师、实验室、教育培训、工作合作与奖项依据本人提供的资料，不声称全部经过独立认证。奖项比例按本人确认为获奖比例展示，统计范围仍未提供。

## 尚未验证

- **实际桌面视觉、390px 手机布局、触控及完整键盘操作**：原生 Chrome 检查工具超时，内置浏览器不可用。静态结构、配色和脚本检查不能替代浏览器检查。
- **Docker 镜像构建与容器运行**：本机只有 Docker CLI，没有可运行的 Docker Desktop。实际构建使用本机 Ruby 环境完成。
- **CV**：尚未提供，因此下载入口隐藏；上传后需检查 PDF 下载。头像已于 2026-11-07 接入，移动端实际视觉仍待检查。

## 发布前后的人工检查

1. 双击 `preview.command` 启动本地预览，打开 `http://127.0.0.1:4000/`。逐项检查六个导航和三篇论文详情。
2. 在浏览器响应式模式设宽度 390px，确认长标题与邮箱不溢出；打开／关闭导航及 Contact，检查浅色／深色主题。
3. 用 Tab、Enter、Space、Escape 操作菜单及主题切换，确认焦点可见且关闭菜单后回到按钮。
4. 首次公开前检查邮箱、奖项比例和经历描述，并确认全部源码与附件可以公开下载。
5. 发布后检查 Actions 的 build、deploy 及对应提交；再访问公开首页、六个栏目、论文 DOI 和不存在的页面，确认 404 行为。

完整操作方法见 `MAINTENANCE.zh-CN.md`。本地服务只用于预览，结束时可按 Ctrl+C；它不代表 GitHub Pages 已发布。

## 2026-11-07：加入个人照片

- 已加入 `images/zhenzhen-huang.jpg`（768 × 1024，约 93 KB）并启用 `author.avatar`。
- 原图内容未修改；CSS 保留 3:4 比例，桌面宽约 160px、窄屏宽约 48px，使用轻微圆角。
- Jekyll 生产构建成功；实际检查生成的 11 个非重定向页面，均包含正确照片路径和 `alt="Zhenzhen Huang"`。
- 加入照片时已确认生成站内的图片与项目图片内容一致；当时未执行新的浏览器视觉检查或线上部署。后续发布结果见下方部署记录。
- 修改 `_config.yml` 后，正在运行的预览需要先按 Ctrl+C 停止，再运行 `./preview.command`，然后刷新浏览器。

## 2026-11-07：首次公开发布

- 按本人确认发布当前版本，保留现有研究方向、未来兴趣和合作描述。
- 源码仓库：[Zhenzhen-Nancy/Zhenzhen-Nancy.github.io](https://github.com/Zhenzhen-Nancy/Zhenzhen-Nancy.github.io)。
- 网站：[https://zhenzhen-nancy.github.io/](https://zhenzhen-nancy.github.io/)。
- 首次部署提交：`e1ee6a8ca09ea52b5ba2486a398a957af0a2b527`。
- [首次部署运行 42317695818](https://github.com/Zhenzhen-Nancy/Zhenzhen-Nancy.github.io/actions/runs/42317695818)：build 成功（36 秒）、deploy 成功（1 分 15 秒）。
- GitHub 自动启用的分支发布已切换为 `workflow`，重复的旧版构建已取消。当前 Pages 状态为 `built`，`https_enforced` 为 `true`。
- 六个主页面、三篇论文详情均通过公开 HTTPS 实际访问并返回 HTTP 200；九页导航集合、照片路径和 `alt="Zhenzhen Huang"` 均正确。
- 在线照片 SHA-256 与本地文件一致；22 个本站直接链接及资源（含关键 CSS、JavaScript）全部返回 HTTP 200。
- 不存在的路径实际返回 HTTP 404，并显示含本人姓名及 “Page Not Found” 的自定义页面。
- 以上为实际网络与 HTML 检查，不代表已完成桌面及手机浏览器视觉检查。
