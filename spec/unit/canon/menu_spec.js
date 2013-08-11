require(['canon/menu'], function (Menu) {
  describe('Menu', function () {

    var element, menu;

    beforeEach(function () {
      jasmine.getFixtures().set('<div class="rs-dropdown">' +
        '<div class="rs-dropdown-toggle">Toggle</div>' +
        '<div class="rs-dropdown-menu">' +
        '<span class="rs-dropdown-category">Category</span>' +
        '<a href="#">Link</a>' +
        '</div>' +
        '</div>');

      element = $('.rs-dropdown');

      menu = new Menu();
    });

    afterEach(function () {
      menu.dispose();
    });

    describe('#attach', function () {
      it('succeeds when element has rs-dropdown', function () {
        expect(function () { menu.attach(element); }).not.toThrow();
      });

      it('fails when element has other class', function () {
        element.removeClass('rs-dropdown');
        element.addClass('other-element');

        expect(function () { menu.attach(element); }).toThrow('Component must be attached to element with "rs-dropdown".');
      });

      it('adds hidden class to dropdown menu', function () {
        menu.attach(element);

        expect($('.rs-dropdown-menu')).toHaveClass('hidden');
      });
    });

    describe('#show', function () {
      beforeEach(function () {
        menu.attach(element);
        menu.hide();
        menu.show();
      });

      it('removes hidden class from dropdown menu', function () {
        expect($('.rs-dropdown-menu')).not.toHaveClass('hidden');
      });

      it('adds visible class to dropdown menu', function () {
        expect($('.rs-dropdown-menu')).toHaveClass('visible');
      });
    });

    describe('#hide', function () {
      beforeEach(function () {
        menu.attach(element);
        menu.show();
        menu.hide();
      });

      it('adds hidden class to dropdown menu', function () {
        expect($('.rs-dropdown-menu')).toHaveClass('hidden');
      });

      it('removes visible class from dropdown menu', function () {
        expect($('.rs-dropdown-menu')).not.toHaveClass('visible');
      });

      it('is called when click occurs outside of dropdown and menu is visible', function () {
        menu.show();
        menu.hide = jasmine.createSpy('hide');

        $(document).click();

        expect(menu.hide).toHaveBeenCalled();
      });

      it('is called when menu item is clicked', function () {
        menu.hide = jasmine.createSpy('hide');

        $('a', element).click();

        expect(menu.hide).toHaveBeenCalled();
      });

      it('is not called when category is clicked', function () {
        menu.hide = jasmine.createSpy('hide');

        $('.rs-dropdown-category', element).click();

        expect(menu.hide).not.toHaveBeenCalled();
      });
    });

    describe('#toggle', function () {
      beforeEach(function () {
        menu.attach(element);
      });

      it('calls show when menu is hidden', function () {
        menu.show = jasmine.createSpy('show');

        menu.hide();
        menu.toggle();

        expect(menu.show).toHaveBeenCalled();
      });

      it('calls hide when menu is visible', function () {
        menu.hide = jasmine.createSpy('hide');

        menu.show();
        menu.toggle();

        expect(menu.hide).toHaveBeenCalled();
      });

      it('is called when dropdown toggle is clicked', function () {
        menu.toggle = jasmine.createSpy('toggle');

        $('.rs-dropdown-toggle').click();

        expect(menu.toggle).toHaveBeenCalled();
      });
    });

    describe('#dispose', function () {
      beforeEach(function () {
        menu.attach(element);
      });

      it('removes event listeners from element', function () {

        var element;

        element = menu.getElement();

        menu.dispose();

        expect(element).not.toHandle('click.menu');
      });

      it('removes event listeners from document', function () {
        menu.hide = jasmine.createSpy('hide');

        menu.dispose();
        $(document).click();

        expect(menu.hide).not.toHaveBeenCalled();
      });
    });
  });
});
