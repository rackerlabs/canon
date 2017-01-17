---
layout: default-left-nav
category: App Layout
title: Top Secondary Nav
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
        <p>The top secondary navigation bar is optional, and rarely used, but it does come in handy when you've got a third or fourth layer of navigation in addition to dropdown navigation.</p>
      </div>
      <div class="span-8">
        <img src="{{site.baseurl}}/img/top-secondary-navigation.png" style="width: 100%;">
      </div>
    </div>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body">
    {% include demos/secondary_nav.html %}
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">
    {% highlight html %}{% include demos/secondary_nav.html %}{% endhighlight %}
  </div>
</div>