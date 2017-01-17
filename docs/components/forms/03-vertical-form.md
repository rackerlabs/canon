---
parent: Forms
title: Vertical Form
order: 3
---
<p>Used for single field forms.</p>
<ul>
  <li>Key / label appears above the form.</li>
  <li>These are only used within a popover.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 550px; margin-right: 2em;">
    <h2>Example</h2>
    {% capture form %}<form class="form-vertical">
  <div class="rs-control-group">
    <label class="rs-control-label">Load Balancer Name</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-large">
    </div>
  </div>
</form>
{% endcapture %}
    {{ form }}
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ form }}{% endhighlight %}
  </div>
</div>