angular.module ('services.localizedMessages',[])
    .factory ('localizedMessages', function () {
        return {
            get: function (msg) {
                switch (msg) {
                    case 'login.reason.notAuthorized': 
                        return 'user is not authorized';
                    case 'login.reason.notAuthenticated':
                        return 'please provide your credentials';
                    case 'login.error.invalidCredentials': 
                        return 'invalid credentials';
                    case 'login.error.serverError':
                        return 'the server has encountered an error';
                    default:
                        console.log ('unknown message = ',msg);
                        return 'unknown error'
                    ;
                }
            }
        };
    });