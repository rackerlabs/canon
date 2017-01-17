---
parent: Buttons
title: Action Buttons
order: 5
---
<p>Use for displaying actions on a Detail View in combination with the <a href="/ui-components/#dropdowns">Action Dropdown</a>.</p><p>The downward pointing rs-caret icon indicates that clicking the button produces a dropdown.</p>
<div class="list-table">
  <table>
    <thead>
      <tr>
        <th style="width:110px">Example</th>
        <th>Class</th>
        <th>Markup</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <button class="rs-btn rs-btn-action">
            <span class="rs-cog"></span> Default <span class="rs-caret"></span>
          </button>
        </td>
        <td>rs-btn rs-btn-action</td>
        <td>{% highlight html %}<button class="rs-btn rs-btn-action">
  <span class="rs-cog"></span> Default <span class="rs-caret"></span>
</button>{% endhighlight %}
      </td>
    </tr>
    <tr>
      <td>
        <button class="rs-btn rs-btn-action active">
          <span class="rs-cog"></span>
          Active
          <span class="rs-caret"></span>
        </button>
      </td>
      <td>rs-btn rs-btn-action active</td>
      <td>
        {% highlight html %}<button class="rs-btn rs-btn-action active">
  <span class="rs-cog"></span> Active <span class="rs-caret"></span>
</button>{% endhighlight %}
    </td>
  </tr>
  <tr>
    <td>
      <button class="rs-btn rs-btn-action disabled">
        <span class="rs-cog"></span> Disabled <span class="rs-caret"></span>
      </button>
    </td>
    <td>rs-btn rs-btn-action disabled</td>
    <td>
      {% highlight html %}<button class="rs-btn rs-btn-action disabled">
  <span class="rs-cog"></span> Disabled <span class="rs-caret"></span>
</button>{% endhighlight %}
  </td>
</tr>
<tr>
  <td>
    <button class="rs-btn rs-btn-action hover">
      <span class="rs-cog"></span>
      Hover
      <span class="rs-caret"></span>
    </button>
  </td>
  <td>rs-btn rs-btn-action hover</td>
  <td>
    {% highlight html %}<button class="rs-btn rs-btn-action hover">
  <span class="rs-cog"></span> Hover <span class="rs-caret"></span>
</button>{% endhighlight %}
</td>
</tr>
</tbody>
</table>
</div>