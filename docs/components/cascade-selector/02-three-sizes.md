---
parent: Cascade Selector
title: Three Heights
order: 2
---
<p>Depending on context, you can choose from three different vertical sizes for your cascade.</p>
<ul>
  <li><strong>Short:</strong> A little squatty, but can be useful in small spaces such as popovers or modals</li>
  <li><strong>Medium:</strong> The default size.  This is the most common height for cascades.</li>
  <li><strong>Tall:</strong> Good for when the third detail column contains significant content and you don't want to scroll it..</li>
</ul>
<h2>Short Cascade</h2>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
    <h3>Example</h3>
{% capture short %}<div class="rs-cascade rs-cascade-short">
  <div class="rs-cascade-column" style="width: 30%">
    <div class="rs-cascade-column-header">
      <a href="#" class="rs-table-sort rs-table-sort-desc">
        <span class="rs-table-sort-text">Sorted Descending</span>
        <span class="rs-table-sort-indicator"></span>
      </a>
    </div>
    <div class="rs-cascade-column-content">
      <ul class="rs-cascade-list">
        <li class="rs-cascade-list-item rs-cascade-list-item-icon generic">
          <a href="#item-one-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Default</div>
          </a>
        </li>
        <li class="rs-cascade-list-item hover rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Hover</div>
          </a>
        </li>
        <li class="rs-cascade-list-item selected rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Selected</div>
          </a>
        </li>
        <li class="rs-cascade-list-item disabled rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Disabled</div>
          </a>
        </li>
        <li class="rs-cascade-list-item rs-cascade-list-item-icon generic">
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
      <div class="rs-inner">
        <h3>Item One - Child A Not Sortable</h3>
        <hr>
        <p>Descriptive stuff can go here</p>
      </div>
    </div>
  </div>
</div>{% endcapture %}{{ short }}
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ short }}{% endhighlight %}
  </div>
</div>
<hr>
<h2>Medium Cascade</h2>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
    <h3>Example</h3>
{% capture medium %}<div class="rs-cascade rs-cascade-medium">
  <div class="rs-cascade-column" style="width: 30%">
    <div class="rs-cascade-column-header">
      <a href="#" class="rs-table-sort rs-table-sort-desc">
        <span class="rs-table-sort-text">Sorted Descending</span>
        <span class="rs-table-sort-indicator"></span>
      </a>
    </div>
    <div class="rs-cascade-column-content">
      <ul class="rs-cascade-list">
        <li class="rs-cascade-list-item rs-cascade-list-item-icon generic">
          <a href="#item-one-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Default</div>
          </a>
        </li>
        <li class="rs-cascade-list-item hover rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Hover</div>
          </a>
        </li>
        <li class="rs-cascade-list-item selected rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Selected</div>
          </a>
        </li>
        <li class="rs-cascade-list-item disabled rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Disabled</div>
          </a>
        </li>
        <li class="rs-cascade-list-item rs-cascade-list-item-icon generic">
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
      <div class="rs-inner">
        <h3>Item One - Child A Not Sortable</h3>
        <hr>
        <p>Descriptive stuff can go here</p>
      </div>
    </div>
  </div>
</div>{% endcapture %}{{ medium }}
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ medium }}{% endhighlight %}
  </div>
</div>
<hr>
<h2>Tall Cascade</h2>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
    <h3>Example</h3>
{% capture tall %}<div class="rs-cascade rs-cascade-tall">
  <div class="rs-cascade-column" style="width: 30%">
    <div class="rs-cascade-column-header">
      <a href="#" class="rs-table-sort rs-table-sort-desc">
        <span class="rs-table-sort-text">Sorted Descending</span>
        <span class="rs-table-sort-indicator"></span>
      </a>
    </div>
    <div class="rs-cascade-column-content">
      <ul class="rs-cascade-list">
        <li class="rs-cascade-list-item rs-cascade-list-item-icon generic">
          <a href="#item-one-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Default</div>
          </a>
        </li>
        <li class="rs-cascade-list-item hover rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Hover</div>
          </a>
        </li>
        <li class="rs-cascade-list-item selected rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Selected</div>
          </a>
        </li>
        <li class="rs-cascade-list-item disabled rs-cascade-list-item-icon generic">
          <a href="#item-two-child" class="rs-cascade-list-item-content">
            <i class="rs-cascade-arrow"></i>
            <div class="rs-cascade-list-item-label">Icon Item Disabled</div>
          </a>
        </li>
        <li class="rs-cascade-list-item rs-cascade-list-item-icon generic">
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
      <div class="rs-inner">
        <h3>Item One - Child A Not Sortable</h3>
        <hr>
        <p>Descriptive stuff can go here</p>
      </div>
    </div>
  </div>
</div>{% endcapture %}{{ tall }}
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ tall }}{% endhighlight %}
  </div>
</div>