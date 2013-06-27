require(['canon/tooltip'], function (Tooltip) {
  describe('Tooltip', function () {

    var element, clock, tooltip, content;

    beforeEach(function () {
      fixture.innerHTML = '<div class="tooltip-toggle"></div>';

      element = $('.tooltip-toggle');
      element.attr('title', '<h3>foo</h3>');
      element.css({ position: 'absolute', top: 0, left: 0, width: 10, height: 10 });

      clock = sinon.useFakeTimers();

      tooltip = new Tooltip();
      tooltip.attach(element);

      content = $('.rs-tooltip').css({ position: 'absolute' });
    });

    afterEach(function () {
      clock.restore();
      tooltip.dispose();
    });

    describe('#attach', function () {
      it('adds tooltip content with element title', function () {
        content.html().should.equal('<div class="rs-tooltip-inner"><h3>foo</h3></div>');
      });

      it('adds hidden class to tooltip content', function () {
        content.hasClass('hidden').should.equal(true);
      });

      it('removes title attribute from element', function () {
        expect(element.attr('title')).to.equal(undefined);
      });
    });

    describe('#show', function () {
      beforeEach(function () {
        tooltip.hide();
        tooltip.show();
      });

      it('removes hidden class from tooltip content', function () {
        content.hasClass('hidden').should.equal(false);
      });

      it('adds visible class to tooltip content', function () {
        content.hasClass('visible').should.equal(true);
      });

      it('sets position of tooltip content', function () {

        var toggleOffset, contentOffset;

        toggleOffset = element.offset();
        contentOffset = content.offset();

        contentOffset.top.should.equal(toggleOffset.top + element.height());
        contentOffset.left.should.equal(toggleOffset.left + element.width());
      });

      it('is called when mouse hovers over toggle for threshold', function () {
        tooltip.show = sinon.spy();

        element.mouseover();
        clock.tick(600);

        tooltip.show.should.have.been.called;
      });

      it('is not called when mouse hover over toggle for less than threshold', function () {
        tooltip.show = sinon.spy();

        element.mouseover();
        clock.tick(400);

        tooltip.show.should.not.have.been.called;
      });

      it('is not called when mouse is no longer over toggle after threshold', function () {
        tooltip.show = sinon.spy();

        element.mouseover();
        element.mouseout();
        clock.tick(600);

        tooltip.show.should.not.have.been.called;
      });
    });

    describe('#hide', function () {
      beforeEach(function () {
        tooltip.show();
        tooltip.hide();
      });

      it('adds hidden class to tooltip content', function () {
        content.hasClass('hidden').should.equal(true);
      });

      it('removes visible class from tooltip content', function () {
        content.hasClass('visible').should.equal(false);
      });

      it('is called when mouse leaves toggle after threshold', function () {
        tooltip.hide = sinon.spy();

        element.mouseover();
        element.mouseout();
        clock.tick(600);

        tooltip.hide.should.have.been.called;
      });

      it('is not called when mouse leaves toggle for less than threshold', function () {
        tooltip.hide = sinon.spy();

        element.mouseover();
        element.mouseout();
        clock.tick(400);

        tooltip.hide.should.not.have.been.called;
      });

      it('is not called when mouse returns to toggle within threshold', function () {
        tooltip.hide = sinon.spy();

        element.mouseover();
        element.mouseout();
        element.mouseover();
        clock.tick(600);

        tooltip.hide.should.not.have.been.called;
      });

      it('is not called when mouse moves to tooltip', function () {
        tooltip.hide = sinon.spy();

        element.mouseover();
        element.mouseout();
        content.mouseover();
        clock.tick(600);

        tooltip.hide.should.not.have.been.called;
      });

      it('is called when mouse leaves tooltip', function () {
        tooltip.hide = sinon.spy();

        content.mouseover();
        content.mouseout();
        clock.tick(600);

        tooltip.hide.should.have.been.called;
      });

      it('is not called when mouse leaves for less than threshold', function () {
        tooltip.hide = sinon.spy();

        content.mouseover();
        content.mouseout();
        clock.tick(400);

        tooltip.hide.should.not.have.been.called;
      });

      it('is not called when mouse returns to toggle within threshold', function () {
        tooltip.hide = sinon.spy();

        content.mouseover();
        content.mouseout();
        content.mouseover();
        clock.tick(600);

        tooltip.hide.should.not.have.been.called;
      });

      it('is not called when mouse moves to tooltip', function () {
        tooltip.hide = sinon.spy();

        content.mouseover();
        content.mouseout();
        element.mouseover();
        clock.tick(600);

        tooltip.hide.should.not.have.been.called;
      });
    });

    describe('#dispose', function () {
      it('removes tooltip content from the body', function () {
        tooltip.dispose();
        $('.rs-tooltip').length.should.equal(0);
      });

      it('discards tooltip content DOM reference', function () {
        tooltip.dispose();
        expect(tooltip.getContent()).to.equal(null);
      });

      it('restores title attribute', function () {
        tooltip.dispose();
        element.attr('title').should.equal('<h3>foo</h3>');
      });

      it('removes event listeners from toggle', function () {

        var element;

        element = tooltip.getElement();
        element.off = sinon.spy();

        tooltip.dispose();

        element.off.should.have.been.calledWith('mouseover.tooltip');
        element.off.should.have.been.calledWith('mouseout.tooltip');
      });

      it('removes event listeners from content', function () {

        var content;

        content = tooltip.getContent();
        content.off = sinon.spy();

        tooltip.dispose();

        content.off.should.have.been.calledWith('mouseover.tooltip');
        content.off.should.have.been.calledWith('mouseout.tooltip');
      });
    });
  });
});
