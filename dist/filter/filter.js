(function(module) {
try {
  module = angular.module('FilterModule');
} catch (e) {
  module = angular.module('FilterModule', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/components/filter/filter.html',
    '<form name="filterForm">\n' +
    '  <div ng-repeat="filter in filterCtrl.filters track by $index">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-4 form-group">\n' +
    '        <label for="fieldSelect">Field: </label></br>\n' +
    '        <select class="form-control" name="fieldSelect" ng-model="filter.field" required/>\n' +
    '          <option value="">---Please select---</option>\n' +
    '          <option ng-repeat="filter in filterCtrl.schema" ng-selected="filter.field === filter" ng-if="filter.path" value="{{filter.path}}">{{filter.path}}</option>\n' +
    '        </select>\n' +
    '      </div>\n' +
    '      <div class="col-md-4 form-group">\n' +
    '        <label for="operatorSelect">Operator: </label></br>\n' +
    '        <select class="form-control" name="operatorSelect" ng-model="filter.operator" required/>\n' +
    '          <option value="">---Please select---</option>\n' +
    '          <option ng-repeat="operator in filterCtrl.Filter.operators[filterCtrl.schema[filter.field].instance]" ng-selected="filter.operator === operator">{{operator}}</option>\n' +
    '        </select>\n' +
    '      </div>\n' +
    '      <div class="col-md-4 form-group" ng-if="filterCtrl.schema[filter.field].instance != \'Boolean\' && filterCtrl.schema[filter.field].instance != \'Date\'">\n' +
    '        <label for="valueSelect">Value: </label></br>\n' +
    '        <input class="form-control" ng-model="filter.value" type="search" required="string" />\n' +
    '      </div>\n' +
    '      <div class="col-md-2 form-group" ng-if="filterCtrl.schema[filter.field].instance == \'Date\'">\n' +
    '        <label for="valueSelect">Date: </label></br>\n' +
    '        <input class="form-control" ng-model="filter.date" type="date" ng-change="filterCtrl.combineDateTime(filter)" required />\n' +
    '      </div>\n' +
    '      <div class="col-md-2 form-group" ng-if="filterCtrl.schema[filter.field].instance == \'Date\'">\n' +
    '        <label for="valueSelect">Time: </label></br>\n' +
    '        <input class="form-control" ng-model="filter.time" type="time" ng-change="filterCtrl.combineDateTime(filter)" required />\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="pull-right">\n' +
    '    <button type="button" class="btn btn-default" ng-disabled="filterForm.$invalid" ng-click="filterCtrl.addFilters()"><i class="fa fa-plus"></i></button>\n' +
    '    <button type="submit" class="btn btn-default" ng-disabled="filterForm.$invalid" ng-click="filterCtrl.findAllWithFilters()">Filter</button>\n' +
    '    <button type="submit" class="btn btn-default" ng-if="filterCtrl.filters.length > 1 || filterForm.$valid" ng-click="filterCtrl.clearFilters()">Clear</button>\n' +
    '  </div>\n' +
    '</form>\n' +
    '\n' +
    '');
}]);
})();
