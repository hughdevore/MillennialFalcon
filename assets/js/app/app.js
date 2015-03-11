angular.module('app',['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
	.state('welcome', {
		url: '/',
		templateUrl: 'templates/Welcome.html',
		controller: 'WelcomeCtrl'
	})
	.state('analysis', {
		url: '/analysis',
		templateUrl: 'templates/WelcomeAnalysis.html',
		controller: 'WelcomeAnalysisCtrl'
	})
	.state('login', {
		url: '/login',
		templateUrl: 'templates/Login.html',
		controller: 'LoginCtrl'
	})
	.state('register', {
		url: '/register',
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
	});
	
	$urlRouterProvider.otherwise('/');
});

