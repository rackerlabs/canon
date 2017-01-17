---
parent: Buttons
title: Delete Buttons
order: 10
---
<ul>
  <li>Use Delete Buttons to remove a row from a <a href="/ui-components/#table-form-elements">Table</a> without requiring confirmation</li>
  <li>Use when delete is the only action available for an item</li>
  <li>Must be set in the last column of the row</li>
</ul>
<div class="rs-list-table">
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
        <td class="rs-table-delete">
          <button class="rs-delete"></button>
        </td>
        <td>Default</td>
        <td>rs-delete</td>
        <td>
          {% highlight html %}<button class="rs-delete"></button>{% endhighlight %}
        </td>
      </tr>
    </tbody>
  </table>
</div>