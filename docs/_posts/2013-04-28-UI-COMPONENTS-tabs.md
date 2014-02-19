---
layout: post
category : ui components
title: Tabs
updated: August 28, 2013
author: Lauren Dowdy
adherance: 2
tags : [intro, about, canon]
---
<div class="rs-row">
	<div class="span-3">
		<h3>When to use</h3>
    <p>Tabs are used to navigate lists of related content. In forms, they are used to categorize and organize similar content. The count for each list is not required, but feel free to use where appropriate.</p>
    <ul>
      <li>Use when the content for each tab has similar structure (e.g., list tables).</li>
      <li>Use when there is not enough space on the page to show all content.</li>
      <li>Use when the content of each tab can be viewed separately from each other, and doesn't require comparison.</li>
      <li>Do not use when the content inside each pane would function just as well in its own separate page.</li>
      <li>Limit to 5-8 sections, depending on the length of each section name.</li>
    </ul>
		<h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<h4>Example</h4>
      <ul class="rs-tabs">
        <li><a href="#one">First Tab <span class="rs-quiet">(6)</span></a></li>
        <li class="active"><a href="#two">Active Tab <span class="rs-quiet">(3)</span></a></li>
        <li><a href="#three">Third Tab <span class="rs-quiet">(5)</span></a></li>
      </ul>
      <div class="rs-tab-content">
        <div class="rs-tab-pane">
          <p>Tab content pane one</p>
        </div>
        <div class="rs-tab-pane active">
          <div class="list-table">
            <div class="rs-detail-section">
              <table>
                <thead>
                  <tr>
                    <th>
                      <span class="table-sort-text">Name</span>
                      <span class="table-sort-indicator"></span>
                    </th>
                    <th>
                      <span class="table-sort-text">Updated</span>
                      <span class="table-sort-indicator"></span>
                    </th>
                    <th>
                      <span class="table-sort-text">ID</span>
                      <span class="table-sort-indicator"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><a href="#">Table Item 1</a></td>
                    <td>Aug 28, 2013</td>
                    <td>123456</td>
                  </tr>
                  <tr>
                    <td><a href="#">Table Item 2</a></td>
                    <td>Aug 25, 2013</td>
                    <td>789012</td>
                  </tr>
                  <tr>
                    <td><a href="#">Table Item 3</a></td>
                    <td>Jul 14, 2013</td>
                    <td>345678</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="rs-tab-pane">
          <p>Tab content pane three</p>
        </div>
      </div>
    <br />
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<ul class="rs-tabs">
  <li><a href="#one">Normal <span class="rs-quiet">(1)</span></a></li>
  <li class="active"><a href="#two">Active <span class="rs-quiet">(2)</span></a></li>
  <li class="hover"><a href="#three">Hover <span class="rs-quiet">(3)</span></a></li>
</ul>
<div class="rs-tab-content">
  <div class="rs-tab-pane">
    <p>Tab content pane one</p>
  </div>
  <div class="rs-tab-pane active">
    <p>Tab content pane two</p>
  </div>
  <div class="rs-tab-pane">
    <p>Tab content pane three</p>
  </div>
</div>{% endhighlight %}
  </div>

</div>
