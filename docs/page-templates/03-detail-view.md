---
layout: default-left-nav
category: Page Templates
title: Detail View
resource: true
single: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">{{ page.category }}</div>
  <div class="rs-detail-header-title"> {{page.title}} </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <p>Use this pattern to show the user details about a single item or product. The content of a detail view can be broken into 3 main parts:</p>
    <ol>
      <li>
        <strong>Page Header</strong>
        <p>The page header on Detail Views should contain the following elements:</p>
        <ul>
          <li><a href="{{site.baseurl}}components/breadcrumbs/">Breadcrumbs</a> to help users get back to where they came from.</li>
          <li>A top sub-title which should tell the user what "type" of item they are looking at.  So, if this was a Cloud Server, the top sub-title would say "Cloud Server"</li>
          <li>The page title should always contain the name of the thing they are viewing.</li>
          <li>The <a href="{{site.baseurl}}/components/buttons/#action-buttons">Actions Button</a> should be included to enable the user to take actions without needing to scroll all the way down the page.</li>
        </ul>
      </li>
      <li>
        <strong>Page Sections</strong>
        <p><a href="">Page Sections</a> generally contain Key/Value pairs of data describing the item, and very often contain lists of related child objects.  Users should be able to perform actions where appropriate from the page sections as well.</p>
      </li>
      <li>
        <strong>Help Sidebar</strong>
        <p>The help sidebar should contain help text and links about managing the item being viewed.</p>
      </li>
    </ol>
    <p>See the demo for Detail View:</p>
    <a class="rs-btn rs-btn-primary" href="{{ site.baseurl }}/demos/details.html" target="blank">See Detail View Demo</a>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body"><div  style="border: 1px #e0e0e0 solid; position: relative;">{% include detail-view.html %}</div></div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">{% highlight html %}{% include detail-view.html %}{% endhighlight %}</div>
</div>