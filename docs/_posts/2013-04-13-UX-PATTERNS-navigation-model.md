---
layout: post
category : ux patterns
title: Navigation Model
updated: September 30, 2013
author: Lauren Dowdy
adherence: 2
tags : [intro, about, canon]
---

<div class="rs-row">
  <div class="span-3">
    <p>The hub and spoke navigation model produces a flat, simple application architecture. The model uses three main page types: the <a target="blank" href="{{ site.baseurl }}/demos">List View</a>, <a href="#detail-view">Detail View</a> and <a href="#create-view">Create View</a>.</p><p>Actions are kept in context on these pages by way of the <a href="/ui-components/#popover">popover component</a>. Building your application to follow this model will help users keep a consistent mental picture of the application structure and ensure they accomplish their goals quickly and intuitively. </p>
    <h3>When to use</h3>
    <ul>
      <li>Each large "hub" is related to a UX Pattern, with implementation details below on this page.</li>
      <li>Each "spoke" coming off a hub represents a <a href="{{ site.baseurl }}/ui-components">UI Component</a> within the pattern.</li>
      <li>Use <a target="blank" href="{{ site.baseurl }}/demos">List Views</a> for managing and assessing many items of one type.</li>
      <li>Use the <a href="#detail-view">Detail View</a> when items have child items with their own set of actions and details.</li>
      <li>Use the <a href="#create-view">Create View</a> when items have complex configuration settings or need a help section to guide users through the creation process.</li>
    </ul>
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span></h4>
  </div>
  <div class="span-8">
    <img src="http://d6028ae8eb433bfc9fc7-a4c1bfca948fa9e57440a42732196fcf.r55.cf1.rackcdn.com/Screen%20Shot%202013-09-30%20at%204.49.55%20PM.png" height="611" width="874">
  </div>
</div>



