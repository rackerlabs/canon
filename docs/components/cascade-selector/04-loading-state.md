---
parent: Cascade Selector
title: Loading State
order: 4
---
<p>Use when the entire cascade is being loaded.</p>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; width:48em;">
{% capture cascade %}<div class="rs-cascade">
  <div class="rs-cascade-message"><span class="rs-status-error"><i class="rs-icon rs-loading-indicator"></i></span></div>
</div>{% endcapture %}{{ cascade }}
  </div>
  <div class="rs-pull-left">{% highlight html %}{{ cascade }}{% endhighlight %}</div>
</div>