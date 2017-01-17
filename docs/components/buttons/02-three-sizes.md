---
parent: Buttons
title: Three Sizes
order: 3
---
<p>Size classes can be applied to any of the main button types &ndash; Primary, Secondary, Action buttons, Login buttons and Cancel Links</p>
<p>How to use them:</p>
<ul>
  <li><strong>Small: </strong>Use the compact buttons with space constraints such as within a table, on a card, or in the sidebar of a page.</li>
  <li><strong>Default: </strong>In most cases, you should use the default button size.</li>
  <li><strong>Large: </strong>Large buttons should be used in mobile designs to accommodate the ideal touch target size.</li>
</ul>
<div class="list-table">
  <table>
    <thead>
      <tr>
        <th>Size</th>
        <th>Class</th>
        <th>Markup</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          {% capture smallbutton %}<button type="button" class="rs-btn rs-btn-small">Small Button</button>{% endcapture %}
          {{ smallbutton }}
        </td>
        <td>rs-btn rs-btn-small</td>
        <td>
          {% highlight html %}{{ smallbutton }}{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td>
          {% capture regularbutton %}<button type="button" class="rs-btn">Default Button</button>{% endcapture %}
          {{ regularbutton }}
        </td>
        <td>rs-btn</td>
        <td>
          {% highlight html %}{{ regularbutton }}{% endhighlight %}
        </td>
      </tr>
      <tr>
        <td>
          {% capture largebutton %}<button type="button" class="rs-btn rs-btn-large">Large Button</button>{% endcapture %}
          {{ largebutton }}
        </td>
        <td>rs-btn rs-btn-large</td>
        <td>
          {% highlight html %}{{ largebutton }}{% endhighlight %}
        </td>
      </tr>
    </tbody>
  </table>
</div>