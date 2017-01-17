---
parent: Page Layout
title: Summary
order: 1
---
<p>Use the page layout elements to display details about a single item.</p>
<p>Page Layout consists of 2 main elements:</p>
<ul>
  <li><strong>Detail Header</strong> summarizes the item you are viewing, includes breadcrumbs for wayfinding, and often includes an <a href="">Actions Button</a>. </li>
  <li><strong>Detail Sections</strong> are sub-sections that display status, tech specs, editable settings, or tables of related objects.</li>
</ul>
<p>For more information on how to combine components inside the Page Layout, see the <a href="/ux-patterns/#detail-view">Detail View Pattern</a>. </p>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
    {% capture detail %}
    <div class="rs-content rs-panel rs-detail-large">
      <div class="rs-detail-header">
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
      </div>
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
      <div class="rs-detail-section">
        <div class="rs-detail-section-header">
          <div class="rs-detail-section-title">Item Sub-Section</div>
        </div>
        <div class="rs-detail-section-body">
          <ul class="rs-detail-list">
            <li class="rs-detail-item">
              <div class="rs-detail-key">Longer Key</div>
              <div class="rs-detail-value">Longer Value</div>
            </li>
            <li class="rs-detail-item">
              <div class="rs-detail-key">Even Longer Key</div>
              <div class="rs-detail-value">Long Explanation Value</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="rs-collapsible-section rs-detail-section collapsed">
        <div class="rs-detail-section-header">
          <div class="rs-caret"></div>
          <div class="rs-detail-section-title">Collapsible Section</div>
          <div class="rs-detail-section-subtitle">2 Options Configured</div>
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
      </div>
    </div>
    {% endcapture %}
    <div style="width: 600px; border: 1px #e0e0e0 solid; margin-right: 2em;">
      {{ detail }}
    </div>
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ detail }}{% endhighlight %}
  </div>
</div>