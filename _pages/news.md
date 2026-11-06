---
layout: single
title: "News"
permalink: /news/
author_profile: true
description: "Research updates and publication news from Zhenzhen Huang."
---

{% assign news_items = site.data.news | sort: 'date' | reverse %}
{% for item in news_items %}
<section class="news-item" aria-labelledby="news-{{ forloop.index }}">
  <p class="news-date"><time datetime="{{ item.date }}">{{ item.date_label }}</time></p>
  <h2 id="news-{{ forloop.index }}">{{ item.title }}</h2>
  {{ item.content | markdownify }}
  {% if item.url %}<p><a href="{{ item.url | relative_url }}">{{ item.link_label | default: 'Read more' }}</a></p>{% endif %}
</section>
{% endfor %}
