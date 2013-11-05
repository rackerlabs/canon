## v1.3.1 (November 5, 2013)
- Support disabled states in navigation.
- Adjust hover and active state for primary navigation items.
- Fix bug where dropdown menu categories wrapped incorrectly.
- Fix bug where table overlays caused incorrect height for embedded tables.
- Break dependence of the navigation and footer on specific markup. Use of the
  navigation and footer styles without the appropriate class names is DEPRECATED
  and will be removed in a future version.
- Update footer markup to be consistent with navigation. Use of the old footer
  styles is DEPRECATED and will be removed in a future version.

## v1.3.0 (October 30, 2013)
- Add delete button.
- Add delete cell to list table.
- Add embedded list pattern.
- Add back link for use in layouts.
- Reduce width of left sidebar.
- Minor margin tweaks to buttons and tables.
- Minor style tweaks to the utility dropdown menu.
- Improve focus and disabled states for inputs.
- Update select to match other input styles.
- Remove Ruby remnants of old build system.

## v1.2.0 (September 18, 2013)
- Remove bottom margin from H4-H6 headers.
- Fix bug where sidebar caused float issues.
- Fix bug where menu caused footer issues.
- Add list table.

## v1.1.0 (September 3, 2013)
- Add tabs
- Add popover.
- Add edit button.
- Add progress bars.
- Add detail section.
- Add status indicators.
- Properly align static text in a form through .rs-controls-static.
- Add caret to utility nav dropdowns.
- Add hover state for primary nav dropdowns.
- Fix bug where overflowing content (popovers, menu) was not visible.
- Replace build system with Grunt.
- Replace test runner with Karma.

## v1.0.0 (August 13, 2013)
- Minor build system updates.
- Minor spacing adjustments for menus.
- Remove tooltip and menu animations.
- Rename rs-dropdown-toggle to rs-caret.
- Added active state to the utility navigation.
- Take advantage of margin collapsing in some layout classes.

## v1.0.0-rc.3 (July 17, 2013)
- Updated default external link icon.
- Add .btn-group for horizontal groups of buttons.
- Remove extra padding from link buttons.
- Remove globally available icon classes.
- Remove colons from labels on create forms.
- Fix tooltip positioning when window has scrollbars.
- Fall back to Helvetica when web fonts are not supported.

## v1.0.0-rc.2 (July 12, 2013)
- Miscellaneous
  - Replace normalize-css with normalize-scss
  - Add support for HTML in tooltips
  - Fix left-alignment on first footer link
  - Fix issue with tooltips drawn outside of the screen
  - Fix media query issue for rs-container and update padding
- Avoid Bootstrap Collisions
  - Fix hover styles on links and buttons
  - Fix label, radio and checkbox positioning

## v1.0.0-rc.1 (June 26, 2013)
- Use normalize.css v2.1.2 instead of a reset stylesheet.
- Prefix all class names for compatibility with other CSS frameworks.
- Remove pre-release features including:
  - Content Section
  - List Table
  - Popover
  - Progress Bar
  - Status Labels
  - Tabs
- Layout
  - Replace Susy with custom grid.
  - Tightened up navigation padding.
  - Fixed the width of the sidebar in responsive layouts.
- Forms
  - Add styles for create page forms.
  - Fix bug in form label alignment.
  - Fix bug where long labels would wrap incorrectly.
- Miscellaneous
  - Add rs-page-title for red page headers.
  - Update header styles to use correct font face and sizes.
  - Removed bold weight from DT tag.
  - Updated color of inline help text.
  - Updated color of tooltip shadow and border.
  - Updated color of text inputs.

## v0.5.0 (June 14, 2013)
- Add cog button.
- Add action button.
- Update inline help text color for better readability.
- Update primary navigation text for better readability.
- Decrease margin between content section header and body.

## v0.4.2 (June 6, 2013)
- Reorder z-index planes for absolutely-positioned components.

## v0.4.1 (June 5, 2013)
- Fix bug where buttons inside list tables were stretched to fill the cell.
- Correctly set a minimum height on TEXTAREAs.

## v0.4.0 (June 4, 2013)
- Fix bug with button background colors in IE9.
- Update base styles to include bold and italic text.
- Update headers to use Source Sans Pro.
- Update body font to Helvetica Neue.
- Add styles for tabs.
- Add styles for popovers.
- Add styles for progress bars.
- Add styles for primary menus, utility menus, and action menus.
- Add Javascript component for dropdown menus.
- Add Javascript component for tooltips.
- Replace Ender with jQuery 1.10.x.
- Modularize the layout components.
- Default to fixed width grid and layout.
- Change navigation to not use fixed positioning by default.

## v0.3.0 (April 3, 2013)
- Added styles for sidebar panels.

## v0.2.0 (April 2, 2013)
- Add styles for tooltips.
- Fix footer wrapping issue in Chrome 26.

## v0.1.1 (April 1, 2013)
- Stop leaking Ender into the global namespace.

## v0.1.0 (March 26, 2013)
- Initial Release
