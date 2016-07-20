(function(){
    'use strict';

    var dependencies = ['core.user', 'core.contact'];

    angular.module('core', dependencies)
           .config(configFn)
           .run(runFn)
           .constant('CONFIG', Object.freeze({
                version:'0.1.0',
                basePath:'modules/',
                /*jsonPath:"http://<ip-adress of the api>:3030/contacts"*/
                jsonPath:"http://192.168.0.13:3030/contacts"
           }))


    function runFn() {
        console.log('Run : core');
    }

    function configFn() {
        console.log('Config : core');
    }

})();