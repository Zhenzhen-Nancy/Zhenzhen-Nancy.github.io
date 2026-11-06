---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

## Pages

<ul>
{% for item in site.data.navigation.main %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title }}</a></li>
{% endfor %}
</ul>

## Publications

{% assign sorted_publications = site.publications | sort: 'date' | reverse %}
<ul>
{% for publication in sorted_publications %}
  <li><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a> ({{ publication.publication_year }})</li>
{% endfor %}
</ul>

[XML sitemap]({{ '/sitemap.xml' | relative_url }})
