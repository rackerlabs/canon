---
parent: Progress Bars
title: Summary
order: 1
---
<ul>
  <li><a href="#progress-bars">Basic Progress Bars</a> can be used when a metric can be expressed in terms of amount consumed versus total amount</li>
  <li><a href="#multi-step-process">Multi-Step Progress Bars</a> are good for representing a user's position in a multi-step process as well as the activity and status of each step. </li>
</ul>
<h2>Indicating Status</h2>
<ul>
  <li>Use <a href="#status-indicators">status colors</a> to reflect the parent entity's status. This can change throughout the process.</li>
  <ul>
    <li><span style="color:#00a96d; font-weight:bold">Green (OK)</span> state is for processes with no impact on the uptime of a product, like uploading a file.</li>
    <li><span style="color:#ff9d00; font-weight:bold">Yellow (Processing)</span> state shows a user initiated processes, like rebuilding or resizing, that may cause a product to intermittently work.</li>
    <li><span style="color:#c40022; font-weight:bold">Red (Error)</span> state is used to represent a failed process, or to indicate that a device is currently offline.</li>
    <li><span style="color:#1e6ec1; font-weight:bold">Blue (Neutral Info)</span> is for displaying metrics with a neutral status, like showing percent of total.</li>
  </ul>
  <li>Use animating stripes when you need more indication that work is happening in the background.</li>
</ul>
<table>
  <thead>
    <tr>
      <th>Progress Bar</th>
      <th>Status Class</th>
      <th>Markup</th>
    </tr>
    </thead>
<tbody>
  <tr>
    <td>
{% capture barok %}<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-ok"></div>
    </div>
  </div>
</div>
<br>
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-ok rs-bar-striped"></div>
    </div>
  </div>
</div>{% endcapture %}{{ barok }}
    </td>
    <td>
        <p>rs-status-ok</p>
        <p>rs-status-ok rs-bar-striped</p>
      </td>
    <td><div class="collapsible-highlight">{% highlight html %}{{ barok }}{% endhighlight %}</div></td>
    </tr>
    <tr>
      <td>
{% capture barwarning %}<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-warning"></div>
    </div>
  </div>
</div>
<br>
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-warning rs-bar-striped"></div>
    </div>
  </div>
</div>
{% endcapture %}{{ barwarning }}
      </td>
      <td>
        <p>rs-status-warning</p>
        <p>rs-status-warning rs-bar-striped</p>
      </td>
      <td><div class="collapsible-highlight">{% highlight html %}{{ barwarning }}{% endhighlight %}</div></td>
      </tr>
    </tr>
    <tr>
      <td>
{% capture barerror %}<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-error"></div>
    </div>
  </div>
</div>
<br>
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-error rs-bar-striped"></div>
    </div>
  </div>
</div>{% endcapture %}{{ barerror }}
      </td>
      <td>
        <p>rs-status-error</p>
        <p>rs-status-error rs-bar-striped</p>
      </td>
      <td><div class="collapsible-highlight">{% highlight html %}{{ barerror }}{% endhighlight %}</div></td>
      </tr>
      <tr>
        <td>
{% capture barinfo %}<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
<br>
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-info rs-bar-striped"></div>
    </div>
  </div>
</div>{% endcapture %}{{ barinfo }}
        </td>
        <td>
          <p>rs-status-info</p>
          <p>rs-status-info rs-bar-striped</p>
        </td>
        <td><div class="collapsible-highlight">{% highlight html %}{{ barinfo }}{% endhighlight %}</div></td>
        </tr>
      </tbody>
    </table>