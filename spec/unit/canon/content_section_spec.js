define(['canon/content_section'], function (ContentSection) {
  describe('ContentSection', function () {

    var element, section;

    beforeEach(function () {
      fixture.innerHTML = '<div class="collapsible-section">' +
        '<div class="content-section-header"></div>' +
        '</div>';

      element = $('.collapsible-section');
      section = new ContentSection();
    });

    afterEach(function () {
      section.dispose();
    });

    describe('#attach', function () {
      it('succeeds when element has content-section', function () {
        (function () { section.attach(element); }).should.not.throws();
      });

      it('fails when element has other class', function () {
        element.removeClass('collapsible-section');
        element.addClass('invalid');

        (function () { section.attach(element); }).should.throws('Component must be attached to element with "collapsible-section".');
      });

      it('sets section to loading state', function () {
        section.attach(element);

        element.hasClass('loading').should.equal(true);
      });
    });

    describe('#collapse', function () {
      beforeEach(function () {
        element.addClass('loading');
        element.addClass('expanded');

        section.attach(element);
        section.collapse();
      });

      it('adds collapsed', function () {
        element.hasClass('collapsed').should.equal(true);
      });

      it('removes expanded', function () {
        element.hasClass('expanded').should.equal(false);
      });

      it('removes loading', function () {
        element.hasClass('loading').should.equal(false);
      });
    });

    describe('#expand', function () {
      beforeEach(function () {
        element.addClass('loading');
        element.addClass('collapsed');

        section.attach(element);
        section.expand();
      });

      it('adds expanded', function () {
        element.hasClass('expanded').should.equal(true);
      });

      it('removes collapsed', function () {
        element.hasClass('collapsed').should.equal(false);
      });

      it('removes loading', function () {
        element.hasClass('loading').should.equal(false);
      });
    });

    describe('#toggle', function () {
      beforeEach(function () {
        section.attach(element);
      });

      it('calls collapse when it is expanded', function () {
        section.collapse = sinon.spy();

        section.expand();
        section.toggle();

        section.collapse.should.have.been.called;
      });

      it('calls expand when it is collapsed', function () {
        section.expand = sinon.spy();

        section.collapse();
        section.toggle();

        section.expand.should.have.been.called;
      });

      it('is called when header is clicked', function () {
        element.removeClass('loading');
        section.toggle = sinon.spy();

        $('.content-section-header', element).click();

        section.toggle.should.have.been.called;
      });

      it('does not call toggle if loading', function () {
        element.addClass('loading');
        section.toggle = sinon.spy();

        $('.content-section-header', element).click();

        section.toggle.should.not.have.been.called;
      });
    });

    describe('#dispose', function () {
      beforeEach(function () {
        section.attach(element);
      });

      it('removes event listeners', function () {

        var element;

        element = section.getElement();
        element.off = sinon.spy();

        section.dispose();

        element.off.should.have.been.calledWith('click.content-section');
      });
    });
  });
});
