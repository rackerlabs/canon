---
layout: default-left-nav
category: App Layout
title: Content Area
resource: true
---
<div class="rs-detail-header">
  <div class="rs-detail-header-subtitle">{{ page.category }}</div>
  <div class="rs-detail-header-title"> {{ page.title }} </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Summary</div>
  </div>
  <div class="rs-detail-section-body">
    <p>The content area contains the primary information and functionality for your application. Consistent layout is imperative so users never feel like they have to think hard about changing formats from page to page.</p>
  </div>
</div>
<div class="rs-detail-section">
  <div class="rs-detail-section-header">
    <div class="rs-detail-section-title">Examples</div>
  </div>
  <div class="rs-detail-section-body">
    <table class="rs-table">
            <thead>
              <tr>
                <th>Layout</th>
                <th>Thumbnail</th>
                <th>Markup</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><h3>Full-Width Content</h3>
        <p>Sometimes you just don't need content in sidebars, or maybe you just need all the space you can get.  This layout sets the content area to the entire width of the page.</p></td>
                <td><img src="{{ site.baseurl }}/img/content-layout-full-width.png" width="275" /></td>
                <td>{% highlight html %}<div class="rs-main">
  <div class="rs-content rs-panel"></div>
</div>{% endhighlight %}</td>
              </tr>
              <tr>
                <td>
                  <h3>Left Sidebar Faceting</h3>
                  <p>The Faceting Sidebar should only be used in the List View for the purpose of filtering the list view table.</p>
                </td>
                <td><img src="{{ site.baseurl }}/img/content-layout-left-sidebar-faceting.png" width="275" /></td>
                <td>{% highlight html %}<div class="rs-main">
  <div class="rs-sidebar rs-facet">
    <div class="rs-inner"></div>
  </div>
  <div class="rs-content rs-panel">
    <div class="rs-inner"></div>
  </div>
</div>{% endhighlight %}</td>
              </tr>
              <tr>
                <td>
                  <h3>Left Sidebar Navigation</h3>
                  <p>Never use the Navigation sidebar AND the faceting sidebar &ndash; that's just too much listy data stuff in one place, so just use one or the other.</p>
                </td>
                <td><img src="{{ site.baseurl }}/img/content-layout-left-sidebar-primary-nav.png" width="275" /></td>
                <td>{% highlight html %}<div class="rs-main">
  <div class="rs-sidebar rs-nav">
    <div class="rs-inner"></div>
  </div>
  <div class="rs-content rs-panel">
    <div class="rs-inner"></div>
  </div>
</div>{% endhighlight %}</td>
              </tr>
              <tr>
                <td>
                  <h3>Right Sidebar Help</h3>
                  <p>The right sidebar is most often used to hold help articles and next steps instructions.</p>
                </td>
                <td><img src="{{ site.baseurl }}/img/content-layout-right-sidebar-help.png" width="275" /></td>
                <td>{% highlight html %}<div class="rs-main rs-panel">
  <div class="rs-sidebar rs-pull-right">
    <div class="rs-inner"></div>
  </div>
  <div class="rs-content rs-panel">
    <div class="rs-inner"></div>
  </div>
</div>{% endhighlight %}</td>
              </tr>
            </tbody>
          </table>
  </div>
</div>