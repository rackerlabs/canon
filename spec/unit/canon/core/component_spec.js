define(['canon/core/component'], function (Component) {
  describe('Component', function () {

    var element, component;

    beforeEach(function () {
      jasmine.getFixtures().set('<div class="component"></div>');

      element = $('.component');
      component = new Component();
      component.attach(element);
    });

    afterEach(function () {
      component.dispose();
    });

    describe('#attach', function () {
      it('fails when already attached', function () {
        expect(function () { component.attach(element); }).toThrow('Component is already attached.');
      });
    });

    describe('#dispose', function () {
      it('discards DOM reference', function () {
        component.dispose();

        expect(component.getElement()).toEqual(null);
      });
    });
  });
});
