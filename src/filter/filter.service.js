'use strict';

class Filter {

  constructor() {
    this.operators = {
      String: ['equals', 'not equal', 'like'],
      Number: ['equals', 'not equal', 'less than', 'greater than',
               'less than or equal to', 'greater than or equal to'],
      Boolean: ['true', 'false'],
      Date: ['less than', 'greater than', 'less than or equal to', 'greater than or equal to'],
      ObjectID: ['equals', 'not equal', 'like'],
      Image: ['equals', 'not equal', 'like'],
      Array: ['equals', 'not equal', 'like']
    };
  }

  buildQuery(filters, itemsPerPage, skip, sort) {
    let count = 0;
    let query = { limit: itemsPerPage, skip: skip, sort: sort };

    for (var i = 0; i < filters.length; i++) {

      /**
       * Build the query object so the server receives an array of filter objects
       */
      query[`filters[${count}][field]`] = filters[i].field;
      query[`filters[${count}][operator]`] = filters[i].operator;
      query[`filters[${count}][value]`] = filters[i].value;

      count++;
    };

    return query;
  }
}

export default Filter;
