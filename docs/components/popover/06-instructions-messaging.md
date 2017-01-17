---
parent: Popover
title: Instructive Text
order: 6
---
<ul>
  <li><strong>Instructions</strong> should be brief and live at the top of a popover. They should always be written as an action (”Choose” for radio buttons “Select” for dropdowns)</li>
  <li><strong>Warnings</strong> or explanations can be used at the bottom of the popover to warn a user about effects of their actions.</li>
</ul>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 400px; height: 350px; margin-right: 2em;">
<h2>Example</h2>
{% capture popover %}<div class="rs-popover">
  <div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
  <div class="rs-popover-content">
    <div class="rs-popover-body">
      <p>Choose the disk partition for this server:</p>
      <form class="rs-form-vertical">
          <div class="rs-control-group">
            <div class="rs-controls">
              <label class="rs-radio">
                <input type="radio" name="three">
                <strong>Manual</strong><br>
                <span class="rs-help-block">
                  Faster build times but requires manual partitioning
                </span>
              </label>
              <label class="rs-radio">
                <input type="radio" name="three">
                <strong>Automatic</strong>
                <span class="rs-help-block">
                  Disk is single partition and automatically resizes
                </span>
              </label>
            </div>
          </div>
      </form>
      <i class="rs-icon rs-icon-warning rs-status-warning"></i> 
      <strong>Warning</strong>: 
      This will <strong>destroy</strong> all data on the server.
    </div>
    <div class="rs-popover-footer rs-btn-group">
      <div class="rs-btn rs-btn-primary">Partition Server</div>
      <div class="rs-btn rs-btn-link">Cancel</div>
    </div>
  </div>
</div>
{% endcapture %}
{{ popover }}
</div>
<div class="rs-pull-left">
<h2>Markup</h2>
{% highlight html %}{{popover}}{% endhighlight%}
</div>
</div>