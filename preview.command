#!/bin/zsh
# Local preview only. This does not create a repository, push, or publish.
set -e
cd "$(dirname "$0")"
if [[ -x /opt/homebrew/opt/ruby@3.3/bin/ruby ]]; then
  export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
fi
if ! command -v bundle >/dev/null || ! command -v npm >/dev/null; then
  print "Ruby 3.3, Bundler and Node 24 are required. See MAINTENANCE.zh-CN.md, section 8."
  exit 1
fi
bundle check
npm run build:js
print "Preview: http://127.0.0.1:4000/ — press Ctrl+C to stop."
exec bundle exec jekyll serve --config _config.yml,_config_docker.yml --destination local/preview --host 127.0.0.1 --port 4000
