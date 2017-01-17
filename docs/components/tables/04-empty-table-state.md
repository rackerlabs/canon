---
parent: Tables
title: Empty State
order: 4
---
<p>Use any time there are no items in a list and the user can create items that populate the list.</p>
<p>Empty state markup works in both List View tables and Embedded Tables.</p>
<p>Use the text in the examples as templates for writing your empty state messages.</p>
<ol>
  <li><strong>Use the title</strong> to explain that the table is empty</li>
  <li><strong>Use the subtitle</strong> to help the user understand what the product does for them</li>
</ol>

<div style="overflow: hidden">
  <h2>List View Table Empty State</h2>
  <div class="rs-pull-left" style="width:45em; margin-right: 2em;">
    <h3>Example</h3>
    {% include list-view-table-empty-state.html %}
  </div>
  <div class="rs-pull-left"><h3>Markup</h3>
    {% highlight html %}{% include list-view-table-empty-state.html %}{% endhighlight %}
  </div>
</div>
<hr>
<div style="overflow: hidden">
  <h2>Embedded Table Empty State</h2>
  <div class="rs-pull-left" style="width:45em; margin-right: 2em;">
    <h3>Example</h3>
    {% include embedded-table-empty-state.html %}
  </div>
  <div class="rs-pull-left"><h3>Markup</h3>
    {% highlight html %}{% include embedded-table-empty-state.html %}{% endhighlight %}
  </div>
</div>
