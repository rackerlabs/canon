---
category : ui components
title: Dropdowns
updated: November 5, 2013
author: Lauren Dowdy
adherance: 3
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <h3>When to use</h3>
    <p>Dropdown menus are used when displaying several related links will not fit the alotted space. There are 3 styles of dropdowns, each with a different purpose. Use the links below to learn more about the usage guidelines for each one:</p>
    <ul>
      <li><a href="#primary-dropdown">Primary Dropdown</a></li>
      <li><a href="#utility-dropdown">Utility Dropdown</a></li>
      <li><a href="#action-dropdown">Action Dropdown</a></li>
    </ul>
    <h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
  </div>
  <div class="span-8 offset-1">
    <h4>Examples</h4>
    <div class="rs-dropdown-examples">
      <div class="rs-dropdown rs-primary-dropdown rs-nav-item" id="primary-dropdown-spacing">
        <h4 style="padding-bottom: 5px;">Primary Dropdown</h4>
        <ul class="rs-dropdown-menu visible">
          <li class="rs-dropdown-item"><span class="rs-dropdown-category">Links</span></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link</a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover)</a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus)</a></li>
          <li class="rs-dropdown-item"><span class="rs-dropdown-category">External</span></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link External <i class="rs-icon-external"></i></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link External (Hover) <i class="rs-icon-external"></i></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link External (Focus) <i class="rs-icon-external"></i></a></li>
          <li class="rs-dropdown-item"><span class="rs-dropdown-category">Captions</span></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link <span class="rs-dropdown-caption">With Caption</span></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover) <span class="rs-dropdown-caption">With Caption</span></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus) <span class="rs-dropdown-caption">With Caption</span></a></li>
        </ul>
      </div>
      <div class="rs-dropdown rs-utility-dropdown rs-nav-item" id="utility-dropdown-spacing">
        <h4 style="padding-bottom: 5px;">Utility Dropdown</h4>
        <ul class="rs-dropdown-menu visible">
          <li class="rs-dropdown-item"><span>Non Link Text</span></li>
          <li class="rs-divider"></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link</a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover)</a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus)</a></li>
          <li class="rs-divider"></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link External <i class="rs-icon-external-dark"></i></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link External (Hover) <i class="rs-icon-external-dark"></i></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link External (Focus) <i class="rs-icon-external-dark"></i></a></li>
          <li class="rs-divider"></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link <span class="rs-dropdown-caption">With Caption</span></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover) <span class="rs-dropdown-caption">With Caption</span></a></li>
          <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus) <span class="rs-dropdown-caption">With Caption</span></a></li>
        </ul>
      </div>
      <div class="rs-dropdown">
        <h4 style="padding-bottom: 5px;">Action Dropdown</h4>
        <ul class="rs-dropdown-menu visible">
          <li class="rs-dropdown-item"><span class="rs-dropdown-category">Links</span></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">One</a></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Two</a></li>
          <li class="rs-dropdown-item"><span class="rs-dropdown-category">More Links</span></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Three</a></li>
          <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Four</a></li>
        </ul>
      </div>
    </div>
    <h4 style="margin-top:330px;">Markup</h4>

    {% highlight html %}/* Primary Dropdown */
<div class="rs-nav-item rs-dropdown rs-primary-dropdown">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Links</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link</a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover)</a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus)</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">External</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link External <i class="rs-icon-external"></i></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link External (Hover) <i class="rs-icon-external"></i></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link External (Focus) <i class="rs-icon-external"></i></a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Captions</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link <span class="rs-dropdown-caption">With Caption</span></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover) <span class="rs-dropdown-caption">With Caption</span></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus) <span class="rs-dropdown-caption">With Caption</span></a></li>
  </ul>
</div>

/* Utility Dropdown */
<div class="rs-nav-item rs-dropdown rs-utility-dropdown">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item"><span>Non Link Text</span></li>
    <li class="rs-divider"></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link</a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover)</a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus)</a></li>
    <li class="rs-divider"></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link External <i class="rs-icon-external-dark"></i></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link External (Hover) <i class="rs-icon-external-dark"></i></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link External (Focus) <i class="rs-icon-external-dark"></i></a></li>
    <li class="rs-divider"></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Link <span class="rs-dropdown-caption">With Caption</span></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link hover">Link (Hover) <span class="rs-dropdown-caption">With Caption</span></a></li>
    <li class="rs-dropdown-item"><a href="#" class="rs-dropdown-link focus">Link (Focus) <span class="rs-dropdown-caption">With Caption</span></a></li>
  </ul>
</div>

/* Action Dropdown */
<div class="rs-dropdown">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Links</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">One</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Two</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">More Links</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Three</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Four</a></li>
  </ul>
</div>{% endhighlight %}

  </div>
</div>
<hr class="subsection-divider" id="primary-dropdown">
<h3>Primary Dropdown</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use in combination with the <a href="/app-layout/#header-&-navigation">primary navigation</a> style in the main header of your application.</p>
    <ul>
      <li>Primary dropdowns are used when your application has more than 5-7 sections, depending on the length of each section name. For example, some applications may only be able to fit 5 sections across the main header.</li>
      <li>Use when your functionality resembles one of a desktop application.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-nav-item rs-dropdown rs-primary-dropdown">
      <ul class="rs-dropdown-menu visible">
        <li class="rs-dropdown-item"><span class="rs-dropdown-category">Infrastructure</span></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Servers</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Load Balancers</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">DNS</a></li>
        <li class="rs-dropdown-item"><span class="rs-dropdown-category">Automation</span></li>
        <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">Deployments</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Autoscaling</a></li>
        <li class="rs-dropdown-item"><span class="rs-dropdown-category">Developer Tools</span></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Queues</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Mailgun <i class="rs-icon-external"></i></a></li>
      </ul>
    </div>
    <h4 id="components-primary-dropdown" style="margin-top:330px;">Markup</h4>

    {% highlight html %}<div class="rs-dropdown rs-primary-dropdown rs-nav-item">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Infrastructure</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Servers</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Load Balancers</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">DNS</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Automation</span></li>
    <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">Deployments</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Autoscaling</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Developer Tools</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Queues</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Mailgun <i class="rs-icon-external"></i></a></li>
  </ul>
</div>{% endhighlight %}

  </div>
</div>
<hr class="subsection-divider" id="utility-dropdown">
<h3>Utility Dropdown</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use in combination with the <a href="/app-layout/#header-&-navigation">utility navigation</a> in the top black bar of your application.</p>
      <ul>
        <li>Utility dropdowns should be used to organize the right utility nav categories. For example, "Account" will contain pages related to the user's account. "Support" should contain help information, support tickets, etc.</li>
      </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-nav-item rs-dropdown rs-utility-dropdown">
      <ul class="rs-dropdown-menu visible">
        <li class="rs-dropdown-item"><span class="rs-dropdown-text">Account# 1234567</span></li>
        <li class="rs-divider"></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Billing</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Usage</a></li>
        <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">User Management</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Settings</a></li>
        <li class="rs-divider"></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Log Out</a></li>
      </ul>
    </div>
    <h4 id="components-utility-dropdown">Markup</h4>

    {% highlight html %}<div class="rs-dropdown rs-utility-dropdown rs-nav-item">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item"><span class="rs-dropdown-text">Account# 1234567</span></li>
    <li class="rs-divider"></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Billing</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Usage</a></li>
    <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">User Management</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Settings</a></li>
    <li class="rs-divider"></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Log Out</a></li>
  </ul>
</div>{% endhighlight %}

  </div>
</div>
<hr class="subsection-divider" id="action-dropdown">
<h3>Action Dropdown</h3>
<div class="rs-row">
  <div class="span-3">
    <p>Use in combination with the <a href="/ui-components/#action-buttons">action buttons</a> and <a href="/ui-components/#action-cogs">action cogs</a> to group the most important actions of your product.</p>
    <ul>
      <li>Action dropdowns usually spawn popovers with simple forms to help perform basic actions. Consider reserving complicated actions for a Detail View or List Table.</li>
      <li>Actions are grouped using category headers and are often based on the intention of each action. For example, "Rename" is performed to help users "Identify" their products.</li>
      <li>Actions that require another step (or click) are written with an ellipsis to signify to users that there will be followup steps to the specific action.</li>
    </ul>
  </div>
  <div class="span-8 offset-1">
    <h4>Example</h4>
    <div class="rs-dropdown">
      <ul class="rs-dropdown-menu visible">
        <li class="rs-dropdown-item"><span class="rs-dropdown-category" id="first">Identify</span></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Rename Server...</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Tag Server...</a></li>
        <li class="rs-dropdown-item"><span class="rs-dropdown-category">Image</span></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Create Image...</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Schedule Daily Image...</a></li>
        <li class="rs-dropdown-item"><span class="rs-dropdown-category">Recover</span></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Rebuild From Image...</a></li>
        <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">Enter Rescue Mode...</a></li>
        <li class="rs-dropdown-item"><span class="rs-dropdown-category">Manage</span></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Connect Via Terminal...</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Reboot Server...</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Resize Server...</a></li>
        <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">Change Password...</a></li>
        <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Delete Server...</a></li>
      </ul>
    </div>
    <h4 id="components-action-dropdown">Markup</h4>

    {% highlight html %}<div class="rs-dropdown">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item"><span class="rs-dropdown-category" id="first">Identify</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Rename Server...</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Tag Server...</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Image</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Create Image...</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Schedule Daily Image...</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Recover</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Rebuild From Image...</a></li>
    <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">Enter Rescue Mode...</a></li>
    <li class="rs-dropdown-item"><span class="rs-dropdown-category">Manage</span></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Connect Via Terminal...</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Reboot Server...</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Resize Server...</a></li>
    <li class="rs-dropdown-item disabled"><a class="rs-dropdown-link" href="#">Change Password...</a></li>
    <li class="rs-dropdown-item"><a class="rs-dropdown-link" href="#">Delete Server...</a></li>
  </ul>
</div>{% endhighlight %}

  </div>
</div>
