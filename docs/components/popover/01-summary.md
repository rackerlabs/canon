---
parent: Popover
title: Summary
order: 1
---
<p>Popovers are good for containing small forms &ndash; usually 3 fields or less.  It's great for updating small bits of data from a list view and detail view, or for adding and creating simple objects. The popover is really bad for large forms, so just don't use it for big things &ndash; instead, consider a modal or a separate page altogether when your user is filling out complex forms.</p>
<ul>
  <li>The pointer on the popover always points to the title (key, link, or button) of the element you are editing or viewing.</li>
  <li>The popover should cover the information you are editing.</li>
  <li>Submit buttons get the <a href="{{site.baseurl}}/components/buttons/#primary-buttons">Primary Button</a> style and labels should indicate what action you are performing and always relate to the subject of the popover.</li>
  <li>Clicking outside the popover should close it. Interaction with elements under the popover is restricted until closed.</li>
  <li>Don't force-fit multi-step processes into popovers.  That sort of interaction should be acheived using full-page views.</li>
  <li>Try to avoid spawning popovers from popovers.  Keeping the interaction as flat as possible is the key to clean design.</li>
  <li>Avoid spawning popovers on hover.  They should not behave like tooltips.</li>
  <li>Specify form sizes to match the width of the longest label: xsmall, small, medium, large, xlarge, xxlarge.</li>
</ul>
<div style="overflow: hidden;">
<div class="rs-pull-left" style="width: 400px; height: 310px; margin-right: 2em;">
<h2>Example</h2>
{% capture popover %}<div class="rs-popover">
  <div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
  <div class="rs-popover-content">
    <form class="rs-form rs-form-horizontal rs-form-small">
      <div class="rs-popover-body">
        <div class="rs-control-group">
          <label class="rs-control-label">Label One</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-medium">
          </div>
        </div>
        <div class="rs-control-group">
          <label class="rs-control-label">Label Two</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-medium"> GB
          </div>
        </div>
        <div class="rs-control-group">
          <label class="rs-control-label">Label Three</label>
          <div class="rs-controls">
            <input type="text" class="rs-input-medium">
            <select>
              <option>One</option>
              <option>Two</option>
            </select>
          </div>
        </div>
      </div>
      <div class="rs-popover-footer rs-btn-group">
        <button type="submit" class="rs-btn rs-btn-primary">Save</button>
        <button type="button" class="rs-btn rs-btn-link">Cancel</button>
      </div>
    </form>
  </div>
</div>
{% endcapture %}
{{popover}}
</div>
<div class="rs-pull-left">
<h2>Markup</h2>
{% highlight html %}{{popover}}{% endhighlight %}
</div>
</div>