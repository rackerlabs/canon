---
parent: Page Layout
title: Page Sections
order: 3
---
<ul>
  <li>The section header should identify the type of content within the sub-section.</li>
  <li>This pattern is built to be used with content like key / value lists, <a href="#embedded-table">embedded tables</a>, etc.</li>
  <li>The entity's <a href="#status-indicators">status</a> should always be the first item in the key / value list.</li>
  <li>When key / value items are editable, use <a href="#edit-button">edit buttons</a> to open a popover, modal or new page to update.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
{% capture section %}
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Item Details</div>
  </div>
  <div class="rs-detail-section-body">
    <ul class="rs-detail-list">
      <li class="rs-detail-item">
        <div class="rs-detail-key">Key</div>
        <div class="rs-detail-value">Value</div>
      </li>
      <li class="rs-detail-item">
        <div class="rs-detail-key">Key</div>
        <div class="rs-detail-value">Value</div>
      </li>
      <li class="rs-detail-item">
        <div class="rs-detail-key">Key</div>
        <div class="rs-detail-value">
          Many<br>
          Different<br>
          Values
        </div>
      </li>
    </ul>
  </div>
</div>
{% endcapture %}
<div style="width: 600px; border: 1px #e0e0e0 solid; margin-right: 2em;">
  {{ section }}
</div>
</div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ section }}{% endhighlight %}
  </div>
</div>