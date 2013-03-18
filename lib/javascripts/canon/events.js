define('canon/events', ['bean', 'qwery'], function (bean, qwery) {
  bean.setSelectorEngine(qwery);

  function on() {
    bean.on.apply(this, arguments);
  }

  function once() {
    bean.one.apply(this, arguments);
  }

  function off() {
    bean.off.apply(this, arguments);
  }

  function fire() {
    bean.fire.apply(this, arguments);
  }

  return {
    on: on,
    once: once,
    off: off,
    fire: fire
  };
});
