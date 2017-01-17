---
parent: Progress Bars
title: Progress Label
order: 3
---
<p>Labelling is optional but can be very useful when you need a textual readout of the metric.</p>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 15em; margin-right: 2em;">
  <h2>Example</h2>
{% capture fixed %}<div class="rs-progress rs-progress-medium">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
<span class="rs-progress-label">407.2 MB of 2 GB</span>{% endcapture %}
{{ fixed }}
</div>
<div class="rs-pull-left"><h2>Markup</h2><div class="collapsible-highlight">{% highlight html %}{{ fixed }}{% endhighlight %}</div></div>
</div>