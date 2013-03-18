define('canon/dom', ['qwery', 'bonzo'], function (qwery, bonzo) {
  bonzo.setQueryEngine(qwery);

  function query(selector, context) {
    return bonzo(qwery(selector, context));
  }

  return { query: query };
});
