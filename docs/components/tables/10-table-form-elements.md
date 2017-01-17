---
parent: Tables
title: Form Elements
order: 10
---
<ul>
  <li>Only add form elements to list tables that live on a create page or in a popover</li>
  <li>Use <a href="/ui-components/#delete-buttons">Delete Buttons</a> to remove simple items from a table without requiring confirmation</li>
  <li>Use when delete is the only action available for an item</li>
  <li>Must be set in the last column of the row</li>
</ul>

<div style="overflow: hidden">
  <div class="rs-pull-left" style="width:30em; height: 25em; margin-right: 2em;">
    <h2>Example</h2>
    {% include table-form-elements.html %}
  </div>
  <div class="rs-pull-left"><h2>Markup</h2>
    {% highlight html %}{% include table-form-elements.html %}{% endhighlight %}
  </div>
</div>
