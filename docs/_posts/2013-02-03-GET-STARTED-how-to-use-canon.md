---
category : get started
title: How to Use Canon
updated: September 17, 2013
author: Andrew Raiford
tags : [intro, about, canon]
---
To begin using Canon, start with this basic HTML template that includes everything we mentioned in the [App Layout](/app-layout/) section.

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
  <title>Canon Starter Template</title>
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" type="text/css" href="{{site.CANON.cdnUrl}}/v{{site.CANON.latest}}/canon.min.css">
  <script type="application/javascript" src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
  <script type="application/javascript" src="{{site.CANON.cdnUrl}}/v{{site.CANON.latest}}/canon.min.js"></script>
</head>

<body class="rs-responsive">
  <div class="rs-wrapper">
    <div class="rs-nav-utility">
      <div class="rs-container">
        <ul class="rs-nav rs-pull-right">
          <li class="rs-nav-item"><a class="rs-nav-link" href="#">Account: Username123</a></li>
        </ul>
      </div>
    </div>
    <div class="rs-nav-primary">
      <div class="rs-container">
        <div class="rs-nav-brand">
          <a href="index.html"></a>
        </div>
        <ul class="rs-nav">
          <li><a href="#">Link One</a></li>
          <li><a href="#">Link Two</a></li>
          <li><a href="#">Link Three</a></li>
          <li><a href="#">Link Four</a></li>
        </ul>
      </div>
    </div>
    <div class="rs-nav-secondary">
      <div class="rs-container">
        <ul class="rs-nav">
          <li><a href="#">Subnav One</a></li>
          <li><a href="#">Subnav Two</a></li>
          <li><a href="#">Subnav Three</a></li>
        </ul>
      </div>
    </div>
    <div class="rs-body">
      <div class="rs-container">
        <div class="rs-main">
          <div class="rs-content rs-panel">
            <div class="rs-inner">
              <h2 class="rs-page-title">Product Name</h2>
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
        <li class="rs-nav-item">&copy; Rackspace, US</li>
        <li class="rs-nav-item"><a class="rs-nav-link" href="http://www.rackspace.com/information/legal/websiteterms" target="blank">Website Terms</a>
        <li class="rs-nav-item"><a class="rs-nav-link" href="http://www.rackspace.com/information/legal/privacystatement" target="blank">Privacy Policy</a>
      </ul>
    </div>
  </div>
</body>
</html>
{% endhighlight %}

<p>Or, find more detail on our demo site.</p>
<a class="rs-btn rs-btn-login rs-btn-large" href="{{ site.baseurl }}/demos" target="blank">View Demo</a>
