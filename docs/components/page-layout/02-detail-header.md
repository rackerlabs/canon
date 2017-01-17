---
parent: Page Layout
title: Page Header
order: 2
---
<ul>
  <li>Breadcrumbs should be included at the top of the page header to help users find their way.</li>
  <li>Grey text shows the category of the product.</li>
  <li>Primary text shows the name of the product.</li>
  <li>Include tags (if applicable).</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
{% capture header %}<div class="rs-detail-header">
  <ul class="rs-breadcrumbs">
    <li class="rs-breadcrumb-item">
      <a href="" class="rs-breadcrumb-link">Product Area</a>
    </li>
    <li class="rs-breadcrumb-item">
      <a href="" class="rs-breadcrumb-link">Item List</a>
    </li>
    <li class="rs-breadcrumb-item">
      <span class="rs-breadcrumb-text">Item Name</span>
    </li>
  </ul>
  <div class="rs-detail-header-actions">
    <button class="rs-btn rs-btn-action">
      <span class="rs-cog"></span>
      Actions
      <span class="rs-caret"></span>
    </button>
  </div>
  <div class="rs-detail-header-subtitle">Product Category</div>
  <div class="rs-detail-header-title">Item Name</div>
</div>{% endcapture %}
<div style="width: 600px; border: 1px #e0e0e0 solid; margin-right: 2em;">{{ header }}</div>
</div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ header }}{% endhighlight %}
  </div>
</div>
