angular.module('app.controllers', ['app.services'])
.controller('WelcomeCtrl', function($scope, $state) {
	$scope.estimateValue = '';

	$scope.onEstimateClick = function() {
    	$state.go('analysis', {estimateValue: $scope.estimateValue});
  	};
})
.controller('WelcomeAnalysisCtrl', function($scope, $stateParams) {
	$scope.analysisYear = 1;
	$scope.growth = 0;
	$scope.revealedContent = true;

	$scope.analysisTable = true;
	$scope.analysisGraph= true;

	var value = parseInt($stateParams.estimateValue);

	$scope.onTableClick = function() {
		$scope.analysisTable = true;
		$scope.analysisGraph= true;
	};

	$scope.onGraphClick = function() {
		$scope.analysisTable = false;
		$scope.analysisGraph= false;
	};

	$scope.modals = {
		stocks: false,
		savings: false,
		fourk: false,
		rothfourk: false,
		ira: false,
		rothira: false,
		ul: false,
		uldynasty: false
	};
	
	//Benchmark Millennial average user parameters:
	
	//cite: "https://www.whitehouse.gov/sites/default/files/docs/millennials_report.pdf"
		//- In 2013, 47% of 25-34 yrs had postsecondary degree
		//  (associates, bachelor’s, or graduate degree)

	// Benchmark user(single):

	var income = 40000;
	var baseTax = 5156.25;
	var incomeTaxRate = 0.25;
	var shortTermCapGains = 0.25;
	var longTermCapGains = 0.15;
	var growthRate = 0.055;
	var savingsGrowthRate = 0.01;

 
	$scope.stocks = function() {

		$scope.analysisYear = parseInt($scope.analysisYear);

		$scope.stockEndValueCalc = value;
		$scope.stockStartValueCalc = value; 
		$scope.growthCalc = 0;
		$scope.capitalGainsCalc = 0;
			
		// This is for calculating year over year
		for(var i = 1; i <= $scope.analysisYear; i++) {

			$scope.stockStartValueCalc = $scope.stockEndValueCalc;
			$scope.stockStartValue = parseInt($scope.stockStartValueCalc).toLocaleString('en-US');

			$scope.growthCalc = $scope.stockStartValueCalc * growthRate;
			$scope.growth = parseInt($scope.growthCalc).toLocaleString('en-US');

			if(year === 1) {
				$scope.capitalGainsCalc = $scope.growthCalc * shortTermCapGains;
			} else {
				$scope.capitalGainsCalc = $scope.growthCalc * longTermCapGains;
			}

			$scope.capitalGains = parseInt($scope.capitalGainsCalc).toLocaleString('en-US');

			$scope.stockEndValueCalc = $scope.stockStartValueCalc + $scope.growthCalc - $scope.capitalGainsCalc;
			$scope.stockEndValue = parseInt($scope.stockEndValueCalc).toLocaleString('en-US');
		}

		$scope.update = function() {
			$scope.stockStartValueCalc = value;
			$scope.stockEndValueCalc = value;

			for(var i = 1; i <= $scope.analysisYear; i++) {

				$scope.stockStartValueCalc = $scope.stockEndValueCalc;
				$scope.stockStartValue = parseInt($scope.stockStartValueCalc).toLocaleString('en-US');

				$scope.growthCalc = $scope.stockStartValueCalc * growthRate;
				$scope.growth = parseInt($scope.growthCalc).toLocaleString('en-US');

				if(year === 1) {
					$scope.capitalGainsCalc = $scope.growthCalc * shortTermCapGains;
				} else {
					$scope.capitalGainsCalc = $scope.growthCalc * longTermCapGains;
				}

				$scope.capitalGains = parseInt($scope.capitalGainsCalc).toLocaleString('en-US');

				$scope.stockEndValueCalc = $scope.stockStartValueCalc + $scope.growthCalc - $scope.capitalGainsCalc;
				$scope.stockEndValue = parseInt($scope.stockEndValueCalc).toLocaleString('en-US');
			}

		};

		
	}();
	$scope.savings = function() {

		$scope.savingsEndValueCalc = value;
		$scope.savingsStartValueCalc = value; 
		$scope.growthCalc = 0;
		$scope.capitalGainsCalc = 0;
			
		// This is for calculating year over year
		for(var i = 1; i <= $scope.analysisYear; i++) {

			$scope.savingsStartValueCalc = $scope.savingsEndValueCalc;
			$scope.savingsStartValue = parseInt($scope.savingsStartValueCalc).toLocaleString('en-US');

			$scope.savingsGrowthCalc = $scope.savingsStartValueCalc * savingsGrowthRate;
			$scope.savingsGrowth = parseInt($scope.savingsGrowthCalc).toLocaleString('en-US');

			$scope.incomeTaxCalc = $scope.savingsGrowthCalc * incomeTaxRate;


			$scope.incomeTax = parseInt($scope.incomeTaxCalc).toLocaleString('en-US');

			$scope.savingsEndValueCalc = $scope.savingsStartValueCalc + $scope.savingsGrowthCalc - $scope.incomeTaxCalc;
			$scope.savingsEndValue = parseInt($scope.savingsEndValueCalc).toLocaleString('en-US');
		}

		$scope.savingsUpdate = function() {
			$scope.savingsStartValueCalc = value;
			$scope.savingsEndValueCalc = value;

			for(var i = 1; i <= $scope.analysisYear; i++) {

				$scope.savingsStartValueCalc = $scope.savingsEndValueCalc;
			$scope.savingsStartValue = parseInt($scope.savingsStartValueCalc).toLocaleString('en-US');

			$scope.savingsGrowthCalc = $scope.savingsStartValueCalc * savingsGrowthRate;
			$scope.savingsGrowth = parseInt($scope.savingsGrowthCalc).toLocaleString('en-US');

			$scope.incomeTaxCalc = $scope.savingsGrowthCalc * incomeTaxRate;


			$scope.incomeTax = parseInt($scope.incomeTaxCalc).toLocaleString('en-US');

			$scope.savingsEndValueCalc = $scope.savingsStartValueCalc + $scope.savingsGrowthCalc - $scope.incomeTaxCalc;
			$scope.savingsEndValue = parseInt($scope.savingsEndValueCalc).toLocaleString('en-US');
			}

		}
	}();
})
.controller('RegisterCtrl', function($scope, $state, $http, Validate) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};
	$scope.errorProfile = {
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		mobilePhone: '',
		generic: []
	};
	$scope.userProfile = {
		firstName: '',
		lastName: '',
		dateOfBirth: '',
		mobilePhone: '',
	};

	$scope.register = function(credentials) {
		$scope.error = Validate.credentials(credentials);

		if(!Validate.hasError($scope.error)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password
			};
			console.log(registerObj);
			
			$http.post('/auth/local/register', registerObj)
			.success(function(res) {
				console.log('Success!');
				console.log(res);

				if(res.success){
					$state.go('login');
				} else {
					$scope.error.generic = res.errors;
				}
				console.log($scope.error);
			})
			.error(function(err){
				console.log('ERROR!!!');
				console.log(err);
			});
		}
	};

	$scope.create = function(userProfile) {
		$scope.errorProfile = Validate.userProfile(userProfile);

		if(!Validate.hasError($scope.errorProfile)) {
			console.log('User Created!');

			var data = {
				firstName: userProfile.firstName,
				lastName: userProfile.lastName,
				dateOfBirth: userProfile.dateOfBirth.format('YYYY-MM-DD HH:mm:ss'),
				mobilePhone: userProfile.mobilePhone,
			};

			$http.post('/userData', data)
			.success(function(newUserProfile) {
				console.log(newUserProfile);
			})
			.error(function(err){
				console.log(err);
			});
			console.log(data);
		}
	};

	$scope.submit = function(credentials, userProfile) {
		$scope.register(credentials);
		$scope.create(userProfile);
	};
})
.controller('LoginCtrl', function($scope, $state, $http, Validate) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.credentials = {
		identifier: '',
		password: ''
	};

	$scope.login = function(htmlCredentials) {
		$scope.error = Validate.credentials(htmlCredentials);

		if(!Validate.hasError($scope.error)) {
			$http.post('/auth/local', htmlCredentials)
			.success(function(res) {
				console.log('Success!');
				console.log(res);

				if(res.success){
					$state.go('dashboard');
				} else {
					$scope.error.generic = res.errors;
				}
				console.log($scope.error);
			})
			.error(function(err){
				console.log('ERROR!!!');
				console.log(err);
			});
		}
	};
})
.controller('NavCtrl', function($scope, $http, $state) {
	$scope.logout = function() {
		$http.get('/logout');
		$state.go('login');
	};
})
.controller('UserDataCtrl', function($scope) {
	$scope.modals = {
		storage: false,
		income: false,
		outcome: false
	};
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

