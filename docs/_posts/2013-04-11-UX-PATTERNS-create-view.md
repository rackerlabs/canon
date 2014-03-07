---
layout: post
category : ux patterns
title: Create View
updated: October 15, 2013
author: Andrew Raiford
adherence: 3
tags : [intro, about, canon]
---
<div class="rs-row">
  <div class="span-3">
    <p>Use this pattern to create a single item or product. The content of the Create View can be broken into 3 main parts:</p>
    <ol>
      <li>The <strong>Create Form</strong> allows you to break workflows into sections:
        <ol>
          <li><a href="javascript:void(0);" class="highlight-source" data-highlight-target="create-example-identify">Configure the product</a></li>
          <li><a href="javascript:void(0);" class="highlight-source" data-highlight-target="create-example-select">Select important options</a></li>
          <li><a href="javascript:void(0);" class="highlight-source" data-highlight-target="create-example-add-related">Add related items</a></li>
        </ol>
      </li>
      <li>The <strong>Right Sidebar</strong> contains help text and links about best practices and next steps for further use or configuration.</li>
      <li>The <strong>Back link</strong> points to the list view you came from. </li>
    </ol>
    <h3>Complex Components:</h3>
    <ul>
      <li><a href="/ui-components/#details" class="highlight-source" data-highlight-target="create-example-horizontal-form">Details</a></li>
      <li><a href="/ui-components/#forms" class="highlight-source" data-highlight-target="form-highlight-example">Forms</a></li>
      <li><a href="#create-view" class="highlight-source" data-highlight-target="create-example-help-sidebar">Help Sidebar</a></li>
      <li><a href="/ui-components/#tabs" class="highlight-source" data-highlight-target="create-example-tabbed-embedded-table">Tabbed Embedded Tables</a></li>
      <li><a href="/ui-components/#details" class="highlight-source" data-highlight-target="create-example-add-related">Collapsible Sections</a></li>
      <li><a href="/ui-components/#tabs" class="highlight-source" data-highlight-target="create-example-embedded-table">Embedded Tables</a>
      </li>
    </ul>
    <h3>Simple Components:</h3>
    <ul>
      <li><a href="/ui-components/#back-link" class="highlight-source" data-highlight-target="create-example-back-link">Back Link</a></li>
      <li><a href="/ui-components/#popover" class="highlight-source" data-highlight-target="add-items-popover">Popovers</a></li>
      <li><a href="/ui-components/#secondary-buttons" class="highlight-source" data-highlight-target="add-items-button">Secondary Buttons</a></li>
      <li><a href="/ui-components/#button-groups" class="highlight-source" data-highlight-target="create-example-button-group">Button Groups</a></li>
      <li><a href="/ui-components/#primary-buttons" class="highlight-source" data-highlight-target="create-example-primary-button">Primary Buttons</a></li>
    </ul>
    <h4>Adherence Rating: {{ page.adherence }} <span class="rs-icon-help tip" title="{{ site.adherenceRatings[page.adherence] | escape }}"></span></h4>
  </div>
  <div class="span-9">
    <div class="rs-back-link"><a href="#list-view" id="create-example-back-link">&lsaquo; Back to Items List</a></div>
    <div class="rs-main rs-panel">
      <div class="rs-sidebar rs-pull-right" id="create-example-help-sidebar">
        <div class="rs-inner">
          <h3>Setting Up This Item</h3>
          <h4>Configuration Help</h4>
          <p>Short blurb about best practices for complex settings in the create process. Limit to 3 lines.</p>
          <p><a target="blank" href="#">More Details About Blurb &raquo;</a></p>
          <hr>
          <h4>Help Me With...</h4>
          <ul>
            <li><a target="blank" href="#">Best Practice Number One</a></li>
            <li><a target="blank" href="#">Best Practice Number Two</a></li>
            <li><a target="blank" href="#">Best Practice Number Three</a></li>
          </ul>
          <p><a target="blank" href="#">Learn More about This Product &raquo;</a></p>
          <hr>
          <h4>What's Next</h4>
          <ul>
            <li><a target="blank" href="#">Top Action Number One</a></li>
            <li><a target="blank" href="#">Top Action Number Two</a></li>
            <li><a target="blank" href="#">Top Action Number Three</a></li>
          </ul>
          <p><a target="blank" href="#">Visit Our Knowledge Center &raquo;</a></p>
        </div>
      </div>
      <div class="rs-content rs-panel">
        <form class="rs-form-create" id="create-example-horizontal-form">
          <div class="rs-detail-section" id="create-example-identify">
            <div class="rs-detail-section-header">
              <h2 class="rs-page-title">Create {Product Name}</h3>
              <div class="rs-detail-section-title">{Product Name} Details</div>
            </div>
            <div class="rs-detail-section-body">
              <div id="form-highlight-example">
              <div class="rs-control-group">
                <label class="rs-control-label">Item Name</label>
                <div class="rs-controls">
                  <input type="text" class="rs-input-large" value="item-name-01">
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Region</label>
                <div class="rs-controls">
                  <select>
                    <option value="IAD">Northern Virginia (IAD)</option>
                    <option value="DFW" selected="selected">Dallas (DFW)</option>
                    <option value="SYD">Sydney (SYD)</option>
                    <option value="HKG">Hong Kong (HKG)</option>
                    <option value="ORD">Chicago (ORD)</option>
                  </select>
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Virtual IP</label>
                <div class="rs-controls">
                  <select>
                    <option value="PUBLIC">Accessible on the Public Internet</option>
                    <option value="SERVICENET">On the Private Rackspace Network</option>
                  </select>
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Protocol / Port</label>
                <div class="rs-controls">
                  <select class="rs-input-medium">
                    <option value="DNS_TCP">DNS(TCP)</option>
                    <option value="DNS_UDP">DNS(UDP)</option>
                    <option value="FTP">FTP</option>
                    <option value="HTTP" selected="selected">HTTP</option>
                    <option value="HTTPS">HTTPS</option>
                    <option value="IMAPS">IMAPS</option>
                    <option value="IMAPv2">IMAPv2</option>
                    <option value="IMAPv3">IMAPv3</option>
                    <option value="IMAPv4">IMAPv4</option>
                    <option value="LDAP">LDAP</option>
                    <option value="LDAPS">LDAPS</option>
                    <option value="MYSQL">MySQL</option>
                    <option value="POP3">POP3</option>
                    <option value="POP3S">POP3S</option>
                    <option value="SFTP">SFTP</option>
                    <option value="SMTP">SMTP</option>
                    <option value="TCP">TCP</option>
                    <option value="TCP_CLIENT_FIRST">TCP(Client First)</option>
                    <option value="UDP">UDP</option>
                    <option value="UDP_STREAM">UDP(Stream)</option>
                  </select>
                  &nbsp;/&nbsp;
                  <input type="text" value="80" class="rs-input-mini">
                </div>
              </div>
            </div>
            </div>
          </div>
          <div class="rs-detail-section" id="create-example-select">
            <div class="rs-detail-section-header">
              <div class="rs-detail-section-title">Selection Table</div>
            </div>
            <div class="rs-detail-section-body" id="create-example-tabbed-embedded-table">
              <ul class="rs-tabs">
                <li class="active"><a href="#rackspace-images">Rackspace <span class="rs-quiet">(9)</span></a></li>
                <li><a href="#saved-images">Saved <span class="rs-quiet">(3)</span></a></li>
              </ul>
              <div class="rs-tab-content">
                <div class="rs-tab-pane active" id="rackspace-images">{% include embedded-table-rackspace-images.html %}</div>
                <div class="rs-tab-pane" id="saved-images">{% include embedded-table-saved-images.html %}</div>
              </div>
            </div>
          </div>
          <div class="rs-collapsible-section rs-detail-section expanded" id="create-example-add-related">
            <div class="rs-detail-section-header">
              <div class="rs-caret"></div>
              <div class="rs-detail-section-title">Add Items</div>
            </div>
            <div class="rs-detail-section-body">
              <div class="rs-btn-group">
                <button class="rs-btn rs-popover-source" type="button" data-popover-target="add-items-button" data-popover="add-items-popover" data-popover-position="bottom-right" id="add-items-button">Add Things</button>
              </div>
              <div class="rs-embedded-list-table-wrapper rs-embedded-medium" id="create-example-embedded-table">
                <table class="rs-list-table rs-embedded-list-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>IPv4</th>
                      <th>IPv6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="rs-table-text">Item One</td>
                      <td class="rs-table-text">101.122.11.222</td>
                      <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                    </tr>
                    <tr>
                      <td class="rs-table-text">Item Two</td>
                      <td class="rs-table-text">10.111.22.112</td>
                      <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                    </tr>
                    <tr>
                      <td class="rs-table-text">Item Two</td>
                      <td class="rs-table-text">10.111.22.112</td>
                      <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="rs-collapsible-section rs-detail-section collapsed" id="create-example-collapsed">
            <div class="rs-detail-section-header">
              <div class="rs-caret"></div>
              <div class="rs-detail-section-title">Optional Settings</div>
              <div class="rs-detail-section-subtitle">This section is optional, so it&#39;s collapsed.</div>
            </div>
            <div class="rs-detail-section-body">
              <div class="rs-control-group">
                <label class="rs-control-label">Your Age</label>
                <div class="rs-controls">
                  <input type="text" class="rs-input-medium">
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Favorite Color</label>
                <div class="rs-controls">
                  <select>
                    <option value="Yellow Ochre">Yellow Ochre</option>
                    <option value="Green" selected="Amber">Amber</option>
                    <option value="Sage">Sage</option>
                    <option value="Azule">Azule</option>
                    <option value="Kelly Green">Kelly Green</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="rs-detail-section">
            <div class="rs-detail-section-header rs-btn-group" id="create-example-button-group">
              <button class="rs-btn rs-btn-primary" type="button" id="create-example-primary-button">Create Item</button>
              <a href="javascript:void(0);" class="rs-btn rs-btn-link">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<div class="rs-row">
  <div class="span-12">
    <h4 class="markup-margin">Markup</h4>
    {% highlight html %}<div class="rs-back-link"><a href="#" id="create-example-back-link">&lsaquo; Back to Items List</a></div>
    <div class="rs-main rs-panel">
      <div class="rs-sidebar rs-pull-right">
        <div class="rs-inner">
          <h3>Setting Up This Item</h3>
          <h4>Next steps help text</h4>
          <p>Short blurb about best practices next steps with this item. Try to keep this to 3 lines maximum.</p>
          <p><a target="blank" href="#">More Details About Blurb &raquo;</a></p>
          <hr>
          <h4>Help Me With...</h4>
          <ul>
            <li><a target="blank" href="#">Best Practice Number One</a></li>
            <li><a target="blank" href="#">Best Practice Number Two</a></li>
            <li><a target="blank" href="#">Best Practice Number Three</a></li>
          </ul>
          <p><a target="blank" href="#">Learn More about This Product &raquo;</a></p>
          <hr>
          <h4>What's Next</h4>
          <ul>
            <li><a target="blank" href="#">Top Action Number One</a></li>
            <li><a target="blank" href="#">Top Action Number Two</a></li>
            <li><a target="blank" href="#">Top Action Number Three</a></li>
          </ul>
          <p><a target="blank" href="#">Visit Our Knowledge Center &raquo;</a></p>
        </div>
      </div>
      <div class="rs-content rs-panel">
        <form class="rs-form-create">
          <div class="rs-detail-section">
            <div class="rs-detail-section-header">
              <h2 class="rs-page-title">Create {Product Name}</h3>
              <div class="rs-detail-section-title">{Product Name} Details</div>
            </div>
            <div class="rs-detail-section-body">
              
              <div class="rs-control-group">
                <label class="rs-control-label">Item Name</label>
                <div class="rs-controls">
                  <input type="text" class="rs-input-large" value="item-name-01">
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Region</label>
                <div class="rs-controls">
                  <select>
                    <option value="IAD">Northern Virginia (IAD)</option>
                    <option value="DFW" selected="selected">Dallas (DFW)</option>
                    <option value="SYD">Sydney (SYD)</option>
                    <option value="HKG">Hong Kong (HKG)</option>
                    <option value="ORD">Chicago (ORD)</option>
                  </select>
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Virtual IP</label>
                <div class="rs-controls">
                  <select>
                    <option value="PUBLIC">Accessible on the Public Internet</option>
                    <option value="SERVICENET">On the Private Rackspace Network</option>
                  </select>
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Protocol / Port</label>
                <div class="rs-controls">
                  <select class="rs-input-medium">
                    <option value="DNS_TCP">DNS(TCP)</option>
                    <option value="DNS_UDP">DNS(UDP)</option>
                    <option value="FTP">FTP</option>
                    <option value="HTTP" selected="selected">HTTP</option>
                    <option value="HTTPS">HTTPS</option>
                    <option value="IMAPS">IMAPS</option>
                    <option value="IMAPv2">IMAPv2</option>
                    <option value="IMAPv3">IMAPv3</option>
                    <option value="IMAPv4">IMAPv4</option>
                    <option value="LDAP">LDAP</option>
                    <option value="LDAPS">LDAPS</option>
                    <option value="MYSQL">MySQL</option>
                    <option value="POP3">POP3</option>
                    <option value="POP3S">POP3S</option>
                    <option value="SFTP">SFTP</option>
                    <option value="SMTP">SMTP</option>
                    <option value="TCP">TCP</option>
                    <option value="TCP_CLIENT_FIRST">TCP(Client First)</option>
                    <option value="UDP">UDP</option>
                    <option value="UDP_STREAM">UDP(Stream)</option>
                  </select>
                  &nbsp;/&nbsp;
                  <input type="text" value="80" class="rs-input-mini">
                </div>
              </div>
            
            </div>
          </div>
          <div class="rs-detail-section">
            <div class="rs-detail-section-header">
              <div class="rs-detail-section-title">Select Option</div>
            </div>
            <div class="rs-detail-section-body">
              <ul class="rs-tabs">
                <li class="active"><a href="#rackspace-images">Rackspace <span class="rs-quiet">(9)</span></a></li>
                <li><a href="#saved-images">Saved <span class="rs-quiet">(3)</span></a></li>
              </ul>
              <div class="rs-tab-content">
                <div class="rs-tab-pane active" id="rackspace-images">{% include embedded-table-rackspace-images.html %}</div>
                <div class="rs-tab-pane" id="saved-images">{% include embedded-table-saved-images.html %}</div>
              </div>
            </div>
          </div>
          <div class="rs-collapsible-section rs-detail-section">
            <div class="rs-detail-section-header">
              <div class="rs-caret"></div>
              <div class="rs-detail-section-title">Add Items</div>
            </div>
            <div class="rs-detail-section-body">
              <div class="rs-btn-group">
                <button class="rs-btn rs-popover-source" type="button" data-popover-target="add-items-button" data-popover="add-items-popover" data-popover-position="bottom-right" id="add-items-button">Add Things</button>
              </div>
              <div class="rs-embedded-list-table-wrapper rs-embedded-medium" id="detail-example-embedded-list-table">
                <table class="rs-list-table rs-embedded-list-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>IPv4</th>
                      <th>IPv6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="rs-table-text">Item One</td>
                      <td class="rs-table-text">101.122.11.222</td>
                      <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                    </tr>
                    <tr>
                      <td class="rs-table-text">Item Two</td>
                      <td class="rs-table-text">10.111.22.112</td>
                      <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                    </tr>
                    <tr>
                      <td class="rs-table-text">Item Two</td>
                      <td class="rs-table-text">10.111.22.112</td>
                      <td class="rs-table-text"><span class="rs-quiet">None</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="rs-collapsible-section rs-detail-section collapsed">
            <div class="rs-detail-section-header">
              <div class="rs-caret"></div>
              <div class="rs-detail-section-title">Optional Settings</div>
              <div class="rs-detail-section-subtitle">This section is optional, so it&#39;s collapsed.</div>
            </div>
            <div class="rs-detail-section-body">
              <div class="rs-control-group">
                <label class="rs-control-label">Your Age</label>
                <div class="rs-controls">
                  <input type="text" class="rs-input-medium">
                </div>
              </div>
              <div class="rs-control-group">
                <label class="rs-control-label">Favorite Color</label>
                <div class="rs-controls">
                  <select>
                    <option value="Yellow Ochre">Yellow Ochre</option>
                    <option value="Green" selected="Amber">Amber</option>
                    <option value="Sage">Sage</option>
                    <option value="Azule">Azule</option>
                    <option value="Kelly Green">Kelly Green</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="rs-detail-section">
            <div class="rs-detail-section-header rs-btn-group">
              <button class="rs-btn rs-btn-primary" type="button">Create Item</button>
              <a href="javascript:void(0);" class="rs-btn rs-btn-link">Cancel</a>
            </div>
          </div>
        </form>
      </div>
    </div>{% endhighlight %}
  </div>
</div>
