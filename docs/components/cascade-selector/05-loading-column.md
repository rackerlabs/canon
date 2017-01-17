---
parent: Cascade Selector
title: Column Loading
order: 5
---
<p>Use when the users selection in one column requires the contents of the next column to be loaded.</p>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
{% capture cascade %}<div class="rs-cascade">
  <div class="rs-cascade-column" style="width: 30%">
    <div class="rs-cascade-column-header">
      <a href="#" class="rs-table-sort rs-table-sort-desc">
        <span class="rs-table-sort-text">Sorted Descending</span>
        <span class="rs-table-sort-indicator"></span>
      </a>
    </div>
    <div class="rs-cascade-column-content">
      <ul class="rs-cascade-list">
        <li class="rs-cascade-list-item">
          <a href="#item-one-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Default</div>
          </a>
        </li>
        <li class="rs-cascade-list-item hover">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Hover</div>
          </a>
        </li>
        <li class="rs-cascade-list-item selected">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Selected</div>
          </a>
        </li>
        <li class="rs-cascade-list-item disabled">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Disabled</div>
          </a>
        </li>
        <li class="rs-cascade-list-item">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Truncated Too Long</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="rs-cascade-column" style="width: 22%">
    <div class="rs-cascade-column-header">
      <a href="#" class="rs-table-sort hover">
        <span class="rs-table-sort-text">Sortable</span>
        <span class="rs-table-sort-indicator"></span>
      </a>
    </div>
    <div class="rs-cascade-column-content" id="item-one-child">
      <ul class="rs-cascade-list">
        <li class="rs-cascade-list-item ">
          <a href="#item-one-child-a-details" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Item Default</div>
          </a>
        </li>
        <li class="rs-cascade-list-item hover">
          <a href="#item-one-child-b-details" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Item Hover</div>
          </a>
        </li>
        <li class="rs-cascade-list-item selected">
          <a href="#item-one-child-b-details" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Item Selected</div>
          </a>
        </li>
        <li class="rs-cascade-list-item disabled">
          <a href="#item-one-child-b-details" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Item Disabled</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="rs-cascade-column" style="width: 48%">
    <div class="rs-cascade-column-header">Not Sortable</div>
    <div class="rs-cascade-column-content" id="item-one-child-a-details">
      <div class="rs-cascade-message"><span class="rs-status-error"><i class="rs-icon rs-loading-indicator"></i></span></div>
    </div>
  </div>
</div>{% endcapture %}{{ cascade }}
  </div>
  <div class="rs-pull-left">{% highlight html %}{{ cascade }}{% endhighlight %}</div>
</div>
