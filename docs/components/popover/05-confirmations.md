---
parent: Popover
title: Confirmations
order: 5
---
<ul>
  <li>Actions with permanent effects should be short and to the point.</li>
  <li>Emphasize the permanent effect in bold.</li>
</ul>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 400px; height: 250px; margin-right: 2em;">
<h2>Example</h2>
{% capture popover %}<div class="rs-popover">
  <div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
  <div class="rs-popover-content">
    <div class="rs-popover-body">
      <strong>Permanently delete</strong> server Nimbus-Server?
    </div>
    <div class="rs-popover-footer rs-btn-group">
      <div class="rs-btn rs-btn-primary">Delete Server</div>
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