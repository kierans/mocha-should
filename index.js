"use strict";

(function() {
  function should(message, test) {
    it("should " + message, test);
  }

  if (typeof module !== "undefined") {
    module.exports = should;

    // might as well do this since Mocha defines `global.it`
    global.should = should;
  }
  else {
    window.should = should;
  }
})();
