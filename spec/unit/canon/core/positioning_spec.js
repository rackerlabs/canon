define(['canon/core/positioning'], function (positioning) {
  describe('offset', function () {

    var element, target, position;

    beforeEach(function () {
      element = $('<div>element</div>');
      element.css({ width: 50, height: 50 });

      target = $('<div>target</div>');
      target.css({ width: 50, height: 50 });

      $(fixture).append(element).append(target);

      position = { top: 15, left: 15 };
    });

    it('positions relative to bottom-right corner when element is on screen', function () {
      positioning.offset(element, target, position);

      element.offset().top.should.equal(target.offset().top + target.height() + 15);
      element.offset().left.should.equal(target.offset().left + target.width() + 15);
    });

    it('positions relative to bottom-left corner when element runs off right side of screen', function () {
      target.css({ position: 'absolute', right: '0' });

      positioning.offset(element, target, position);

      element.offset().top.should.equal(target.offset().top + target.height() + 15);
      element.offset().left.should.equal(target.offset().left - element.width() - 15);
    });

    it('positions relative to the top-right corner when element run off bottom of screen', function () {
      target.css({ position: 'absolute', bottom: '0' });

      positioning.offset(element, target, position);

      element.offset().top.should.equal(target.offset().top - element.height() - 15);
      element.offset().left.should.equal(target.offset().left + target.width() + 15);
    });

    it('positions relative to the top-left corner when element run off bottom and right of screen', function () {
      target.css({ position: 'absolute', right: '0', bottom: '0' });

      positioning.offset(element, target, position);

      element.offset().top.should.equal(target.offset().top - element.height() - 15);
      element.offset().left.should.equal(target.offset().left - element.width() - 15);
    });
  });
});
