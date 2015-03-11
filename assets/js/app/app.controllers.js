angular.module('app.controllers', ['app.services'])
.controller('WelcomeCtrl', function($scope) {
	$scope.onEstimateClick = function() {
    	alert("Estimate button clicked!");
  	};
})
.controller('WelcomeAnalysisCtrl', function($scope) {

})
.controller('LoginCtrl', function($scope) {

})
.controller('RegisterCtrl', function($scope) {

})
.controller('UserDataCtrl', function($scope) {

})
.controller('UserDashboardCtrl', function($scope) {

})
.controller('UserDailyCtrl', function($scope) {

})
.controller('UserWeeklyCtrl', function($scope) {

})
.controller('UserMonthlyCtrl', function($scope) {

})
.controller('UserAnnuallyCtrl', function($scope) {

});

