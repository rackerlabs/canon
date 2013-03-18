define(['canon', 'canon/dom', 'canon/events'], function (canon, dom, events) {
  describe('canon', function () {
    it('defines the canon namespace', function () {
      canon.should.exist;
    });

    it('adds the dom helper', function () {
      canon.dom.should.equal(dom);
    });

    it('adds the event helper', function () {
      canon.events.should.equal(events);
    });
  });
});
