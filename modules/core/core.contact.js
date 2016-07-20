(function(){
    'use strict'

    var dependencies = [];

    angular.module('core.contact', dependencies)
           .config(configFn)
           .run(runFn)
           .service('ContactManager', ['$http', 'CONFIG', '$q', ContactManager])


    function ContactManager($http, CONFIG, $q) {
        this.directory = [];

        var self = this;

        this.getData = function() {

            //Création du traitement déféré
            var defer = $q.defer();

            $http({
                method:'GET',
                url:CONFIG.jsonPath
            }).then(function(response) {


                self.directory = response.data;

                //résolution de la promesse
                defer.resolve(self.directory);
            })

            //retour synchrone de la promesse du traitement
            return defer.promise;
        }

        this.create = function(objContact) {

            //Création du traitement déféré
            var defer = $q.defer();

            $http({
                method:'POST',
                url:CONFIG.jsonPath,
                data:objContact
            }).then(function(response) {
                self.directory.push(response.data)

                console.log(response.data);
                //résolution de la promesse
                defer.resolve(self.directory);
            })

            //retour synchrone de la promesse du traitement
            return defer.promise;
        }


        this.edit = function(objContact) {
            //Logique de validation
        }
    }

    function runFn() {
        console.log('Run : core.contact');
    }

    function configFn() {
        console.log('Config : core.contact');
    }

})();