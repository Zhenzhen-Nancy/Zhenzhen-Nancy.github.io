# Zhenzhen Huang — Academic Website

English academic website for Zhenzhen Huang (Nancy), a Ph.D. student in Bioengineering at Politecnico di Milano. Built with [Academic Pages](https://github.com/academicpages/academicpages.github.io), retaining its Jekyll layouts and Markdown collections.

**Start here:** [中文维护与部署说明](MAINTENANCE.zh-CN.md). The intended public URL is `https://zhenzhen-nancy.github.io/`; preparing these files does not mean the website has been deployed.

## Content

- `_pages/`: About, Research, Publications, News, Experience, Awards, 404 and Sitemap.
- `_publications/`: one Markdown file per publication; keep publication status accurate.
- `_data/news.yml`: dated news, also reused on the home page.
- `_data/navigation.yml`: main navigation.
- `_config.yml`: identity, contact links, institution and site settings.
- `_sass/_custom.scss`: the small set of local visual overrides.

The supplied portrait is included at `images/zhenzhen-huang.jpg`, preserving its original 3:4 proportions with slightly rounded corners. A CV has not been supplied, so its download link remains hidden. The original sample content and sample attachments have been removed. Never commit confidential manuscripts or private documents to a public repository.

## Local preview

Use Ruby 3.3 and Node 24. On this Mac, select the installed Ruby for the current terminal first:

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
npm ci
npm run build:js
bundle exec jekyll serve --config _config.yml,_config_docker.yml --host 127.0.0.1
```

Open `http://127.0.0.1:4000/`. Configuration changes require a restart. With a working Docker runtime, `docker compose up --build` is an alternative (or `docker-compose up --build` for standalone Compose).

## Publishing

The existing workflow builds and deploys only the repository's default branch. After reviewing and approving the public contents, use a repository named `Zhenzhen-Nancy.github.io` and select **Settings → Pages → Source → GitHub Actions**. The Chinese guide explains the GitHub Desktop and browser steps in detail. Do not add a second deployment workflow.

## Template provenance

Based on Academic Pages commit `9e19e6318817bd3a6060a76d5af98124d394f3a0`, inspected on 2026-11-06. See [LICENSE](LICENSE). Academic Pages and Minimal Mistakes attribution is retained in the website footer.
