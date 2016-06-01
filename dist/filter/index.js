'use strict';

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _filter = require('./filter.service');

var _filter2 = _interopRequireDefault(_filter);

var _filter3 = require('./filter.directive');

var _filter4 = _interopRequireDefault(_filter3);

var _filter5 = require('./filter.controller');

var _filter6 = _interopRequireDefault(_filter5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_angular2.default.module('FilterModule', []).service('Filter', _filter2.default).directive('filterQuery', _filter4.default).controller('FilterController', _filter6.default);