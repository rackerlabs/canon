---
parent: Messaging
title: Inline Messages
order: 4
---
<ul>
  <li>Inline messaging is very useful when notifying conditions in a form may be valid, but potentially less optimal.  The example is when a user chooses to load balance a server that exists outside of the Rackspace network, causing increased bandwidth.</li>
  <li>Generally these messages remain hidden, but there are some cases where the message stays visible.  This is usually done for small forms on popovers or modals.  See below for examples.</li>
</ul>
<!-- Start  Table -->
<table class="rs-list-table">
  <thead>
    <tr>
      <th>Example</th>
      <th>Status Class</th>
      <th>Markup</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
{% capture info %}<div class="rs-message rs-message-inline rs-status-info">
  <i class="rs-icon rs-message-icon"></i> 
  <div class="rs-message-description">
    <strong>Note:</strong> 
    Be sure and set up security groups for this device so you can access it.
  </div>
</div>{% endcapture %}{{ info }}
      </td>
      <td>rs-status-info</td>
      <td><div class="collapsible-highlight">{% highlight html %}{{ info }}{% endhighlight %}</div></td>
    </tr>
    <tr>
      <td>
{% capture ok %}<div class="rs-message rs-message-inline rs-status-ok">
  <i class="rs-icon rs-message-icon"></i> 
  <div class="rs-message-description">
    <strong>Booyah!</strong> 
    It looks like you're all done here!  Feel free to click Finish.
  </div>
</div>{% endcapture %}{{ ok }}
      </td>
      <td>rs-status-ok</td>
      <td><div class="collapsible-highlight">{% highlight html %}{{ ok }}{% endhighlight %}</div></td>
    </tr>
    <tr>
      <td>
{% capture warning %}<div class="rs-message rs-message-inline rs-status-warning">
  <i class="rs-icon rs-message-icon"></i> 
  <div class="rs-message-description">
    <strong>Warning:</strong> 
    This configuration may incur unwanted bandwidth charges.
  </div>
</div>{% endcapture %}{{ warning }}
      </td>
      <td>rs-status-warning</td>
      <td><div class="collapsible-highlight">{% highlight html %}{{ warning }}{% endhighlight %}</div></td>
    </tr>
    <tr>
      <td>
{% capture error %}<div class="rs-message rs-message-inline rs-status-error">
  <i class="rs-icon rs-message-icon"></i> 
  <div class="rs-message-description">
    <strong>Oops!</strong> 
    There seem to be some invalid fields above.  Check them out and try again.
  </div>
</div>{% endcapture %}{{ error }}
      </td>
      <td>rs-status-error</td>
      <td><div class="collapsible-highlight">{% highlight html %}{{ error }}{% endhighlight %}</div></td>
    </tr>
  </tbody>
</table>
<hr>
<h1 class="light">Inline Messaging Placement</h1>
<p>Inline messages should always appear at the bottom of the form, between the last form inputs and the button group.</p>
{% capture form%}<form class="rs-form-horizontal rs-form-medium">
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
      <span class="rs-help-block">
        Use the "https://" prefix to enable SSL
      </span>
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
  <div class="rs-message rs-message-inline rs-status-warning">
    <i class="rs-icon rs-message-icon"></i> 
    <div class="rs-message-description">
      <strong>Warning:</strong> 
      This configuration may incur unwanted bandwidth charges.
    </div>
  </div>
<div class="rs-btn-group">
  <button type="submit" class="rs-btn rs-btn-primary">
    Create Monitoring Check
  </button>
  <button type="button" class="rs-btn rs-btn-link">
    Cancel
  </button>
</div>
</form>{% endcapture %}
<div style="overflow: hidden;">
  <div class="rs-pull-left" style="margin-right: 2em;">
    <h2>Example</h2>
    <div style="border: 1px #e0e0e0 solid; padding: 2em;">{{ form }}</div>
  </div>
  <div class="rs-pull-left">
    <h2>Markup</h2>{% highlight html %}{{ form }}{% endhighlight %}
  </div>
</div>