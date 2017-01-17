---
parent: Buttons
title: Secondary Buttons
order: 4
---
<p>Use for actions that are not the primary goal of the page, such as "Back" & "Next", or on a page where many buttons are present, but there's no primary action.</p>
<ul>
  <li>"Add" or "Create" buttons on tables within Create or Detail Views use the secondary style because they are not the only actions on the page.</li>
  <li>Use in modals for passive actions like "Close" or "Dismiss".</li>
  <li>Use in multi-step popovers as "Back" buttons.</li>
</ul>
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