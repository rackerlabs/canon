---
layout: post
category : ui components
title: Tooltips
updated: June 6, 2013
author: Johnson Chen
adherence: 1
tags : [intro, about, canon]
---
<div class="rs-row">
	<div class="span-3">
		<h3>How it works</h3>
		<p>Use the tooltip when you want to convey brief snippets of information, to explain an element a bit more, or to display truncated text.</p>
		<ul>
			<li>Activates when hovered on with mouse. </li>
			<li>The tooltip disappears when mouse hovers away, or when clicked in the icon. Tooltip does not reactivate on click.</li>
			<li>Tooltip should only be used on icon images, text, and table rows; use when see fit.</li>
			<li>Max width for the tooltip is 500px.</li>
		</ul>
		<h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<h4>Example</h4>
	  <div class="tooltip-example">
	    <p>
	    	<i id="tooltip-demo" class="rs-icon-help" title="This is a <strong>tooltip</strong>."></i>
	    </p>

	    <div class="rs-tooltip visible" style="top: auto; left: auto">
	      <div class="rs-tooltip-inner">
	        You can also use tooltip markup without Javascript.
	      </div>
	    </div>

	    <script type="application/javascript">

	    $(document).ready(function () {

	    	var tooltip;

	    	tooltip = new canon.Tooltip();
	    	tooltip.attach($('#tooltip-demo'));
	    });

	    </script>
	  </div>

		<h4 class="markup-margin">Markup</h4>
		{% highlight html %}<p>
	<i id="tooltip-demo" class="rs-icon-help" title="This is a <strong>tooltip</strong>."></i>
</p>

<div class="rs-tooltip visible" style="top: auto; left: auto">
  <div class="rs-tooltip-inner">
    You can also use tooltip markup without Javascript.
  </div>
</div>

<script type="application/javascript">

$(document).ready(function () {

	var tooltip;

	tooltip = new canon.Tooltip();
	tooltip.attach($('#tooltip-demo'));
});

</script>{% endhighlight %}
	</div>
</div>

