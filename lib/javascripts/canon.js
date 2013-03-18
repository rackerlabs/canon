define('canon', ['canon/dom', 'canon/events'], function (dom, events) {

  var canon = {};

  canon.dom = dom;
  canon.events = events;

  return canon;
});
