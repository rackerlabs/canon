---
layout: post
category : ui components
title: Popover
updated: August 28, 2013
author: Andrew Raiford
adherence: 3
tags : [intro, about, canon]
---

<div class="rs-row">
	<div class="span-3 section-description">
		<p>Use the popover in conjunction with <a href="#details">Details</a> and <a href="#edit-button">Edit Button</a> to edit data or with the <a href="#primary-buttons">Primary Button</a> to add or create data.</p>
		<ul>
			<li>The notch of the popover always points to the title (key, link, or button) of the element you are editing or viewing.</li>
			<li>The popover should cover any information that you are editing.</li>
			<li>Popover buttons have reserved space at the bottom. Save button labels should indicate what action you are performing and  always relate to the subject of the popover.</li>
			<li>Clicking outside the popover should close it. Interaction with elements under the popover is restricted until closed.</li>
			<li>Don't force-fit multi-step processes into popovers.  That sort of interaction should be acheived using full-page views.</li>
			<li>Try to avoid spawning popovers from popovers.  Keeping the interaction as flat as possible is the key to clean design.</li>
			<li>Avoid spawning popovers on hover.  They should not behave like tooltips.</li>
			<li>Specify form sizes to match the width of the longest label: xsmall, small, medium, large, xlarge, xxlarge.</li>
		</ul>
		<h5>Required Components</h5>
		<ul>
			<li><a href="#primary-buttons">Primary Button</a></li>
			<li><a href="#cancel-link">Cancel Link</a></li>
		</ul>
		<h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<h4 class="example-margin">Example</h4>
		<div class="rs-popover">
			<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
			<div class="rs-popover-content">
				<div class="rs-popover-body">
					<form class="rs-form-horizontal rs-form-small">
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
					</form>
				</div>
				<div class="rs-popover-footer rs-btn-group">
					<div class="rs-btn rs-btn-primary">Save</div>
					<div class="rs-btn rs-btn-link">Cancel</div>
				</div>
				</div>
			</div>
			<div class="dummy-div-just-to-get-spacing-right" style="height:186px; width:100%;"></div>
			<h4 class="markup-margin">Markup</h4>
			{% highlight html %}<div class="rs-popover">
	<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
	<div class="rs-popover-content">
		<div class="rs-popover-body">
			<form class="rs-form-horizontal rs-form-small">
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
			</form>
		</div>
		<div class="rs-popover-footer rs-btn-group">
			<div class="rs-btn rs-btn-primary">Save</div>
			<div class="rs-btn rs-btn-link">Cancel</div>
		</div>
	</div>
</div>{% endhighlight %}
		</div>
	</div>
	<hr class="subsection-divider">
	<h3>Four corners to choose from</h3>
	<div class="rs-row">
		<div class="span-3 section-description">
			<p>The popover comes with arrows on each top corner.  Depending on the relative location of the generating element, you may want to choose the left or right side arrows.</p>
			<p><strong>Left and right</strong> side arrows are often useful in the <a href="/ui-components/#details">Details</a> component.
			<ul>
				<li>The pover should spawn upon clicking the <a href="#edit-buton">Edit Button</a> in the Key / Value list.</li>
			</ul>
			</p>
			<p><strong>Top arrows</strong> are useful when spawning a popover from a button like the Actions button in <a href="/ui-components/#details">Details</a>.
			<ul>
				<li>The popover should spawn from the <a href="#details">Actions Button</a> after a selection has been made from the dropdown.</li>
			</ul>
			</p>
		</div>
		<div class="span-8 offset-1">
			<h4 class="example-margin">Example</h4>
			<div class="rs-popover">
				<div class="rs-popover-arrow rs-popover-arrow-left-top"></div>
				<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
				<div class="rs-popover-arrow rs-popover-arrow-top-right"></div>
				<div class="rs-popover-arrow rs-popover-arrow-right-top"></div>
				<div class="rs-popover-content">
					<div class="rs-popover-body">
						<form class="rs-form-horizontal rs-form-small">
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
					</form>
					</div>
						<div class="rs-popover-footer rs-btn-group">
							<div class="rs-btn rs-btn-primary">Save</div>
							<div class="rs-btn rs-btn-link">Cancel</div>
						</div>
					</div>
				</div>
				<div class="dummy-div-just-to-get-spacing-right" style="height:186px; width:100%;"></div>
				<h4 class="markup-margin">Markup</h4>
				{% highlight html %}<div class="rs-popover">
	<div class="rs-popover-arrow rs-popover-arrow-left-top"></div>
	<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
	<div class="rs-popover-arrow rs-popover-arrow-top-right"></div>
	<div class="rs-popover-arrow rs-popover-arrow-right-top"></div>
	<div class="rs-popover-content">
		<div class="rs-popover-body">
			<form class="rs-form-horizontal rs-form-small">
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
			</form>
		</div>
		<div class="rs-popover-footer rs-btn-group">
			<div class="rs-btn rs-btn-primary">Save</div>
			<div class="rs-btn rs-btn-link">Cancel</div>
		</div>
	</div>
</div>{% endhighlight %}
		</div>
	</div>
<hr class="subsection-divider">
<h3>Left aligned field labels</h3>
<div class="rs-row">
	<div class="span-3 section-description">
	<p>Use when there are multiple fields within the form or the fields are small.</p><p>Specify the form size to match the width of the longest label: xsmall, small, medium, large, xlarge, xxlarge. See the <a href="#simple-horizontal-form">Simple Horizontal Form</a> components.</p>
	</div>
	<div class="span-8 offset-1">
		<h4 class="example-margin">Example</h4>
		<div class="rs-popover">
			<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
			<div class="rs-popover-content">
				<div class="rs-popover-body">
					<form class="rs-form-horizontal rs-form-small">
						<div class="rs-control-group">
							<label class="rs-control-label">Label One</label>
							<div class="rs-controls">
								<input type="text" class="rs-input-small">
							</div>
						</div>
						<div class="rs-control-group">
							<label class="rs-control-label">Label Two</label>
							<div class="rs-controls">
								<input type="text" class="rs-input-small"> GB
							</div>
						</div>
						<div class="rs-control-group">
							<label class="rs-control-label">Label Three</label>
							<div class="rs-controls">
								<input type="text" class="rs-input-small">
								<select>
									<option>One</option>
									<option>Two</option>
								</select>
							</div>
						</div>
					</form>
				</div>
				<div class="rs-popover-footer rs-btn-group">
					<div class="rs-btn rs-btn-primary">Save Settings</div>
					<div class="rs-btn rs-btn-link">Cancel</div>
				</div>
			</div>
		</div>
		<div class="dummy-div-just-to-get-spacing-right" style="height:185px; width:100%;"></div>
		<h4 class="markup-margin">Markup</h4>
		{% highlight html %}<div class="rs-popover">
	<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
	<div class="rs-popover-content">
		<div class="rs-popover-body">
			<form class="rs-form-horizontal rs-form-small">
				<div class="rs-control-group">
					<label class="control-label">Label One</label>
					<div class="controls">
						<input type="text">
					</div>
				</div>
				<div class="rs-control-group">
					<label class="rs-control-label">Label Two</label>
					<div class="rs-controls">
						<input type="text"> GB
					</div>
				</div>
				<div class="rs-control-group">
					<label class="rs-control-label">Label Three</label>
					<div class="rs-controls">
						<input type="text">
						<select>
							<option>One</option>
							<option>Two</option>
						</select>
					</div>
				</div>
			</form>
		</div>
		<div class="rs-popover-footer rs-btn-group">
			<div class="rs-btn rs-btn-primary">Save Settings</div>
			<div class="rs-btn rs-btn-link">Cancel</div>
		</div>
	</div>
</div>{% endhighlight %}
</div>
</div>
	<hr class="subsection-divider">
	<h3>Top aligned field labels</h3>
	<div class="rs-row">
    <div class="span-3 section-description">
			<p>Use for single field forms.  See the <a href="#simple-vertical-form">Simple Vertical Form</a> components.</p>
		</div>
		<div class="span-8 offset-1">
			<h4 class="example-margin">Example</h4>
			<div class="rs-popover">
				<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
				<div class="rs-popover-content">
					<div class="rs-popover-body">
						<form>
							<label>Label One</label>
							<input type="text" class="input-large">
						</form>
					</div>
					<div class="rs-popover-footer rs-btn-group">
						<div class="rs-btn rs-btn-primary">Save Settings</div>
						<div class="rs-btn rs-btn-link">Cancel</div>
					</div>
				</div>
			</div>
			<div class="dummy-div-just-to-get-spacing-right" style="height:145px; width:100%;"></div>
			<h4 class="markup-margin">Markup</h4>
			{% highlight html %}<div class="rs-popover">
	<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
	<div class="rs-popover-content">
		<div class="rs-popover-body">
			<form>
				<label>Label One</label>
				<input type="text" class="input-large">
			</form>
		</div>
		<div class="rs-popover-footer rs-btn-group">
			<div class="rs-btn rs-btn-primary">Save Settings</div>
			<div class="rs-btn rs-btn-link">Cancel</div>
		</div>
	</div>
</div>{% endhighlight %}
</div>
</div>
<hr class="subsection-divider">
<h3>Confirmations</h3>
<div class="rs-row">
  <div class="span-3 section-description">
		<ul>
			<li>Actions with permanent effects should be short and to the point.</li>
			<li>Emphasize the permanent effect in bold.</li>
		</ul>
	</div>
	<div class="span-8 offset-1">
	<h4 class="example-margin">Example</h4>
	<div class="rs-popover">
		<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
		<div class="rs-popover-content">
			<div class="rs-popover-body">
				<strong>Permanently delete</strong> server Nimbus-Server?
			</div>
			<div class="rs-popover-footer rs-btn-group">
				<div class="rs-btn rs-btn-primary">Delete Server</div>
				<div class="rs-btn rs-btn-link">Cancel</div>
			</div>
		</div>
	</div>
	<div class="dummy-div-just-to-get-spacing-right" style="height:108px; width:100%;"></div>
	<h4 class="markup-margin">Markup</h4>
	{% highlight html %}<div class="rs-popover">
	<div class="rs-popover-arrow rs-popover-arrow-top-left"></div>
	<div class="rs-popover-content">
		<div class="rs-popover-body">
			<strong>Permanently delete</strong> server Nimbus-Server?
		</div>
		<div class="rs-popover-footer rs-btn-group">
			<div class="rs-btn rs-btn-primary">Delete Server</div>
			<div class="rs-btn rs-btn-link">Cancel</div>
		</div>
	</div>
</div>{% endhighlight %}
</div>
</div>
<hr class="subsection-divider">
<h3>Instructions & Messaging</h3>
<div class="rs-row">
  <div class="span-3 section-description">
		<ul>
			<li><strong>Use Instructions</strong> at the top of a popover when a group of fields or a table follow.</li>
			<li>Should always be written as an action (”Choose” for radio buttons “Select” for dropdowns)</li>
		</ul>
		<ul>
			<li><strong>Use Warnings</strong> or explanations to inform a user about effects of their actions.</li>
			<li>The text is usually below all choices and right above the buttons.</li>
		</ul>
	</div>
	<div class="span-8 offset-1">
		<h4 class="example-margin">Example</h4>
		<div class="rs-popover">
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
										<span class="rs-help-block">Faster build times but requires manual partitioning</span>
									</label>
									<label class="rs-radio">
										<input type="radio" name="three">
										<strong>Automatic</strong>
										<span class="rs-help-block">Entire disk is single partition and automatically resizes</span>
									</label>
								</div>
							</div>
					</form><strong>Warning</strong>: This will <strong>destroy</strong> all existing data in the server.
				</div>
				<div class="rs-popover-footer rs-btn-group">
					<div class="rs-btn rs-btn-primary">Partition Server</div>
					<div class="rs-btn rs-btn-link">Cancel</div>
				</div>
			</div>
		</div>
		<div class="dummy-div-just-to-get-spacing-right" style="height:230px; width:100%;"></div>
		<h4 class="markup-margin">Markup</h4>
		{% highlight html %}<div class="rs-popover">
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
								<span class="rs-help-block">Faster build times but requires manual partitioning</span>
							</label>
							<label class="rs-radio">
								<input type="radio" name="three">
								<strong>Automatic</strong>
								<span class="rs-help-block">Entire disk is single partition and automatically resizes</span>
							</label>
						</div>
					</div>
			</form><strong>Warning</strong>: This will <strong>destroy</strong> all existing data in the server.
		</div>
		<div class="rs-popover-footer rs-btn-group">
			<div class="rs-btn rs-btn-primary">Partition Server</div>
			<div class="rs-btn rs-btn-link">Cancel</div>
		</div>
	</div>
</div>{% endhighlight %}
	</div>
</div>