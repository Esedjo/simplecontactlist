(function(){
    'use strict';

    var dependencies = [];

    angular.module('ui', dependencies)
           .config(configFn)
           .run(runFn)
           .directive('uiButton', [uiButtonDirective])
           .directive('uiAlert', [uiAlertDirective])
           .directive('uiHeader', [uiHeaderDirective])
           .directive('uiFooter', [uiFooterDirective])
           .directive('uiMeta', [uiMetaDirective])

    var basePath = '/modules/ui/'

    function uiButtonDirective() {
        return {
            restrict: 'E',
            transclude:true,
            templateUrl: basePath + 'ui-button.html',
            link: function (scope, jQlement, jQAttrs) {
                console.log(jQAttrs);
                if (jQAttrs.level) jQlement.find('button').addClass('btn-' + jQAttrs.level);
                if (jQAttrs.icon) jQlement.find('i').addClass('glyphicon-' + jQAttrs.icon);
            }
        };
    }

    function uiAlertDirective() {
        return {
            restrict: 'E',
            templateUrl: basePath + 'ui-alert.html',
            link: function (scope, jQlement, jQAttrs) {
                console.log(jQAttrs);
                if (jQAttrs.title) jQlement.find('strong').html(jQAttrs.title);
                // if (jQAttrs.text) jQlement.find('strong')after(jQAttrs.text);
            }
        };
    }

    function uiHeaderDirective() {
        return {
            restrict: 'E',
            templateUrl: basePath + 'ui-header.html'
        };
    }

    function uiFooterDirective() {
        return {
            restrict: 'E',
            templateUrl: basePath + 'ui-footer.html'
        };
    }

    function uiMetaDirective() {
        return {
            restrict: 'E',
            templateUrl: basePath + 'ui-meta.html'
        };
    }

    function runFn() {
        console.log('Run : ui');
    }

    function configFn() {
        console.log('Config : ui');
    }

})();