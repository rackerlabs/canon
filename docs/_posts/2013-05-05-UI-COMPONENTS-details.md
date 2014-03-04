---
category : ui components
title: Details
updated: August 14, 2013
author: Lauren Dowdy
adherence: 1
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <h3>When to use</h3>
    <p>Use this to display details about a single item or product. Combine this component with the <a href="#action-buttons">action button</a>, <a href="#action-dropdown">action dropdown</a>, <a href="#status-indicators">status indicator, <a href="#embedded-table">embedded tables</a>, and <a href="#popover">popovers</a>. For more information on how to combine components, use the <a href="/ux-patterns/#detail-view">Detail View Pattern</a>. </p>
    <p>The content of a details component is broken into 2 main parts: The <strong>details header</strong> summarizes the item you are viewing. The <strong>details sections</strong> are sub-sections that display status, technical specifications, settings, or tables of data about the product. These are often combined with editable actions that spawn popovers.</p>
    <h5>Details Header</h5>
    <ul>
      <li>Grey text shows the category of the product.</li>
      <li>Primary text shows the name of the product.</li>
      <li>Include tags (if applicable).</li>
    </ul>
    <h5>Details Sections</h5>
    <ul>
      <li>The section header should identify the type of content within the sub-section.</li>
      <li>This pattern is built to be used with content like key / value lists, <a href="#embedded-table">embedded tables</a>, etc.</li>
      <li>The entity's <a href="#status-indicators">status</a> should always be the first item in the key / value list.</li>
      <li>When key / value items are editable, use <a href="#edit-button">edit buttons</a> to open a popover, modal or new page to update.</li>
    </ul>
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span> </h4>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-content rs-panel rs-detail-large" style="margin-top: 0;">
      <div class="rs-detail-header">
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
    <br />
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<div class="rs-content rs-panel">
  <div class="rs-detail-header">
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
</div>{% endhighlight %}
  </div>
</div>

