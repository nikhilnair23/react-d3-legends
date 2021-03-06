'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = renderShape;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Rect = require('../shapes/Rect');

var _Rect2 = _interopRequireDefault(_Rect);

var _Circle = require('../shapes/Circle');

var _Circle2 = _interopRequireDefault(_Circle);

var _TriangleUp = require('../shapes/TriangleUp');

var _TriangleUp2 = _interopRequireDefault(_TriangleUp);

var _TriangleDown = require('../shapes/TriangleDown');

var _TriangleDown2 = _interopRequireDefault(_TriangleDown);

var _Diamond = require('../shapes/Diamond');

var _Diamond2 = _interopRequireDefault(_Diamond);

var _cross = require('../shapes/cross');

var _cross2 = _interopRequireDefault(_cross);

var _valueOrIdentity = require('./valueOrIdentity');

var _valueOrIdentity2 = _interopRequireDefault(_valueOrIdentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderShape(_ref) {
  var _ref$shape = _ref.shape,
      shape = _ref$shape === undefined ? 'rect' : _ref$shape,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? _valueOrIdentity2.default : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? _valueOrIdentity2.default : _ref$size,
      width = _ref.width,
      height = _ref.height,
      label = _ref.label,
      _ref$shapeStyle = _ref.shapeStyle,
      shapeStyle = _ref$shapeStyle === undefined ? function (x) {
    return undefined;
  } : _ref$shapeStyle;

  var props = {
    width: width,
    height: height,
    label: label,
    fill: fill(_extends({}, label)),
    size: size(_extends({}, label)),
    style: shapeStyle(_extends({}, label))
  };
  if (typeof shape === 'string') {
    if (shape === 'rect' || shape === "square") {
      return _react2.default.createElement(_Rect2.default, props);
    } else if (shape === "triangle-up") {
      return _react2.default.createElement(_TriangleUp2.default, props);
    } else if (shape === "triangle-down") {
      return _react2.default.createElement(_TriangleDown2.default, props);
    } else if (shape === "diamond") {
      return _react2.default.createElement(_Diamond2.default, props);
    } else if (shape === "cross") {
      return _react2.default.createElement(_cross2.default, props);
    }
    return _react2.default.createElement(_Circle2.default, props);
  }
  if (_react2.default.isValidElement(shape)) {
    return _react2.default.cloneElement(shape, props);
  }
  return _react2.default.createElement(shape, props);
}
