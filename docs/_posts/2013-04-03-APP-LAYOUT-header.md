---
category : app layout
title: Header & Navigation
updated: July 2, 2013
author: Lauren Dowdy
adherance: 3
tags : [intro, about, canon]
---

<div class="rs-row">
	<div class="span-3">
		<h3>Types of Navigation</h3>
		<b>Utility Navigation:</b>
		<ul>
      <li>Top-right: Used for utilities like Account information, Support links, Logout, etc</li>
      <li>Top-left: Used to SSO between Rackspace properties.</li>
      <li>Remains consistent across the UIs that it links together</li>
			<li>Highlight the current application with an active state so users know where they are.</li>
		</ul>
		<b>Primary Navigation:</b>
		<ul>
			<li>Customize these sections for your application's categories or products.</li>
			<li>Highlight the category with an active state so users know what section they are in.</li>
      <li>Use <a href="/ui-components/#dropdowns">dropdowns</a> when you have 3 or more levels of information/navigation.</li>
		</ul>
		<b>Secondary Navigation:</b>
		<ul>
			<li>Highlight the section with an active state so users know what sub-section they are in.</li>
		</ul>
		<h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<div class="rs-row">
			<h4>Example</h4>
			<div id="app-layout-header" class="rs-responsive">
				<div class="rs-wrapper">
				    <div class="rs-nav-utility">
				      <div class="rs-container">
				        <ul class="rs-nav">
				          <li class="rs-nav-item active"><a class="rs-nav-link" href="javascript:void(0);">Public Cloud</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="javascript:void(0);">Private Cloud</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="javascript:void(0);">Dedicated</a></li>
				        </ul>
                <ul class="rs-nav rs-pull-right">
                  <li class="rs-nav-item rs-dropdown rs-utility-dropdown">
                    <a class="rs-nav-link rs-dropdown-toggle" href="javascript:void(0);">Username123 <i class="rs-caret"></i></a>
                  </li>
                </ul>
				      </div>
				    </div>
				    <div class="rs-nav-primary">
				      <div class="rs-container">
				        <div class="rs-nav-brand">
				          <a href="javascript:void(0);"></a>
				        </div>
				        <ul class="rs-nav">
				          <li class="rs-nav-item active"><a class="rs-nav-link" href="javascript:void(0);">Section1</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="javascript:void(0);">Section2</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="javascript:void(0);">Section3</a></li>
				          <li class="rs-nav-item rs-dropdown rs-primary-dropdown">
                    <a class="rs-nav-link rs-dropdown-toggle" href="javascript:void(0);">More <i class="rs-caret"></i></a>
                  </li>
				        </ul>
				      </div>
				    </div>
				    <div class="rs-nav-secondary">
				      <div class="rs-container">
				        <ul class="rs-nav">
				          <li class="rs-nav-item"><a class="rs-nav-link" href="javascript:void(0);">SubSection1</a></li>
				          <li class="rs-nav-item hover"><a class="rs-nav-link" href="javascript:void(0);">SubSection2</a></li>
				          <li class="rs-nav-item active"><a class="rs-nav-link" href="javascript:void(0);">SubSection3</a></li>
				        </ul>
				      </div>
				    </div>
				</div>
			</div>
		</div>
		<br/><br/>
		<div class="rs-row">
			<h4>Markup</h4>
			{% highlight html %}
<div class="rs-wrapper">
	<!-- Utility Nav -->
    <div class="rs-nav-utility">
      <div class="rs-container">
        <ul class="rs-nav">
          <li class="rs-nav-item active"><a class="rs-nav-link" href="">Public Cloud</a></li>
          <li class="rs-nav-item"><a class="rs-nav-link" href="">Private Cloud</a></li>
          <li class="rs-nav-item"><a class="rs-nav-link" href="">Dedicated</a></li>
        </ul>
        <ul class="rs-nav rs-pull-right">
          <li class="rs-nav-item rs-dropdown rs-utility-dropdown">
            <a class="rs-nav-link rs-dropdown-toggle" href="">Username123 <i class="rs-caret"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- End Utility Nav -->

    <!-- Primary Nav -->
    <div class="rs-nav-primary">
      <div class="rs-container">
        <div class="rs-nav-brand">
          <a href=""></a>
        </div>
        <ul class="rs-nav">
          <li class="rs-nav-item active"><a class="rs-nav-link" href="">Section1</a></li>
          <li class="rs-nav-item"><a class="rs-nav-link" href="">Section2</a></li>
          <li class="rs-nav-item"><a class="rs-nav-link" href="">Section3</a></li>
          <li class="rs-nav-item rs-dropdown rs-primary-dropdown">
            <a class="rs-nav-link rs-dropdown-toggle" href="">More <i class="rs-caret"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- End Primary Nav -->

    <!-- Secondary Nav -->
    <div class="rs-nav-secondary">
      <div class="rs-container">
        <ul class="rs-nav">
          <li class="rs-nav-item"><a class="rs-nav-link" href="">SubSection1</a></li>
          <li class="rs-nav-item hover"><a class="rs-nav-link" href="">SubSection2</a></li>
          <li class="rs-nav-item active"><a class="rs-nav-link" href="">SubSection3</a></li>
        </ul>
      </div>
    </div>
    <!-- End Secondary Nav -->
</div>{% endhighlight %}
		</div>
	</div>
</div>
