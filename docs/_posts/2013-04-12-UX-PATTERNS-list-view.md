---
layout: post
category : ux patterns
title: List View
updated: April 11, 2014
author: Andrew Raiford
adherence: 3
tags : [intro, about, canon]
items:
 1:
  name: My Product Item 1
  id: 1d1f2566-8174-4113-9623-2f3bdee3b92d
  ip: 111.222.111
  status: ok
  checks: [ok,ok,ok,disabled,disabled,disabled,warning]
 2:
  name: My Product Item 2
  id: 2162868d-b74b-4cc9-9ca9-b7e5e2e12f99
  ip: 222.111.222
  status: warning
  checks: [warning,ok,warning,error,ok,disabled,warning,disabled,disabled,disabled]
 3:
  name: My Product Item 3
  id: 31b58370-372f-40fe-bb8f-4fc692e671d0
  ip: 222.111.222
  status: error
 4:
  name: My Product Item 4
  id: 4dd184a5-553b-47a6-9bc6-7097341648e6
  ip: 222.111.222
  status: ok
 5:
  name: My Product Item 5
  id: 51434258
  ip: 222.111.222
  status: ok
  checks: [ok,ok,ok,ok,ok,ok,ok,disabled,warning]
 6:
  name: My Product Item 6
  id: 6162868d-b74b-4cc9-9ca9-b7e5e2e12f99
  ip: 222.111.222
  status: warning
  checks: [ok,warning,warning,error,ok,disabled,warning]
 7:
  name: My Product Item 7
  id: 7162868d-b74b-4cc9-9ca9-b7e5e2e12f99
  ip: 222.111.222
  status: ok
 8:
  name: My Product Item 8
  id: 8d1f2566-8174-4113-9623-2f3bdee3b92d
  ip: 222.111.222
  status: ok
  checks: [ok,ok,ok,error,ok,disabled,warning,ok,warning]
 9:
  name: My Product Item 9
  id: 9d1f2566-8174-4113-9623-2f3bdee3b92d
  ip: 222.111.222
  status: warning
 10:
  name: My Product Item 10
  id: 10d1f2566-8174-4113-9623-2f3bdee3b92d
  ip: 222.111.222
  status: ok
 11:
  name: My Product Item 11
  id: 11dd184a5-553b-47a6-9bc6-7097341648e6
  ip: 222.111.222
  status: ok
 12:
  name: My Product Item 12
  id: 12d1f2566-8174-4113-9623-2f3bdee3b92d
  ip: 111.222.111
  status: error

itemStatuses:
 ok: "<div class='title rs-no-wrap rs-status-ok'><strong>Active</strong></div><div class='rs-quiet'>Use When: Item is working correctly.</div>"
 ok rs-table-status-striped: "<div class='title rs-no-wrap rs-status-ok'><strong>Action Pending</strong></div><div class='rs-quiet'>Use When: User-initiated action is pending and item is still active.</div>"
 warning: "<div class='title rs-no-wrap rs-status-processing'><strong>Warning</strong> </div><div class='rs-quiet'>Use When: Item is intermittently working or is trending towards unhealthy.</div></div>"
 warning rs-table-status-striped: "<div class='title rs-no-wrap rs-status-processing'><strong>Intermittently Available</strong> </div><div class='rs-quiet'>Use When: Item is running a user-initiated process that causes it to intermittently work. It is temporarily in this state and will return to normal afterwards.</div></div>"
 error: "<div class='title rs-no-wrap rs-status-error'><strong>Error</strong></div><div class='rs-quiet'>Use When: Item is not working as intended.<br>Inform the user they should contact Support for troubleshooting.</div>"

checkStatuses:
 ok: "<div class='rs-no-wrap rs-status-ok'>HTTP Check (Website) OK</div><p class='rs-no-wrap rs-quiet'>Since: Nov 2, 2013 10:52:55 PM UTC</p><span class='rs-quiet'>HTTP connection time is normal</span>"
 warning: "<div class='title rs-no-wrap rs-status-warning'>HTTP Check (Website) Critical</div><p class='rs-no-wrap rs-quiet'>Since: Nov 12, 2013 8:45:46 PM UTC</p><span class='rs-quiet'>Could not resolve DNS</span>"
 error: "<div class='rs-no-wrap rs-status-error'>HTTP Check (Website) Critical</div><p class='rs-no-wrap rs-quiet'>Since: Nov 12, 2013 8:45:46 PM UTC</p><span class='rs-quiet'>Could not resolve DNS</span>"
 disabled: "<div class='rs-no-wrap'>HTTP Check (Website) Disabled</div><span class='rs-no-wrap rs-quiet'>Last state was OK on Jun 27, 2013 8:59:41 PM UTC</span>"
---
<div class="rs-row">
  <div class="span-3">
    <p>Though extremely useful as a navigational hub, the real power of list views is that you can use them to do these three things:</p>
    <ol>
      <li><strong>Quickly find items</strong>
        <ul>
          <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="list-view-sort-example">Sorting</a></li>
          <li><a href="/ui-components/#forms" class="highlight-source" data-highlight-target="list-table-filter">Search</a></li>
        </ul>
      </li>
      <li><strong>Easily assess item health</strong>
        <ul>
          <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="row-status-{{page.items[1].id}}">Item Status</a></li>
          <li><a href="/ui-components/#monitoring-status-list" class="highlight-source" data-highlight-target="status-list-{{page.items[1].id}}">Monitor Health</a></li>
        </ul>
      </li>
      <li><strong>Perform actions without drilling down</strong>
        <ul>
          <li><a href="/ui-components/#action-dropdown" class="highlight-source" data-highlight-target="dropdown-{{page.items[1].id}}">Item Actions</a></li>
          <li><a href="/ui-components/#buttons" class="highlight-source" data-highlight-target="delete-items-button">Batch Actions</a></li>
        </ul>
      </li>
    </ol>
    <h3>Complex Components:</h3>
    <ul>
      <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="list-view-table">Table Component</a></li>
      <li><a href="/ui-components/#monitoring-status-list" class="highlight-source" data-highlight-target="status-list-{{page.items[1].id}}">Monitoring Status List</a></li>
    </ul>
    <h3>Simple Components:</h3>
    <ul>
      <li><a href="/ui-components/#typography" class="highlight-source" data-highlight-target="list-view-page-title">Page Title</a></li>
      <li><a href="/ui-components/#button-groups" class="highlight-source" data-highlight-target="list-view-button-group">Button Group</a></li>
      <li><a href="/ui-components/#tooltips" id="list-view-tooltip-link">Tooltips</a></li>
      <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="row-status-{{page.items[1].id}}">Table Row Status</a></li>
      <li><a href="/ui-components/#table-row-selection" class="highlight-source" data-highlight-target="row-check-{{page.items[1].id}}">Table Row Selection</a></li>
      <li><a href="/ui-components/#action-cogs" class="highlight-source" data-highlight-target="row-cog-{{page.items[1].id}}">Action Cog</a></li>
      <li>Dropdowns:
        <ul>
            <li><a href="/ui-components/#action-dropdown" class="highlight-source" data-highlight-target="dropdown-{{page.items[1].id}}">Action Dropdown</a></li>
        </ul>
      </li>
      <li>Popovers:
        <ul>
            <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="confirm-batch-delete-popover">Batch Action Popovers</a></li>
            <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="rename-server-popover-list-view">Action Cog Popovers</a></li>
            <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="create-check-popover-list-view">Inline Popovers</a></li>
        </ul>
      </li>
    </ul>
    <h3>Interactions:</h3>
    <p>For detailed instructions on user interactions with the list view, see these sections:</p>
    <ul>
      <li><a href="#update-row-interaction">Updating an item in a table</a></li>
      <li><a href="#delete-row-interaction">Deleting an item from a table</a></li>
      <li><a href="#batch-action-interaction">Performing batch actions</a></li>
    </ul>
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span></h4>
  </div>
  <div class="span-9">
    <div class="rs-content rs-panel">
      <div class="rs-inner">
        <h2 class="rs-page-title" id="list-view-page-title">{Product Name}</h2>
         <div class="rs-btn-group" id="list-view-button-group">
           <a href="#create-view" class="rs-btn rs-btn-primary">Create {Product}</a>
           <button class="rs-btn modify-selected rs-popover-source" data-popover-target="delete-items-button" data-popover="confirm-batch-delete-popover" data-popover-position="bottom-right" disabled="disabled" id="delete-items-button">Delete</button>
           <input type="text" class="rs-input-large rs-pull-right" placeholder="Search {{ page.items.size }} {Product}s" id="list-table-filter">
         </div>  
        <table class="rs-list-table rs-select-table" id="list-view-table">
          <thead>
            <tr>
              <th class="rs-table-status"></th>
              <th class="rs-table-checkbox">
                <input type="checkbox" class="select-all">
              </th>
              <th class="rs-table-cog"></th>
              <th id="list-view-sort-example">
                <a href="" class="rs-table-sort rs-table-sort-desc">
                  <span class="rs-table-sort-text">Item Name</span>
                  <span class="rs-table-sort-indicator"></span>
                </a>
              </th>
              <th>
                <a href="" class="rs-table-sort">
                  <span class="rs-table-sort-text">IP Address</span>
                  <span class="rs-table-sort-indicator"></span>
                </a>
              </th>
              <th>
                <a href="" class="rs-table-sort">
                  <span class="rs-table-sort-text">Monitoring</span>
                  <span class="rs-table-sort-indicator"></span>
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {% for item in page.items %}
            {% capture itemStatus %}{{item[1].status}}{% endcapture %}
            <tr id="row-{{item[1].id}}">
              <td class="rs-table-status rs-table-status-{{ item[1].status }} tip" title="{{ page.itemStatuses[itemStatus] }}" data-delay="1" id="row-status-{{item[1].id}}"></td>
              <td class="rs-table-checkbox" id="row-check-{{item[1].id}}"><input type="checkbox" /></td>
              <td class="rs-table-cog" id="row-cog-{{item[1].id}}">
                <div class="rs-dropdown">
                  <div class="rs-cog rs-dropdown-toggle" id="cog-{{item[1].id}}"></div>
                  <ul class="rs-dropdown-menu hidden" id="dropdown-{{item[1].id}}">
                    <li><span class="rs-dropdown-category">Identify</span></li>
                    <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="cog-{{item[1].id}}" data-popover="rename-server-popover-list-view" data-popover-position="bottom-right" id="rename-item-link">Rename Item&hellip;</a></li>
                    <li><span class="rs-dropdown-category">Manage</span></li>
                    <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="cog-{{item[1].id}}" data-popover="resize-popover-list-view" data-popover-position="bottom-right" id="resize-item-link">Resize Item&hellip;</a></li>
                    <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="cog-{{item[1].id}}" data-popover="create-check-popover-list-view" data-popover-position="bottom-right" id="resize-item-link">Add Check&hellip;</a></li>
                    <li><span class="rs-dropdown-category"></span></li>
                    <li><a href="javascript:void(0);" class="rs-popover-source rs-dropdown-link" data-popover-target="cog-{{item[1].id}}" data-popover="confirm-delete-popover-list-view" data-popover-position="bottom-right" id="delete-item-link">Delete Item&hellip;</a></li>
                  </ul>
                </div>
              </td>
              <td class="rs-table-link"><a href="#detail-view" class="tip item-name" data-delay="1" title="<div><span class='rs-quiet'>Name:</span> {{item[1].name }}</div><div><span class='rs-quiet'>ID:</span> {{ item[1].id }}</div>">{{ item[1].name }}</a></td>
              <td class="rs-table-text">{{ item[1].ip }}</td>
              <td class="rs-table-status-list" id="status-list-{{item[1].id}}">
                {% if item[1].checks %}
                {% if item[1].id == '1d1f2566-8174-4113-9623-2f3bdee3b92d' %}
                  <div class="rs-tooltip hidden" style="top:55px; left:70%; width: 300px;" id="example-tooltip-list-view">
                    <div class="rs-tooltip-inner">
                      <div class='rs-no-wrap rs-status-ok'>HTTP Check (Website) OK</div>
                      <p class='rs-no-wrap rs-quiet'>Since: Nov 2, 2013 10:52:55 PM UTC</p>
                      <span class='rs-quiet'>HTTP connection time is normal</span>
                    </div>
                  </div>
                {% endif %}
                <ul class="rs-status-list">
                  {% for check in item[1].checks %}
                  <li class="rs-status-list-item tip" title="{{ page.checkStatuses[check]}}" data-delay="0">
                    <div class="rs-icon-status rs-status-{{ check }}"></div>
                  </li>
                  {% endfor %}
                </ul>
                {% else if %}
                <button type="button" class="rs-popover-source rs-plus tip" title="Add monitoring check" data-delay=".8" id="plus-{{item[1].id}}" data-popover-target="plus-{{item[1].id}}" data-popover="create-check-popover-list-view" data-popover-position="bottom-left"></button>
                {% endif %}
              </td>
            </tr>
            {% endfor %}
          </tbody>
        </table>
      </div> 
    </div>
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<div class="rs-content rs-panel">
  <div class="rs-inner">
    <h2 class="rs-page-title">{Product Name}</h2>
    <div class="rs-btn-group">
      <a href="#create-view" class="rs-btn rs-btn-primary">Create {Product}</a>
      <button class="rs-btn modify-selected" disabled="disabled">Delete</button>
      <input type="text" class="rs-input-large rs-pull-right" placeholder="Search 1 {Product}s">
    </div>  
    <table class="rs-list-table rs-select-table">
      <thead>
        <tr>
          <th class="rs-table-status"></th>
          <th class="rs-table-checkbox">
            <input type="checkbox">
          </th>
          <th class="rs-table-cog"></th>
          <th>
            <a href="#" class="rs-table-sort rs-table-sort-desc">
              <span class="rs-table-sort-text">Item Name</span>
              <span class="rs-table-sort-indicator"></span>
            </a>
          </th>
          <th>
            <a href="#" class="rs-table-sort">
              <span class="rs-table-sort-text">IP Address</span>
              <span class="rs-table-sort-indicator"></span>
            </a>
          </th>
          <th>
            <a href="#" class="rs-table-sort">
              <span class="rs-table-sort-text">Monitoring</span>
              <span class="rs-table-sort-indicator"></span>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="rs-table-status rs-table-status-ok"></td>
          <td class="rs-table-checkbox"><input type="checkbox" /></td>
          <td class="rs-table-cog">
            <div class="rs-dropdown">
              <div class="rs-cog rs-dropdown-toggle"></div>
              <ul class="rs-dropdown-menu hidden">
                <li><span class="rs-dropdown-category">Identify</span></li>
                <li><a href="#" class="rs-dropdown-link">Rename Item&hellip;</a></li>
                <li><span class="rs-dropdown-category">Manage</span></li>
                <li><a href="#" class="rs-dropdown-link">Resize Item&hellip;</a></li>
                <li><a href="#" class="rs-dropdown-link">Add Check&hellip;</a></li>
                <li><span class="rs-dropdown-category"></span></li>
                <li><a href="#" class="rs-dropdown-link">Delete Item&hellip;</a></li>
              </ul>
            </div>
          </td>
          <td class="rs-table-link"><a href="#detail-view">My Product Item 1</a></td>
          <td class="rs-table-text">111.222.111</td>
          <td class="rs-table-status-list">
            <ul class="rs-status-list">
              <li class="rs-status-list-item">
                <div class="rs-icon-status rs-status-ok"></div>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div> 
</div>{% endhighlight %}
  </div>
</div>

<hr class="subsection-divider" id="update-row-interaction">
<h3>Updating an item in a table</h3>
<div class="rs-row">
  <div class="span-3">
    <p>This is a step-by-step, detailed description of how to update a row item in the <a href="#list-view">List View</a>.</p>
    <h5>Design Principles:</h5>
    <ul>
      <li>Provide actions without drill-down</li>
      <li>Inform users of processing status</li>
      <li>Always complete feedback loops</li>
      <li>Clearly indicate affected items</li>
    </ul>
    <h5>Interaction Steps:</h5>
    <ol>
      <li><a href="#select-action">Select Action</a></li>
      <li><a href="#show-popover">Show Popover</a></li>
      <li><a href="#validate-fields">Validate Fields</a></li>
      <li><a href="#markup-margin">Submit Form</a></li>
      <li><a href="#provide-feedback">Provide Feedback</a></li>
    </ol>
    <h5>Required Components:</h5>
    <ul>
      <li><a href="/ui-components/#list-view-table">List View Table</a></li>
      <li><a href="/ui-components/#table-heartbeat">Heartbeat</a></li>
      <li><a href="/ui-components/#action-cogs">Action Cog</a></li>
      <li><a href="/ui-components/#action-dropdown">Actions Dropdown</a></li>
      <li><a href="/ui-components/#popover">Popover</a></li>
      <li><a href="/ui-components/#forms">Forms</a></li>
      <li><a href="/ui-components/#button-groups">Button Group</a></li>
      <li><a href="/ui-components/#messages">Messages</a></li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <ol>
      <li id="select-action">
        <h4>Select Action</h4>
        <ol class="alpha-list">
          <li>User clicks a row <a href="/ui-components/#action-cogs">Action Cog</a></li>
          <li><a href="/ui-components/#action-dropdown">Actions Dropdown</a> appears</li>
          <li>User selects action</li>
        </ol>
        <img src="/img/list-view-select-action.png">
      </li>
      <li id="show-popover" class="markup-margin">
        <h4>Show Popover</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#popover">Popover</a> points at <a href="/ui-components/#action-cogs">Action Cog</a> for item</li>
          <li>First field receives focus</li>
        </ol>
        <img src="/img/list-view-show-popover.png">
      </li>
      <li id="validate-fields" class="markup-margin">
        <h4>Validate Fields</h4>
        <ol class="alpha-list">
          <li>If user entered value, validate field on blur</li>
          <li>Validate entire form on submit</li>
          <li>Trigger <a href="/ui-components/#form-validation">validation errors</a> for invalid fields</li>
          <li>Show <a href="/ui-components/#validation-fixed">validation fixed</a> when user fixes issue</li>
        </ol>
        <img src="/img/list-view-validate-popover.png">
        <p><strong>Note:</strong> Do not disable submit buttons when form is invalid.  Leave button enabled and simply re-validate.  Dynamic button disabling based on field validation gets real tricky, real fast and can confuse the user.</p>
      </li>
      <li id="submit-form" class="markup-margin">
        <h4>Submit Form</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#button-groups">Button Group</a> is in submitting state</li>
          <li>Cancel link is hidden</li>
          <li>Processing throbber appears</li>
          <li>Popover hides on completion</li>
        </ol>
        <img src="/img/list-view-submit-form.png">
        <p><strong>Note:</strong> See the <a href="/ui-components/#form-validation">Form Validation</a> docs for instructions on presenting validation error messaging.</p>
      </li>
      <li id="provide-feedback" class="markup-margin">
        <h4>Provide Feedback</h4>
        <ol class="alpha-list">
          <li><p><a href="/ui-components/#table-heartbeat">Heartbeat</a> the affected row when applying basic changes like renaming a server</p><p><img src="/img/list-view-heartbeat.png"></p></li>
          <li><p><a href="/ui-components/#table-heartbeat">Heartbeat</a> the affected row and show a growl style <a href="/ui-components/#messages">Message</a> for major changes like resetting a password</p><p><img src="/img/list-view-heartbeat-plus-message.png"></p><p style="max-width: 668px;"><strong>Note:</strong> When a service does not provide immediate feedback on the success or failure of a requested action, simply informing the user that the request was accepted is sufficient.</p></li>
        </ol>
      </li>
    </ol>
  </div>
</div>

<hr class="subsection-divider" id="delete-row-interaction">
<h3>Deleting an item from a table</h3>
<div class="rs-row">
  <div class="span-3">
    <p>This is a step-by-step, detailed description of how to delete an item in the <a href="#list-view">List View</a>.</p>
    <h5>Design Principles:</h5>
    <ul>
      <li>Provide actions without drill-down</li>
      <li>Inform users of processing status</li>
      <li>Always complete feedback loops</li>
      <li>Clearly indicate affected items</li>
    </ul>
    <h5>Interaction Steps:</h5>
    <ol>
      <li><a href="#select-delete-action">Select Delete Action</a></li>
      <li><a href="#require-confirmation">Require Confirmation</a></li>
      <li><a href="#submit-deletion-form">Submit Form</a></li>
      <li><a href="#heartbeat-delete">Provide Feedback</a></li>
    </ol>
    <h5>Required Components:</h5>
    <ul>
      <li><a href="/ui-components/#list-view-table">List View Table</a></li>
      <li><a href="/ui-components/#table-heartbeat">Heartbeat</a></li>
      <li><a href="/ui-components/#action-cogs">Action Cog</a></li>
      <li><a href="/ui-components/#action-dropdown">Actions Dropdown</a></li>
      <li><a href="/ui-components/#popover">Popover</a></li>
      <li><a href="/ui-components/#button-groups">Button Group</a></li>
      <li><a href="/ui-components/#messages">Messages</a></li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <ol>
      <li id="select-delete-action">
        <h4>Select Delete Action</h4>
        <ol class="alpha-list">
          <li>User clicks a row <a href="/ui-components/#action-cogs">Action Cog</a></li>
          <li><a href="/ui-components/#action-dropdown">Actions Dropdown</a> appears</li>
          <li>User selects delete action (always bottom-most action)</li>
        </ol>
        <img src="/img/list-view-select-delete.png">
      </li>
      <li id="require-confirmation" class="markup-margin">
        <h4>Require Confirmation</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#confirmation-popover">Confirmation Popover</a> points at <a href="/ui-components/#action-cogs">Action Cog</a> for item</li>
          <li>Verbiage always reads: "Permanently delete this {item}?"</li>
        </ol>
        <img src="/img/list-view-require-confirmation.png">
      </li>
      <li id="submit-deletion-form" class="markup-margin">
        <h4>Submit Form</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#button-groups">Button Group</a> is in submitting state</li>
          <li>Cancel link is hidden</li>
          <li>Processing throbber appears</li>
          <li>Popover hides on completion</li>
        </ol>
        <img src="/img/list-view-processing-deletion.png">
      </li>
      <li id="heartbeat-delete" class="markup-margin">
        <h4>Provide Feedback</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#list-view-table">Table Status Cell</a> shows activity (rs-table-status-striped)</li>
          <li><a href="/ui-components/#table-heartbeat">Heartbeat</a> the affected row</li>
          <li>Show growl style <a href="/ui-components/#messages">Message</a> in lower right corner of app</li>
        </ol>
        <img src="/img/list-view-deletion-feedback.png">
        <p><strong>Note:</strong> Deleted items may remain in a list until the item no longer comes back in the API list call.</p>
      </li>
    </ol>
  </div>
</div>

<hr class="subsection-divider" id="batch-action-interaction">
<h3>Performing batch actions</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Description goes here</p>
    <ol>
      <li><a href="#select-rows">Select Rows</a></li>
      <li><a href="#show-batch-popover">Show Popover</a></li>
      <li><a href="#submit-batch-action">Submit Form</a></li>
      <li><a href="#batch-action-activity">Show Activity</a></li>
      <li><a href="#batch-action-failure">Handle Failures</a></li>
      <li><a href="#batch-action-closure">Provide Closure</a></li>
    </ol>
  </div>
  <div class="span-8 offset-1">
    <ol>
      <li id="select-rows">
        <h4>Select Rows</h4>
        <ol class="alpha-list">
          <li>User selects rows using <a href="/ui-components/#table-row-selection">row checkboxes</a> or select-all box</li>
          <li><a href="/ui-components/#secondary-buttons">Secondary Button</a> for batch actions becomes enabled</li>
          <li>User clicks batch action button</li>
        </ol>
        <img src="/img/list-view-enable-batch-action.png">
      </li>
      <li id="show-batch-popover" class="markup-margin">
        <h4>Show Popover</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#popover">Popover</a> points at <a href="/ui-components/#secondary-buttons">Batch Action Button</a></li>
          <li>Popover shows list of items being affected by batch action</li>
          <li>User can click the <a href="/ui-components/#delete-buttons">Minus Button</a> to remove items from the action<br><i>( popover closes automatically if user removes all rows )</i></li>
        </ol>
        <img src="/img/list-view-batch-action-popover.png">
      </li>
      <li id="submit-batch-action" class="markup-margin">
        <h4>Submit Form</h4>
        <ol class="alpha-list">
          <li><a href="/ui-components/#button-groups">Button Group</a> is in submitting state</li>
          <li>Cancel link is hidden</li>
          <li>Processing throbber appears</li>
          <li>Popover hides on completion</li>
        </ol>
        <img src="/img/list-view-execute-batch-action.png">
      </li>
      <li id="batch-action-activity" class="markup-margin">
        <h4>Show Activity</h4>
        <ol class="alpha-list">
          <li>Change popover instructions to show <strong>X of X</strong> completed</li>
          <li><h5>Style Active Rows:</h5>
            <ol>
              <li>Set <code>rs-table-progress-ok</code> background animation on rows to show activity</li>
              <li>Hide the delete buttons in the last column for each row</li>
              <li>Update the status column to reflect action being taken</li>
            </ol>
            <img src="/img/list-view-batch-action-activity-start.png">
          </li>
          <li class="markup-margin"><h5>Style Completed Rows:</h5>
            <ol>
              <li>Remove <code>rs-table-progress-ok</code> background animation on rows when they complete</li>
              <li>Add rs-status-ok <div style="display: inline-block;" class="rs-table-icon"><i class="rs-status-ok"></i></div> icon to  first column of popover table row</li>
              <li>Set <code>rs-table-status-striped</code> class on status cell of affected row in parent table</li>
            </ol>
            <img src="/img/list-view-batch-action-activity-complete-row.png">
          </li>
        </ol>
      </li>
      <li id="batch-action-failure" class="markup-margin">
        <h4>Handle Failures</h4>
        <ol class="alpha-list">
          <li><h5>Continue Processing:</h5>
            <ol>
              <li>Do not include failed rows in summary text</li>
              <li>Remove <code>rs-table-progress-ok</code> background animation on failed rows</li>
              <li>Add rs-status-error <div style="display: inline-block;" class="rs-table-icon"><i class="rs-status-error"></i></div> icon to first column of popover table row</li></li>
              <li><span class="rs-status-error">Change status text to red</span> and describe failure</li>
            </ol>
            <img src="/img/list-view-batch-action-failures.png">
          </li>
          <li class="markup-margin">
            <h5>Offer Chance to Retry:</h5>
            <ol>
              <li>Hide Processing throbber</li>
              <li>Re-enable submit button offering retry of {X} Failed Actions</li>
              <li>Show Cancel Link</li>
            </ol>
            <img src="/img/list-view-batch-action-offer-retry.png">
          </li>
          <li class="markup-margin">
            <h5>Only Show Retrying Rows:</h5>
            <ol>
              <li>Button bar is in Submitting state again</li>
              <li>Previously successful rows are hidden</li>
              <li>Retrying rows go through the whole process again</li>
            </ol>
            <img src="/img/list-view-batch-action-retrying.png">
          </li>
        </ol>
      </li>
      <li id="batch-action-closure" class="markup-margin">
        <h4>Provide Closure</h4>
        <ol>
          <li>Show Close Popover button</li>
          <li>Aaaaaaand done&hellip; yowza&hellip;</li>
        </ol>
        <img src="/img/list-view-batch-action-closure.png">
      </li>
    </ol>
  </div>
</div>

<script type="text/javascript">
  
  //Variable to store the jQuery reference to the example tooltip in the List View Example
  var exampleTooltip;

  $(document).ready(function() {
    (function($) {
      var origAppend = $.fn.append;
      $.fn.append = function () {
          return origAppend.apply(this, arguments).trigger("append");
      };
    })(jQuery);
  });

  //This Script handles the oddities of showing a tooltip and highlighting it in the List View Example
  $(function() {
    $('#list-view-tooltip-link').hover(function(e) {

      //uber hacky way of getting the row that contains the target tooltip - jam it in there with liquid script...
      var example = $('#row-status-{{ page.items[6].id }}');

      //build a tooltip object to pass to the attachment function
      var tooltip = new Object();
      tooltip.contents = example.attr('data-title');
      tooltip.delay = 0;
      tooltip.left = example.offset().left;
      tooltip.top = example.offset().top;

      //attach the tooltip and save it in the exampleTooltip variable
      exampleTooltip = attachTooltip(tooltip);

      //nasty - bind an append listener to the body so that when the tooltip is appended,
      //it gets shown without having to hover over the source element
      $("body").bind("append", function() {
        highlight(exampleTooltip);
        $("body").unbind("append");
      });

    },function(e) {
      unHighlight(exampleTooltip);
      removeTooltips();
      clearTimeout(tooltipTimer);
    });
  });
  // End Tooltip Highlighting

</script>