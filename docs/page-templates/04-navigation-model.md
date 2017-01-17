---
layout: default-left-nav
category: Page Templates
title: Navigation Model
resource: true
single: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">{{ page.category }}</div>
  <div class="rs-detail-header-title">{{ page.title }}</div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <p>The hub and spoke nav model here describes a flat, simple application architecture. Our model uses three main page types:</p>
    <ul>
      <li><a href="{{site.baseurl}}/page-templates/01-list-view.html">List View</a></li>
      <li><a href="{{site.baseurl}}/page-templates/02-create-view.html">Create View</a></li>
      <li><a href="{{site.baseurl}}/page-templates/03-detail-view.html">Detail View</a></li>
    </ul>
    <p>Building your application to follow this model will help users keep a consistent mental picture of the application structure and ensure they accomplish their goals quickly and intuitively. </p>
    <h3>How it works</h3>
    <ul>
      <li>Each large "hub" is related to a UX Pattern (details below on this page)</li>
      <li>Each "spoke" coming off a hub represents a <a href="{{ site.baseurl }}/ui-components">UI Component</a> within the pattern</li>
      <li>Use <a target="blank" href="{{ site.baseurl }}/demos">List Views</a> as navigational hubs and for managing and assessing many items</li>
      <li>Use the <a href="#detail-view">Detail View</a> to present item details and show child items with their own set of actions and details</li>
      <li>Use the <a href="#create-view">Create View</a> when items have complex configuration settings or need a help section to guide users through the creation process</li>
    </ul>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Example</div>
  </div>
  <div class="rs-detail-section-body">
    <img src="{{site.baseurl}}/img/hub-and-spoke.svg">
  </div>
</div>