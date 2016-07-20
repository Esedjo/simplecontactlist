(function(){
    'use strict';

    var dependencies = ['ui', 'ngRoute', 'core', 'contactEdit', 'contactList', 'contactLogin'];

    angular.module('main', dependencies)
           .config(['$compileProvider', configFn])
           .config(['$routeProvider', configRoute])
           .run(['$rootScope', runFn])

    function configRoute($routeProvider) {
        $routeProvider.when('/home', {
            template: '<contact-login></contact-login>',
        }).when('/list', {
            templateUrl: 'modules/main/list.html',
        }).otherwise({
            redirectTo: '/home'
        });
    }

    function runFn() {
        console.log('Run : main');
    }

    function configFn($compileProvider) {
        console.log('Config : main');
        console.log($compileProvider);
        $compileProvider.debugInfoEnabled(false);
    }

})();