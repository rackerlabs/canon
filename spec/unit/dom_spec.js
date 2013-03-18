define(['qwery', 'canon/dom'], function (qwery, dom) {
  describe('dom', function () {
    describe('#query', function () {

      var elements;

      beforeEach(function () {
        elements = dom.query('body');
      });

      it('returns all elements in an array', function () {
        elements[0].should.equal(document.body);
      });

      it('adds DOM helper methods to prototype', function () {
        elements.get.should.be.a.function;
      });
    });
  });
});
