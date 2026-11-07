---
layout: single
title: "About Me"
permalink: /
author_profile: true
description: "Zhenzhen Huang (Nancy), Ph.D. student in Bioengineering at Politecnico di Milano, working on biomedical signal processing and medical AI."
redirect_from:
  - /about/
  - /about.html
---

I am **Zhenzhen Huang**, also known as **Nancy**, a Ph.D. student in Bioengineering at **Politecnico di Milano**, Italy. I joined the Department of Electronics, Information and Bioengineering (**DEIB**) in September 2026 and work in **B3lab** under the supervision of **Prof. Luca Mainardi**.

My research focuses on **biomedical signal processing and medical AI**, particularly deep learning-based ECG reconstruction, non-invasive fetal ECG extraction, and morphology-preserving signal analysis for reliable cardiovascular monitoring. My broader interests include EEG signal processing and multimodal physiological signal analysis and fusion.

Previously, I completed my master's degree at Xidian University, where I focused on non-invasive fetal ECG extraction, biomedical signal processing, and deep learning. I also collaborated with Xuanwu Hospital, Capital Medical University, on nystagmus-related research, gaining experience in clinically oriented interdisciplinary research.

[Explore my research]({{ '/research/' | relative_url }}) · [View publications]({{ '/publications/' | relative_url }}) · [Research experience]({{ '/experience/' | relative_url }})

## Education

**2026–Present · Ph.D. in Bioengineering**  
Politecnico di Milano, Italy  
Department of Electronics, Information and Bioengineering (DEIB)  
Supervisor: Prof. Luca Mainardi

**2022–2025 · M.Eng. in Electronic Science and Technology**  
Xidian University, China

## Latest News

{% assign latest_news = site.data.news | sort: 'date' | reverse %}
<ul class="news-list">
{% for item in latest_news limit:3 %}
  <li><time datetime="{{ item.date }}">{{ item.date_label }}</time> — {% if item.url %}<a href="{{ item.url | relative_url }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</li>
{% endfor %}
</ul>

[All news]({{ '/news/' | relative_url }})

## Contact

I welcome opportunities to connect with researchers working on biomedical signal processing and medical AI.

- **Email:** [zhenzhen.huang0902@gmail.com](mailto:zhenzhen.huang0902@gmail.com)
- **Academic profiles:** [Google Scholar](https://scholar.google.com/citations?user=mAVH8hsAAAAJ) · [ORCID](https://orcid.org/0009-0001-1824-560X) · [DEIB profile](https://www.deib.polimi.it/eng/people/details/2557888)
- **GitHub:** [Zhenzhen-Nancy](https://github.com/Zhenzhen-Nancy)
