angular.module("mongoDBService", ["ngResource"])
.factory('User', ['$resource', function ($resource) {
	return $resource('https://api.mongolab.com/api/1/databases/angulardb/collections/users/:id', {
		apiKey:'MoTVqG-fUqakHUwrDJxUavPCfBj2JFr-',
		id:'@_id.$oid'
	});
}]);