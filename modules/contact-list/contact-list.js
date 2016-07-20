(function(){
    'use strict';

    var dependencies = [];

    angular.module('contactList', dependencies)
           .config(configFn)
           .run(runFn)
           .directive('contactList', ['CONFIG', contactListDirective])
           .controller('ListCtrl', ['$scope', 'ContactManager', ListCtrl])


    function ListCtrl($scope, ContactManager) {
        ContactManager.getData().then(function(data) {
            $scope.contactsCollection = data;
        });

        $scope.select = function(contact) {
            $scope.current = contact;
            $scope.$emit('USER_SELECTED', contact);
        }
    }

    function contactListDirective(CONFIG) {
        return {
            restrict:'E',
            controller:'ListCtrl',
            scope:true,
            templateUrl: CONFIG.basePath + 'contact-list/contact-list.html'
        }
    }

    function runFn() {
        console.log('Run : contactList');
    }

    function configFn() {
        console.log('Config : contactList');
    }

})();