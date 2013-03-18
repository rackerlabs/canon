define(['canon/dom', 'canon/events', 'canon/views/content_section'], function (dom, events, ContentSection) {
  describe('ContentSection', function () {

    var element, section;

    beforeEach(function () {
      fixture.innerHTML = '<div class="collapsible-section">' +
        '<div class="content-section-header"></div>' +
        '</div>';

      element = dom.query('.collapsible-section');
      section = new ContentSection();
    });

    afterEach(function () {
      section.dispose();
    });

    describe('#attach', function () {
      it('succeeds when element has content-section', function () {
        (function () { section.attach(element); }).should.not.throw();
      });

      it('fails when element has other class', function () {
        element.removeClass('collapsible-section');
        element.addClass('invalid');

        (function () { section.attach(element); }).should.throw('Component must be attached to element with "collapsible-section".');
      });

      it('fails when already attached', function () {
        section.attach(element);

        (function () { section.attach(element); }).should.throw('Component is already attached.');
      });
    });

    describe('#collapse', function () {
      it('adds collapsed', function () {
        section.attach(element);
        section.collapse();

        element.hasClass('collapsed').should.be.true;
      });
    });

    describe('#expand', function () {
      it('removes collapsed', function () {
        section.attach(element);
        section.collapse();
        section.expand();

        element.hasClass('collapsed').should.be.false;
      });
    });

    describe('#toggle', function () {
      beforeEach(function () {
        section.attach(element);
      });

      it('adds collapsed when it is expanded', function () {
        section.expand();
        section.toggle();

        element.hasClass('collapsed').should.be.true;
      });

      it('removes collapsed when it is collapsed', function () {
        section.collapse();
        section.toggle();

        element.hasClass('collapsed').should.be.false;
      });

      it('is called when header is clicked', function () {

        var header;

        section.toggle = sinon.spy();

        header = dom.query('.content-section-header', element)[0];
        events.fire(header, 'click');

        section.toggle.should.have.been.called;
      });
    });

    describe('#dispose', function () {
      beforeEach(function () {
        section.attach(element);
      });

      it('discards DOM reference', function () {
        section.dispose();

        expect(section.getElement()).to.be.null;
      });

      it('removes event listeners', function () {
        events.off = sinon.spy();

        section.dispose();

        events.off.should.have.been.calledWith(element[0], 'click.content-section');
      });
    });
  });
});
