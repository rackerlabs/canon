---
parent: Tables
title: Embedded Table
order: 3
---
<ul>
  <li>Use when the table is not the primary UI Component on the page.</li>
  <li>Use in a section of the <a href="#details">Details</a> component, or as content of a <a href="#popover">Popover</a>.</li>
  <li>Use when you need to limit the height of a table, by allowing the rows to scroll.</li>
  <li>The embedded table provides vertical scrolling via three height classes.</li>
</ul>
<div style="overflow: hidden">
  <h2>Small Embedded Table</h2>
  <div class="rs-pull-left" style="width:28em; margin-right: 2em;">
    <h3>Example</h3>
    <div class="rs-embedded-list-table-wrapper rs-embedded-small">{% include embedded-table.html %}</div>
  </div>
  <div class="rs-pull-left"><h3>Markup</h3>
    {% highlight html %}<div class="rs-embedded-list-table-wrapper rs-embedded-small">
  {% include embedded-table.html %}
</div>{% endhighlight %}</div>
</div>
<hr>
<div style="overflow: hidden">
  <h2>Medium Embedded Table</h2>
  <div class="rs-pull-left" style="width:28em; margin-right: 2em;">
    <h3>Example: Medium</h3><div class="rs-embedded-list-table-wrapper rs-embedded-medium">{% include embedded-table.html %}</div>
  </div>
  <div class="rs-pull-left"><h3>Markup: Medium</h3>
    {% highlight html %}<div class="rs-embedded-list-table-wrapper rs-embedded-small">
  {% include embedded-table.html %}
</div>{% endhighlight %}</div>
</div>
<hr>
<div style="overflow: hidden">
  <h2>Large Embedded Table</h2>
  <div class="rs-pull-left" style="width:28em; margin-right: 2em;">
    <h3>Example: Large</h3>
    <div class="rs-embedded-list-table-wrapper rs-embedded-large">{% include embedded-table.html %}</div>
  </div>
  <div class="rs-pull-left"><h3>Markup: Medium</h3>
    {% highlight html %}<div class="rs-embedded-list-table-wrapper rs-embedded-small">
  {% include embedded-table.html %}
</div>{% endhighlight %}</div>
</div>