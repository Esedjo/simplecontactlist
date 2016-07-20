(function(){
    'use strict';

    var dependencies = [];

    angular.module('contactLogin', dependencies)
           .config(configFn)
           .run(runFn)
           .directive('contactLogin', ['CONFIG', contactLoginDirective])
           .controller('LoginCtrl', ['$scope', 'UserManager', LoginCtrl])

    function LoginCtrl($scope, UserManager){
        $scope.user    = {};
        $scope.level   = "primary"
        $scope.icon    = "user"
        $scope.label   = "Connect"
        $scope.message = {};

        $scope.connect = function() {
            if (UserManager.connect($scope.user)) {
                console.log("OK");
                $scope.message.text = "Welcome User";
                $scope.level        = "success";
            } else {
                $scope.message.text = "Login Failed";
            }
        }
    }

    function contactLoginDirective(CONFIG) {
        return {
            restrict: 'E',
            controller:'LoginCtrl',
            scope:true, /*crée un scope enfant pour ce controller*/
            templateUrl: CONFIG.basePath + 'contact-login/contact-login.html'
        }
    }

    function runFn() {
        console.log('Run : contactLogin');
    }

    function configFn() {
        console.log('Config : contactLogin');
    }

})();