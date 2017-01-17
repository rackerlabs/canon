---
layout: default-left-nav
category: Rackspace Canon
resource: true
title: Get Started with Canon
---
<h2>Step 1: <span class="rs-quiet">Link to the CSS</span></h2>

Canon is designed to be conflict-free. Use with your existing framework, like Foundation, Twitter Bootstrap, or your custom CSS.

Most users will want to pull the latest Canon release directly off CDN:

<code style="margin-bottom: 1.25em;">
  <span class="rs-quiet">{{ site.CANON.cdnUrl }}</span>/v{{ site.CANON.latest }}/canon.min.js
</code>
<code style="margin-bottom: 1.25em;">
  <span class="rs-quiet">{{ site.CANON.cdnUrl }}</span>/v{{ site.CANON.latest }}/canon.min.css
</code>

By consuming Canon using these URLs, you will automatically receive bug fixes 
and other forward-compatible changes. We also provide the ability to link to a 
specific version from the CDN. See the [versioning section](#versioning) for 
more information on our versioning strategy and links to additional downloads.

<h2>Step 2: <span class="rs-quiet">Use Canon class names in your HTML</span></h2>

Try implementing Canon in baby steps. For example, start with the "frame" or [App Layout]({{site.baseurl}}/app-layout/) before the content areas. This makes changes easier on your users as well.