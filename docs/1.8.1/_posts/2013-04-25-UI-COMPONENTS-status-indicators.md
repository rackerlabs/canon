---
layout: post
category : ui components
title: Status Indicators
updated: August 27, 2013
author: Lauren Dowdy
adherance: 1
tags : [intro, about, canon]
---
<div class="rs-row">
	<div class="span-3">
		<h3>How it works</h3>
		<p>Use status indicators for any entity with states that may impact the customer's experience.</p>
		<ul>
			<li>Indicators use a solid color to represent status, such as "error, warning, active, or disabled".</li>
			<li>Use .rs-status for the pill-style component. It is most often the first item on an entity's <a href="#details">details</a> page.</li>
      <li>The <a href="#colored-text">colored text</a> style (without .rs-status) is often used in a table to explain a process.</li>
			<li>Improve the API status formatting as necessary (e.g., change API strings from ALL CAPS to Title Case).</li>
			<li>Status specifications for Cloud Products can be found below. Use these as an example for mapping other Rackspace API statuses to the UI.</li>
			<ul>
				<li><a href="https://one.rackspace.com/display/reach/Cloud+Servers+Status+Specification">Servers</a></li>
				<li><a href="https://one.rackspace.com/display/reach/Cloud+Database+Status+Specification">Databases</a></li>
				<li><a href="https://one.rackspace.com/display/reach/Block+Storage+Status+Specification">Block Storage</a></li>
				<li><a href="https://one.rackspace.com/display/reach/Deployments+Status+Specification">Deployments</a></li>
				<li><a href="https://one.rackspace.com/display/reach/Images+Status+Specification">Images</a></li>
			</ul>
		</ul>
		<h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
	</div>
	<div class="list-table span-8 offset-1">
		<h4>Examples</h4>
      <table>
        <thead>
          <tr>
            <th>
              <span class="table-sort-text">Status</span>
              <span class="table-sort-indicator"></span>
              </a>
            </th>
            <th>
              <span class="table-sort-text">When to Use</span>
              <span class="table-sort-indicator"></span>
              </a>
            </th>
            <th style="width: 260px">
              <span class="table-sort-text">Examples</span>
              <span class="table-sort-indicator"></span>
              </a>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span class="rs-status rs-status-error">Error</span>
            </td>
            <td>Product is not working as intended</td>
            <td>Server that failed to build</td>
          </tr>
          <tr>
            <td>
              <span class="rs-status rs-status-processing">Building</span>
            </td>
            <td>Product is running a user-initiated process that causes it to intermittently work. It is temporarily in this state and will return to normal afterwards.</td>
            <td>Server that is builing or resizing</td>
          </tr>
          <tr>
            <td>
              <span class="rs-status rs-status-warning">Warning</span>
            </td>
            <td>Product is intermittently working or is trending towards unhealthy</td>
            <td>Monitoring check in warning</td>
          </tr>
          <tr>
            <td>
              <span class="rs-status rs-status-ok">Active</span>
            </td>
            <td>Product is working correctly</td>
            <td>Active load balancer</td>
          </tr>
          <tr>
            <td>
              <span class="rs-status rs-status-disabled">Disabled</span>
            </td>
            <td>Product has been intentionally stopped by the user</td>
            <td>Disabled monitoring check</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<span class="rs-status rs-status-error">Error</span>
<span class="rs-status rs-status-processing">Building</span>
<span class="rs-status rs-status-warning">Warning</span>
<span class="rs-status rs-status-ok">Active</span>
<span class="rs-status rs-status-disabled">Disabled</span>{% endhighlight %}
	</div>
</div>
<hr class="subsection-divider" id="colored-text">
<h3>Colored Status Text</h3>
<div class="rs-row">
  <div class="span-3">
    <p>The colored text is designed to be used in place of the API <a href="#status-indicators">status indicators</a>. It usually represents a process or condition of an entity, rather than the status of the object itself.</p>
    <p>Primary use is in list tables to denote a process when there is no API status (e.g., <a href="https://one.rackspace.com/display/reach/Deployments+Status+Specification">Deployments</a>).</p>
    </ul>
  </div>
  <div class="list-table span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-panel rs-content" style="margin-top: 0px">
      <div class="rs-detail-section">
        <div class="rs-detail-section-header">
          <div class="rs-detail-section-title">Deployments</div>
        </div>
        <div class="rs-detail-section-body">
          <table>
            <thead>
              <tr>
                <th>
                  <span class="table-sort-text">Name</span>
                  <span class="table-sort-indicator"></span>
                  </a>
                </th>
                <th>
                  <span class="table-sort-text">Type</span>
                  <span class="table-sort-indicator"></span>
                  </a>
                </th>
                <th>
                  <span class="table-sort-text">Condition</span>
                  <span class="table-sort-indicator"></span>
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="width: 260px">
                <td>Wordpress Deployment</td>
                <td>WordPress 3.4.1</td>
                <td>
                  <span class="rs-status-ok">Deployed on Aug 26, 2013 - 1:43 PM UTC</span>
                </td>
              </tr>
              <tr>
                <td>Drupal Deployment</td>
                <td>Drupal 2.3</td>
                <td>
                  <span class="rs-status-processing">Deployment in Progress (22%)</span>
                </td>
              </tr>
              <tr>
                <td>IPython-1</td>
                <td>IPython Notebook 1</td>
                <td>
                  <span class="rs-status-processing">Deployment in Progress (78%)</span>
                </td>
              </tr>
              <tr>
                <td>Wordpress Deployment 2</td>
                <td>WordPress 3.4.1</td>
                <td>
                  <span class="rs-status-error">Error - Max Retries Exceeded</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<span class="rs-status-ok">A success message about a completed process</span>
<span class="rs-status-processing">The progress of a specific process</span>
<span class="rs-status-warning">A warning message about an intermittently working process</span>
<span class="rs-status-error">An error message about a failed process</span>
<span class="rs-status-disabled">A message about a disabled process</span>{% endhighlight %}
  </div>

</div>
<hr class="subsection-divider" id="monitoring-status-list">
<h3>Monitoring Status List</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use to display monitoring check status in a <a href="#tables">Table</a> row.</p>
    <ul>
      <li>Use <a href="#tooltips">Tooltips</a> to display check details.</li>
      <li>Use the <a href="#plus-button">Plus Button</a> to let users add checks if none exist on a monitoring-enabled device.</li>
      <li>The Plus Button should spawn a <a href="#popover">Popover</a> for creating a check on the device.</li>
      <li>See the <a href="{{ site.baseurl }}/demos" target="_blank">Cloud Servers list</a> for an example.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4 class="example-margin">Example</h4>
    <table class="rs-list-table">
      <thead>
        <tr>
          <th style="width: 50%;">Example Device Name</th>
          <th>Monitoring</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>my.server.123.ord.com</td>
          <td class="rs-table-status-list">
            <ul class="rs-status-list">
              <li class="rs-status-list-item">
                <div class="rs-icon-status rs-status-ok"></div>
              </li>
              <li class="rs-status-list-item">
                <div class="rs-icon-status rs-status-warning"></div>
              </li>
              <li class="rs-status-list-item">
                <div class="rs-icon-status rs-status-error"></div>
              </li>
              <li class="rs-status-list-item">
                <div class="rs-icon-status rs-status-disabled"></div>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>no.checks.server.456.dfw.com</td>
          <td>
            <button class="rs-plus"></button>
          </td>
        </tr>
      </tbody>
    </table>
  <h4 class="markup-margin">Markup</h4>
  {% highlight html %}<table class="rs-list-table">
  <thead>
    <tr>
      <th>Example Device Name</th>
      <th>Monitoring</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>my.server.123.ord.com</td>
      <td class="rs-table-status-list">
        <ul class="rs-status-list">
          <li class="rs-status-list-item">
            <div class="rs-icon-status rs-status-ok"></div>
          </li>
          <li class="rs-status-list-item">
            <div class="rs-icon-status rs-status-warning"></div>
          </li>
          <li class="rs-status-list-item">
            <div class="rs-icon-status rs-status-error"></div>
          </li>
          <li class="rs-status-list-item">
            <div class="rs-icon-status rs-status-disabled"></div>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>{% endhighlight %}
  </div>
</div>
