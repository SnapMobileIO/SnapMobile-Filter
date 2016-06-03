'use strict';

import moment from 'moment';

class FilterController {

  constructor(Filter, $scope) {
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
  findAllWithFilters() {
    this.query = this.Filter.buildQuery(this.filters, this.itemsPerPage, this.skip, this.sort);
    this.findAll({ queryObject: this.query });
  }

  /**
   * Adds filters
   */
  addFilters() {
    this.filters.push({ field: '', operator: '', value: '' });
  }

  /**
   * Calls findAll function from parent controller to reset filters
   * Must be called as a seperate function in order for it to hit the parent controller
   */
  resetFilters() {
    this.findAll();
  }

  /**
   * Removes filters from search and displays all companies
   * Setting this.filters.length to 0 so it empties the parent filters as well
   * Adding the first empty filter back in
   */
  clearFilters() {
    this.filters.length = 0;
    this.addFilters();
    this.resetFilters();
    window.history.pushState({}, document.title, window.location.href.split('?')[0]);
  }

  /**
   * Combines date and time values of filer
   */
  combineDateTime(filter) {
    let date = moment(filter.date).format('YYYY-MM-DD');
    let time = moment(filter.time).format('kk:mm:ss Z');

    // Subtracting 1 hour from time if it's DST because the database time won't account for this
    if (moment(filter.date).isDST()) {
      time = moment(filter.time).subtract(60, 'minutes').format('kk:mm:ss Z');
    }

    let dateTime = moment(date + ' ' + time, 'YYYY-MM-DD HH:mm:ss Z').toISOString();
    filter.value = dateTime;
  }
}

export default FilterController;
