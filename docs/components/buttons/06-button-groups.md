---
parent: Buttons
title: Button Groups
order: 6
---
<ul>
  <li>Use these in <a href="/ui-components/#popover">Popovers</a> or <a href="/ui-components/#create-form">Forms</a> to group the submit button and cancel button</li>
  <li>A button group should never contain more than one primary button</li>
  <li>The cancel action must always be an <span class="rs-no-wrap">rs-btn-link</span> as shown in the example</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 450px; margin-right: 2em;">
<h2>Example</h2>
{% capture btngroupone %}
<div class="rs-btn-group">
  <button type="submit" class="rs-btn rs-btn-primary">Submit</button>
  <button type="button" class="rs-btn">Go Back</button>
  <button type="button" class="rs-btn rs-btn-link">Cancel</button>
</div>
{% endcapture %}
{{ btngroupone }}
</div>
<div class="rs-pull-left">
  <h2>Markup</h2>
  {% highlight html %}{{ btngroupone }}{% endhighlight %}
  </div>
</div>
<h1 class="light">On Form Submit</h1>
<ul>
  <li>Disable all buttons in the group</li>
  <li>Add the "loading" class to the primary button</li>
</ul>
<div class="rs-btn-group">
  <button type="submit" class="rs-btn rs-btn-primary disabled loading" disabled="disabled">Submit</button>
  <button type="button" class="rs-btn disabled" disabled="disabled">Go Back</button>
  <button type="button" class="rs-btn rs-btn-link disabled">Cancel</button>
</div>

<h2>Markup</h2>
{% highlight html %}<div class="rs-btn-group">
<button type="submit" class="rs-btn rs-btn-primary disabled loading" disabled="disabled">Submit</button>
<button type="button" class="rs-btn disabled" disabled="disabled">Go Back</button>
<button type="button" class="rs-btn rs-btn-link disabled">Cancel</button>
</div>{% endhighlight %}