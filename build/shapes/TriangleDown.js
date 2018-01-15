'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ShapeTriangleDown;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShapeTriangleDown(_ref) {
  var fill = _ref.fill,
      width = _ref.width,
      height = _ref.height,
      style = _ref.style;

  if (typeof width === 'string') width = 0;
  if (typeof height === 'string') height = 0;
  var size = Math.max(width, height);
  return _react2.default.createElement(
    'svg',
    { width: width, height: size, x: '0px', y: '0px',
      viewBox: '0 0 490 490' },
    _react2.default.createElement('path', { d: 'M0,15.541h490L244.991,474.459L0,15.541z', fill: fill })
  );
}