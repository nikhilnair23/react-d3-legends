'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LegendItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _additionalProps = require('../util/additionalProps');

var _additionalProps2 = _interopRequireDefault(_additionalProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

LegendItem.propTypes = {
  flexDirection: _propTypes2.default.string,
  margin: _propTypes2.default.string,
  label: _propTypes2.default.object.isRequired
};

function LegendItem(_ref) {
  var children = _ref.children,
      flexDirection = _ref.flexDirection,
      margin = _ref.margin,
      label = _ref.label,
      restProps = _objectWithoutProperties(_ref, ['children', 'flexDirection', 'margin', 'label']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: 'vx-legend-item',
      style: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: flexDirection,
        margin: margin
      }
    }, (0, _additionalProps2.default)(restProps, label)),
    children
  );
}