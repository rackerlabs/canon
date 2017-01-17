---
parent: Tables
title: Row Actions
order: 7
---
<ul>
  <li>Use <a href="action-cogs">Action Cogs</a> to spawn an <a href="action-dropdown">Action Dropdown</a> when there are multiple actions that can be taken on an item in a list</li>
  <li>Cogs should appear after status, checkboxes or radio button columns</li>
</ul>

<div style="overflow: hidden">
  <div class="rs-pull-left" style="width:25em; height: 25em; margin-right: 2em;">
    <h2>Example</h2>
    {% include table-row-actions.html %}
  </div>
  <div class="rs-pull-left"><h2>Markup</h2>
    {% highlight html %}{% include table-row-actions.html %}{% endhighlight %}
  </div>
</div>
