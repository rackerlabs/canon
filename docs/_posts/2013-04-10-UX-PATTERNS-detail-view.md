---
layout: post
category : ux patterns
title: Detail View
updated: October 15, 2013
author: Andrew Raiford
adherence: 3
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <p>Use this pattern for details about a single item or product. The content of a detail view can be broken into 3 main parts:</p>
    <ol>
      <li>The <strong>Details Component</strong> summarizes the product or item you are viewing. Combine with the components listed below for navigation, status details, and embedded actions.</li>
      <li>The <strong>Right Sidebar</strong> contains help text and links about managing the product in view.</li>
      <li>The <strong>Back Link</strong> points to the list view you came from. </li>
    </ol>
    <h3>Complex Components:</h3>
    <ul>
      <li><a href="/ui-components/#details" class="highlight-source" data-highlight-target="detail-example-details-component">Details Component</a></li>
      <li><a href="/ui-components/#embedded-list-table" class="highlight-source" data-highlight-target="detail-example-embedded-list-table">Embedded List Table</a></li>
      <li><a href="/ux-patterns/#detail-view" class="highlight-source" data-highlight-target="detail-example-help-sidebar">Help Sidebar</a></li>
    </ul>
    <h3>Simple Components:</h3>
    <ul>
      <li><a href="/ui-components/#back-link" class="highlight-source" data-highlight-target="detail-example-back-link">Back Link</a></li>
      <li><a href="/ui-components/#action-buttons" class="highlight-source" data-highlight-target="detail-example-action-button">Action Button</a></li>
      <li><a href="/ui-components/#status-indicators" class="highlight-source" data-highlight-target="detail-example-status-indicator">Status Indicator</a></li>
      <li><a href="/ui-components/#edit-button" class="highlight-source" data-highlight-target="detail-example-edit-button">Edit Button</a></li>
      <li><a href="/ui-components/#action-cogs" class="highlight-source" data-highlight-target="detail-example-action-cog">Action Cog</a></li>
      <li>Dropdowns:
        <ul>
          <li><a href="/ui-components/#action-dropdown" class="highlight-source" data-highlight-target="detail-example-action-button-dropdown">Actions Dropdown</a></li>
          <li><a href="/ui-components/#action-dropdown" class="highlight-source" data-highlight-target="detail-example-action-cog-dropdown">Cog Dropdown</a></li>
        </ul>
      </li>
      <li>Popovers:
        <ul>
          <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="rename-server-popover">Actions Button Popover</a></li>
          <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="resize-popover">Item Details Popovers</a></li>
          <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="edit-item-popover">Embedded List Popovers</a></li>
        </ul>
      </li>
    </ul>
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span></h4>
  </div>
  <div class="span-9">
    <div class="rs-back-link"><a href="#list-view" id="detail-example-back-link">&lsaquo; Back to Items List</a></div>
    <div class="rs-main rs-panel">
      <div class="rs-sidebar rs-pull-right" id="detail-example-help-sidebar">
        <div class="rs-inner">
          <h3>Managing This Product</h3>
          <h4>Top action helpful text</h4>
          <p>Short blurb about best practices for a top action on this item. Try to keep this to 3 lines maximum.</p>
          <p><a target="blank" href="#detail-view">More Details About Blurb »</a></p>
          <hr>
          <h4>Help Me With...</h4>
          <ul>
            <li><a target="blank" href="#detail-view">Best Practice Number One</a></li>
            <li><a target="blank" href="#detail-view">Best Practice Number Two</a></li>
            <li><a target="blank" href="#detail-view">Best Practice Number Three</a></li>
          </ul>
          <p><a target="blank" href="#detail-view">Learn More about This Product »</a></p>
          <hr>
          <h4>What's Next</h4>
          <ul>
            <li><a target="blank" href="#detail-view">Top Action Number One</a></li>
            <li><a target="blank" href="#detail-view">Top Action Number Two</a></li>
            <li><a target="blank" href="#detail-view">Top Action Number Three</a></li>
          </ul>
          <p><a target="blank" href="#detail-view">Visit Our Knowledge Center &raquo;</a></p>
        </div>
      </div>
      <div class="rs-content rs-panel rs-detail-xlarge" id="detail-example-details-component">
        <div class="rs-detail-header">
          <div class="rs-detail-header-actions">
            <div class="rs-dropdown">
              <button class="rs-btn rs-btn-action rs-dropdown-toggle" id="detail-example-action-button">
                <span class="rs-cog"></span>
                Actions
                <span class="rs-caret"></span>
              </button>
              <ul class="rs-dropdown-menu hidden" style="right:0;" id="detail-example-action-button-dropdown">
                <li><span class="rs-dropdown-category">Identify</span></li>
                <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-button" data-popover="rename-server-popover" data-popover-position="bottom-left" id="rename-item-link">Rename Item&hellip;</a></li>
                <li><span class="rs-dropdown-category">Manage</span></li>
                <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="size-key" data-popover="resize-popover" data-popover-position="right" id="resize-item-link">Resize Item&hellip;</a></li>
                <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-button" data-popover="create-check-popover" data-popover-position="bottom-left">Add Check&hellip;</a></li>
                <li><span class="rs-dropdown-category"></span></li>
                <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-button" data-popover="confirm-delete-popover" data-popover-position="bottom-left" id="delete-item-link">Delete Item&hellip;</a></li>
              </ul>
            </div>
          </div>
          <div class="rs-detail-header-subtitle">Product Category</div>
          <div class="rs-detail-header-title">Item Name</div>
        </div>
        <div class="rs-detail-section">
          <div class="rs-detail-section-header">
            <div class="rs-detail-section-title">Item Details</div>
          </div>
          <div class="rs-detail-section-body">
            <ul class="rs-detail-list">
              <li class="rs-detail-item">
                <div class="rs-detail-key">Status</div>
                <div class="rs-detail-value">
                  <div class="rs-status rs-status-ok" id="detail-example-status-indicator">Active</div>
                </div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">ID</div>
                <div class="rs-detail-value">123456</div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Public IP</div>
                <div class="rs-detail-value">
                  166.78.34.156<br>
                  2001:4800:7901:0000:c817:46d7:0000:0006<br>
                </div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key" id="size-key">RAM</div>
                <div class="rs-detail-value">
                  <div class="rs-progress rs-progress-small">
                    <div class="rs-progress-inner">
                      <div class="rs-segment" style="width: 49%">
                        <div class="rs-bar rs-status-info"></div>
                      </div>
                    </div>
                  </div>
                  <span class="rs-progress-label">912.23 MB of 2 GB</span>
                </div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key" id="size-key">Disk</div>
                <div class="rs-detail-value">100 GB <button class="rs-edit rs-popover-source" data-popover-target="size-key" data-popover="resize-popover" data-popover-position="right" id="detail-example-edit-button"></button></div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Region</div>
                <div class="rs-detail-value">Dallas (DFW)</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="rs-detail-section">
          <div class="rs-detail-section-header">
            <div class="rs-detail-section-title">Embedded List</div>
          </div>
          <div class="rs-detail-section-body">
            <div class="rs-embedded-list-table-wrapper rs-embedded-medium" id="detail-example-embedded-list-table">
              <table class="rs-list-table rs-embedded-list-table">
                <thead>
                  <tr>
                    <th class="rs-table-status"></th>
                    <th class="rs-table-cog"></th>
                    <th>Name</th>
                    <th>IPv4</th>
                    <th>IPv6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="rs-table-status rs-table-status-ok"></td>
                    <td class="rs-table-cog">
                      <div class="rs-dropdown">
                        <div class="rs-cog rs-dropdown-toggle" id="detail-example-action-cog"></div>
                        <ul class="rs-dropdown-menu hidden" id="detail-example-action-cog-dropdown">
                          <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-cog" data-popover="edit-item-popover" data-popover-position="bottom-right" id="rename-item-link-1">Edit Item&hellip;</a></li>
                          <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-cog" data-popover="confirm-delete-popover" data-popover-position="bottom-right">Delete Item&hellip;</a></li>
                        </ul>
                      </div>
                    </td>
                    <td class="rs-table-text">Item One</td>
                    <td class="rs-table-text">101.122.11.222</td>
                    <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                  </tr>
                  <tr>
                    <td class="rs-table-status rs-table-status-warning"></td>
                    <td class="rs-table-cog">
                      <div class="rs-dropdown">
                        <div class="rs-cog rs-dropdown-toggle" id="detail-example-action-cog-2"></div>
                        <ul class="rs-dropdown-menu hidden">
                          <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-cog-2" data-popover="edit-item-popover" data-popover-position="bottom-right" id="rename-item-link-1">Edit Item&hellip;</a></li>
                          <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-cog-2" data-popover="confirm-delete-popover" data-popover-position="bottom-right">Delete Item&hellip;</a></li>
                        </ul>
                      </div>
                    </td>
                    <td class="rs-table-text">Item Two</td>
                    <td class="rs-table-text">10.111.22.112</td>
                    <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                  </tr>
                  <tr>
                    <td class="rs-table-status rs-table-status-error"></td>
                    <td class="rs-table-cog">
                      <div class="rs-dropdown">
                        <div class="rs-cog rs-dropdown-toggle" id="detail-example-action-cog-3"></div>
                        <ul class="rs-dropdown-menu hidden">
                          <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-cog-3" data-popover="edit-item-popover" data-popover-position="bottom-right" id="rename-item-link-1">Edit Item&hellip;</a></li>
                          <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="detail-example-action-cog-3" data-popover="confirm-delete-popover" data-popover-position="bottom-right">Delete Item&hellip;</a></li>
                        </ul>
                      </div>
                    </td>
                    <td class="rs-table-text">Item Two</td>
                    <td class="rs-table-text">10.111.22.112</td>
                    <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="rs-detail-section">
          <div class="rs-detail-section-header">
            <div class="rs-detail-section-title">Additional Item Details</div>
          </div>
          <div class="rs-detail-section-body">
            <ul class="rs-detail-list">
              <li class="rs-detail-item">
                <div class="rs-detail-key">Created</div>
                <div class="rs-detail-value">Mar 26, 2013 - 5:35 pm UTC</div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Updated</div>
                <div class="rs-detail-value">Aug 22, 2013 - 11:43 pm UTC</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="span-12">
    <h4 class="markup-margin">Markup</h4>

    {% highlight html %}<!-- Back Link -->
    <div class="rs-back-link"><a href="#">&lsaquo; Back to Items List</a></div>
    <!-- Container -->
    <div class="rs-main rs-panel">
      
      <!-- Help Sidebar -->
      <div class="rs-sidebar rs-pull-right">
        <div class="rs-inner">
          <h3>Managing This Product</h3>
          <h4>Top action helpful text</h4>
          <p>Short blurb about best practices for a top action on this item. Try to keep this to 3 lines maximum.</p>
          <p><a target="blank" href="#">More Details About Blurb &raquo;</a></p>
          <hr>
          <h4>Help Me With...</h4>
          <ul>
            <li><a target="blank" href="#">Best Practice Number One</a></li>
            <li><a target="blank" href="#">Best Practice Number Two</a></li>
            <li><a target="blank" href="#">Best Practice Number Three</a></li>
          </ul>
          <p><a target="blank" href="#">Learn More about This Product &raquo;</a></p>
          <hr>
          <h4>What's Next</h4>
          <ul>
            <li><a target="blank" href="#">Top Action Number One</a></li>
            <li><a target="blank" href="#">Top Action Number Two</a></li>
            <li><a target="blank" href="#">Top Action Number Three</a></li>
          </ul>
          <p><a target="blank" href="#">Visit Our Knowledge Center &raquo;</a></p>
        </div>
      </div>
      <!-- End Help Sidebar -->

      <!-- Main Content -->
      <div class="rs-content rs-panel">
        <div class="rs-detail-header">
          <div class="rs-detail-header-actions">
            <div class="rs-dropdown">
              <button class="rs-btn rs-btn-action rs-dropdown-toggle">
                <span class="rs-cog"></span>
                Actions
                <span class="rs-caret"></span>
              </button>
              <ul class="rs-dropdown-menu" style="right:0;">
                <li><span class="rs-dropdown-category">Identify</span></li>
                <li><a href="#">Rename Item&hellip;</a></li>
                <li><a href="#">Tag Item&hellip;</a></li>
                <li><span class="rs-dropdown-category">Manage</span></li>
                <li><a href="#">Connect Via Terminal&hellip;</a></li>
                <li><a href="#">Reboot Item&hellip;</a></li>
                <li><a href="#">Change Password&hellip;</a></li>
                <li><a href="#">Delete Item&hellip;</a></li>
              </ul>
            </div>
          </div>
          <div class="rs-detail-header-subtitle">Product Category</div>
          <div class="rs-detail-header-title">Item Name</div>
        </div>
        <div class="rs-detail-section">
          <div class="rs-detail-section-header">
            <div class="rs-detail-section-title">Item Details</div>
          </div>
          <div class="rs-detail-section-body">
            <ul class="rs-detail-list">
              <li class="rs-detail-item">
                <div class="rs-detail-key">Status</div>
                <div class="rs-detail-value">
                  <div class="rs-status rs-status-ok">Active</div>
                </div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">ID</div>
                <div class="rs-detail-value">123456</div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Public IP</div>
                <div class="rs-detail-value">
                  166.78.34.156<br>
                  2001:4800:7901:0000:c817:46d7:0000:0006<br>
                </div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Size</div>
                <div class="rs-detail-value">100 GB <button class="rs-edit"></button></div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Region</div>
                <div class="rs-detail-value">Dallas (DFW)</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="rs-detail-section">
          <div class="rs-detail-section-header">
            <div class="rs-detail-section-title">Embedded List</div>
          </div>
          <div class="rs-detail-section-body">
            <div class="rs-embedded-list-table-wrapper rs-embedded-medium" id="detail-example-embedded-list-table">
              <table class="rs-list-table rs-embedded-list-table">
                <thead>
                  <tr>
                    <th class="rs-table-status"></th>
                    <th class="rs-table-cog"></th>
                    <th>Name</th>
                    <th>IPv4</th>
                    <th>IPv6</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="rs-table-status rs-table-status-ok"></td>
                    <td class="rs-table-cog">
                      <div class="rs-dropdown">
                        <div class="rs-cog rs-dropdown-toggle"></div>
                        <ul class="rs-dropdown-menu">
                          <li><span class="rs-dropdown-category" id="first">Identify</span></li>
                          <li><a href="javascript:void(0);">Edit Item&hellip;</a></li>
                          <li><a href="javascript:void(0);">Delete Item&hellip;</a></li>
                        </ul>
                      </div>
                    </td>
                    <td class="rs-table-text">Item One</td>
                    <td class="rs-table-text">101.122.11.222</td>
                    <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                  </tr>
                  <tr>
                    <td class="rs-table-status rs-table-status-warning"></td>
                    <td class="rs-table-cog">
                      <div class="rs-dropdown">
                        <div class="rs-cog rs-dropdown-toggle"></div>
                        <ul class="rs-dropdown-menu">
                          <li><a href="javascript:void(0);">Edit Item&hellip;</a></li>
                          <li><a href="javascript:void(0);">Delete Item&hellip;</a></li>
                        </ul>
                      </div>
                    </td>
                    <td class="rs-table-text">Item Two</td>
                    <td class="rs-table-text">10.111.22.112</td>
                    <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                  </tr>
                  <tr>
                    <td class="rs-table-status rs-table-status-error"></td>
                    <td class="rs-table-cog">
                      <div class="rs-dropdown">
                        <div class="rs-cog rs-dropdown-toggle"></div>
                        <ul class="rs-dropdown-menu">
                          <li><a href="javascript:void(0);">Edit Item&hellip;</a></li>
                          <li><a href="javascript:void(0);">Delete Item&hellip;</a></li>
                        </ul>
                      </div>
                    </td>
                    <td class="rs-table-text">Item Two</td>
                    <td class="rs-table-text">10.111.22.112</td>
                    <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="rs-detail-section">
          <div class="rs-detail-section-header">
            <div class="rs-detail-section-title">Additional Item Details</div>
          </div>
          <div class="rs-detail-section-body">
            <ul class="rs-detail-list">
              <li class="rs-detail-item">
                <div class="rs-detail-key">Created</div>
                <div class="rs-detail-value">Mar 26, 2013 - 5:35 pm UTC</div>
              </li>
              <li class="rs-detail-item">
                <div class="rs-detail-key">Updated</div>
                <div class="rs-detail-value">Aug 22, 2013 - 11:43 pm UTC</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Main Content -->
    </div>
    <!-- End Container -->{% endhighlight %}

  </div>
</div>