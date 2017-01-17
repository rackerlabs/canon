---
parent: Messaging
title: Embedded Message
order: 3
---
<ul>
  <li>Embedded Messages should be used in situations where the notification is related to a single resource as a whole.</li>
  <li>Use them sparingly, and generally just when you need more room for critical details</li>
  <li>Just like Banner Messages, Embedded Messages utilize the status classes for coloring and iconography, but are mostly associated with the "warning" class.</li>
  <li>These messages should only appear on <a href="">Detail Views</a> below the page header and above the first section.</li>
</ul>
<hr>
<h2>Example</h2>
{% capture embedded %}<div class="rs-message rs-message-embedded rs-status-warning">
  <i type="button" class="rs-icon rs-icon-close"></i>
  <div class="rs-message-content">
    <div class="rs-message-title">Embedded Banner Message:</div>
    <div class="rs-message-description">
      <p>These messages should only appear on Detail Views below the page header and above the first section.</p>
      <ul>
        <li>Could contain formatted content</li>
        <li>Like a bullet list of issues</li>
      </ul>
      <a href="">Or maybe a link to some help article</a>
    </div>
  </div>
</div>{% endcapture %}{{ embedded }}
<h2>Markup</h2>
{% highlight html %}{{ embedded }}{% endhighlight%}
<hr>
<h1 class="light">Embedded Message Placement</h1>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
    <div style="width: 600px; border: 1px #e0e0e0 solid; margin-right: 2em;">{% include embedded-message-placement.html %}</div>
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>{% highlight html %}{% include embedded-message-placement.html %}{% endhighlight %}
  </div>
</div>
