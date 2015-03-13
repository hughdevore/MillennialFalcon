angular.module('app.controllers', ['app.services'])
.controller('WelcomeCtrl', function($scope, $state) {
	$scope.estimateValue = '';

	$scope.onEstimateClick = function() {
    	$state.go('analysis', {estimateValue: $scope.estimateValue});
  	};
})
.controller('WelcomeAnalysisCtrl', function($scope, $stateParams) {
	//Benchmark Millennial average user parameters:
	
	//cite: "https://www.whitehouse.gov/sites/default/files/docs/millennials_report.pdf"
		//- In 2013, 47% of 25-34 yrs had postsecondary degree
		//  (associates, bachelor’s, or graduate degree)

	// Benchmark user(single):
	var income = 40000;
	var baseTax = 5156.25;
	var incomeTaxRate = .25;
	var shortTermCapGains = .25;
	var longTermCapGains = .15;
	var growthRate = .055;

	var value = parseInt($stateParams.estimateValue);

	$scope.analysisYear = 1;
	$scope.analysisTable = true;
	$scope.analysisGraph= true;

	$scope.onViewClick = function () {

	}

	$scope.onTableClick = function() {
		$scope.analysisTable = true;
		$scope.analysisGraph= true;
	}

	$scope.onGraphClick = function() {
		$scope.analysisTable = false;
		$scope.analysisGraph= false;
	}

	$scope.stocks = function() {

		// $scope.startingValue();
		// $scope.gainLoss();

		var year = parseInt($scope.analysisYear);

		$scope.startingValue = function() {
			// this will multiply the analysis value by
			// the welcome page input

			$scope.startStocks = value;

			for(var i = 1; i <= year; i++) {
				console.log(i);
				growth = $scope.startStocks*growthRate;
				console.log(growth);
				$scope.startStocks = ($scope.startStocks + growth);
				console.log($scope.startStocks);
			}

			$scope.startingStocks = $scope.startStocks - growth;
		}();

		$scope.gainLoss = function() {
			// this will multiply the start value by
			// the rate of return
			$scope.growth = $scope.startingStocks*growthRate;

		}();

		$scope.capitalGainsTax = function () {
			//this will mutiply the gain/loss by the 28%
			//capital gains rate if analysis year < 1 year.
			//otherwise, will multiply by 15%
			if(year = 1) {
				$scope.capitalGains = $scope.growth*shortTermCapGains;
			} else {
				$scope.capitalGains = $scope.growth*longTermCapGains;
			}
		}();

		$scope.endingValue = function() {
			//this will take the starting value and add the
			//gain/loss and then subtract the taxes
			$scope.ending = $scope.startStocks - $scope.capitalGains;
		}();
	}();
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

