---
layout: default-left-nav
category: App Layout
title: Left Primary Nav
resource: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">{{ page.category }}</div>
  <div class="rs-detail-header-title">{{ page.title }}</div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <div class="rs-row">
      <div class="span-4">
        <p>Left Primary Navigation is a new feature in Canon.  It can be used to facilitate a greater number of nav items, due to the vertical space and also it's nested accordion capability.</p>
        <ul>
          <li>Do not use the top primary nav or top secondary nav when using the left primary navigation menu.</li>
          <li>Be sure to set the "active" class on the item currently being viewed, to help users find their way.</li>
        </ul>
      </div>
      <div class="span-8">
        <img src="{{ site.baseurl }}/img/left-primary-navigation.png" style="width: 100%;">
      </div>
    </div>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body">
    <div style="height: 28em; position: relative; margin-bottom: 2em;">{% include demos/left_nav.html %}</div>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">
    {% highlight html %}{% include demos/left_nav.html %}{% endhighlight %}
  </div>
</div>