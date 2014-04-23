// Based loosely around work by Witold Szczerba - https://github.com/witoldsz/angular-http-auth
angular.module('security', [
  'security.service',
  'security.interceptor',
  'security.login',
  'security.authorization',
  'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
            .when ('/test'   , {templateUrl: 'test/test.html'})
            .when ('/home'   , {templateUrl: 'home.html'})
            .when ('/admin', {
                templateUrl: 'test/admin.html',
                controller: 'AdminCtrl',
                resolve: {
                    isAdmin: function ($route, securityAuthorization, $q) {
                        //console.log ($route.current.params);
                        //console.log ('isAdmin = ',security.isAdmin());
                        var p = $q.defer();
                        console.log (securityAuthorization);
                        
                        p.reject('I don\'t like you');
                        
                        return securityAuthorization.requireAdminUser();
                    }
                 }})     
            .otherwise ({redirectTo: '/home'});
  })
  .controller ('main', function ($scope, security){
    $scope.openLoginDialog = function () {
        security.showLogin();
    }
  })
  .controller ('AdminCtrl', function ($scope) {
    $scope.name = 'asdf42';
  });