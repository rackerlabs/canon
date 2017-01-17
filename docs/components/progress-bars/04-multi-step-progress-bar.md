---
parent: Progress Bars
title: Multi-Step Bars
order: 4
---
<p>Use when the action being taken has several distinct steps, and because of variable lengths of time, you cannot show accurate percentages.</p>
<ul>
  <li>The lengths are manually adjustable and should be based on proportionate time of each step.</li>
  <li>Labels should display a user-friendly, one or two word description.</li>
  <li>Use animating stripes to indicate the step currently in progress.</li>
  <li>Use <a href="#status-indicators">status colors</a> to reflect connectivity throughout the process. For example, if step 4 is not required for the product to be back online, change the colors to green (OK) to reflect the API status of the entity.</li>
</ul>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 30em; margin-right: 2em;">
  <h2>Example</h2>
{% capture multistep %}<div class="rs-progress-label">Prepping Resize</div>
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 20%">
      <div class="rs-bar rs-status-warning"></div>
      <div class="rs-caption">1. Queue</div>
    </div>
    <div class="rs-segment" style="width: 40%">
      <div class="rs-bar rs-status-warning rs-bar-striped"></div>
      <div class="rs-caption">2. Prep</div>
    </div>
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar"></div>
      <div class="rs-caption">3. Build</div>
    </div>
    <div class="rs-segment" style="width: 15%">
      <div class="rs-bar"></div>
      <div class="rs-caption">4. Verify</div>
    </div>
  </div>
</div>{% endcapture %}{{ multistep }}
</div>
<div class="rs-pull-left">
  <h2>Markup</h2>
<div class="collapsible-highlight">{% highlight html %}{{ multistep }}{% endhighlight %}</div>
</div>
</div>