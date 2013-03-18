define(['bean', 'canon/events'], function (bean, events) {
  describe('event', function () {

    var body;

    beforeEach(function () {
      body = document.body;
    });

    it('#on listens to multiple events', function () {

      var counter = 0;

      events.on(body, 'myevent', function () {
        counter += 1;
      });

      bean.fire(body, 'myevent');
      bean.fire(body, 'myevent');

      counter.should.equal(2);
    });

    it('#once listens to a single event', function () {

      var counter = 0;

      events.once(body, 'myevent', function () {
        counter += 1;
      });

      bean.fire(body, 'myevent');
      bean.fire(body, 'myevent');

      counter.should.equal(1);
    });

    it('#off removes an event handler', function () {

      var counter = 0;

      bean.on(body, 'myevent', function () {
        counter += 1;
      });

      events.off(body, 'myevent');
      bean.fire(body, 'myevent');

      counter.should.equal(0);
    });

    it('#fire triggers an event', function () {

      var counter = 0;

      bean.on(body, 'myevent', function () {
        counter += 1;
      });

      events.fire(body, 'myevent');

      counter.should.equal(1);
    });
  });
});
