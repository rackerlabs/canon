  var canon = require('canon');

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = canon;
  }
  else if (globalDefine) {
    (function (define) {
      define(function () { return canon; });
    }(globalDefine));
  }
  else {
    global['canon'] = canon;
  }
}(this));
