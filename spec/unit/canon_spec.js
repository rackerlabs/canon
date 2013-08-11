define(['canon'], function (canon) {
  describe('canon', function () {
    it('defines the canon namespace', function () {
      expect(canon).toBeTruthy();
    });

    it('defines Tooltip', function () {
      expect(canon.Tooltip).toBeTruthy();
    });
  });
});
