'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _drawTable = require('./drawTable');

var _drawTable2 = _interopRequireDefault(_drawTable);

var _calculateCellWidthIndex = require('./calculateCellWidthIndex');

var _calculateCellWidthIndex2 = _interopRequireDefault(_calculateCellWidthIndex);

var _makeConfig = require('./makeConfig');

var _makeConfig2 = _interopRequireDefault(_makeConfig);

var _calculateRowHeightIndex = require('./calculateRowHeightIndex');

var _calculateRowHeightIndex2 = _interopRequireDefault(_calculateRowHeightIndex);

var _mapDataUsingRowHeightIndex = require('./mapDataUsingRowHeightIndex');

var _mapDataUsingRowHeightIndex2 = _interopRequireDefault(_mapDataUsingRowHeightIndex);

var _stringWidth = require('string-width');

var _stringWidth2 = _interopRequireDefault(_stringWidth);

var _alignTableData = require('./alignTableData');

var _alignTableData2 = _interopRequireDefault(_alignTableData);

var _padTableData = require('./padTableData');

var _padTableData2 = _interopRequireDefault(_padTableData);

var _validateTableData = require('./validateTableData');

var _validateTableData2 = _interopRequireDefault(_validateTableData);

var _stringifyTableData = require('./stringifyTableData');

var _stringifyTableData2 = _interopRequireDefault(_stringifyTableData);

/**
 * @typedef {string} table~cell
 */

/**
 * @typedef {table~cell[]} table~row
 */

/**
 * @typedef {Object} table~columns
 * @property {string} alignment Cell content alignment (enum: left, center, right) (default: left).
 * @property {number} width Column width (default: auto).
 * @property {number} paddingLeft Cell content padding width left (default: 1).
 * @property {number} paddingRight Cell content padding width right (default: 1).
 */

/**
 * @typedef {Object} table~border
 * @property {string} topBody
 * @property {string} topJoin
 * @property {string} topLeft
 * @property {string} topRight
 * @property {string} bottomBody
 * @property {string} bottomJoin
 * @property {string} bottomLeft
 * @property {string} bottomRight
 * @property {string} bodyLeft
 * @property {string} bodyRight
 * @property {string} bodyJoin
 * @property {string} joinBody
 * @property {string} joinLeft
 * @property {string} joinRight
 * @property {string} joinJoin
 */

/**
 * Used to dynamically tell table whether to draw a line separating rows or not.
 * The default behavior is to always return true.
 *
 * @typedef {function} drawJoin
 * @param {number} index
 * @param {number} size
 * @return {boolean}
 */

/**
 * @typedef {Object} table~config
 * @property {table~border} border
 * @property {table~columns[]} columns Column specific configuration.
 * @property {table~columns} columnDefault Default values for all columns. Column specific settings overwrite the default values.
 * @property {table~drawJoin} drawJoin
 */

/**
 * Generates a text table.
 *
 * @param {table~row[]} data
 * @param {table~config} userConfig
 * @return {String}
 */

exports['default'] = function (data) {
  var userConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var config = undefined,
      rowHeightIndex = undefined,
      cellWidthIndex = undefined,
      rows = undefined;

  (0, _validateTableData2['default'])(data);

  rows = (0, _stringifyTableData2['default'])(data);

  config = (0, _makeConfig2['default'])(rows, userConfig);

  rowHeightIndex = (0, _calculateRowHeightIndex2['default'])(rows, config);

  rows = (0, _mapDataUsingRowHeightIndex2['default'])(rows, rowHeightIndex, config);
  rows = (0, _alignTableData2['default'])(rows, config);
  rows = (0, _padTableData2['default'])(rows, config);

  cellWidthIndex = (0, _calculateCellWidthIndex2['default'])(rows[0]);

  return (0, _drawTable2['default'])(rows, config.border, cellWidthIndex, rowHeightIndex, config.drawJoin);
};

module.exports = exports['default'];
//# sourceMappingURL=table.js.map
