(function(){
    'use strict';

    var dependencies = [];

    angular.module('core.user', dependencies)
           .config(configFn)
           .run(runFn)
           .service('UserManager', [UserManager])


    function UserManager() {
        this.directory = [];

        this.connect = function(objUser) {
            //Logique de validation
            return ( (objUser.email === 'orsys@orsys.fr') && (objUser.password === 'orsys') ) ? true : false;
        }
    }

    function runFn() {
        console.log('Run : core.user');
    }

    function configFn() {
        console.log('Config : core.user');
    }

})();