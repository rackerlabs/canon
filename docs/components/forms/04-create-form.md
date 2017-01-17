---
parent: Forms
title: Create Form
order: 4
---
<ul>
  <li>The key / label is right-aligned to the form elements, placing the labels and fields close together for easy scanning.</li>
  <li>Only use this format on full pages &ndash; not in popovers.</li>
</ul>
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="width: 550px; margin-right: 2em;">
    <h2>Example</h2>
{% capture form %}<form class="rs-form-create">
  <div class="rs-control-group">
    <label class="rs-control-label">Instance Name</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-large">
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">RAM</label>
    <div class="rs-controls">
      <select>
        <option>512 MB</option>
        <option>1 GB</option>
        <option>2 GB</option>
        <option>4 GB</option>
        <option>8 GB</option>
        <option>16 GB</option>
      </select>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Disk</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="1"> GB
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Disk Partition</label>
    <div class="rs-controls">
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Manual</strong><br>
        <span class="rs-help-block">
          Faster build times &amp; requires manual partitioning
        </span>
      </label>
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Automatic</strong>
        <span class="rs-help-block">
          Entire disk is single partition and auto-resizes
        </span>
      </label>
    </div>
  </div>
  <div class="rs-detail-item">
    <label class="rs-detail-key">User Profile</label>
    <div class="rs-detail-value">
      <span class="rs-quiet">Not Configured</span>
      <span class="rs-key-divider"></span>
      <a href="#">Create Profile…</a>
    </div>
  </div>
</form>
{% endcapture %}
    {{ form }}
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>
    {% highlight html %}{{ form }}{% endhighlight %}
  </div>
</div>