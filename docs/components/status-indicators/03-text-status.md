---
parent: Status Indicators
title: Text
order: 3
---
<p>Colored status text is designed to be used inline with other content, often in tables, or key/value lists.</p>
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
        {% capture ok %}<span class="rs-status-ok">Deployed on Aug 26, 2013 - 1:43 PM UTC</span>{% endcapture %}{{ ok }}
      </td>
      <td>{% highlight html%}{{ ok }}{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        {% capture processing %}<span class="rs-status-processing">Deployment in Progress (22%)</span>{% endcapture %}{{ processing }}
      </td>
      <td>{% highlight html%}{{ processing }}{% endhighlight %}</td>
    </tr>
    <tr>
      <td>
        {% capture error %}<span class="rs-status-error">Error - Max Retries Exceeded</span>{% endcapture %}{{ error }}
      </td>
      <td>{% highlight html%}{{ error }}{% endhighlight %}</td>
    </tr>
  </tbody>
</table>