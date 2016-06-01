'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function filterDirective() {
  require('./filter.js');
  return {
    restrict: 'EA',
    transclude: true,
    controller: 'FilterController',
    controllerAs: 'filterCtrl',
    templateUrl: '/components/filter/filter.html',
    scope: {
      filters: '=',
      schema: '=',
      findAll: '&',
      itemsPerPage: '=',
      skip: '=',
      query: '=',
      sort: '='
    }
  };
}

exports.default = filterDirective;