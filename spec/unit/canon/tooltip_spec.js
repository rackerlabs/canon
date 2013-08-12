require(['canon/core/positioning', 'canon/tooltip'], function (positioning, Tooltip) {
  describe('Tooltip', function () {

    var element, tooltip, content;

    beforeEach(function () {
      jasmine.getFixtures().set('<div class="tooltip-toggle"></div>');

      element = $('.tooltip-toggle');
      element.attr('title', '<h3>foo</h3>');
      element.css({ position: 'absolute', top: 0, left: 0, width: 10, height: 10 });

      jasmine.Clock.useMock();

      tooltip = new Tooltip();
      tooltip.attach(element);

      content = $('.rs-tooltip').css({ position: 'absolute' });
    });

    afterEach(function () {
      tooltip.dispose();
    });

    describe('#attach', function () {
      it('adds tooltip content with element title', function () {
        expect(content.html()).toEqual('<div class="rs-tooltip-inner"><h3>foo</h3></div>');
      });

      it('adds hidden class to tooltip content', function () {
        expect(content).toHaveClass('hidden');
      });

      it('removes title attribute from element', function () {
        expect(element.attr('title')).toBeUndefined();
      });
    });

    describe('#show', function () {
      beforeEach(function () {
        positioning.offset = jasmine.createSpy('offset');

        tooltip.hide();
        tooltip.show();
      });

      it('removes hidden class from tooltip content', function () {
        expect(content).not.toHaveClass('hidden');
      });

      it('adds visible class to tooltip content', function () {
        expect(content).toHaveClass('visible');
      });

      it('sets position of tooltip content', function () {

        var toggleOffset, contentOffset;

        toggleOffset = element.offset();
        contentOffset = content.offset();

        expect(positioning.offset).toHaveBeenCalledWith(
          tooltip.getContent(),
          tooltip.getElement(),
          { top: 0, left: 0 }
        );
      });

      it('is called when mouse hovers over toggle for threshold', function () {
        tooltip.show = jasmine.createSpy('show');

        element.mouseover();
        jasmine.Clock.tick(600);

        expect(tooltip.show).toHaveBeenCalled();
      });

      it('is not called when mouse hover over toggle for less than threshold', function () {
        tooltip.show = jasmine.createSpy('show');

        element.mouseover();
        jasmine.Clock.tick(400);

        expect(tooltip.show).not.toHaveBeenCalled();
      });

      it('is not called when mouse is no longer over toggle after threshold', function () {
        tooltip.show = jasmine.createSpy('show');

        element.mouseover();
        element.mouseout();
        jasmine.Clock.tick(600);

        expect(tooltip.show).not.toHaveBeenCalled();
      });
    });

    describe('#hide', function () {
      beforeEach(function () {
        tooltip.show();
        tooltip.hide();
      });

      it('adds hidden class to tooltip content', function () {
        expect(content).toHaveClass('hidden');
      });

      it('removes visible class from tooltip content', function () {
        expect(content).not.toHaveClass('visible');
      });

      it('is called when mouse leaves toggle after threshold', function () {
        tooltip.hide = jasmine.createSpy('hide');

        element.mouseover();
        element.mouseout();
        jasmine.Clock.tick(600);

        expect(tooltip.hide).toHaveBeenCalled();
      });

      it('is not called when mouse leaves toggle for less than threshold', function () {
        tooltip.hide = jasmine.createSpy('hide');

        element.mouseover();
        element.mouseout();
        jasmine.Clock.tick(400);

        expect(tooltip.hide).not.toHaveBeenCalled();
      });

      it('is not called when mouse returns to toggle within threshold', function () {
        tooltip.hide = jasmine.createSpy('hide');

        element.mouseover();
        element.mouseout();
        element.mouseover();
        jasmine.Clock.tick(600);

        expect(tooltip.hide).not.toHaveBeenCalled();
      });

      it('is not called when mouse moves to tooltip', function () {
        tooltip.hide = jasmine.createSpy('hide');

        element.mouseover();
        element.mouseout();
        content.mouseover();
        jasmine.Clock.tick(600);

        expect(tooltip.hide).not.toHaveBeenCalled();
      });

      it('is called when mouse leaves tooltip', function () {
        tooltip.hide = jasmine.createSpy('hide');

        content.mouseover();
        content.mouseout();
        jasmine.Clock.tick(600);

        expect(tooltip.hide).toHaveBeenCalled();
      });

      it('is not called when mouse leaves for less than threshold', function () {
        tooltip.hide = jasmine.createSpy('hide');

        content.mouseover();
        content.mouseout();
        jasmine.Clock.tick(400);

        expect(tooltip.hide).not.toHaveBeenCalled();
      });

      it('is not called when mouse returns to toggle within threshold', function () {
        tooltip.hide = jasmine.createSpy('hide');

        content.mouseover();
        content.mouseout();
        content.mouseover();
        jasmine.Clock.tick(600);

        expect(tooltip.hide).not.toHaveBeenCalled();
      });

      it('is not called when mouse moves to tooltip', function () {
        tooltip.hide = jasmine.createSpy('hide');

        content.mouseover();
        content.mouseout();
        element.mouseover();
        jasmine.Clock.tick(600);

        expect(tooltip.hide).not.toHaveBeenCalled();
      });
    });

    describe('#dispose', function () {
      it('removes tooltip content from the body', function () {
        tooltip.dispose();

        expect($('.rs-tooltip').length).toBe(0);
      });

      it('discards tooltip content DOM reference', function () {
        tooltip.dispose();

        expect(tooltip.getContent()).toBeNull(null);
      });

      it('restores title attribute', function () {
        tooltip.dispose();

        expect(element.attr('title')).toEqual('<h3>foo</h3>');
      });

      it('removes event listeners from toggle', function () {

        var element;

        element = tooltip.getElement();

        tooltip.dispose();

        expect(element).not.toHandle('mouseover.tooltip');
        expect(element).not.toHandle('mouseout.tooltip');
      });

      it('removes event listeners from content', function () {

        var content;

        content = tooltip.getContent();

        tooltip.dispose();

        expect(content).not.toHandle('mouseover.tooltip');
        expect(content).not.toHandle('mouseout.tooltip');
      });
    });
  });
});
