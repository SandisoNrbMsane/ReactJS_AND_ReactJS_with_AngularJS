setTimeout( function() {
    var app = angular.module('app', ['react']);

    app.controller('myCTRL', function($scope,loadItems) {
//declaring the config object which would be latter passed to react component as prop.
        $scope.config = {};
        //Function declared on config object.
       // Which will be called later from React component.
        $scope.config.ctrlFunc=function(){
       alert("Method in controller called");

        }
        loadItems.LoadData().then(function (data) {
            data.forEach(function(d){ d.image = "../"+d.image });
            //populated the mydata variable of config object using factory.

            $scope.config.mydata = data;

        });
    });


    app.directive('itemlist', function(reactDirective) {
        return reactDirective(Itemlist);
    } );



    app.factory('loadItems', function ($q, $http) { //factory to load and return the JSON data from
                                                   //external file.

        function LoadData() {
            var defer = $q.defer();
            $http.get('../json/items.json').success(function (data) {

                defer.resolve(data);
            })
                .error(function (data, status) {
                    defer.reject('could not load template');
                });
            ;
            return defer.promise;
        }

        return {
            LoadData: LoadData
        }
    });

    angular.bootstrap(document, ['app']);
}, 100 );