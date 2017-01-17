---
parent: Status Indicators
title: Icons
order: 4
---
<ul>
  <li>Below are the three icons which should always be used when showing an icon for status.</li>
  <li>The coloring can be acheived by adding the "rs-status-*" class to the standard icon element.</li>
  <li>It's important to stick to these specific icons when showing status. They were designed with differences in color and shape which is critical in assessing status.</li>
</ul>
<table>
  <thead>
    <tr>
      <th>Example</th>
      <th>Markup</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {% capture ok %}<i class="rs-icon rs-icon-check-mark  rs-status-ok"></i>{% endcapture %}{{ ok }}
      </td>
      <td>{% highlight html%}{{ ok }}{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        {% capture processing %}<i class="rs-icon rs-icon-warning rs-status-warning "></i>{% endcapture %}{{ processing }}
      </td>
      <td>{% highlight html%}{{ processing }}{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        {% capture error %}<i class="rs-icon rs-icon-error rs-status-error"></i>{% endcapture %}{{ error }}
      </td>
      <td>{% highlight html%}{{ error }}{% endhighlight %}</td>
    </tr>
  </tbody>
</table>