// var util = require('util');

class MalformedPacket extends Error {
  constructor() {
    super ()
    Error.call(this);
    this.message = util.format.apply(null, arguments);
  }

}
// function MalformedPacket(/*message*/) {
//   Error.call(this);
//   this.message = util.format.apply(null, arguments);
// }

// util.inherits(MalformedPacket, Error);

module.exports = MalformedPacket;
