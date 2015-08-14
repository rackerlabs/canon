---
category : ui components
title: Tables
updated: October 21, 2013
author: Andrew Raiford
adherance: 3
tags : [intro, about, canon]
---
<div class="rs-row" id="list-table">
  <div class="span-3">
    <h3>When to use</h3>
    <p>Use Tables to manage lots of items - like lists of servers, tickets, users or files.</p>
    <p>This is one of the most important UI Components because it provides a lot of functionality and serves as a navigational hub - so brush up on all the Table's uses and features:</p>

    <h5>Layout Options</h5>
    <p>The Table's location in your app determines which layout should be used.</p>
    <ol>
      {% comment %}<li><a href="#compressed-table">Compressed</a></li>{% endcomment %}
      <li><a href="#list-view-table">List View Tables</a></li>
      <li><a href="#embedded-table">Embedded Tables</a></li>
    </ol>
    <h5>Interactions</h5>
    <p>Both layout options support these features:</p>
    <ul>
      <li><a href="#table-row-actions">Row Actions</a></li>
      <li><a href="#table-row-selection">Row Selection</a></li>
      <li><a href="#table-row-heartbeat">Row Heartbeat</a></li>
      <li><a href="#table-form-elements">Form Elements</a></li>
      <li><a href="#table-column-sorting">Column Sorting</a></li>
    </ul>
    <h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
  </div>
  <div class="span-8 offset-1">
    <h4>Example: <span class="rs-quiet">List View Table</span></h4>
    {% include list-view-table.html %}
    <h4 class="markup-margin" id="small-embedded-table">Example: <span class="rs-quiet">Embedded Table</span></h4>
    <div class="rs-embedded-list-table-wrapper rs-embedded-small">
      {% include embedded-table.html %}
    </div>
  </div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START LIST VIEW TABLES - SUMMARY
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="list-view-table">
<h3>List View Table</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Use when the table is the primary UI Component on the page.</li>
      <li>As a navigational hub it should let users assess status, perform actions and drilldown for detail.</li>
      <li>See the Cloud Servers list on the <a href="{{ site.baseurl }}/demos" target="_blank">Live Demo</a>.</li>
    </ul>
    <h5>Table States</h5>
    <ul>
      <li><a href="#empty-state-list-view-table">Empty</a></li>
      <li><a href="#loading-state-list-view-table">Loading</a></li>
      <li><a href="#error-state-list-view-table">Error</a></li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4 id="list-view-table">Example</h4>
    {% include list-view-table.html %}
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}{% include list-view-table.html %}{% endhighlight %}
  </div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START LIST VIEW TABLES - EMPTY STATE
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="empty-state-list-view-table">
<h3>Empty State: <span class="rs-quiet">List View Table</span></h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use any time there are no items in a list and the user can create items that populate the list.</p>
    <p>Use the text in the examples as templates for writing your empty state messages.</p>
    <ol>
      <li><strong>Use the title</strong> to explain that the table is empty</li>
      <li><strong>Use the subtitle</strong> to encourage action</li>
      <li><strong>Use the message</strong> on the third line to introduce the item and provide a link to more information.</li>
    </ol>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include list-view-table-empty-state.html %}
<h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include list-view-table-empty-state.html %}{% endhighlight %}

  </div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START LIST VIEW TABLES - LOADING STATE
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="loading-state-list-view-table">
<h3>Loading State: <span class="rs-quiet">List View Table</span></h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use when loading or reloading data, applying a filter, or a running a search that does not apply instantly.</p>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include list-view-table-loading-state.html %}
<h4 class="markup-margin">Markup</h4>
    {% highlight html %}{% include list-view-table-loading-state.html %}{% endhighlight %}
</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START LIST VIEW TABLES - ERROR STATE
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="error-state-list-view-table">
<h3>Error State: <span class="rs-quiet">List View Table</span></h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use the error markup when a table fails to load or reload data via ajax call or for a server side error.</p>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include list-view-table-error-state.html %}
<h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include list-view-table-error-state.html %}{% endhighlight %}

  </div>
</div>

{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START EMBEDDED TABLES - SUMMARY
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="embedded-table">
<h3>Embedded Table</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Use when the table is not the primary UI Component on the page.</li>
      <li>Use in a section of the <a href="#details">Details</a> component, or as content of a <a href="#popover">Popover</a>.</li>
      <li>Use when you need to limit the height of a table, by allowing the rows to scroll.</li>
      <li>See the Networks and Monitoring checks tables on the <a href="{{ site.baseurl }}/demos/details.html" target="_blank">Live Demo</a>.</li>
    </ul>
    <h5>Three Sizes</h5>
    <p>This table has vertical scrolling provided by three max-height classes:</p>
    <ol>
      <li><a href="#small-embedded-table">Small</a>
        <ul>
          <li>Class: <span class="rs-quiet">rs-embedded-small</span></li>
          <li>Max Height: <span class="rs-quiet">185 Pixels</span></li>
        </ul>
      </li>
      <li><a href="#medium-embedded-table">Medium</a>
        <ul>
          <li>Class: <span class="rs-quiet">rs-embedded-medium</span></li>
          <li>Max Height: <span class="rs-quiet">365 Pixels</span></li>
        </ul>
      </li>
      <li><a href="#large-embedded-table">Large</a>
        <ul>
          <li>Class: <span class="rs-quiet">rs-embedded-large</span></li>
          <li>Max Height: <span class="rs-quiet">460 Pixels</span></li>
        </ul>
      </li>
    </ol>
    <h5>Table States</h5>
    <ul>
      <li><a href="#empty-state-embedded-table">Empty</a></li>
      <li><a href="#loading-state-embedded-table">Loading</a></li>
      <li><a href="#error-state-embedded-table">Error</a></li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4 id="small-embedded-table">Example: <span class="rs-quiet">Small Embedded Table</span></h4>
    <div class="rs-embedded-list-table-wrapper rs-embedded-small">
      {% include embedded-table.html %}
    </div>
    <h4 class="markup-margin">Markup: <span class="rs-quiet">Small Embedded Table</span></h4>

    {% highlight html %}<div class="rs-embedded-list-table-wrapper rs-embedded-small">{% include embedded-table.html %}
</div>{% endhighlight %}

  <h4 id="medium-embedded-table" class="markup-margin">Example: <span class="rs-quiet">Medium Embedded Table</span></h4>
  <div class="rs-embedded-list-table-wrapper rs-embedded-medium">
    {% include embedded-table.html %}
  </div>
  <h4 class="markup-margin">Markup: <span class="rs-quiet">Medium Embedded Table</span></h4>
  {% highlight html %}<div class="rs-embedded-list-table-wrapper rs-embedded-medium">{% include embedded-table.html %}
</div>{% endhighlight %}
<h4 id="large-embedded-table" class="markup-margin">Example: <span class="rs-quiet">Large Embedded Table</span></h4>
<div class="rs-embedded-list-table-wrapper rs-embedded-large">
  {% include embedded-table.html %}
</div>
<h4 class="markup-margin">Markup: <span class="rs-quiet">Large Embedded Table</span></h4>

{% highlight html %}<div class="rs-embedded-list-table-wrapper rs-embedded-large">{% include embedded-table.html %}
</div>{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START EMBEDDED TABLES - EMPTY STATE
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="empty-state-embedded-table">
<h3>Empty State: <span class="rs-quiet">Embedded Table</span></h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use any time there are no items in a list and the user can create items that populate the list.</p>
    <p>Use the text in the examples as templates for writing your empty state messages.</p>
    <ol>
      <li><strong>Use the title</strong> to explain that the table is empty</li>
      <li><strong>Use the subtitle</strong> to help the user understand what the product does for them</li>
    </ol>
  </div>
  <div class="span-8 offset-1">
  <h4>Example</h4>
  {% include embedded-table-empty-state.html %}
  <h4 class="markup-margin">Markup</h4>

  {% highlight html %}{% include embedded-table-empty-state.html %}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START EMBEDDED TABLES - LOADING STATE
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="loading-state-embedded-table">
<h3>Loading State: <span class="rs-quiet">Embedded Table</span></h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use when loading or reloading data, applying a filter, or a running a search that does not apply instantly.</p>
  </div>
  <div class="span-8 offset-1">
  <h4>Example</h4>
  {% include embedded-table-loading-state.html%}
  <h4 class="markup-margin">Markup</h4>

  {% highlight html %}{% include embedded-table-loading-state.html%}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START EMBEDDED TABLES - ERROR STATE
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="error-state-embedded-table">
<h3>Error State: <span class="rs-quiet">Embedded Table</span></h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use the error markup when a table fails to load or reload data via ajax call or for a server side error.</p>
  </div>
  <div class="span-8 offset-1">
  <h4>Example</h4>
  {% include embedded-table-error-state.html %}
  <h4 class="markup-margin">Markup</h4>

  {% highlight html %}{% include embedded-table-error-state.html %}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START ROW ACTIONS
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="table-row-actions">
<h3>Table Row Actions</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Use <a href="action-cogs">Action Cogs</a> to spawn an <a href="action-dropdown">Action Dropdown</a> when there are multiple actions that can be taken on an item in a list</li>
      <li>Cogs should appear after status, checkboxes or radio button columns</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include table-row-actions.html %}
    <div class="dummy-div-just-to-get-spacing-right" style="height:96px; width:100%;"></div>
    <h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include table-row-actions.html %}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START ROW SELECTION
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="table-row-selection">
<h3>Table Row Selection</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li><strong>Use check boxes</strong> for row selection when a user can perform batch operations on items in the list</li>
      <li><strong>Use radio button</strong> selection when users can only perform actions on one item at a time</li>
      <li><strong>When using javascript</strong> to select a row, put the click event on the &lt;tr&gt; tag to optimize the user's click target</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include table-row-selection.html %}
    <h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include table-row-selection.html %}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START ROW HEARTBEAT
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="table-row-heartbeat">
<h3>Table Row Heartbeat</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Use the row heartbeat to provide feedback for user-initiated actions on a table row</li>
      <li>Most often used in the <a href="/ux-patterns/#list-view">List View Pattern</a>, the heartbeat can also be used on embedded tables in a <a href="/ux-patterns/#detail-view">Detail View</a></li>
      <li>The Heartbeat is an effective way to show the success, or lack thereof, for events that occur in a table</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div id="heartbeat-example">
    {% include table-row-heartbeat.html %}
    </div>
    <h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include table-row-heartbeat.html %}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START FORM ELEMENTS
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="table-form-elements">
<h3>Table Form Elements</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Only add form elements to list tables that live on a create page or in a popover</li>
    </ul>
    <h5>Delete Buttons</h5>
    <ul>
      <li>Use <a href="/ui-components/#delete-buttons">Delete Buttons</a> to remove simple items from a table without requiring confirmation</li>
      <li>Use when delete is the only action available for an item</li>
      <li>Must be set in the last column of the row</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include table-form-elements.html %}
    <h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include table-form-elements.html %}{% endhighlight %}

</div>
</div>
{% comment %}<!-- ----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------
START COLUMN SORTING
----------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------- -->{% endcomment %}
<hr class="subsection-divider" id="table-column-sorting">
<h3>Table Column Sorting</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Use the classes and markup in this example with a sorting script of your choice.</li>
      <li>At this time Canon does not provide javascript for handling sorting.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    {% include table-column-sorting.html %}
    <h4 class="markup-margin">Markup</h4>

    {% highlight html %}{% include table-column-sorting.html %}{% endhighlight %}

</div>
</div>
