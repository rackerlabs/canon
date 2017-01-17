---
parent: Forms
title: Validation Fixed
order: 6
---
<p>After users fix their data, the error is replaced with a check mark and a success message that appears for a few seconds and then disappears.</p>
<ul>
  <li>Add .success class to the .rs-control-group.</li>
  <li>Show message about the specific validation rule fixed.</li>
  <li>Multiple success messages can be shown at once.</li>
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
      <span class="rs-help-block">30-second minimum period.</span>
    </div>
  </div>
  <div class="rs-control-group success">
    <label class="rs-control-label">Timeout After</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="29">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">
        If check doesn't respond before timeout, alarms will go critical.
      </span>
      <span class="rs-validation-inline">
        <i class="rs-validation-indicator"></i>
        Timeout is less than check duration
      </span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Regions</label>
    <div class="rs-controls">
      <label class="rs-checkbox">
        <input type="checkbox" checked>
        Dallas (DFW)
      </label>
      <label class="rs-checkbox">
        <input type="checkbox" checked>
        Hong Kong (HKG)
      </label>
      <label class="rs-checkbox">
        <input type="checkbox">
        Washington Dulles (IAD)
      </label>
      <label class="rs-checkbox">
        <input type="checkbox">
        London (LON)
      </label>
      <label class="rs-checkbox">
        <input type="checkbox">
        Chicago (ORD)
      </label>
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