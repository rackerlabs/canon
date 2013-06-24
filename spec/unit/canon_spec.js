define(['canon'], function (canon) {
  describe('canon', function () {
    it('defines the canon namespace', function () {
      canon.should.exist;
    });

    it('defines Tooltip', function () {
      canon.Tooltip.should.exist;
    });
  });
});
