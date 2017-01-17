---
parent: Typography
title: Body Text
order: 2
---
<p>TO DO: add use info</p>
<!-- Start  Table -->
<table class="rs-list-table">
  <thead>
    <tr>
      <th>Body Size</th>
      <th>Class</th>
      <th>Markup</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 20em;">{% capture default %}<p>
<strong>Body Regular:</strong> 
Lorem ipsum dolor sit amet, consectetur 
adipisicing elit. Minus, inventore ratione velit 
iste earum quas sunt necessitatibus quos dolorum 
distinctio minima optio itaque. Cumque, eveniet, 
hic fuga nostrum repellendus exercitationem!
</p>{%endcapture%}{{default}}</td>
      <td>default</td>
      <td>{% highlight html %}{{default}}{% endhighlight %}</td>
    </tr>
    <tr>
      <td>{% capture small %}<p class="small">
<strong>Body Small:</strong> 
Lorem ipsum dolor sit amet, consectetur 
adipisicing elit. Minus, inventore ratione velit 
iste earum quas sunt necessitatibus quos dolorum 
distinctio minima optio itaque. Cumque, eveniet, 
hic fuga nostrum repellendus exercitationem!
</p>{%endcapture%}{{small}}</td>
      <td>small</td>
      <td>{% highlight html %}{{small}}{% endhighlight %}</td>
    </tr>
    <tr>
      <td>{% capture extrasmall %}<p class="extra-small">
<strong>Body Extra Small:</strong> 
Lorem ipsum dolor sit amet, consectetur 
adipisicing elit. Minus, inventore ratione velit 
iste earum quas sunt necessitatibus quos dolorum 
distinctio minima optio itaque. Cumque, eveniet, 
hic fuga nostrum repellendus exercitationem!
</p>{%endcapture%}{{extrasmall}}</td>
      <td>extra-small</td>
      <td>{% highlight html %}{{extrasmall}}{% endhighlight %}</td>
    </tr>
  </tbody>
</table>
<!-- End  Table -->
