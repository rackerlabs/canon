---
parent: Typography
title: Lists
order: 3
---
<p>TO DO: add use info</p>
<div style="overflow: hidden">
  <h2>Key / Value List</h2>
<div class="rs-pull-left" style="width: 25em; margin-right: 2em;">
  <h3>Example</h3>
{% capture keyvalue %}<ul class="rs-detail-list">
    <li class="rs-detail-item">
      <div class="rs-detail-key">Status</div>
      <div class="rs-detail-value">
        <span class="rs-status rs-status-ok">Active</span>
      </div>
    </li>
    <li class="rs-detail-item">
      <div class="rs-detail-key">Key</div>
      <div class="rs-detail-value">Value</div>
    </li>
    <li class="rs-detail-item">
      <div class="rs-detail-key">Key</div>
      <div class="rs-detail-value">Value</div>
    </li>
    <li class="rs-detail-item">
      <div class="rs-detail-key">Key</div>
      <div class="rs-detail-value">Value</div>
    </li>
  </ul>{% endcapture %}{{ keyvalue }}
</div>
<div class="rs-pull-left"><h3>Markup</h3>{% highlight html %}{{ keyvalue }}{% endhighlight %}</div>
</div>
<hr>
<div style="overflow: hidden">
  <h2>Ordered List</h2>
<div class="rs-pull-left" style="width: 25em; margin-right: 2em;">
  <h3>Example</h3>
{% capture ordered %}<ol>
    <li>One</li>
    <li>
      Two
      <ul>
        <li>Unordered Item</li>
        <li>Unordered Item</li>
      </ul>
    </li>
    <li>Three
      <ol>
        <li>One</li>
        <li>Two</li>
      </ol>
    </li>
    <li>Four</li>
  </ol>{% endcapture %}{{ ordered }}
</div>
<div class="rs-pull-left"><h3>Markup</h3>{% highlight html %}{{ ordered }}{% endhighlight %}</div>
</div>
<hr>
<div style="overflow: hidden">
  <h2>Unordered List</h2>
<div class="rs-pull-left" style="width: 25em; margin-right: 2em;">
  <h3>Example</h3>
{% capture unordered %}<ul>
    <li>One</li>
    <li>
      Two
      <ul>
        <li>Unordered Item</li>
        <li>Unordered Item</li>
      </ul>
    </li>
    <li>Three
      <ol>
        <li>One</li>
        <li>Two</li>
      </ol>
    </li>
    <li>Four</li>
  </ul>{% endcapture %}{{ unordered }}
</div>
<div class="rs-pull-left"><h3>Markup</h3>{% highlight html %}{{ unordered }}{% endhighlight %}</div>
</div>