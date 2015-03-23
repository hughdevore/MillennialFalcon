angular.module('app',['app.controllers', 'ui.router', 'angularCharts'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
	.state('welcome', {
		url: '/',
		templateUrl: 'templates/Welcome.html',
		controller: 'WelcomeCtrl'
	})
	.state('analysis', {
		url: '/analysis/:estimateValue',
		templateUrl: 'templates/WelcomeAnalysis.html',
		controller: 'WelcomeAnalysisCtrl'
	})
	.state('login', {
		url: '/user/login',
		templateUrl: 'templates/Login.html',
		controller: 'LoginCtrl'
	})
	.state('register', {
		url: '/user/register',
		templateUrl: 'templates/Register.html',
		controller: 'RegisterCtrl'
	})
	.state('userData', {
		url: '/user',
		templateUrl: 'templates/UserData.html',
		controller: 'UserDataCtrl'
	})
	.state('dashboard', {
		url: '/dashboard',
		templateUrl: 'templates/UserDashboard.html',
		controller: 'UserDashboardCtrl'
	})
	.state('userDaily', {
		url: '/daily',
		templateUrl: 'templates/UserDaily.html',
		controller: 'UserDailyCtrl'
	})
	.state('userWeekly', {
		url: '/weekly',
		templateUrl: 'templates/UserWeekly.html',
		controller: 'UserWeeklyCtrl'
	})
	.state('userMonthly', {
		url: '/monthly',
		templateUrl: 'templates/UserMonthly.html',
		controller: 'UserMonthlyCtrl'
	})
	.state('userAnnually', {
		url: '/annually',
		templateUrl: 'templates/UserAnnually.html',
		controller: 'UserAnnuallyCtrl'
	})
	.state('userLifetime', {
		url: '/lifetime',
		templateUrl: 'templates/UserLifetime.html',
		controller: 'UserLifetimeCtrl'
	});
	
	$urlRouterProvider.otherwise('/');
});

