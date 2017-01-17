---
parent: Forms
title: Inline Help
order: 9
---
<p>Use inline text when labels can't sufficiently explain the information but is too pertinent for a tooltip.</p>
<ul>
  <li>Use .rs-help-inline to add units to the right of the input.</li>
  <li>Use .rs-help-block to add additional help info under the field. This should be used sparingly.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 550px; margin-right: 2em;">
<h2>Example</h2>
{% capture form %}
<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Check Every</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="30">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">
        30-second minimum period.
      </span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Timeout After</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="30">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">
        If check doesn't respond before timeout, alarms will go critical.
      </span>
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