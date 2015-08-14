---
category : get started
title: Versioning
updated: September 17, 2013
author: Andrew Raiford
tags : [intro, about, canon]
---

Canon uses [Semantic Versioning](http://http://semver.org/). In a nutshell,
changes are divided into three categories:

- Backwards compatible bug fixes
- New, backwards compatible functionality
- New, backwards incompatible functionality

Canon distributes a build to CDN that includes all backwards compatible bug fixes
and functionality for the latest major version. We **strongly** recommend that
you consume Canon in this manner so that you will automatically receive critical
bug fixes. If you would rather link to a specific version or serve Canon yourself,
the table below provides links to all Canon versions.

<div>
  <h3 style="margin-top: 20px">Previous Versions</h3>
  <p>
    See the <a href="https://github.com/rackerlabs/canon/blob/master/CHANGELOG.md" target="_blank">changelog</a>
    for more information about the changes contained in each release.
  </p>
  <div class="list-table">
    <table style="width:850px; border:1px solid #eee">
    <thead>
      <tr>
        <th style="width:150px">Version</th>
        <th style="width:150px">Minified</th>
        <th style="width:150px">Uncompressed</th>
        <th style="width:150px">Downloads</th>
      </tr>
    </thead>
    <tbody>
      {% for version in site.CANON.versions %}
      <tr style="vertical-align:top">
        <td>Version {{version}}</td>
        <td>
          <a href="{{site.CANON.cdnUrl}}/v{{version}}/canon.min.css">CSS</a>
          <a href="{{site.CANON.cdnUrl}}/v{{version}}/canon.min.js">Javascript</a>
        </td>
        <td>
          <a href="{{site.CANON.cdnUrl}}/v{{version}}/canon.css">CSS</a>
          <a href="{{site.CANON.cdnUrl}}/v{{version}}/canon.js">Javascript</a>
        </td>
        <td>
          <a href="{{site.CANON.cdnUrl}}/v{{version}}/canon.zip">ZIP</a>
          <a href="{{site.CANON.cdnUrl}}/v{{version}}/canon.tar.gz">TAR</a>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
  </div>
</div>
