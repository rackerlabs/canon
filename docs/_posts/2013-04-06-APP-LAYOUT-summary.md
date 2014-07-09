---
layout: post
category : app layout
title: Summary
updated: August 5, 2013
author: Lauren Dowdy
tags : [intro, about, canon]
---

<div class="rs-row">
  <div class="span-3">
    <h3>Layout Framework</h3>
    <p>The basic layout of Canon consists of 5 parts: 3 layers of navigation within the <a href="#header-&-navigation">header</a>, the <a href="#content-area">content area</a>, and the <a href="#footer">footer</a>.</p>
    <ol>
      <li>The <a href="#header-&-navigation">utility navigation</a> consists of links and tools that help the user, such as account details, log out, or help information, but are not the core sections of the application.</li>
      <li>The <a href="#header-&-navigation">primary navigation</a> is used for the main sections of the application or for <a href="/ui-components/#dropdowns">dropdown</a> categories that organize sections into higher level groups.</li>
      <li>The <a href="#header-&-navigation">secondary navigation</a> is used for a 2nd or 3rd level of navigation, depending on the structure of the primary nav.</li>
      <li>The <a href="#content-area">content area</a> is used for your application's main data and interactions.</li>
      <li>The <a href="#footer">footer</a> is used for legal information, application news, and feedback links.</li>
    </ol>
  </div>
	<div class="span-8 offset-1">
	  <div class="rs-row">
			<div class="app-layout-aside">
				<div class="row" id="app-layout-utilitynav">Utility Nav</div>
				<div class="row" id="app-layout-primarynav">Primary Nav</div>
				<div class="row" id="app-layout-secondarynav">Secondary Nav</div>
				<div class="row" id="app-layout-content">Content Area</div>
				<div class="row" id="app-layout-footer">Footer</div>
			</div>
			<div id="app-layout-summary" class="rs-responsive">
				<div class="rs-wrapper">
				    <div class="rs-nav-utility">
				      <div class="rs-container">
				        <ul class="rs-nav">
				          <li class="rs-nav-item active"><a class="rs-nav-link" href="#">Link One</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="#">Link Two</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="#">Link Three</a></li>
				        </ul>
				      </div>
				    </div>
				    <div class="rs-nav-primary">
				      <div class="rs-container">
				        <div class="rs-nav-brand">
				          <a href="#"></a>
				        </div>
				        <ul class="rs-nav">
				          <li class="rs-nav-item active"><a class="rs-nav-link" href="#">Section1</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="#">Section2</a></li>
				          <li class="rs-nav-item"><a class="rs-nav-link" href="#">Section3</a></li>
				        </ul>
				      </div>
				    </div>
				    <div class="rs-nav-secondary">
				      <div class="rs-container">
				        <ul class="rs-nav">
				          <li class="rs-nav-item"><a class="rs-nav-link" href="#">SubSection1</a></li>
				          <li class="rs-nav-item hover"><a class="rs-nav-link" href="#">SubSection2</a></li>
				          <li class="rs-nav-item active"><a class="rs-nav-link" href="#">SubSection3</a></li>
				        </ul>
				      </div>
				    </div>
				    <div class="rs-body">
				      <div class="rs-container show-grid">
				        <!-- Full-Width Content -->
				        <div class="rs-main">
				          <div class="rs-content rs-panel">
					        <div class="rs-inner">
					        	
					        </div>
					      </div>
				        </div>
				      </div>
				    </div>
				    <div class="rs-push"></div>
				</div>
				<div class="rs-nav-footer">
			    <div class="rs-container">
			      <ul class="rs-nav">
			        <li class="rs-nav-item">© 2013 Rackspace, US</li>
			        <li class="rs-nav-item"><a class="rs-nav-link" href="">Link Text</a></li>
			        <li class="rs-nav-item"><a class="rs-nav-link" href="">Link Text</a></li>
			      </ul>
			      <ul class="rs-nav rs-pull-right">
			      	<li class="rs-nav-item">Pull right for <a class="rs-nav-link" href="#">Feedback</a></li>
			      </ul>
			    </div>
				</div>
			</div>
		</div>
	</div>
</div>
