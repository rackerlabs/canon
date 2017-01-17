---
parent: Cascade Selector
title: Error State
order: 6
---
<p>Use when the cascade has failed to load.</p>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
{% capture cascade %}<div class="rs-cascade">
  <div class="rs-cascade-message"><span class="rs-status-error"><i class="rs-icon rs-icon-error-indicator"></i> Error loading content</span></div>
</div>{% endcapture %}{{ cascade }}
  </div>
  <div class="rs-pull-left">{% highlight html %}{{ cascade }}{% endhighlight %}</div>
</div>

