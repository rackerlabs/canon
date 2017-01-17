---
parent: Dropdowns
title: Utility Dropdown
order: 3
---
<p>Use in combination with the <a href="/app-layout/#header-&-navigation">utility navigation</a> in the very top black bar of your application.</p>
<ul>
  <li>Utility dropdowns should be used to organize the right utility nav categories.</li>
  <li>For example, "Account" will contain pages related to the user's account. "Support" should contain help information, support tickets, etc.</li>
</ul>
<div style="overflow: hidden;">
  <div style="width: 20em; height: 23em; float: left;">
<h2>Example</h2>
{% capture utility %}
<div class="rs-nav-item rs-dropdown rs-utility-dropdown">
<ul class="rs-dropdown-menu visible">
  <li class="rs-dropdown-item">
    <span class="rs-dropdown-text">Account# 1234567</span>
  </li>
  <li class="rs-divider"></li>
  <li class="rs-dropdown-item">
    <a class="rs-dropdown-link" href="#">Billing and Payments</a>
  </li>
  <li class="rs-dropdown-item">
    <a class="rs-dropdown-link" href="#">Usage Reports</a>
  </li>
  <li class="rs-dropdown-item disabled">
    <a class="rs-dropdown-link" href="#">User Management</a>
  </li>
  <li class="rs-dropdown-item">
    <a class="rs-dropdown-link" href="#">Account Settings</a>
  </li>
  <li class="rs-divider"></li>
  <li class="rs-dropdown-item">
    <a class="rs-dropdown-link" href="#">Log Out</a>
  </li>
</ul>
</div>
{% endcapture %}
{{ utility }}
</div>
<div class="rs-pull-left">
  <h2>Markup</h2>
{% highlight html %}{{ utility }}{% endhighlight %}
</div>
</div>