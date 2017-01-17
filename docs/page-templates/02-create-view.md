---
layout: default-left-nav
category: Page Templates
title: Create View
resource: true
single: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">{{page.category}}</div>
  <div class="rs-detail-header-title">{{page.title}}</div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <p>Use this page template for forms used in creating a single item or product. The Create View can be broken into 4 main parts:</p>
    <ol>
      <li>
        <strong>Configurating Basic Settings</strong>
        <p>The top section of the form should be where the user names their thing, and chooses basic settings of the object.</p>
      </li>
      <li>
        <strong>Selecting Complex Options</strong>
        <p>Split complex options and inputs into their own sections to make them a little easier to focus on.</p>
      </li>
      <li>
        <strong>Adding Child Objects</strong>
        <p>Many of the objects users create in our systems also have child items.  The example here is adding servers to a load balancer.  Tables which will contain child items should be empty by default, and must prompt the user to add items to the list.  The principle here is that when the user clicks the create button, they only see child items that are actually added to the parent.</p>
      </li>
      <li>
        <strong>The Help Sidebar</strong>
        <p>The sidebar onthe right should contain help text and links about best practices and next steps for further use or configuration.</p>
      </li>
    </ol>
    <p>Take a look at the demo for Create Views to see a semi-realistic example:</p>
    <a class="rs-btn rs-btn-primary" href="{{ site.baseurl }}/demos/create.html" target="blank">See Create View Demo</a>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body"><div  style="border: 1px #e0e0e0 solid; position: relative;">{% include create-view.html %}</div></div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Markup</div>
  </div>
  <div class="rs-detail-section-body">{% highlight html %}{% include create-view.html %}{% endhighlight %}</div>
</div>