---
layout: default-left-nav
category: App Layout
title: Utility Navigation
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
        <p>The Utility Navigation bar is the global, application header and should be included in any major offering integrating with the Rackspace platform.</p>
        <ul>
          <li>Dropdowns and links on the right side of the bar should be used for connecting to platform capabilities like account settings, support links, support tickets, billing, etc</li>
          <li>Dropdown and links on the left side should be used to SSO between major Rackspace properties and supported third-party offerings.</li>
          <li>The Rackspace logo should take users to the global Rackspace account dashboard.</li>
        </ul>
      </div>
      <div class="span-8">
        <img src="{{site.baseurl}}/img/utility-navigation.png" style="width: 100%;">
      </div>
    </div>
    
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body">
    {% include demos/utility_nav.html %}
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">
{% highlight html %}{% include demos/utility_nav.html %}{% endhighlight %}
  </div>
</div>