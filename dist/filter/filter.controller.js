'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterController = function () {
  function FilterController(Filter, $scope) {
    _classCallCheck(this, FilterController);

    this.$scope = $scope;
    this.filters = this.$scope.filters;
    this.schema = this.$scope.schema;
    this.findAll = this.$scope.findAll;
    this.itemsPerPage = this.$scope.itemsPerPage;
    this.skip = this.$scope.skip;
    this.Filter = Filter;
    this.query = this.$scope.query;
    this.sort = this.$scope.sort;
  }

  /**
   * Calls findAll passing the query filters
   * Must be called as a seperate function in order for it to hit the parent controller
   */


  _createClass(FilterController, [{
    key: 'findAllWithFilters',
    value: function findAllWithFilters() {
      this.query = this.Filter.buildQuery(this.filters, this.itemsPerPage, this.skip, this.sort);
      this.findAll({ queryObject: this.query });
    }

    /**
     * Adds filters
     */

  }, {
    key: 'addFilters',
    value: function addFilters() {
      this.filters.push({ field: '', operator: '', value: '' });
    }

    /**
     * Calls findAll function from parent controller to reset filters
     * Must be called as a seperate function in order for it to hit the parent controller
     */

  }, {
    key: 'resetFilters',
    value: function resetFilters() {
      this.findAll();
    }

    /**
     * Removes filters from search and displays all companies
     * Setting this.filters.length to 0 so it empties the parent filters as well
     * Adding the first empty filter back in
     */

  }, {
    key: 'clearFilters',
    value: function clearFilters() {
      this.filters.length = 0;
      this.addFilters();
      this.resetFilters();
    }

    /**
     * Combines date and time values of filer
     */

  }, {
    key: 'combineDateTime',
    value: function combineDateTime(filter) {
      var date = (0, _moment2.default)(filter.date).format('YYYY-MM-DD');
      var time = (0, _moment2.default)(filter.time).format('kk:mm:ss Z');

      // Subtracting 1 hour from time if it's DST because the database time won't account for this
      if ((0, _moment2.default)(filter.date).isDST()) {
        time = (0, _moment2.default)(filter.time).subtract(60, 'minutes').format('kk:mm:ss Z');
      }

      var dateTime = (0, _moment2.default)(date + ' ' + time, 'YYYY-MM-DD HH:mm:ss Z').toISOString();
      filter.value = dateTime;
    }
  }]);

  return FilterController;
}();

exports.default = FilterController;