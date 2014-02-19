---
category : ui components
title: Summary
updated: June 6, 2013
author: Lauren Dowdy
tags : [intro, about, canon]
---

UI components are reusable elements that combine to form UX Patterns. If you are using these for the first time, please read through the component details carefully. The “Adherence Rating” of each pattern explains how strict implementation must be to ensure usability. If you need new components/patterns for your app or if would like to participate in creating additional ones, please let us know.


Adherence Rating Scale:

<ol>
{% for adherence in site.adherenceRatings %}
	{% if adherence != '' %}
	<li>{{adherence}}</li>
	{% endif %}
{% endfor %}
</ol>
