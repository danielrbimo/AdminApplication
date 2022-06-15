"use strict";

angular.module('apMenu').directive('apMenu', function () {
    return {
        scope: {

        },
        transclude: true,
        templateUrl: 'ext-modules/apMenu/apMenuTemplate.html',
        controller: 'apMenuController',
        link: function (scope, el, attr) {

        }
    };
});