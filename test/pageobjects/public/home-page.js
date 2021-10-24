"use strict";

class HomePage {
  get $promotedCarName() { return $("h1=Model S!"); }
}

module.exports = new HomePage();