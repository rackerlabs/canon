---
layout: post
category : ux patterns
title: List View
updated: April 23, 2014
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
  status: ok rs-table-status-striped
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
  status: warning rs-table-status-striped
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
  status: error
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
          <li><a href="/ui-components/#facets" class="highlight-source" data-highlight-target="facets-example">Facet</a></li>
          <li><a href="/ui-components/#forms" class="highlight-source" data-highlight-target="list-table-filter">Search</a></li>
          <li><a href="/ui-components/#tables" class="highlight-source" data-highlight-target="list-view-sort-example">Sort</a></li>
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
      <li><a href="/ui-components/#facets" class="highlight-source" data-highlight-target="facets-example">Facets Component</a></li>
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
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span></h4>
  </div>
  <div class="span-9 rs-main">
    <div class="rs-sidebar rs-facets">{% include facets.html%}</div>
    <div class="rs-content rs-panel" id="list-view-example">
      <div class="rs-inner">
          <h2 class="rs-page-title" id="list-view-page-title">{Product}s</h2>
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
  </div>
  <div class="span-12">
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


<script type="text/javascript">
  
  //This Script is purely to handle the oddities of showing a tooltip and highlighting it
  var exampleTooltip;

  $(document).ready(function() {
    (function($) {
      var origAppend = $.fn.append;
      $.fn.append = function () {
          return origAppend.apply(this, arguments).trigger("append");
      };
    })(jQuery);
  });

  $(function() {
    $('#list-view-tooltip-link').hover(function(e) {
      var example = $('#row-status-{{ page.items[6].id }}');
      var tooltip = new Object();
      tooltip.contents = example.attr('data-title');
      tooltip.delay = 0;
      tooltip.left = example.offset().left;
      tooltip.top = example.offset().top;

      exampleTooltip = attachTooltip(tooltip);

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

  //This script is for showing batch delete popover functionality
  $(function() {
    $('#delete-items-button').click(function() {
      var deleteCount = $('#deletion-count');
      var popoverTbody = $('#confirm-batch-delete-popover tbody');

      popoverTbody.empty();
      console.log($('#list-view-table tbody tr.selected').length);
      $('#list-view-table tbody tr.selected').each(function() {
        var deletionRow = '<tr>'+
                            '<td class="rs-table-text item-name rs-no-wrap">'+$(this).find('.item-name').text()+'</td>'+
                            '<td class="rs-table-text item-status rs-no-wrap">Pending Deletion</td>'+
                            '<td class="rs-table-delete">'+
                              '<button type="button" class="rs-delete remove-from-deletion"></button>'+
                            '</td>'+
                          '</tr>';
        popoverTbody.append(deletionRow);
      });
      deleteCount.text(popoverTbody.find('tr').length);
      $('.remove-from-deletion').click(function() {
        var tbody = $(this).closest('tbody');
        $(this).closest('tr').remove();
        deleteCount.text(popoverTbody.find('tr').length);
        if(!tbody.find('tr').length) {
          hidePopover();
        }
      });
    });
  });
  // End Batch deletion

</script>