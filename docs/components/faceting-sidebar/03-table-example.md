---
parent: Faceting Sidebar
title: Table Example
order: 3
---
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em; ">
    <h2>Example</h2>
    <div style="width: 80em; position: relative; border: 1px #e0e0e0 solid;">{% include facets.html %}{% include faceted-list.html %}</div>
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{% include facets.html %}{% include faceted-list.html %}{% endhighlight %}
  </div>
</div>