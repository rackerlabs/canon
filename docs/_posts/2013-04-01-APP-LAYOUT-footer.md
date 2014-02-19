---
category: app layout
title: Footer
updated: July 2, 2013
author: Lauren Dowdy
adherance: 3
tags: [intro, about, canon]
---

<div class="rs-row">
	<div class="span-3">
		<h3>How it works</h3>
		<p>The footer looks and behaves similar to the top navigation bar. Just like the top nav, the footer should be consistent across Rackspace applications. If you support multiple geographies, these may change between countries. Below is a list of what it should contain in the order they appear:</p>
		<ul>
			<li><b>Copyright Date</b></li>
			<li><b>Terms of Service</b> </li>
			<li><b>Privacy Policy</b></li>
			<li><b>Application News:</b><br /> For example: Release notes, new features, or other information that keeps users up to date with your app.</li>
			<li><b>Feedback:</b><br /> Provide a way for users to submit feedback. This helps your team prioritize features and make users feel involved.</li>
		</ul>
		<h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<h4>Example</h4>
		<div id="app-layout-footer-example">
			<div class="rs-nav-footer">
		    <div class="rs-container">
		      <ul class="rs-nav">
		        <li class="rs-nav-item">© 2013 Rackspace, US</li>
		        <li class="rs-nav-item"><a class="rs-nav-link" href="">Terms & Privacy</a></li>
		        <li class="rs-nav-item"><a class="rs-nav-link" href="">Application News</a></li>
		      </ul>
          <ul class="rs-nav rs-pull-right">
            <li class="rs-nav-item"><a class="rs-nav-link" href="#">Feedback</a></li>
          </ul>
		    </div>
			</div>
		</div>
		<br/><br/>
		<h4>Markup</h4>
		{% highlight html %}
<div class="rs-nav-footer">
  <div class="rs-container">
    <ul class="rs-nav">
      <li class="rs-nav-item">© 2013 Rackspace, US</li>
      <li class="rs-nav-item"><a class="rs-nav-link" href="">Terms & Privacy</a></li>
      <li class="rs-nav-item"><a class="rs-nav-link" href="">Application News</a></li>
    </ul>
    <ul class="rs-nav rs-pull-right">
      <li class="rs-nav-item"><a class="rs-nav-link" href="#">Feedback</a></li>
    </ul>
  </div>
</div>{% endhighlight %}
	</div>
</div>
