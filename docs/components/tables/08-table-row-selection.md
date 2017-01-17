---
parent: Tables
title: Row Selection
order: 8
---
<ul>
  <li><strong>Use check boxes</strong> for row selection when a user can perform batch operations on items in the list</li>
  <li><strong>Use radio button</strong> selection when users can only perform actions on one item at a time</li>
  <li><strong>When using javascript</strong> to select a row, put the click event on the &lt;tr&gt; tag to optimize the user's click target</li>
</ul>

<div style="overflow: hidden">
  <div class="rs-pull-left" style="width:25em; height: 25em; margin-right: 2em;">
    <h2>Example</h2>
    {% include table-row-selection.html %}
  </div>
  <div class="rs-pull-left"><h2>Markup</h2>
    {% highlight html %}{% include table-row-selection.html %}{% endhighlight %}
  </div>
</div>
