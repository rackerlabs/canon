---
parent: Messaging
title: Banner Messages
order: 3
---
<ul>
  <li>Try to avoid making every message extremely important.  Users have a good nose for false urgency, and often prefer to form their own opinions about what's critical, so try not to make every communication appear critical.</li>
  <li>The close button "X" in the top right of the message is optional.  Only use it if it's ok for the message to be dismissed.</li>
</ul>
<hr>
<h2>Info Banner</h2>
<h3>Example</h3>
{% capture info %}<div class="rs-message rs-status-info">
  <i class="rs-icon rs-message-icon"></i>
  <i type="button" class="rs-icon rs-icon-close"></i>
  <div class="rs-message-content">
    <a href="" class="rs-message-action">Take Action</a>
    <div class="rs-message-title">Information Message:</div>
    <div class="rs-message-description">
      For all those times when you don't need to alarm someone, but you have to tell them something.
    </div>
  </div>
</div>{% endcapture %}{{ info }}
<h3>Markup</h3>
<div class="collapsible-highlight">{% highlight html %}{{ info }}{% endhighlight %}</div>
<hr>
<h2>Success Banner</h2>
<h3>Example</h3>
{% capture success %}<div class="rs-message rs-status-ok">
  <i class="rs-icon rs-message-icon"></i>
  <i type="button" class="rs-icon rs-icon-close"></i>
  <div class="rs-message-content">
    <a href="" class="rs-message-action">Take Action</a>
    <div class="rs-message-title">Success Message:</div>
    <div class="rs-message-description">
      Something or other has been successfully done. Good job Padawan.
    </div>
  </div>
</div>{% endcapture %}{{ success }}
<h3>Markup</h3>
<div class="collapsible-highlight">{% highlight html %}{{ success }}{% endhighlight %}</div>
<hr>
<h2>Warning Banner</h2>
<h3>Example</h3>
{% capture warning %}<div class="rs-message rs-status-warning">
  <i class="rs-icon rs-message-icon"></i>
  <i type="button" class="rs-icon rs-icon-close"></i>
  <div class="rs-message-content">
    <a href="" class="rs-message-action">Take Action</a>
    <div class="rs-message-title">Warning Message:</div>
    <div class="rs-message-description">To perform a critical maintenance task, some Cloud Server instances must be power cycled.</div>
  </div>
</div>{% endcapture %}{{ warning }}
<h3>Markup</h3>
<div class="collapsible-highlight">{% highlight html %}{{ warning }}{% endhighlight %}</div>
<hr>
<h2>Error Banner</h2>
<h3>Example</h3>
{% capture error %}<div class="rs-message rs-status-error">
  <i class="rs-icon rs-message-icon"></i>
  <i type="button" class="rs-icon rs-icon-close"></i>
  <div class="rs-message-content">
    <a href="" class="rs-message-action">Make a Payment Now</a>
    <div class="rs-message-title">Account Suspended:</div>
    <div class="rs-message-description">Your account has been suspended due to unpaid invoices.</div>
  </div>
</div>{% endcapture %}{{ error }}
<h3>Markup</h3>
<div class="collapsible-highlight">{% highlight html %}{{ error }}{% endhighlight %}</div>
<hr>
<h1 class="light">Banner Placement</h1>
<ul>
<li>Banner messages can be placed at the top of a page, or in context within sections of the page.</li>
<li>Avoid using them in popovers or modals &ndash; instead, consider using <a href="">Inline Messages</a>.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left">
    <h2>Example</h2>
    <div style="width: 600px; border: 1px #e0e0e0 solid; margin-right: 2em;">{% include banner-placement.html %}</div>
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>{% highlight html %}{% include banner-placement.html %}{% endhighlight %}
  </div>
</div>
