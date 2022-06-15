"use strict";

angular.module('apMenu').directive('apMenuItem', function () {
    return {
        require: '^apMenu',
        scope: {
            label: '@',
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/apMenu/apMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            };

            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});