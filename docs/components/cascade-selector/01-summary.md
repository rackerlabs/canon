---
parent: Cascade Selector
title: Summary
order: 1
---
<p>The Cascade is very useful when the user is choosing from several options, which each have their own sub options. The example is the Image selector used when creating a Rackspace Cloud Server.</p>
<h3>General Guidelines</h3>
<ul>
  <li>Avoid using more than three columns.  Any more than that and you're probably in need of a different pattern.</li>
  <li>Though great for handling parent-child selection interactions, the weakness of the cascade is that it does not let users compare options side by side.  If that is a use case in your design, consider another pattern.</li>
  <li>Try to avoid scrolling.  Often it can't be avoided though, so just keep it under 20 or 30 rows.  More than that and you might need a search interaction coupled with the cascade.</li>
  <li>If you need to insert icons into the rows, </li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
    <h2>Example</h2>
{% capture summary %}<div class="rs-cascade">
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
            <i class="rs-icon rs-icon-servers"></i>
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Default</div>
          </a>
        </li>
        <li class="rs-cascade-list-item hover">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-icon rs-icon-servers"></i>
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Hover</div>
          </a>
        </li>
        <li class="rs-cascade-list-item selected">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-icon rs-icon-servers"></i>
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Selected</div>
          </a>
        </li>
        <li class="rs-cascade-list-item disabled">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-icon rs-icon-servers"></i>
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Disabled</div>
          </a>
        </li>
        <li class="rs-cascade-list-item">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-icon rs-icon-servers"></i>
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
      <div class="rs-inner">
        <h3>Item One - Child A Not Sortable</h3>
        <hr>
        <p>Descriptive stuff can go here</p>
      </div>
    </div>
  </div>
</div>{% endcapture %}{{ summary }}
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ summary }}{% endhighlight %}
  </div>
</div>