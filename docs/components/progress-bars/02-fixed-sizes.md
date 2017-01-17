---
parent: Progress Bars
title: Fixed Sizes
order: 2
---
<ul>
<li>The default progress bar will fill the width of its parent container, but sometimes you need specific sizes.</li>
<li>Fixed sizes are most often used in <a href="/ux-patterns/#detail-view">Detail Views</a> when you don't want to disrupt the flow of the page.</li>
</ul>
<table class="rs-list-table">
  <thead>
    <tr>
      <th>Example</th>
      <th>Class</th>
      <th>Markup</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 20em;">
{% capture xsmall %}
<div class="rs-progress rs-progress-xsmall">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
{% endcapture %}
{{ xsmall }}
      </td>
      <td>rs-progress-xsmall</td>
      <td>
<div class="collapsible-highlight">{% highlight html %}{{ xsmall }}{% endhighlight %}</div>
      </td>
    </tr>
    <tr>
      <td>
{% capture small %}
<div class="rs-progress rs-progress-small">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
{% endcapture %}
{{ small }}
      </td>
      <td>rs-progress-small</td>
      <td>
<div class="collapsible-highlight">{% highlight html %}{{ small }}{% endhighlight %}</div>
      </td>
    </tr>
    <tr>
      <td>
{% capture medium %}
<div class="rs-progress rs-progress-medium">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
{% endcapture %}
{{ medium }}
      </td>
      <td>rs-progress-medium</td>
      <td>
<div class="collapsible-highlight">{% highlight html %}{{ medium }}{% endhighlight %}</div>
      </td>
    </tr>
    <tr>
      <td>
{% capture large %}
<div class="rs-progress rs-progress-large">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
{% endcapture %}
{{ large }}
      </td>
      <td>rs-progress-large</td>
      <td>
<div class="collapsible-highlight">{% highlight html %}{{ large }}{% endhighlight %}</div>
      </td>
    </tr>
    <tr>
      <td>
{% capture xlarge %}
<div class="rs-progress rs-progress-xlarge">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
{% endcapture %}
{{ xlarge }}
      </td>
      <td>rs-progress-xlarge</td>
      <td>
<div class="collapsible-highlight">{% highlight html %}{{ xlarge }}{% endhighlight %}</div>
      </td>
    </tr>
  </tbody>
</table>

