---
category : app layout
title: Fluid Grid
updated: July 2, 2013
author: Eddy Hernandez
adherance: 0
tags : [intro, about, canon]
---

<div class="rs-row">
  <div class="span-3">
    <h3>How it works</h3>
    <p>Canon predefines options for page layout via the <a href="#content-area">content area</a> styles but sometimes a grid system is needed for content within those sections or for custom layouts. As such, Canon includes a responsive 12 column fluid grid.</p>
    <ul>
      <li>Create a grid row with the <code>rs-row</code> class</li>
      <li>Add the appropriate number of <code>span-*</code> columns. As this is a 12-column grid, each <code>span-*</code> spans a number of those 12 columns, and should always add up to 12 for each row</li>
      <li>The column gutters can be removed by using <code>rs-row-collapse</code> as the row class</li>
      <li>Offsets can be applied with <code>offset-*</code></li>
      <li>Nest grids by adding a new row and columns within a <code>span-*</code> column</li>
    </ul>
    <p><b>Responsive Options</b></p>
    <ul>
      <li>The default <code>span-*</code> columns stack vertically for viewports under 768px</li>
      <li>To prevent vertical stacking use <code>small-span-*</code> column classes</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div id="app-layout-grid">
      <div class="show-grid">
        <p>Default grid created with a <code>rs-row</code> and <code>span-*</code> columns</p>
        <div class="rs-row">
          <div class="span-2">span-2</div>
          <div class="span-10">span-10</div>
        </div>
        <div class="rs-row">
          <div class="span-6">span-6</div>
          <div class="span-6">span-6</div>
        </div>
        <div class="rs-row">
          <div class="span-4">span-4</div>
          <div class="span-8">span-8</div>
        </div>
        <br>
        <p>Column offsets via <code>offset-*</code></p>
        <div class="rs-row">
          <div class="span-6">span-6</div>
          <div class="span-4 offset-2">span-4 offset-2</div>
        </div>
        <div class="rs-row">
          <div class="span-8 offset-1">span-8 offset-1</div>
          <div class="span-3">span-3</div>
        </div>
        <br>
        <p>Nested Grid</p>
        <div class="rs-row">
          <div class="span-4">span-4
            <div class="rs-row">
              <div class="span-6">span-6</div>
              <div class="span-6">span-6</div>
            </div>
          </div>
          <div class="span-8">span-8
            <div class="rs-row">
              <div class="span-4">span-4</div>
              <div class="span-8">span-8</div>
            </div>
          </div>
        </div>
        <br>
        <p>Grid without column gutters via <code>rs-row-collapse</code></p>
        <div class="rs-row-collapse">
          <div class="span-2">span-2</div>
          <div class="span-10">span-10</div>
        </div>
        <div class="rs-row-collapse">
          <div class="span-6">span-6</div>
          <div class="span-6">span-6</div>
        </div>
        <div class="rs-row-collapse">
          <div class="span-4">span-4</div>
          <div class="span-8">span-8</div>
        </div>
      </div>
    </div>
    <h4>Markup</h4>
    {% highlight html %}
<!-- Default Grid -->
<div class="rs-row">
  <div class="span-2">span-2</div>
  <div class="span-10">span-10</div>
</div>
<div class="rs-row">
  <div class="span-6">span-6</div>
  <div class="span-6">span-6</div>
</div>
<div class="rs-row">
  <div class="span-4">span-4</div>
  <div class="span-8">span-8</div>
</div>
<!-- Grid Offset -->
<div class="rs-row">
  <div class="span-6">span-6</div>
  <div class="span-4 offset-2">span-4 offset-2</div>
</div>
<div class="rs-row">
  <div class="span-8 offset-1">span-8 offset-1</div>
  <div class="span-3">span-3</div>
</div>
<!-- Nesting Grid -->
<div class="rs-row">
  <div class="span-4">span-4
    <div class="rs-row">
      <div class="span-6">span-6</div>
      <div class="span-6">span-6</div>
    </div>
  </div>
  <div class="span-8">span-8
    <div class="rs-row">
      <div class="span-4">span-4</div>
      <div class="span-8">span-8</div>
    </div>
  </div>
</div>
<!-- Collapse Column Gutters -->
<div class="rs-row-collapse">
  <div class="span-2">span-2</div>
  <div class="span-10">span-10</div>
</div>
<div class="rs-row-collapse">
  <div class="span-6">span-6</div>
  <div class="span-6">span-6</div>
</div>
<div class="rs-row-collapse">
  <div class="span-4">span-4</div>
  <div class="span-8">span-8</div>
</div>
{% endhighlight %}
  </div>
</div>
