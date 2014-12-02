---
category : ui components
title: Typography
updated: December 6, 2013
author: Eddy Hernandez
adherance: 2
tags : [intro, about, canon]
---
<div class="rs-row">
	<div class="span-3">
		<h3>Headings</h3>
		<p>Use these styles to visually distinguish sections of content.</p>
		<h3>When to use</h3>
		<ul>
			<li>Page titles should use &lt;h2 class="rs-page-title"&gt;</li>
			<li><a href="#details">Section</a> headings should use &lt;h1&gt;, sub-sections should use &lt;h3&gt;.</li>
			<li>Sidebar headings should use &lt;h3&gt;, sidebar sub-headings should use &lt;h4&gt;</li>
		</ul>
		<h4>Adherence Rating: {{ page.adherance }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherance] | escape }}"></span> </h4>
	</div>
	<div class="span-8 offset-1">
		<h4>Examples</h4>
		<table class="type-example">
			<thead>
				<tr>
					<th>Heading</th>
					<th>Element/Class</th>
					<th>Markup</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><h1>Heading 1</h1></td>
					<td>H1</td>
					<td>{% highlight html %}<h1>Heading 1</h1>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h2>Heading 2</h2></td>
					<td>H2</td>
					<td>{% highlight html %}<h3>Heading 2</h3>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h2 class="rs-page-title">Heading 2</h2></td>
					<td>H2 w/ .rs-page-title</td>
					<td>{% highlight html %}<h2 class="rs-page-title">Heading 2</h2>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h3>Heading 3</h3></td>
					<td>H3</td>
					<td>{% highlight html %}<h3>Heading 3</h3>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h4>Heading 4</h4></td>
					<td>H4</td>
					<td>{% highlight html %}<h4>Heading 4</h4>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h4 class="rs-quiet">Heading 4</h4></td>
					<td>H4 w/ .rs-quiet</td>
					<td>{% highlight html %}<h4 class="rs-quiet">Heading 4</h4>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h5>Heading 5</h5></td>
					<td>H5</td>
					<td>{% highlight html %}<h5>Heading 5</h5>{% endhighlight %}</td>
				</tr>
				<tr>
					<td><h6>Heading 6</h6></td>
					<td>H6</td>
					<td>{% highlight html %}<h6>Heading 6</h6>{% endhighlight %}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>