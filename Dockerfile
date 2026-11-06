# Keep the local toolchain aligned with the GitHub Pages workflow.
FROM node:24-bookworm-slim AS node
FROM ruby:3.3-bookworm

# Keep gems in the image; never use a host .bundle/config or Darwin extensions
# when Compose bind-mounts a working copy that has been previewed natively.
ENV BUNDLE_PATH=/usr/local/bundle \
    BUNDLE_APP_CONFIG=/usr/local/bundle \
    BUNDLE_IGNORE_CONFIG=1

COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /usr/local/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
    && groupadd --gid 1000 vscode \
    && useradd --create-home --uid 1000 --gid vscode vscode

WORKDIR /usr/src/app

# Gemfile.lock is copied when present; package-lock.json is committed to the site.
COPY Gemfile* ./
RUN bundle install
COPY package*.json ./
RUN npm ci --no-audit --no-fund \
    && chown -R vscode:vscode /usr/src/app

USER vscode
ENV JEKYLL_ENV=development
EXPOSE 4000

# Compose mounts the source here. Polling also picks up edits on macOS mounts.
CMD ["sh", "-c", "npm run build:js && exec bundle exec jekyll serve --host 0.0.0.0 --port 4000 --force_polling --config _config.yml,_config_docker.yml"]
