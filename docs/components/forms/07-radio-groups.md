---
parent: Forms
title: Radio Groups
order: 7
---
<p>Use radio groups when the user needs to make a selection from a small set of options.</p>
<p>Optionally, you can explain the differences between the choices with a string of text.</p>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 550px; margin-right: 2em;">
<h2>Example</h2>
{% capture form %}
<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Server Type</label>
    <div class="rs-controls">
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>First-Generation Server</strong><br>
        <span class="rs-help-block">
          Optional description text that explains the choice
        </span>
      </label>
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Next-Generation Server</strong>
        <span class="rs-help-block">
          Optional description text that explains the choice
        </span>
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