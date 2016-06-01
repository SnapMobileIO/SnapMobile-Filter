'use strict';

import angular from 'angular';
import Filter from './filter.service';
import filterDirective from './filter.directive';
import FilterController from './filter.controller';

angular.module('FilterModule', [])
  .service('Filter', Filter)
  .directive('filterQuery', filterDirective)
  .controller('FilterController', FilterController);
