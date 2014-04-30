---
layout: post
category : ui components
title: Progress Bars
updated: August 30, 2013
author: Lauren Dowdy
adherance: 1
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <p>Progress bars visually communicate activity, status and percentage.</p>

    <h3>When to use</h3>
    <ul>
      <li><a href="#progress-bars">Basic Progress Bars</a> can be used when a metric can be expressed in terms of amount consumed versus total amount</li>
      <li><a href="#multi-step-process">Multi-Step Progress Bars</a> are good for representing a user's position in a multi-step process as well as the activity and status of each step. </li>
    </ul>
    <h3>How it works</h3>
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
    <h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
  </div>
  <div class="list-table span-8 offset-1">
    <h4>Examples: <span class="rs-quiet">Basic Progress Bar</span></h4>
    <table>
      <thead>
        <tr>
          <th style="width: 200px">
            <span class="table-sort-text">Progress Bar</span>
            <span class="table-sort-indicator"></span>
          </a>
        </th>
        <th>
          <span class="table-sort-text">Markup</span>
          <span class="table-sort-indicator"></span>
        </a>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div class="rs-progress">
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
        </div>
      </td>
      <td><div class="collapsible-highlight">{% highlight html %}<!-- Default Ok Bar -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-ok"></div>
    </div>
  </div>
</div>

<!-- Striped Ok Bar -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-ok rs-bar-striped"></div>
    </div>
  </div>
</div>{% endhighlight %}</div></td>
  </tr>
  <tr>
    <td>
      <div class="rs-progress">
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
    </td>
    <td><div class="collapsible-highlight">{% highlight html %}<!-- Default Warning Bar -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-warning"></div>
    </div>
  </div>
</div>

<!-- Striped Warning Bar -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-warning rs-bar-striped"></div>
    </div>
  </div>
</div>{% endhighlight %}</div></td>
  </tr>
  </tr>
  <tr>
    <td>
      <div class="rs-progress">
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
      </div>
    </td>
    <td><div class="collapsible-highlight">{% highlight html %}<!-- Default Error Style -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 50%">
      <div class="rs-bar rs-status-error"></div>
    </div>
  </div>
</div>

<!-- Striped Error Style -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-error rs-bar-striped"></div>
    </div>
  </div>
</div>{% endhighlight %}</div></td>
  </tr>
  <tr>
    <td>
      <div class="rs-progress">
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
      </div>
    </td>
    <td><div class="collapsible-highlight">{% highlight html %}<!-- Default Info Bar -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>

<!-- Striped Info Bar -->
<div class="rs-progress">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 60%">
      <div class="rs-bar rs-status-info rs-bar-striped"></div>
    </div>
  </div>
</div>{% endhighlight %}</div></td>
  </tr>
</tbody>
</table>
</div>
</div>
<hr class="subsection-divider" id="progress-bar-sizes">
<h3>Fixed Width + Label</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Most often used in <a href="/ux-patterns/#detail-view">Detail Views</a> when a metric needs to be a fixed size.</p>
    <p>The label is optional but very useful.</p>
    <p><strong>Available in five sizes:</strong></p>
    <ul>
      <li>rs-progress-xsmall</li>
      <li>rs-progress-small</li>
      <li>rs-progress-medium</li>
      <li>rs-progress-large</li>
      <li>rs-progress-xlarge</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-progress rs-progress-medium">
      <div class="rs-progress-inner">
        <div class="rs-segment" style="width: 25%">
          <div class="rs-bar rs-status-info"></div>
        </div>
      </div>
    </div>
    <span class="rs-progress-label">407.2 MB of 2 GB</span>
    <h4 class="markup-margin">Markup</h4>
{% highlight html %}<div class="rs-progress rs-progress-medium">
  <div class="rs-progress-inner">
    <div class="rs-segment" style="width: 25%">
      <div class="rs-bar rs-status-info"></div>
    </div>
  </div>
</div>
<span class="rs-progress-label">407.2 MB of 2 GB</span>{% endhighlight %}
  </div>
</div>

<hr class="subsection-divider" id="multi-step-process">
<h3>Multi-Step Progress Bars</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use when the action being taken has several distinct steps, and because of variable lengths of time, you cannot show accurate percentages.</p>
    <ul>
      <li>The lengths are manually adjustable and should be based on proportionate time of each step.</li>
      <li>Labels should display a user-friendly, one or two word description.</li>
      <li>Use animating stripes to indicate the step currently in progress.</li>
      <li>Use <a href="#status-indicators">status colors</a> to reflect connectivity throughout the process. For example, if step 4 is not required for the product to be back online, change the colors to green (OK) to reflect the API status of the entity.</li>
    </ul>
  </div>
  <div class="list-table span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-panel rs-content" style="margin-top: 0px; min-height: 190px">
      <div class="rs-detail-section">
        <div class="rs-detail-section-header">
          <div class="rs-detail-section-title">Server Details</div>
        </div>
        <div class="rs-detail-section-body">
          <div class="rs-detail-section-body">
            <ul class="rs-detail-list">
              <li class="rs-detail-item">
                <div class="rs-detail-key">Status</div>
                <div class="rs-detail-value">
                  <div class="rs-progress-label">Prepping Resize</div>
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
                  </div>
                </div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Public IP</div>
                <div class="rs-detail-value">
                  166.78.34.156<br>
                  2001:4800:7901:0000:c817:46d7:0000:0006<br>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<div class="rs-progress-label">Prepping Resize</div>
<div class="rs-progress">
    <div class="rs-progress-inner">
      <div class="rs-segment" style="width: 20%">
        <div class="rs-bar rs-status-warning"></div>
        <div class="rs-caption">1. Step One</div>
      </div>
      <div class="rs-segment" style="width: 40%">
        <div class="rs-bar rs-status-warning rs-bar-striped"></div>
        <div class="rs-caption">2. Step Two</div>
      </div>
      <div class="rs-segment" style="width: 25%">
        <div class="rs-bar"></div>
        <div class="rs-caption">3. Step Three</div>
      </div>
      <div class="rs-segment" style="width: 15%">
        <div class="rs-bar"></div>
        <div class="rs-caption">4. Step Four</div>
      </div>
    </div>
  </div>{% endhighlight %}
</div>
</div>
