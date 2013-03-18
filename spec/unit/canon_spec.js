define(['canon'], function (canon) {
  describe('canon', function () {
    it('defines the canon namespace', function () {
      canon.should.exist;
    });

    it('defines ContentSection', function () {
      canon.ContentSection.should.exist;
    });
  });
});
