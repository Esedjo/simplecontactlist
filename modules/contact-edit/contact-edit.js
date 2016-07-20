(function(){
    'use strict';

    var dependencies = [];

    angular.module('contactEdit', dependencies)
           .config(configFn)
           .run(runFn)
           .directive('contactEdit', ['CONFIG', contactEditDirective])
           .controller('EditCtrl', ['$scope', '$rootScope', 'ContactManager', EditCtrl])

    function EditCtrl($scope, $rootScope, ContactManager) {
        // $scope.contact = ContactManager.directory[0]
        $rootScope.$on('USER_SELECTED', function(event, contact) {
            $scope.contact = contact;
        })

        $scope.create = function(contact) {
            ContactManager.create($scope.contact);
        }
    }


    function contactEditDirective(CONFIG) {
        return {
            restrict: 'E',
            controller:'EditCtrl',
            scope:true,
            templateUrl: CONFIG.basePath + 'contact-edit/contact-edit.html'
        }
    }

    function runFn() {
        console.log('Run : contactEdit');
    }

    function configFn() {
        console.log('Config : contactEdit');
    }

})();