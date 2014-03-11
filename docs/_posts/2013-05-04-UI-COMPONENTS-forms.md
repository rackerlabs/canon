---
category : ui components
title: Forms
updated: December 12, 2013
author: Lauren Dowdy
adherance: 2
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <h3>How it works</h3>
    <p>Forms consist of two or more elements in key/value (or label/input) format.</p>
    <ul>
      <li>Each key should be specific, short and easy to read.</li>
      <li>When creating, name fields come first.</li>
      <li>Specify the input size to match the width of the data: xsmall, small, medium, large, xlarge, xxlarge.</li>
      <li>Specify form sizes to match the width of the longest label: xsmall, small, medium, large, xlarge, xxlarge. (Applies to all but Create Form)</li>
    </ul>
    <h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <form class="rs-form-horizontal rs-form-small">
      <div class="rs-control-group">
        <label class="rs-control-label">Key One</label>
        <div class="rs-controls">
          <input type="text">
        </div>
      </div>
      <div class="rs-control-group success">
        <label class="rs-control-label">Key Two</label>
        <div class="rs-controls">
          <select>
            <option>Option One</option>
            <option>Option Two</option>
          </select>
          <span class="rs-validation-inline"><i class="rs-validation-indicator"></i>Everything works!</span>
        </div>
      </div>
      <div class="rs-control-group error">
        <label class="rs-control-label">Key Three</label>
        <div class="rs-controls">
          <label class="rs-radio">
            <input type="radio" name="three">
            <strong>Option A</strong><br>
            <span class="rs-help-block">A Sub</span>
          </label>
          <label class="rs-radio">
            <input type="radio" name="three">
            <strong>Option B</strong>
            <span class="rs-help-block">B-Sub</span>
          </label>
          <span class="rs-validation-block"><i class="rs-validation-indicator"></i>You should at least select one item.</span>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Key Four</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini"> GB
          <span class="rs-help-block">This is some subtext.</span>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Key Five</label>
        <div class="rs-controls">
          <input type="text">
          <select>
            <option>One</option>
            <option>One</option>
          </select>
        </div>
      </div>
      <div class="rs-control-group error">
        <label class="rs-control-label">Key Six</label>
        <div class="rs-controls">
          <textarea class="rs-input-xlarge"></textarea>
          <span class="rs-validation-block"><i class="rs-validation-indicator"></i> Validation error message</span>
        </div>
      </div>
    </form>
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<form class="rs-form-horizontal rs-form-small">
  <div class="rs-control-group">
    <label class="rs-control-label">Key One</label>
   <div class="rs-controls">
      <input type="text">
    </div>
  </div>
  <div class="rs-control-group success">
    <label class="rs-control-label">Key Two</label>
    <div class="rs-controls">
      <select>
        <option>Option One</option>
        <option>Option Two</option>
      </select>
      <span class="rs-validation-inline"><i class="rs-validation-indicator"></i>Everything works!</span>
    </div>
  </div>
  <div class="rs-control-group error">
    <label class="rs-control-label">Key Three</label>
    <div class="rs-controls">
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Option A</strong><br>
        <span class="rs-help-block">A Sub</span>
      </label>
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Option B</strong>
        <span class="rs-help-block">B-Sub</span>
      </label>
      <span class="rs-validation-block"><i class="rs-validation-indicator"></i>You should at least select one item.</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Key Four</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini"> GB
      <span class="rs-help-block">This is some subtext.</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Key Five</label>
    <div class="rs-controls">
      <input type="text">
      <select>
        <option>One</option>
        <option>One</option>
      </select>
    </div>
  </div>
  <div class="rs-control-group error">
    <label class="rs-control-label">Key Six</label>
    <div class="rs-controls">
      <textarea class="rs-input-xlarge"></textarea>
      <span class="rs-validation-block"><i class="rs-validation-indicator"></i> Validation error message</span>
    </div>
  </div>
</form>{% endhighlight %}
  </div>
</div>

<hr class="subsection-divider" id="create-form">

<div class="rs-row">
  <div class="span-3">
    <h3>Create Form</h3>
    <p>Use create forms for wide pages.</p>
    <ul>
      <li>The key / label is right-aligned to the form elements, placing the labels and fields close together for easy scanning.</li>
      <li>Only use this format on create pages, and not in popovers.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <form class="rs-form-create">
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
            <span class="rs-help-block">Faster build times but requires manual partitioning</span>
          </label>
          <label class="rs-radio">
            <input type="radio" name="three">
            <strong>Automatic</strong>
            <span class="rs-help-block">Entire disk is single partition and automatically resizes</span>
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
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<form class="rs-form-create">
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
      <input type="text" class="rs-input-mini" placeholder="1"> GB
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Disk Partition</label>
    <div class="rs-controls">
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Manual</strong><br>
        <span class="rs-help-block">Faster build times but requires manual partitioning</span>
      </label>
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Automatic</strong>
        <span class="rs-help-block">Entire disk is single partition and automatically resizes</span>
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
</form>{% endhighlight %}
  </div>
</div>

<hr class="subsection-divider">

<div class="rs-row" id="simple-horizontal-form">
	<div class="span-3">
		<h3>Simple Horizontal Form</h3>
		<p>Horizontal forms are the most frequently used type of form - the majority for adding and editing settings within popovers.</p>
    <ul>
      <li>Key / label is left-aligned to the form elements, aligning the text evenly along the left margin of the popover.</li>
      <li>Specify the form size to match the width of the longest label: xsmall, small, medium, large, xlarge, xxlarge.</li>
      <li>Only use this format within a popover, not on full-size create pages.</li>
    </ul>
	</div>
	<div class="span-8 offset-1">
		<h4>Example</h4>
		<form class="rs-form-horizontal rs-form-medium">
      <div class="rs-control-group">
        <label class="rs-control-label">Check Type</label>
          <div class="rs-controls">
            <select>
              <option>HTTP Check (Website)</option>
              <option>TCP Check (Port)</option>
              <option>Ping Check (Server)</option>
            </select>
          </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Check Name</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-medium">
        </div>
      </div>
      <div class="rs-control-group success">
        <label class="rs-control-label">URL</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-xlarge">
          <span class="rs-help-block">Use the "https://" prefix to enable SSL</span>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Send Alarms to</label>
        <div class="rs-controls">
          <select>
            <option>Technical Contacts - Email</option>
         </select>
        </div>
      </div>
	  </form>
  <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Check Type</label>
      <div class="rs-controls">
        <select>
          <option>HTTP Check (Website)</option>
          <option>TCP Check (Port)</option>
          <option>Ping Check (Server)</option>
        </select>
      </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Check Name</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-medium">
    </div>
  </div>
  <div class="rs-control-group success">
    <label class="rs-control-label">URL</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-xlarge">
      <span class="rs-help-block">Use the "https://" prefix to enable SSL</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Send Alarms to</label>
    <div class="rs-controls">
      <select>
        <option>Technical Contacts - Email</option>
     </select>
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>

<hr class="subsection-divider">

<div class="rs-row" id="simple-vertical-form">
	<div class="span-3">
		<h3>Simple Vertical Form</h3>
		<p>Used for single field forms.</p>
      <ul>
        <li>Key / label appears above the form.</li>
        <li>These are only used within a popover.</li>
      </ul>
	</div>
	<div class="span-8 offset-1">
		<h4>Example</h4>
		<form class="form-vertical">
      <div class="rs-control-group">
        <label class="rs-control-label">Load Balancer Name</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-large">
        </div>
      </div>
	  </form>
  <h4 class="markup-margin">Markup</h4>
		{% highlight html %}<form class="form-vertical">
  <div class="rs-control-group">
    <label class="rs-control-label">Load Balancer Name</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-large">
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>

<hr class="subsection-divider">

<div class="rs-row">
	<div class="span-3">
		<h3>Radio Group Form</h3>
		<p>Use radio groups when the user needs to make a selection from a small set of options.</p>
    <p>Optionally, you can explain the differences between the choices with a string of text.</p>
	</div>
	<div class="span-8 offset-1">
		<h4>Example</h4>
		<form class="rs-form-horizontal rs-form-small">
	      <div class="rs-control-group">
	        <label class="rs-control-label">Server Name</label>
	        <div class="rs-controls">
	          <input type="text" class="rs-input-large">
	        </div>
	      </div>
	      <div class="rs-control-group">
	        <label class="rs-control-label">Server Type</label>
	        <div class="rs-controls">
	          <label class="rs-radio">
	            <input type="radio" name="three">
	            <strong>First-Generation Server</strong><br>
	            <span class="rs-help-block">Optional description text that explains the choice</span>
	          </label>
	          <label class="rs-radio">
	            <input type="radio" name="three">
	            <strong>Next-Generation Server</strong>
	            <span class="rs-help-block">Optional description text that explains the choice</span>
	          </label>
	        </div>
	      </div>
		  </form>
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<form class="rs-form-horizontal rs-form-small">
  <div class="rs-control-group">
    <label class="rs-control-label">Server Name</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-large">
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Server Type</label>
    <div class="rs-controls">
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>First-Generation Server</strong><br>
        <span class="rs-help-block">Optional description text that explains the choice</span>
      </label>
      <label class="rs-radio">
        <input type="radio" name="three">
        <strong>Next-Generation Server</strong>
        <span class="rs-help-block">Optional description text that explains the choice</span>
      </label>
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>

<hr class="subsection-divider">

<div class="rs-row">
	<div class="span-3">
		<h3>Form with Textarea</h3>
		<p>Use textareas within a form to accept a large amount of text, or allow the user to input multiple items, like a list of IP addresses.</p>
    <p>Textarea sizes are the same as inputs: mini, small, medium, large, xlarge, xxlarge</p>
	</div>
	<div class="span-8 offset-1">
	<h4>Example</h4>
	<form class="rs-form-horizontal rs-form-medium">
      <div class="rs-control-group">
        <label class="rs-control-label">Rule Type</label>
        <div class="rs-controls">
          <select>
            <option>Allow</option>
            <option>Deny</option>
          </select>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">IP Addresses</label>
        <div class="rs-controls">
          <textarea class="rs-input-xlarge" placeholder="Separate multiple IPs with commas or use CIDR notation"></textarea>
        </div>
      </div>
	  </form>
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Rule Type</label>
    <div class="rs-controls">
      <select>
        <option>Allow</option>
        <option>Deny</option>
      </select>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">IP Addresses</label>
    <div class="rs-controls">
      <textarea class="rs-input-xlarge" placeholder="Separate multiple IPs with commas or use CIDR notation"></textarea>
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>

<hr class="subsection-divider">

<div class="rs-row">
	<div class="span-3">
		<h3>Form with Inline Text</h3>
		<p>Use inline text when labels can't sufficiently explain the information but is too pertinent for a tooltip.</p>
    <ul>
      <li>Use .rs-help-inline to add units to the right of the input.</li>
      <li>Use .rs-help-block to add additional help info under the field. This should be used sparingly.</li>
    </ul>
	</div>
	<div class="span-8 offset-1">
	<h4>Example</h4>
	<form class="rs-form-horizontal rs-form-medium">
      <div class="rs-control-group">
        <label class="rs-control-label">Check Every</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini" value="30">
          <span class="rs-help-inline">seconds</span>
          <span class="rs-help-block">30-second minimum period.</span>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Timeout After</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini" value="30">
          <span class="rs-help-inline">seconds</span>
          <span class="rs-help-block">Alarms attached to this check will report critical if the check doesn't respond within the timeout.</span>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Regions</label>
        <div class="rs-controls">
        	<label class="rs-checkbox">
		        <input type="checkbox">
		        Dallas (DFW)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Hong Kong (HKG)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Washington Dulles (IAD)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        London (LON)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Chicago (ORD)
		    </label>
        </div>
       </div>
	  </form>
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Check Every</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="30">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">30-second minimum period.</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Timeout After</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="30">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">Alarms attached to this check will report critical if the check doesn't respond within the timeout.</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Regions</label>
    <div class="rs-controls">
      <label class="rs-checkbox">
        <input type="checkbox">
        Dallas (DFW)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Hong Kong (HKG)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Washington Dulles (IAD)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        London (LON)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Chicago (ORD)
    </label>
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>

<hr class="subsection-divider">

<div class="rs-row">
	<div class="span-3">
		<h3>Inline Validation Triggered</h3>
		<p>Inline validation triggers when a user enters invalid data in a required fields. When the user enters valid information, the error is replaced with a check mark and a success message (see next example).</p>
		<ul>
			<li>Add .error class to the .rs-control-group.</li>
      <li>Error appears only after the input has been focused for the first time.</li>
			<li>Show error about the specific validation rule triggered.</li>
			<li>Multiple error messages can be shown at once.</li>
		</ul>
	</div>
	<div class="span-8 offset-1">
	<h4>Example</h4>
	<form class="rs-form-horizontal rs-form-medium">
      <div class="rs-control-group">
        <label class="rs-control-label">Check Every</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini" value="30">
          <span class="rs-help-inline">seconds</span>
          <span class="rs-help-block">30-second minimum period.</span>
        </div>
      </div>
      <div class="rs-control-group error">
        <label class="rs-control-label">Timeout After</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini" value="45">
          <span class="rs-help-inline">seconds</span>
          <span class="rs-help-block">Alarms attached to this check will report critical if the check doesn't respond within the timeout.</span>
          <span class="rs-validation-block"><i class="rs-validation-indicator"></i>Timeout must be less than check frequency.</span>
        </div>
      </div>
      <div class="rs-control-group error">
        <label class="rs-control-label">Regions</label>
        <div class="rs-controls">
        	<label class="rs-checkbox">
		        <input type="checkbox">
		        Dallas (DFW)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Hong Kong (HKG)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Washington Dulles (IAD)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        London (LON)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Chicago (ORD)
		    </label>
		    <span class="rs-validation-block"><i class="rs-validation-indicator"></i>At least one region is required.</span>
        </div>
       </div>
	  </form>
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Check Every</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="30">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">30-second minimum period.</span>
    </div>
  </div>
  <div class="rs-control-group error">
    <label class="rs-control-label">Timeout After</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="45">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">Alarms attached to this check will report critical if the check doesn't respond within the timeout.</span>
      <span class="rs-validation-block"><i class="rs-validation-indicator"></i>Timeout must be less than check frequency.</span>
    </div>
  </div>
  <div class="rs-control-group error">
    <label class="rs-control-label">Regions</label>
    <div class="rs-controls">
      <label class="rs-checkbox">
        <input type="checkbox">
        Dallas (DFW)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Hong Kong (HKG)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Washington Dulles (IAD)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        London (LON)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Chicago (ORD)
    </label>
    <span class="rs-validation-block"><i class="rs-validation-indicator"></i>At least one region is required.</span>
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>

<hr class="subsection-divider">

<div class="rs-row">
	<div class="span-3">
		<h3>Inline Validation Fixed</h3>
		<p>After users fix their data, the error is replaced with a check mark and a success message that appears for a few seconds and then disappears.</p>
		<ul>
			<li>Add .success class to the .rs-control-group.</li>
			<li>Show message about the specific validation rule fixed.</li>
			<li>Multiple success messages can be shown at once.</li>
		</ul>
	</div>
	<div class="span-8 offset-1">
	<h4>Example</h4>
	<form class="rs-form-horizontal rs-form-medium">
      <div class="rs-control-group">
        <label class="rs-control-label">Check Every</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini" value="30">
          <span class="rs-help-inline">seconds</span>
          <span class="rs-help-block">30-second minimum period.</span>
        </div>
      </div>
      <div class="rs-control-group success">
        <label class="rs-control-label">Timeout After</label>
        <div class="rs-controls">
          <input type="text" class="rs-input-mini" value="29">
          <span class="rs-help-inline">seconds</span>
          <span class="rs-help-block">Alarms attached to this check will report critical if the check doesn't respond within the timeout.</span>
          <span class="rs-validation-inline"><i class="rs-validation-indicator"></i>Timeout is less than check duration</span>
        </div>
      </div>
      <div class="rs-control-group">
        <label class="rs-control-label">Regions</label>
        <div class="rs-controls">
        	<label class="rs-checkbox">
		        <input type="checkbox" checked>
		        Dallas (DFW)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox" checked>
		        Hong Kong (HKG)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Washington Dulles (IAD)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        London (LON)
		    </label>
		    <label class="rs-checkbox">
		        <input type="checkbox">
		        Chicago (ORD)
		    </label>
        </div>
       </div>
	  </form>
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<form class="rs-form-horizontal rs-form-medium">
  <div class="rs-control-group">
    <label class="rs-control-label">Check Every</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="30">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">30-second minimum period.</span>
    </div>
  </div>
  <div class="rs-control-group success">
    <label class="rs-control-label">Timeout After</label>
    <div class="rs-controls">
      <input type="text" class="rs-input-mini" value="29">
      <span class="rs-help-inline">seconds</span>
      <span class="rs-help-block">Alarms attached to this check will report critical if the check doesn't respond within the timeout.</span>
      <span class="rs-validation-inline"><i class="rs-validation-indicator"></i>Timeout is less than check duration</span>
    </div>
  </div>
  <div class="rs-control-group">
    <label class="rs-control-label">Regions</label>
    <div class="rs-controls">
      <label class="rs-checkbox">
        <input type="checkbox" checked>
        Dallas (DFW)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox" checked>
        Hong Kong (HKG)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Washington Dulles (IAD)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        London (LON)
    </label>
    <label class="rs-checkbox">
        <input type="checkbox">
        Chicago (ORD)
    </label>
    </div>
  </div>
</form>{% endhighlight %}
	</div>
</div>
