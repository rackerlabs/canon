---
parent: Page Layout
title: Loading a Section
order: 5
---
<ul>
  <li>When you need to load the section content after a user has clicked to expand, use the loading class to show what's happening.</li>
  <li>This can also be used for regular lazy-loading of sections.  Just keep the contents collapsed until the content is loaded, then remove the loading and collapsed classes.</li>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
{% capture section %}<div class="rs-collapsible-section rs-detail-section loading">
  <div class="rs-detail-section-header" tabindex="0">
    <div class="rs-caret"></div>
    <div class="rs-detail-section-title">Loading</div>
    <div class="rs-detail-section-subtitle">Getting data.</div>
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