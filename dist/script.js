"use strict";

var _data = _interopRequireDefault(require("./data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function line(hand, bid) {
  return {
    hand: hand,
    bid: bid
  };
}
console.log(_data["default"], 'data');
// const objectData = data.map((element) => line(element.slice(0, 5), element.slice(6, element.length)));
// console.log(objectData);