"use strict";

angular.module("apFramework").directive("apFramework", function () {
    return {
        transclude: true,
        scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
        },
        controller: "apFrameworkController",
        templateUrl: "ext-modules/apFramework/apFrameworkTemplate.html"
        
    };
});