---
parent: Popover
title: Stacked Labels
order: 4
---
<p>Use for single field forms.  See the <a href="#simple-vertical-form">Simple Vertical Form</a> components.</p>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 400px; height: 250px; margin-right: 2em;">
<h2>Example</h2>
{% capture popover %}<div class="rs-popover">
  <div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
  <div class="rs-popover-content">
    <div class="rs-popover-body">
      <form>
        <label>Label One</label>
        <input type="text" class="input-large">
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