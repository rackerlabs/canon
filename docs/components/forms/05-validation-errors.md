---
parent: Forms
title: Validation Errors
order: 5
---
<p>Inline validation triggers when a user enters invalid data in a required fields. When the user enters valid information, the error is replaced with a check mark and a success message (see next example).</p>
<ul>
  <li>Add .error class to the .rs-control-group.</li>
  <li>Error appears only after the input has been focused for the first time.</li>
  <li>Show error about the specific validation rule triggered.</li>
  <li>Multiple error messages can be shown at once.</li>
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
  <div class="rs-control-group error">
    <label class="rs-control-label">Timeout After</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="45">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">
        If check doesn't respond before timeout, alarms will go critical.
      </span>
      <span class="rs-validation-block">
        <i class="rs-validation-indicator"></i>
        Timeout must be less than check frequency.
      </span>
    </div>
  </div>
  <div class="rs-control-group error">
    <label class="rs-control-label">Regions</label>
    <div class="rs-controls">
      <label class="rs-checkbox">
        <input type="checkbox">
        Dallas (DFW)
      </label>
      <label class="rs-checkbox">
        <input type="checkbox">
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
      <span class="rs-validation-block">
        <i class="rs-validation-indicator"></i>
        At least one region is required.
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