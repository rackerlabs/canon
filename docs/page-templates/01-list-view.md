---
layout: default-left-nav
category: Page Templates
title: List View
resource: true
single: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">Page Templates</div>
  <div class="rs-detail-header-title">List View</div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <p>The List View is extremely useful as a navigational hub, but their real power is that they enable users to do these three things:</p>
    <ol>
      <li><strong>Quickly find items</strong>
        <ul>
          <li><a href="/ui-components/#facets" class="highlight-source" data-highlight-target="facets-example">Faceting Sidebar</a></li>
          <li><a href="/ui-components/#forms" class="highlight-source" data-highlight-target="list-table-filter">Search Input</a></li>
          <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="list-view-sort-example">Table Sorting</a></li>
        </ul>
      </li>
      <li><strong>Easily assess item health</strong>
        <ul>
          <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="row-status-{{page.items[1].id}}">Status Column</a></li>
          <li><a href="/ui-components/#monitoring-status-list" class="highlight-source" data-highlight-target="status-list-{{page.items[1].id}}">Monitor Indicators</a></li>
        </ul>
      </li>
      <li><strong>Perform actions without drilling down</strong>
        <ul>
          <li><a href="/ui-components/#action-dropdown" class="highlight-source" data-highlight-target="dropdown-{{page.items[1].id}}">Row Actions</a></li>
          <li><a href="/ui-components/#buttons" class="highlight-source" data-highlight-target="delete-items-button">Batch Actions</a></li>
        </ul>
      </li>
    </ol>
    <p>Additionally, take a look at the demo for List Views:</p>
    <a class="rs-btn rs-btn-primary" href="{{ site.baseurl }}/demos/" target="blank">See List View Demo</a>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body">
    <div  style="border: 1px #e0e0e0 solid; position: relative;">{% include facets.html %}{% include faceted-list.html%}</div>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">{% highlight html %}{% include facets.html %}{% include faceted-list.html%}{% endhighlight %}</div>
</div>