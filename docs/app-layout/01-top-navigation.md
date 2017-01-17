---
layout: default-left-nav
category: App Layout
title: Top Primary Nav
resource: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">{{page.category}}</div>
  <div class="rs-detail-header-title">{{page.title}}</div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <div class="rs-row">
      <div class="span-4">
        <p>The Primary Navigation bar is generally used for "Product Navigation", meaning that product features like Cloud Servers, Databases, etc. are represented in the primary nav.</p>
        <ul>
          <li>If a primary navigation item has multiple nav items under it, use the <a href="{{site.baseurl}}/components/dropdowns/#primary-dropdown">Primary Dropdown</a>.</li>
          <li>Be sure to highlight the nav item with an active state so users know what section they are in.</li>
        </ul>
      </div>
      <div class="span-8">
        <img src="{{site.baseurl}}/img/top-primary-navigation.png" style="width:100%;">
      </div>
    </div>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body">
    {% include demos/primary_nav.html %}
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">
    {% highlight html %}{% include demos/primary_nav.html %}{% endhighlight %}
  </div>
</div>