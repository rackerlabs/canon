---
category : app layout
title: Content Area
updated: August 6, 2013
author: Lauren Dowdy
adherance: 2
tags : [intro, about, canon]
---

<div class="rs-row">
	<div class="span-3">
		<h3>Layout Options</h3>
		<p>The content area contains the primary information and functionality views for your application. Consistent layout is imperative so users always have a feel for where they are. For example, a List Table should use a different layout than a Detail View.</p>
		<h3>Sidebars</h3>
    <p>The position of the sidebars significantly changes based on the content.</p>
		<ul>
      <li><strong>Left Sidebar (Filtering):</strong><br /> Use for functionality that correlates with the main content (filtering). Do not use for navigation or informational text.</li>
      <li><b>Right Sidebar (Help Panel):</b><br /> Use for information that correlates with the main content (help information, support links, etc). Do not use for navigation or filtering.</li>
		</ul>
		<h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<h4>Examples</h4>
		<div class="list-table">
	        <table>
	          <thead>
	            <tr>
	              <th>Layout</th>
	              <th>Thumbnail</th>
	              <th>Markup</th>
	            </tr>
	          </thead>
	          <tbody>
	          	<tr>
	              <td>Full-Width</td>
	              <td><img src="{{ site.baseurl }}/img/content-full-width.png" width="275" height="172" /></td>
	              <td>{% highlight html %}
<div class="rs-main">
  <div class="rs-content rs-panel"></div>
</div>{% endhighlight %}</td>
	            </tr>
	            <tr>
	              <td>Left Sidebar</td>
	              <td><img src="{{ site.baseurl }}/img/content-left.png" width="275" height="172" /></td>
	              <td>{% highlight html %}
<div class="rs-main">
  <div class="rs-sidebar">
    <div class="rs-inner"></div>
  </div>
  <div class="rs-content rs-panel">
    <div class="rs-inner"></div>
  </div>
</div>{% endhighlight %}</td>
	            </tr>
	            <tr>
	              <td>Right Help Panel</td>
	              <td><img src="{{ site.baseurl }}/img/content-sidebar-right.png" width="275" height="172" /></td>
	              <td>{% highlight html %}
<div class="rs-main rs-panel">
  <div class="rs-sidebar rs-pull-right">
    <div class="rs-inner"></div>
  </div>
  <div class="rs-content rs-panel">
    <div class="rs-inner"></div>
  </div>
</div>{% endhighlight %}</td>
	            </tr>
	          </tbody>
	        </table>
	    </div>
	</div>
</div>
