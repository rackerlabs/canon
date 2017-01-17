---
parent: Forms
title: Text Area
order: 8
---
<p>Use textareas within a form to accept a large amount of text, or allow the user to input multiple items, like a list of IP addresses.</p>
<p>Textarea sizes are the same as inputs: mini, small, medium, large, xlarge, xxlarge</p>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 550px; margin-right: 2em;">
<h2>Example</h2>
{% capture form %}
<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">IP Addresses</label>
    <div class="rs-controls">
      <textarea class="rs-input-xlarge" placeholder="Separate multiple IPs with commas"></textarea>
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