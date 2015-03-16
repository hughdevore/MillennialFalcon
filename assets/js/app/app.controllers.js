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
	$scope.modalContent = true;
	
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

	$scope.analysisTable = true;
	$scope.analysisGraph= true;

	$scope.onModalClick = function () {
		$scope.modalContent = !$scope.modalContent;
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

		$scope.analysisYear = parseInt($scope.analysisYear);

		$scope.stockEndValueCalc = value;
		$scope.stockStartValueCalc = value; 
		$scope.growthCalc = 0;
		$scope.capitalGainsCalc = 0;
			
		// This is for calculating year over year
		for(var i = 1; i <= $scope.analysisYear; i++) {
			console.log(i);

			$scope.stockStartValueCalc = $scope.stockEndValueCalc;
			console.log($scope.stockStartValueCalc);
			$scope.stockStartValue = parseInt($scope.stockStartValueCalc).toLocaleString('en-US');

			$scope.growthCalc = $scope.stockStartValueCalc * growthRate;
			$scope.growth = $scope.growthCalc.toLocaleString('en-US');

			if(year = 1) {
				$scope.capitalGainsCalc = $scope.growthCalc * shortTermCapGains;
			} else {
				$scope.capitalGainsCalc = $scope.growthCalc * longTermCapGains;
			}

			$scope.capitalGains = $scope.capitalGainsCalc.toLocaleString('en-US');

			$scope.stockEndValueCalc = $scope.stockStartValueCalc + $scope.growthCalc - $scope.capitalGainsCalc;
			console.log($scope.stockEndValueCalc);
			$scope.stockEndValue = $scope.stockEndValueCalc.toLocaleString('en-US');
		}

		$scope.update = function() {
			$scope.stockStartValueCalc = value;
			$scope.stockEndValueCalc = value;

			for(var i = 1; i <= $scope.analysisYear; i++) {
				console.log(i);

				$scope.stockStartValueCalc = $scope.stockEndValueCalc;
				console.log($scope.stockStartValueCalc);
				$scope.stockStartValue = parseInt($scope.stockStartValueCalc).toLocaleString('en-US');

				$scope.growthCalc = $scope.stockStartValueCalc * growthRate;
				$scope.growth = parseInt($scope.growthCalc).toLocaleString('en-US');

				if(year = 1) {
					$scope.capitalGainsCalc = $scope.growthCalc * shortTermCapGains;
				} else {
					$scope.capitalGainsCalc = $scope.growthCalc * longTermCapGains;
				}

				$scope.capitalGains = parseInt($scope.capitalGainsCalc).toLocaleString('en-US');

				$scope.stockEndValueCalc = $scope.stockStartValueCalc + $scope.growthCalc - $scope.capitalGainsCalc;
				console.log($scope.stockEndValueCalc);
				$scope.stockEndValue = parseInt($scope.stockEndValueCalc).toLocaleString('en-US');
			}

		}

		$scope.startingValue = function() {
			// this will calculate the starting value at year 1			

		};

		$scope.gainLossValue = function() {
			// this will multiply the start value by
			// the rate of return

		};

		$scope.capitalGainsTaxValue = function () {
			//this will mutiply the gain/loss by the 28%
			//capital gains rate if analysis year < 1 year.
			//otherwise, will multiply by 15%
			
		};

		$scope.endingValue = function() {
			//this will calculate the ending value for year 1

		};
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

