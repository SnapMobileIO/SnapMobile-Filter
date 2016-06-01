'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
  function Filter() {
    _classCallCheck(this, Filter);

    this.operators = {
      String: ['equals', 'not equal', 'like'],
      Number: ['equals', 'not equal', 'less than', 'greater than', 'less than or equal to', 'greater than or equal to'],
      Boolean: ['true', 'false'],
      Date: ['less than', 'greater than', 'less than or equal to', 'greater than or equal to'],
      ObjectID: ['equals', 'not equal', 'like'],
      Image: ['equals', 'not equal', 'like']
    };
  }

  _createClass(Filter, [{
    key: 'buildQuery',
    value: function buildQuery(filters, itemsPerPage, skip, sort) {
      var count = 0;
      var query = { limit: itemsPerPage, skip: skip, sort: sort };

      for (var i = 0; i < filters.length; i++) {

        /**
         * Build the query object so the server receives an array of filter objects
         */
        query['filters[' + count + '][field]'] = filters[i].field;
        query['filters[' + count + '][operator]'] = filters[i].operator;
        query['filters[' + count + '][value]'] = filters[i].value;

        count++;
      };

      return query;
    }
  }]);

  return Filter;
}();

exports.default = Filter;