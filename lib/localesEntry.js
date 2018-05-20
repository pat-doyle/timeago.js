'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

var _locales = require('../locales');

var _locales2 = _interopRequireDefault(_locales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 将所有的 locales 打包的到一个文件的入口
 * @type {string[]}
 */

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {

  for (var _iterator = _locales2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var locale = _step.value;

    _2.default.register(locale, require('../locales/' + locale));
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}