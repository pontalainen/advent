"use strict";

var _data = _interopRequireDefault(require("./data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function line(hand, bid) {
  return {
    hand: hand,
    bid: bid
  };
}
var objectData = _data["default"].map(function (element) {
  return line(element.slice(0, 5), element.slice(6, 9));
});
console.log(objectData);