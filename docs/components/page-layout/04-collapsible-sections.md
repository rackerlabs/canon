---
parent: Page Layout
title: Collapsible Sections
order: 4
---
<ul>
  <li>Use collapsible page sections when the content does not need to be immediately visible to users.</li>
  <li>When the section is collapsed, use the rs-detail-section-subtitle element to display a brief summary or status for the section.</li>
  <li>Collapsible sections also come in handy if you need to load content only after the user has clicked to expand the section.</li>
  <li>See the Loading Section article below for more details on loading data after the user has clicked to expand the section.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
{% capture section %}<div class="rs-collapsible-section rs-detail-section collapsed">
  <div class="rs-detail-section-header">
    <div class="rs-caret"></div>
    <div class="rs-detail-section-title">Collapsed Section</div>
    <div class="rs-detail-section-subtitle">Brief summary of contents or status</div>
  </div>
  <div class="rs-detail-section-body">
    <ul class="rs-detail-list">
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
</div>{% endcapture %}
<div style="width: 600px; border: 1px #e0e0e0 solid; margin-right: 2em;">{{ section }}</div>
</div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ section }}{% endhighlight %}
  </div>
</div>