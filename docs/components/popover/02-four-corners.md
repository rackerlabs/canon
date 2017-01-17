---
parent: Popover
title: Four Corners
order: 2
---
<p>The popover comes with arrows on each top corner.  Depending on the relative location of the generating element, you may want to choose the left or right side arrows.</p>

<ul>
  <li><strong>Left and right</strong> side arrows are often useful in the <a href="/ui-components/#details">Details</a> component.</li>
  <li><strong>Top arrows</strong> are useful when spawning a popover from a button like the Actions button in <a href="/ui-components/#details">Details</a>.</li>
</ul>
<ul>
  <li>The popover spawns after clicking the <a href="#edit-buton">Edit Button</a> in the Key / Value list.</li>
  <li>The popover spawns from the <a href="#details">Actions Button</a> after a selection has been made from the dropdown.</li>
</ul>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 400px; height: 300px; margin-right: 2em;">
<h2>Example</h2>
{% capture popover %}<div class="rs-popover">
  <div class="rs-popover-arrow rs-popover-arrow-left-top"></div>
  <div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
  <div class="rs-popover-arrow rs-popover-arrow-top-right"></div>
  <div class="rs-popover-arrow rs-popover-arrow-right-top"></div>
  <div class="rs-popover-content">
    <form class="rs-form-horizontal rs-form-medium">
      <div class="rs-popover-body">
        <div class="rs-control-group">
          <label class="rs-control-label">Label One</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-medium">
          </div>
        </div>
        <div class="rs-control-group">
          <label class="rs-control-label">Label Two</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-medium"> GB
          </div>
        </div>
        <div class="rs-control-group">
          <label class="rs-control-label">Label Three</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-medium">
            <select>
              <option>One</option>
              <option>Two</option>
            </select>
          </div>
        </div>
      </div>
      <div class="rs-popover-footer rs-btn-group">
        <button type="submit" class="rs-btn rs-btn-primary">Save</button>
        <button type="button" class="rs-btn rs-btn-link">Cancel</button>
      </div>
    </form>
  </div>
</div>
{% endcapture %}
{{ popover }}
</div>
<div class="rs-pull-left">
<h2>Markup</h2>
{% highlight html %}{{ popover }}{% endhighlight %}
</div>
</div>