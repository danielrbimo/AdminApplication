"use strict";

angular.module('apMenu').controller('apMenuController',
    ['$scope', '$rootScope',
        function ($scope, $rootScope) {

            $scope.showMenu = true;

            this.getActiveElement = function () {
                return $scope.activeElement;
            };

            this.setActiveElement = function (el) {
                $scope.activeElement = el;
            };

            this.setRoute = function (route) {
                $rootScope.$broadcast('ap-menu-item-selected-event',
                    { route: route });
            };

            $scope.$on('ap-menu-show', function (evt, data) {
                $scope.showMenu = data.show;
            });
        }
    ]);