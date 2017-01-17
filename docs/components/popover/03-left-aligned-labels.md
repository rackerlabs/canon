---
parent: Popover
title: Left Aligned Labels
order: 3
---
<p>Popovers should not contain large forms, but if they hold more than one input, it's best to use left-aligned labels.</p>
<p>Set the sizing class on the form to match the width of the longest label (xsmall, small, medium, large, xlarge, xxlarge).</p>
<p>See the <a href="#simple-horizontal-form">Simple Horizontal Form</a> components.</p>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 400px; height: 250px; margin-right: 2em;">
<h2>Example</h2>
{% capture popover %}
<div class="rs-popover">
  <div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
  <div class="rs-popover-content">
    <div class="rs-popover-body">
      <form class="rs-form-horizontal rs-form-medium">
        <div class="rs-control-group">
          <label class="rs-control-label">Label One</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-small">
          </div>
        </div>
        <div class="rs-control-group">
          <label class="rs-control-label">Label Two</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-small"> GB
          </div>
        </div>
        <div class="rs-control-group">
          <label class="rs-control-label">Label Three</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-small">
            <select>
              <option>One</option>
              <option>Two</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <div class="rs-popover-footer rs-btn-group">
      <div class="rs-btn rs-btn-primary">Save Settings</div>
      <div class="rs-btn rs-btn-link">Cancel</div>
    </div>
  </div>
</div>
{% endcapture %}
{{ popover }}
</div>
<div class="rs-pull-left">
<h2>Markup</h2>
{% highlight html %}{{popover}}{% endhighlight%}
</div>
</div>