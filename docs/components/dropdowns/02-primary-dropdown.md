---
parent: Dropdowns
title: Primary Dropdown
order: 2
---
<p>Use in combination with the <a href="/app-layout/#header-&-navigation">primary navigation</a> style in the main header of your application.</p>
<ul>
  <li>Primary dropdowns are used when your application has more than 5-7 sections, depending on the length of each section name. For example, some applications may only be able to fit 5 sections across the main header.</li>
  <li>Use when your functionality resembles one of a desktop application.</li>
</ul>
<div style="overflow: hidden;">
  <div style="width: 20em; height: 23em; float: left;">
<h2>Example</h2>
{% capture primary %}<div class="rs-nav-item rs-dropdown rs-primary-dropdown">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category">Infrastructure</span>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Servers</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Load Balancers</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">DNS</a>
    </li>
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category">Automation</span>
    </li>
    <li class="rs-dropdown-item disabled">
      <a class="rs-dropdown-link" href="#">Deployments</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Autoscaling</a>
    </li>
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category">Developer Tools</span>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Queues</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Mailgun
        <i class="rs-icon-external"></i>
      </a>
    </li>
  </ul>
</div>{% endcapture %}
{{ primary }}
</div>
<div class="rs-pull-left">
<h2>Markup</h2>
{% highlight html %}{{ primary }}{% endhighlight %}
</div>
</div>