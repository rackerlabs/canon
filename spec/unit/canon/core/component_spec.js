define(['canon/core/component'], function (Component) {
  describe('Component', function () {

    var element, component;

    beforeEach(function () {
      fixture.innerHTML = '<div class="component"></div>';

      element = $('.component');
      component = new Component();
      component.attach(element);
    });

    afterEach(function () {
      component.dispose();
    });

    describe('#attach', function () {
      it('fails when already attached', function () {
        (function () { component.attach(element); }).should.throws('Component is already attached.');
      });
    });

    describe('#dispose', function () {
      it('discards DOM reference', function () {
        component.dispose();

        expect(component.getElement()).to.equal(null);
      });
    });
  });
});
