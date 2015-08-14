---
category : ui components
title: Buttons
updated: August 6, 2013
author: Lauren Dowdy
adherance: 2
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <h3>How it works</h3>
    <p>Use these styles to visually distinguish between actions, making it clear to users which action they are performing.</p>
    <ul>
      <li><a href="#primary-buttons">Primary Buttons</a></li>
      <li><a href="#secondary-buttons">Secondary Buttons</a></li>
      <li><a href="#action-buttons">Action Buttons</a></li>
      <li><a href="#login-buttons">Login Buttons</a></li>
      <li><a href="#cancel-links">Cancel Links</a></li>
      <li><a href="#action-cogs">Action Cogs</a></li>
      <li><a href="#delete-buttons">Delete Buttons</a></li>
      <li><a href="#edit-button">Edit Buttons</a></li>
      <li><a href="#plus-button">Plus Buttons</a></li>
    </ul>
    <h3>Guidelines for use</h3>
    <ul>
      <li><a href="#button-groups">Button groups</a> should be used to submit forms and should contain a cancel link.</li>
      <li>Never shown/hide buttons dynamically. Instead, disable/enable buttons using the "disabled" attribute on the button.</li>
      <li>Learn more about button best practices from our <a href="#button-research">design research</a>.</li>
    </ul>
    <h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
        <thead>
          <tr>
            <th style="width:110px;">Button</th>
            <th>Class</th>
            <th>Markup</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <button class="rs-btn rs-btn-primary">Primary</button>
          </td>
          <td>rs-btn rs-btn-primary</td>
          <td>
            {% highlight html %}<button class="rs-btn rs-btn-primary">Primary</button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-btn">Secondary</button>
          </td>
          <td>rs-btn</td>
          <td>
            {% highlight html %}<button class="rs-btn">Secondary</button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-btn rs-btn-action"><span class="rs-cog"></span> Actions <span class="rs-caret"></span></button>
          </td>
          <td>rs-btn rs-btn-action</td>
          <td>{% highlight html %}<button class="rs-btn rs-btn-action">
  <span class="rs-cog"></span> Actions <span class="rs-caret"></span>
</button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-btn rs-btn-login">Login</button>
          </td>
          <td>rs-btn rs-btn-login</td>
          <td>
            {% highlight html %}<button class="rs-btn rs-btn-login">Login</button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-btn rs-btn-link">Cancel</button>
          </td>
          <td>rs-btn rs-btn-link</td>
          <td>
            {% highlight html %}<button class="rs-btn rs-btn-link">Cancel</button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-cog"></button>
          </td>
          <td>rs-cog</td>
          <td>
            {% highlight html %}<button class="rs-cog"></button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-delete"></button>
          </td>
          <td>rs-delete</td>
          <td>
            {% highlight html %}<button class="rs-delete"></button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-edit"></button>
          </td>
          <td>rs-edit</td>
          <td>
            {% highlight html %}<button class="rs-edit"></button>{% endhighlight %}
          </td>
        </tr>
        <tr>
          <td>
            <button class="rs-plus"></button>
          </td>
          <td>rs-plus</td>
          <td>
            {% highlight html %}<button class="rs-plus"></button>{% endhighlight %}
          </td>
        </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="primary-buttons">
<h3>Primary Buttons</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use for primary actions, like "Create", "Add", "Confirm", or "Submit". These are commonly found in popovers, <a href="#button-groups">grouped with a cancel link</a>.</p>
    <ul>
      <li>There should be only one primary button in view at one time.</li>
      <li>The primary button should always appear as the top left item in a section or group of buttons.</li>
      <li>Primary buttons aren't required. You can have a group of secondary buttons only.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Class</th>
            <th>Markup</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <button class="rs-btn rs-btn-primary">Default</button>
          </td>
          <td>rs-btn rs-btn-primary</td>
          <td>
            {% highlight html %}<button class="rs-btn rs-btn-primary">Default</button>{% endhighlight %}
          </td>
        </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-primary active">Active</button>
              </td>
              <td>rs-btn rs-btn-primary active</td>
              <td>
            {% highlight html %}<button class="rs-btn rs-btn-primary active">Active</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-primary disabled">Disabled</button>
              </td>
              <td>rs-btn rs-btn-primary disabled</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-primary disabled">Disabled</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-primary hover">Hover</button>
              </td>
              <td>rs-btn rs-btn-primary hover</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-primary hover">Hover</button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="secondary-buttons">
<h3>Secondary Buttons</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use for actions that are not the primary goal of the page.</p>
    <ul>
      <li>"Add" or "Create" buttons on tables within Create or Detail Views use the secondary style because they are not the only actions on the page.</li>
      <li>Use in modals for passive actions like "Close" or "Dismiss".</li>
      <li>Use in multi-step popovers as "Back" buttons.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="rs-btn">Default</button>
              </td>
              <td>rs-btn</td>
              <td>
                {% highlight html %}<button class="rs-btn">Default</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn active">Active</button>
              </td>
              <td>rs-btn active</td>
              <td>
                {% highlight html %}<button class="rs-btn active">Active</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn disabled">Disabled</button>
              </td>
              <td>rs-btn disabled</td>
              <td>
                {% highlight html %}<button class="rs-btn disabled">Disabled</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn hover">Hover</button>
              </td>
              <td>rs-btn hover</td>
              <td>
                {% highlight html %}<button class="rs-btn hover">Hover</button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="action-buttons">
<h3>Action Buttons</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use for displaying actions on a Detail View in combination with the <a href="/ui-components/#dropdowns">Action Dropdown</a>.</p><p>The downward pointing rs-caret icon indicates that clicking the button produces a dropdown.</p>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
          <thead>
            <tr>
              <th style="width:110px">Example</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="rs-btn rs-btn-action">
            <span class="rs-cog"></span> Default <span class="rs-caret"></span>
          </button>
              </td>
              <td>rs-btn rs-btn-action</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-action">
  <span class="rs-cog"></span> Default <span class="rs-caret"></span>
</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-action active">
            <span class="rs-cog"></span>
            Active
            <span class="rs-caret"></span>
          </button>
              </td>
              <td>rs-btn rs-btn-action active</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-action active">
  <span class="rs-cog"></span> Active <span class="rs-caret"></span>
</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-action disabled">
            <span class="rs-cog"></span> Disabled <span class="rs-caret"></span>
          </button>
              </td>
              <td>rs-btn rs-btn-action disabled</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-action disabled">
  <span class="rs-cog"></span> Disabled <span class="rs-caret"></span>
</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-action hover">
            <span class="rs-cog"></span>
            Hover
            <span class="rs-caret"></span>
          </button>
              </td>
              <td>rs-btn rs-btn-action hover</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-action hover">
  <span class="rs-cog"></span> Hover <span class="rs-caret"></span>
</button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="login-buttons">
<h3>Login Buttons</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use on a Rackspace standard login screen.</p> <p>Do not use red login buttons as deletion buttons. Delete buttons are commonly found in popovers as <a href="#primary-buttons">primary buttons</a>.</p>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
          <thead>
            <tr>
              <th>Example</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="rs-btn rs-btn-login">Default</button>
              </td>
              <td>rs-btn rs-btn-login</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-login">Default</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-login active">Active</button>
              </td>
              <td>rs-btn rs-btn-login active</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-login active">Active</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-login disabled">Disabled</button>
              </td>
              <td>rs-btn rs-btn-login disabled</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-login disabled">Disabled</button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-btn rs-btn-login hover">Hover</button>
              </td>
              <td>rs-btn rs-btn-login hover</td>
              <td>
                {% highlight html %}<button class="rs-btn rs-btn-login hover">Hover</button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="cancel-links">
<h3>Cancel Links</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use for cancelling an action or process.</p>
    <ul>
      <li>Use the rs-btn-link class to align cancel links within <a href="#button-groups">button groups</a>.</li>
      <li>The link styling helps users clearly identify the cancel process and relate it as navigating away from their current activity.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
      <table>
        <thead>
          <tr>
            <th>Example</th>
            <th>Class</th>
            <th>Markup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button class="rs-btn rs-btn-link">Default</button>
            </td>
            <td>rs-btn rs-btn-link</td>
            <td>
              {% highlight html %}<button class="rs-btn rs-btn-link">Default</button>{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <button class="rs-btn rs-btn-link active">Active</button>
            </td>
            <td>rs-btn rs-btn-link active</td>
            <td>
              {% highlight html %}<button class="rs-btn rs-btn-link active">Active</button>{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <button class="rs-btn rs-btn-link disabled">Disabled</button>
            </td>
            <td>rs-btn rs-btn-link disabled</td>
            <td>
              {% highlight html %}<button class="rs-btn rs-btn-link disabled">Disabled</button>{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <button class="rs-btn rs-btn-link hover">Hover</button>
            </td>
            <td>rs-btn rs-btn-link hover</td>
            <td>
              {% highlight html %}<button class="rs-btn rs-btn-link hover">Hover</button>{% endhighlight %}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="action-cogs">
<h3>Action Cogs</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use the rs-cog in combination with the <a href="/ui-components/#dropdowns">Action Dropdown</a>.</p>
    <ul>
      <li>The rs-cog/dropdown combo is used extensively in the List View Pattern to give users a way to perform actions on each row in the list.</li>
      <li>The same list of actions should be available in the <a href="#action-buttons">Action Button</a> in the header of the Detail View.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
          <thead>
            <tr>
              <th>Example</th>
              <th>State</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="rs-cog"></button>
              </td>
              <td>Default</td>
              <td>rs-cog</td>
              <td>
                {% highlight html %}<button class="rs-cog"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-cog active"></button>
              </td>
              <td>Active</td>
              <td>rs-cog active</td>
              <td>
                {% highlight html %}<button class="rs-cog active"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-cog disabled"></button>
              </td>
              <td>Disabled</td>
              <td>rs-cog disabled</td>
              <td>
                {% highlight html %}<button class="rs-cog disabled"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-cog hover"></button>
              </td>
              <td>Hover</td>
              <td>rs-cog hover</td>
              <td>
                {% highlight html %}<button class="rs-cog hover"></button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="delete-buttons">
<h3>Delete Buttons</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
        <li>Use Delete Buttons to remove a row from a <a href="/ui-components/#table-form-elements">Table</a> without requiring confirmation</li>
        <li>Use when delete is the only action available for an item</li>
        <li>Must be set in the last column of the row</li>
      </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-list-table">
        <table>
          <thead>
            <tr>
              <th>Example</th>
              <th>State</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="rs-table-delete">
                <button class="rs-delete"></button>
              </td>
              <td>Default</td>
              <td>rs-delete</td>
              <td>
                {% highlight html %}<button class="rs-delete"></button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="link-buttons">
<h3>Link Buttons</h3>
<div class="rs-row">
  <div class="span-3">
    <ul>
      <li>Use the rs-link class to style an element like a link (e.g., if you need a button's event handling logic on a link).</li>
      <li>The rs-link class can be used on button, input, div, and span elements.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
      <table>
        <thead>
          <tr>
            <th>Example</th>
            <th>Class</th>
            <th>Markup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button class="rs-link">Button</button>
            </td>
            <td>rs-link</td>
            <td>
              {% highlight html %}<button class="rs-link">Button</button>{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <input class="rs-link" type="submit" value="Input">
            </td>
            <td>rs-link</td>
            <td>
              {% highlight html %}<input class="rs-link" type="submit" value="Input">{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <div class="rs-link">Div</div>
            </td>
            <td>rs-link</td>
            <td>
              {% highlight html %}<div class="rs-link">Div</div>{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <span class="rs-link">Span</span>
            </td>
            <td>rs-link</td>
            <td>
              {% highlight html %}<span class="rs-link">Span</span>{% endhighlight %}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="edit-button">
<h3>Edit Button</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use the rs-edit button in combination with Key/Value lists in the <a href="/ui-components/#details">Details</a> components.</p>
    <ul>
      <li>When Key/Value items are editable, use the Edit Button to open a popover, modal or new page to update the value.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
          <thead>
            <tr>
              <th>Example</th>
              <th>State</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="rs-edit"></button>
              </td>
              <td>Default</td>
              <td>rs-edit</td>
              <td>
                {% highlight html %}<button class="rs-edit"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-edit active"></button>
              </td>
              <td>Active</td>
              <td>rs-edit active</td>
              <td>
                {% highlight html %}<button class="rs-edit active"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-edit disabled"></button>
              </td>
              <td>Disabled</td>
              <td>rs-edit disabled</td>
              <td>
                {% highlight html %}<button class="rs-edit disabled"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-edit hover"></button>
              </td>
              <td>Hover</td>
              <td>rs-edit hover</td>
              <td>
                {% highlight html %}<button class="rs-edit hover"></button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="plus-button">
<h3>Plus Button</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use the rs-plus button in combination with <a href="/ui-components/#monitoring-status-list">Monitoring Status List</a>.</p>
    <ul>
      <li>If there are no checks on a monitoring-enabled device, use the plus button to let users add checks.</li>
      <li>The Plus Button should spawn a <a href="#popover">Popover</a> for creating a check on the device.</li>
      <li>See the <a href="{{ site.baseurl }}/demos" target="_blank">Cloud Servers list</a> for an example.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
        <table>
          <thead>
            <tr>
              <th>Example</th>
              <th>State</th>
              <th>Class</th>
              <th>Markup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="rs-plus"></button>
              </td>
              <td>Default</td>
              <td>rs-plus</td>
              <td>
                {% highlight html %}<button class="rs-plus"></button>{% endhighlight %}
              </td>
            </tr>
            <tr>
              <td>
                <button class="rs-plus hover"></button>
              </td>
              <td>Hover</td>
              <td>rs-plus hover</td>
              <td>
                {% highlight html %}<button class="rs-plus hover"></button>{% endhighlight %}
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>
<hr class="subsection-divider">
<h3>Same Styles, Different Tags</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use the tag that works best within your application and development standards.</p>
    <ul>
      <li>Each of the six button styles can be applied to any tag using the .rs-btn class</li>
      <li>Typically, you will use button styles with the &lt;button&gt;,  &lt;input&gt;, and &lt;a&gt; tags</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="list-table">
      <table>
        <thead>
          <tr>
            <th>Button</th>
            <th>Tag</th>
            <th>Markup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <button class="rs-btn">Default Button</button>
            </td>
            <td>&lt;button&gt;</td>
            <td>
              {% highlight html %}<button class="rs-btn">Default Button</button>{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <input class="rs-btn" type="button" value="Default Button">
            </td>
            <td>&lt;input&gt;</td>
            <td>
              {% highlight html %}<input class="rs-btn" type="button" value="Default Button">{% endhighlight %}
            </td>
          </tr>
          <tr>
            <td>
              <a class="rs-btn">Default Button</a>
            </td>
            <td>&lt;a&gt;</td>
            <td>
              {% highlight html %}<a class="rs-btn">Default Button</a>{% endhighlight %}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
<hr class="subsection-divider" id="button-groups">
<h3>Button Groups</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use a button group to lay out a set of related actions.</p>
    <h4>Guidelines for use</h4>
    <ul>
      <li>These are most often used in <a href="/ui-components/#popover">Popovers</a> or <a href="/ui-components/#create-form">Create Forms</a> to group the save button and the cancel button</li>
      <li>A button group should never contain more than one primary button</li>
      <li>The cancel action must always be an <span class="rs-no-wrap">rs-btn-link</span> as shown in the example</li>
    </ul>
    <h4>When Submitting Forms</h4>
    <ul>
      <li>Disable primary and secondary buttons</li>
      <li>Hide the "Cancel" link</li>
      <li>Show the processing indicator</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h3>Default State</h3>
    <h4>Example</h4>
    <div class="rs-btn-group">
      <a class="rs-btn rs-btn-primary">Primary Action</a>
      <a class="rs-btn">Secondary Action</a>
      <i class="rs-processing-indicator rs-hidden"></i>
      <a href="#" class="rs-btn rs-btn-link">Cancel</a>
    </div>
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<div class="rs-btn-group">
  <a class="rs-btn rs-btn-primary">Primary Action</a>
  <a class="rs-btn">Secondary Action</a>
  <a href="#" class="rs-btn rs-btn-link">Cancel</a>
  <i class="rs-processing-indicator rs-hidden"></i>
</div>{% endhighlight %}
  <h3 class="markup-margin">Submitting State</h3>
  <h4>Example</h4>
  <div class="rs-btn-group">
    <a class="rs-btn rs-btn-primary disabled" disabled="disabled">Primary Action</a>
    <a class="rs-btn disabled" disabled="disabled">Secondary Action</a>
    <a href="#" class="rs-btn rs-btn-link rs-hidden">Cancel</a>
    <i class="rs-processing-indicator"></i>
  </div>
  <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<div class="rs-btn-group">
  <a class="rs-btn rs-btn-primary disabled" disabled="disabled">Primary Action</a>
  <a class="rs-btn disabled" disabled="disabled">Secondary Action</a>
  <a href="#" class="rs-btn rs-btn-link rs-hidden">Cancel</a>
  <i class="rs-processing-indicator"></i>
</div>{% endhighlight %}
</div>
</div>
<hr class="subsection-divider" id="button-research">
<h3>Research</h3>
<p>Below are some really good articles that helped drive our decision-making for button design:</p>
<ul>
  <li><a href="http://www.svennerberg.com/2008/09/the-use-of-buttons-in-web-forms/" target="_blank">Buttons Best Practices</a>
    <ul>
      <li>Summary of usability guidlines for buttons on the web.</li>
    </ul>
  </li>
  <li><a href="http://www.lukew.com/resources/articles/PSactions.asp" target="_blank">Primary &amp; Secondary Actions in Web Forms</a>
    <ul>
      <li>LukeW guidelines for submit buttons, includes usability results and eyetracking examples.</li>
    </ul>
  </li>
  <li><a href="http://www.lukew.com/ff/entry.asp?730" target="_blank">Previous and Next Actions in Web Forms</a>
    <ul>
      <li>Specific guidelines and illustrations of 'Continue' action in forms.</li>
    </ul>
  </li>
  <li><a href="http://www.useit.com/alertbox/action-object-closeness.html" target="_blank">Closeness of Actions and Objects in GUI Design</a>
    <ul>
      <li>Jakob Nielson on ancient 'closeness gestalt principle' in UI design. Because our forms vary greatly in length and width, this is important to consider when we prescribe sweeping changes.</li>
    </ul>
  </li>
  <li><a href="http://www.useit.com/alertbox/command-links.html" target="_blank">Command Links</a>
    <ul>
      <li>Nielson on the difference between links (navigational) and buttons (commands), and the insurgence of the hybrid 'command link'. Note: Jakob Nielson is the infamous fundamentalist of usability. He is purposely behind the times, but when he changes his mind, people listen.</li>
    </ul>
  </li>
</ul>
