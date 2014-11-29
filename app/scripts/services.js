'use strict';
angular.module('AmirLucia.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [
    { id: 0, name: 'The Chapel' },
    { id: 1, name: 'The Bronx' },
    { id: 2, name: 'The Reception' },
    { id: 3, name: 'The fourth item in this list' }
  ];

  return {
    all: function() {
      return items;
    },
    get: function(itemId) {
      // Simple index lookup
      return items[itemId];
    }
  };
});
