define('canon', ['canon/content_section', 'canon/menu', 'canon/tooltip'], function (ContentSection, Menu, Tooltip) {

  var canon = {};

  canon.ContentSection = ContentSection;
  canon.Menu = Menu;
  canon.Tooltip = Tooltip;

  return canon;
});
