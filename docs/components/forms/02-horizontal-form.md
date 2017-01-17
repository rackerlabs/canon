---
parent: Forms
title: Horizontal Form
order: 2
---
<p>Horizontal forms are the most frequently used type of form - generally for adding and editing objects using popovers.</p>
<ul>
  <li>Key / label is left-aligned to the form elements, aligning the text evenly along the left margin of the popover.</li>
  <li>Specify the form size to match the width of the longest label: xsmall, small, medium, large, xlarge, xxlarge.</li>
  <li>Only use this format within a popover, not on full-size create pages.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 550px; margin-right: 2em;">
    <h2>Example</h2>
    {% capture form %}<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Check Type</label>
    <div class="rs-controls">
      <select>
        <option>HTTP Check (Website)</option>
        <option>TCP Check (Port)</option>
        <option>Ping Check (Server)</option>
      </select>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Check Name</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-medium">
    </div>
  </div>
  <div class="rs-control-group success">
    <label class="rs-control-label">URL</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-xlarge">
      <span class="rs-help-block">Use the "https://" prefix to enable SSL</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Send Alarms to</label>
    <div class="rs-controls">
      <select>
        <option>Technical Contacts - Email</option>
      </select>
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