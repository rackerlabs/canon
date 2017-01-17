---
parent: Buttons
title: Plus Buttons
order: 13
---
<p>Use the rs-plus button in combination with <a href="/ui-components/#monitoring-status-list">Monitoring Status List</a>.</p>
<ul>
  <li>If there are no checks on a monitoring-enabled device, use the plus button to let users add checks.</li>
  <li>The Plus Button should spawn a <a href="#popover">Popover</a> for creating a check on the device.</li>
  <li>See the <a href="{{ site.baseurl }}/demos" target="_blank">Cloud Servers list</a> for an example.</li>
</ul>
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