---
parent: Status Indicators
title: Badges
order: 2
---
<table>
  <thead>
    <tr>
      <th>
        Example
      </th>
      <th>Markup</th>
      <th>
        When to Use
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {% capture error %}<span class="rs-status rs-status-error">Error</span>{% endcapture %}{{ error }}
      </td>
      <td>
{% highlight html %}{{ error }}{% endhighlight %}
      </td>
      <td>Product is not working as intended
        <div class="rs-quiet">Example: Server that failed to build</div>
      </td>
    </tr>
    <tr>
      <td>
        {% capture Building %}<span class="rs-status rs-status-processing">Building</span>{% endcapture %}{{ Building }}
      </td>
      <td>
{% highlight html %}{{ Building }}{% endhighlight %}
      </td>
      <td>
        Product is running a user-initiated process that causes it to be temporarily unavailable and will return to normal afterwards.
        <div class="rs-quiet">Example: Server that is builing or resizing</div>
      </td>
    </tr>
    <tr>
      <td>
        {% capture warning %}<span class="rs-status rs-status-warning">Warning</span>{% endcapture %}{{ warning }}
      </td>
      <td>
{% highlight html %}{{ warning }}{% endhighlight %}
      </td>
      <td>
        Product is intermittently working or is trending towards unhealthy
        <div class="rs-quiet">Example: Monitoring check in warning</div>
      </td>
    </tr>
    <tr>
      <td>
        {% capture ok %}<span class="rs-status rs-status-ok">Active</span>{% endcapture %}{{ ok }}
      </td>
      <td>
{% highlight html %}{{ ok }}{% endhighlight %}
      </td>
      <td>
        Product is working correctly
        <div class="rs-quiet">Example: Active load balancer</div>
      </td>
    </tr>
    <tr>
      <td>
        {% capture disabled %}<span class="rs-status rs-status-disabled">Disabled</span>{% endcapture %}{{ disabled }}
      </td>
      <td>
{% highlight html %}{{ disabled }}{% endhighlight %}
      </td>
      <td>
        Product has been intentionally stopped by the user
        <div class="rs-quiet">Example: Disabled monitoring check</div>
      </td>
    </tr>
  </tbody>
</table>