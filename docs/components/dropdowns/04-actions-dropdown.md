---
parent: Dropdowns
title: Actions Dropdown
order: 4
---
<p>Use in combination with the <a href="/ui-components/#action-buttons">action buttons</a> and <a href="/ui-components/#action-cogs">action cogs</a> to group the most important actions of your product.</p>
<ul>
  <li>Action dropdowns usually spawn popovers with simple forms to help perform basic actions. Consider reserving complicated actions for a Detail View or List Table.</li>
  <li>Actions are grouped using category headers and are often based on the intention of each action. For example, "Rename" is performed to help users "Identify" their products.</li>
  <li>Actions that require another step (or click) are written with an ellipsis to signify to users that there will be followup steps to the specific action.</li>
</ul>
<div style="overflow: hidden;">
<div style="width: 20em; height: 32em; float: left;">
<h2>Example</h2>
{% capture utility %}<div class="rs-dropdown">
  <ul class="rs-dropdown-menu visible">
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category" id="first">Identify</span>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Rename Server...</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Tag Server...</a>
    </li>
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category">Image</span>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Create Image...</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Schedule Daily Image...</a>
    </li>
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category">Recover</span>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Rebuild From Image...</a>
    </li>
    <li class="rs-dropdown-item disabled">
      <a class="rs-dropdown-link" href="#">Enter Rescue Mode...</a>
    </li>
    <li class="rs-dropdown-item">
      <span class="rs-dropdown-category">Manage</span>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Connect Via Terminal...</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Reboot Server...</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Resize Server...</a>
    </li>
    <li class="rs-dropdown-item disabled">
      <a class="rs-dropdown-link" href="#">Change Password...</a>
    </li>
    <li class="rs-dropdown-item">
      <a class="rs-dropdown-link" href="#">Delete Server...</a>
    </li>
  </ul>
</div>{% endcapture %}{{ utility }}</div>
<div class="rs-pull-left">
  <h2>Markup</h2>
{% highlight html %}{{ utility }}{% endhighlight %}
</div>
</div>