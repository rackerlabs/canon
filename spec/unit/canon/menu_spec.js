require(['canon/menu'], function (Menu) {
  describe('Menu', function () {

    var element, menu;

    beforeEach(function () {
      fixture.innerHTML = '<div class="rs-dropdown">' +
        '<div class="rs-dropdown-toggle">Toggle</div>' +
        '<div class="rs-dropdown-menu">' +
        '<span class="rs-dropdown-category">Category</span>' +
        '<a href="#">Link</a>' +
        '</div>' +
        '</div>';

      element = $('.rs-dropdown');

      menu = new Menu();
    });

    afterEach(function () {
      menu.dispose();
    });

    describe('#attach', function () {
      it('succeeds when element has rs-dropdown', function () {
        (function () { menu.attach(element); }).should.not.throws();
      });

      it('fails when element has other class', function () {
        element.removeClass('rs-dropdown');
        element.addClass('other-element');

        (function () { menu.attach(element); }).should.throws('Component must be attached to element with "rs-dropdown".');
      });

      it('adds hidden class to dropdown menu', function () {
        menu.attach(element);

        $('.rs-dropdown-menu').hasClass('hidden').should.equal(true);
      });
    });

    describe('#show', function () {
      beforeEach(function () {
        menu.attach(element);
        menu.hide();
        menu.show();
      });

      it('removes hidden class from dropdown menu', function () {
        $('.rs-dropdown-menu').hasClass('hidden').should.equal(false);
      });

      it('adds visible class to dropdown menu', function () {
        $('.rs-dropdown-menu').hasClass('visible').should.equal(true);
      });
    });

    describe('#hide', function () {
      beforeEach(function () {
        menu.attach(element);
        menu.show();
        menu.hide();
      });

      it('adds hidden class to dropdown menu', function () {
        $('.rs-dropdown-menu').hasClass('hidden').should.equal(true);
      });

      it('removes visible class from dropdown menu', function () {
        $('.rs-dropdown-menu').hasClass('visible').should.equal(false);
      });

      it('is called when click occurs outside of dropdown and menu is visible', function () {
        menu.show();
        menu.hide = sinon.spy();

        $(document).click();

        menu.hide.should.have.been.called;
      });

      it('is not called when click occurs outside of dropdown and menu is hidden', function () {
        menu.hide();
        menu.hide = sinon.spy();

        $(document).click();

        menu.hide.should.not.have.been.called;
      });

      it('is called when menu item is clicked', function () {
        menu.hide = sinon.spy();

        $('a', element).click();

        menu.hide.should.have.been.called;
      });

      it('is not called when category is clicked', function () {
        menu.hide = sinon.spy();

        $('.rs-dropdown-category', element).click();

        menu.hide.should.not.have.been.called;
      });
    });

    describe('#toggle', function () {
      beforeEach(function () {
        menu.attach(element);
      });

      it('calls show when menu is hidden', function () {
        menu.show = sinon.spy();

        menu.hide();
        menu.toggle();

        menu.show.should.have.been.called;
      });

      it('calls hide when menu is visible', function () {
        menu.hide = sinon.spy();

        menu.show();
        menu.toggle();

        menu.hide.should.have.been.called;
      });

      it('is called when dropdown toggle is clicked', function () {
        menu.toggle = sinon.spy();

        $('.rs-dropdown-toggle').click();

        menu.toggle.should.have.been.called;
      });
    });

    describe('#dispose', function () {
      beforeEach(function () {
        menu.attach(element);
      });

      it('removes event listeners from element', function () {

        var element;

        element = menu.getElement();
        element.off = sinon.spy();

        menu.dispose();

        element.off.should.have.been.calledWith('click.menu');
      });

      it('removes event listeners from document', function () {
        menu.hide = sinon.spy();

        menu.dispose();
        $(document).click();

        menu.hide.should.not.have.been.called;
      });
    });
  });
});
