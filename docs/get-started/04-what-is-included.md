---
layout: default-left-nav
category: Rackspace Canon
resource: true
title: What is Included
---

### Current Release ({{site.CANON.versions[0]}})

{% for nav in site.data.navigation %}
{% if nav[0] != 'Rackspace Canon' %}
<p><h3><a href="{{site.baseurl}}/app-layout/">{{ nav[0] }}</a></h3></p>
<ul>
{% for pg in site.pages %}
{% if pg.category == nav[0] %}
<li><a href="{{site.baseurl}}{{pg.url}}">{{ pg.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
{% endif %}
{% endfor %}