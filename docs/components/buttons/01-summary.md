---
parent: Buttons
title: Summary
order: 1
---
<ul>
  <li>Use button styles to distinguish between types of actions, making it clear to users which action they are performing.</li>
  <li>Canon now has <a href="#three-sizes">three button sizes</a> for each of the main button types.</li>
  <li><a href="#button-groups">Button groups</a> should be used to submit forms and should contain a cancel link.</li>
  <li>Never shown/hide buttons dynamically. Instead, disable/enable buttons using the "disabled" attribute on the button.</li>
  <li><a href="#button-research">Read more about button best practices</a></li>
</ul>
<div class="list-table">
  <table>
    <thead>
      <tr>
        <th>Button</th>
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
        <td>{% highlight html %}<button class="rs-btn rs-btn-primary">Primary</button>{% endhighlight %}</td>
      </tr>
      <tr>
        <td>
          <button class="rs-btn">Secondary</button>
        </td>
        <td>rs-btn</td>
        <td>{% highlight html %}<button class="rs-btn">Secondary</button>{% endhighlight %}</td>
      </tr>
      <tr>
        <td>
{% capture actions %}
<button class="rs-btn rs-btn-action">
  <span class="rs-cog"></span> Actions <span class="rs-caret"></span>
</button>{% endcapture %}{{ actions }}
        </td>
        <td>rs-btn rs-btn-action</td>
        <td>{% highlight html %}{{ actions }}{% endhighlight %}
      </td>
    </tr>
    <tr>
      <td>
        <button class="rs-btn rs-btn-login">Login</button>
      </td>
      <td>rs-btn rs-btn-login</td>
      <td>{% highlight html %}<button class="rs-btn rs-btn-login">Login</button>{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        <button class="rs-btn rs-btn-link">Cancel</button>
      </td>
      <td>rs-btn rs-btn-link</td>
      <td>{% highlight html %}<button class="rs-btn rs-btn-link">Cancel</button>{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        <button class="rs-cog"></button>
      </td>
      <td>rs-cog</td>
      <td>{% highlight html %}<button class="rs-cog"></button>{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        <button class="rs-delete"></button>
      </td>
      <td>rs-delete</td>
      <td>{% highlight html %}<button class="rs-delete"></button>{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        <button class="rs-edit"></button>
      </td>
      <td>rs-edit</td>
      <td>{% highlight html %}<button class="rs-edit"></button>{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        <button class="rs-plus"></button>
      </td>
      <td>rs-plus</td>
      <td>{% highlight html %}<button class="rs-plus"></button>{% endhighlight %}</td>
    </tr>
  </tbody>
</table>
</div>
