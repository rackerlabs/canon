---
layout: post
category : ui components
title: Facets
updated: April 8, 2014
author: Andrew Raiford
adherence: 3
tags : [intro, about, canon]
---
<div class="rs-row">

  <div class="span-3">
    <h3>How it works</h3>
    <p>Facets can be used to apply filters to a <a href="#list-view-table">Table</a>. This is not a standalone component - it should be used as part of the <a href="/ux-patterns/#list-view">List View Pattern</a>.</p>
    <h4>Rules for Use</h4>
    <ul>
      <li>The top header should reflect the name of the product - EX: "Filter Servers"<div>If the product name is long and gets truncated, use "Filter List" instead.</div></li>
      <li>Organize sections based on usefulness - For example: we place priority on tags</li>
      <li>Sections must contain at least two items to appear in the facet sidebar</li>
      <li>Facets can contain icons related to items in the table - see the Status example</li>
      <li>Only one facet section should have icons per page to reduce cognitive load</li>
      <li>Facet counts are optional and although useful, they can result in extra processing to calculate - <i>beware of performance issues</i></li>
    </ul>
    <h4>Toggling Facet Sections</h4>
    <ul>
      <li>Limit facet sections to 5 visible facet items</li>
      <li>Add the "more" / "less" link when a section has 6 or more facet items</li>
      <li>Use "expanded" and "collapsed" classes on the rs-facet-section element to easily track toggled states</li>
    </ul>
    <h4>About Filtering</h4>
    <p>Table filtering should usually reduce result sets rather than increase them. A good analogy is that of choosing to query a system using "OR" versus "AND" operators.</p>
    <p>How you choose to filter will depend on the nature of your data, and what your users are trying to achieve by filtering.</p>
    <p>When filtering using "OR" logic, do not hide excluded facets - just add the "disabled" class to show that they are not within the result set.</p>
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span> </h4>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-facets" style="width:260px;">{% include facets.html %}</div><h4 class="markup-margin">Markup</h4>
    {% highlight html %}<div class="rs-sidebar rs-facets">
  {% include facets.html %}
</div>{% endhighlight %}
  </div>
</div>

