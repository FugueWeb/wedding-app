'use strict';
angular.module('AmirLucia.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('ItemsCtrl', function($scope, Items) {
  $scope.items = Items.all();
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
})

.controller('PhotoCtrl', function($scope) {
});
