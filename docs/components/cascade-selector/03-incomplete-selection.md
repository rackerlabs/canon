---
parent: Cascade Selector
title: Incomplete State
order: 3
---
<p>When the user is required to select an item in each column, but has not.</p>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:50em;">
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
            <div class="rs-cascade-list-item-label">Item One</div>
          </a>
        </li>
        <li class="rs-cascade-list-item">
          <a href="#item-one-child-b-details" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Item Two</div>
          </a>
        </li>
        <li class="rs-cascade-list-item">
          <a href="#item-one-child-b-details" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Item Three</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="rs-cascade-column" style="width: 48%">
    <div class="rs-cascade-column-header">Not Sortable</div>
    <div class="rs-cascade-column-content">
      <div class="rs-cascade-message">Please select a thing</div>
    </div>
  </div>
</div>{% endcapture %}{{ cascade }}
  </div>
  <div class="rs-pull-left">{% highlight html %}{{ cascade }}{% endhighlight %}</div>
</div>
