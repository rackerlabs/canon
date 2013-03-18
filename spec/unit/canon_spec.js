define(['canon', 'canon/dom'], function (canon, dom) {
  describe('canon', function () {
    it('defines the canon namespace', function () {
      canon.should.exist;
    });

    it('adds the dom helper', function () {
      canon.dom.should.equal(dom);
    });
  });
});
