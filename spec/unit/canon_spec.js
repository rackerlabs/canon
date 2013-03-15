define('canon_spec', ['canon'], function (canon) {
  describe('canon', function () {
    it('defines the canon namespace', function () {
      canon.should.exist;
    });
  });
});
