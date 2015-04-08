angular.module('app.controllers', ['app.services', 'app.directives'])
.controller('NavigationCtrl', function($scope, $state, $http, $rootScope) {
	$scope.logged = false;

	$http.get('auth/user')
	.success(function() {
		$scope.logged = false;
	});

	$scope.logout = function() {
		$scope.logged = false;
		console.log('logged out');

		$http.get('/logout');
		$state.go('login');
	};

	$rootScope.$on('login_event', function() {
		$scope.logged = true;
	});

})
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
		$scope.analysisTable = false;
		$scope.analysisGraph= false;
	};

	$scope.onGraphClick = function() {
		$scope.analysisTable = true;
		$scope.analysisGraph = true;
	};

	$scope.modals = {
		stocks: true,
		savings: true,
		traditional: true,
		roth: true
	};

	
	//Benchmark Millennial average user parameters:
	
	//cite: "https://www.whitehouse.gov/sites/default/files/docs/millennials_report.pdf"
		//- In 2013, 47% of 25-34 yrs had postsecondary degree
		//  (associates, bachelor’s, or graduate degree)

	// Benchmark user(single):

	var age = 25;
	var income = 40000;
	var baseTax = 5156.25;
	var incomeTaxRate = 0.25;
	var shortTermCapGains = 0.25;
	var longTermCapGains = 0.15;
	var growthRate = 0.055;
	var savingsGrowthRate = 0.01;
	var rothTaxRate = 0.1;

 
	$scope.storage = function() {

		$scope.analysisYear = parseInt($scope.analysisYear);
		$scope.value = parseInt($stateParams.estimateValue);

		$scope.stockEndValueCalc = $scope.value;
		$scope.stockStartValueCalc = $scope.value; 
		$scope.growthCalc = 0;
		$scope.capitalGainsCalc = 0;

		year = $scope.analysisYear;
			
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



		$scope.savingsEndValueCalc = $scope.value;
		$scope.savingsStartValueCalc = $scope.value; 
		$scope.savingsGrowthCalc = 0;
		$scope.incomeTaxCalc = 0;
			
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

		$scope.traditionalEndValueCalc = $scope.value;
		$scope.traditionalStartValueCalc = $scope.value; 
		$scope.traditionalGrowthCalc = 0;
		$scope.traditionalIncomeTaxCalc = 0;
			
		// This is for calculating year over year
		for(var i = 1; i <= $scope.analysisYear; i++) {

			if(year >= 35) {
				$scope.traditionalStartValueCalc = $scope.traditionalEndValueCalc;
				$scope.traditionalStartValue = parseInt($scope.traditionalStartValueCalc).toLocaleString('en-US');

				$scope.traditionalGrowthCalc = $scope.traditionalStartValueCalc * growthRate;
				$scope.traditionalGrowth = parseInt($scope.traditionalGrowthCalc).toLocaleString('en-US');

				$scope.traditionalIncomeTaxCalc = $scope.traditionalGrowthCalc * incomeTaxRate;

				$scope.traditionalIncomeTax = parseInt($scope.traditionalIncomeTaxCalc).toLocaleString('en-US');

				$scope.traditionalEndValueCalc = $scope.traditionalStartValueCalc + $scope.traditionalGrowthCalc - $scope.traditionalIncomeTaxCalc;
				$scope.traditionalEndValue = parseInt($scope.traditionalEndValueCalc).toLocaleString('en-US');
			} else {
				$scope.traditionalStartValueCalc = $scope.traditionalEndValueCalc;
				$scope.traditionalStartValue = parseInt($scope.traditionalStartValueCalc).toLocaleString('en-US');

				$scope.traditionalGrowthCalc = $scope.traditionalStartValueCalc * growthRate;
				$scope.traditionalGrowth = parseInt($scope.traditionalGrowthCalc).toLocaleString('en-US');
				
				$scope.traditionalIncomeTaxCalc = $scope.traditionalGrowthCalc * (incomeTaxRate + 0.1);
				$scope.traditionalIncomeTax = parseInt($scope.traditionalIncomeTaxCalc).toLocaleString('en-US');

				$scope.traditionalEndValueCalc = $scope.traditionalStartValueCalc + $scope.traditionalGrowthCalc - $scope.traditionalIncomeTaxCalc;
				$scope.traditionalEndValue = parseInt($scope.traditionalEndValueCalc).toLocaleString('en-US');
			}
		}

		$scope.rothEndValueCalc = $scope.value;
		$scope.rothStartValueCalc = $scope.value; 
		$scope.rothGrowthCalc = 0;
		$scope.rothIncomeTaxCalc = 0;
			
		// This is for calculating year over year
		for(var i = 1; i <= $scope.analysisYear; i++) {

			if(year >= 35) {
				$scope.rothStartValueCalc = $scope.rothEndValueCalc;
				$scope.rothStartValue = parseInt($scope.rothStartValueCalc).toLocaleString('en-US');

				$scope.rothGrowthCalc = $scope.rothStartValueCalc * growthRate;
				$scope.rothGrowth = parseInt($scope.rothGrowthCalc).toLocaleString('en-US');

				$scope.rothIncomeTaxCalc = 0;

				$scope.rothIncomeTax = parseInt($scope.rothIncomeTaxCalc).toLocaleString('en-US');

				$scope.rothEndValueCalc = $scope.rothStartValueCalc + $scope.rothGrowthCalc - $scope.rothIncomeTaxCalc;
				$scope.rothEndValue = parseInt($scope.rothEndValueCalc).toLocaleString('en-US');
			} else {
				$scope.rothStartValueCalc = $scope.rothEndValueCalc;
				$scope.rothStartValue = parseInt($scope.rothStartValueCalc).toLocaleString('en-US');

				$scope.rothGrowthCalc = $scope.rothStartValueCalc * growthRate;
				$scope.rothGrowth = parseInt($scope.rothGrowthCalc).toLocaleString('en-US');

				$scope.rothIncomeTaxCalc = $scope.rothGrowthCalc * rothTaxRate;
				$scope.rothIncomeTax = parseInt($scope.rothIncomeTaxCalc).toLocaleString('en-US');

				$scope.rothEndValueCalc = $scope.rothStartValueCalc + $scope.rothGrowthCalc - $scope.rothIncomeTaxCalc;
				$scope.rothEndValue = parseInt($scope.rothEndValueCalc).toLocaleString('en-US');
			}
		}

		$scope.data = {
			    series: ["Value"],
			    data: [{
			      x: "Stocks",
			      y: [parseInt($scope.stockEndValueCalc)]
			    }, {
			      x: "Savings",
			      y: [parseInt($scope.savingsEndValueCalc)]
			    }, {
			      x: "Traditional",
			      y: [parseInt($scope.traditionalEndValueCalc)]
			    }, {
			      x: "Roth",
			      y: [parseInt($scope.rothEndValueCalc)]
			    }]
		};

		$scope.update = function() {

			$scope.stockStartValueCalc = parseInt($scope.value);
			$scope.stockEndValueCalc = parseInt($scope.value);

			for(var i = 1; i <= $scope.analysisYear; i++) {

				$scope.stockStartValueCalc = $scope.stockEndValueCalc;
				$scope.stockStartValue = parseInt($scope.stockStartValueCalc).toLocaleString('en-US');

				$scope.growthCalc = $scope.stockStartValueCalc * growthRate;
				$scope.growth = parseInt($scope.growthCalc).toLocaleString('en-US');

				if(i === $scope.analysisYear) {
					if(year === 1) {
						$scope.capitalGainsCalc = $scope.growthCalc * shortTermCapGains;
					} else {
						$scope.capitalGainsCalc = $scope.growthCalc * longTermCapGains;
					}
					
					$scope.capitalGains = parseInt($scope.capitalGainsCalc).toLocaleString('en-US');
					
					$scope.stockEndValueCalc = $scope.stockStartValueCalc + $scope.growthCalc - $scope.capitalGainsCalc;
					$scope.stockEndValue = parseInt($scope.stockEndValueCalc).toLocaleString('en-US');

				} else {
					$scope.capitalGains = parseInt($scope.capitalGainsCalc).toLocaleString('en-US');

					$scope.stockEndValueCalc = $scope.stockStartValueCalc + $scope.growthCalc - $scope.capitalGainsCalc;
					$scope.stockEndValue = parseInt($scope.stockEndValueCalc).toLocaleString('en-US');
				}
			}
		
			$scope.savingsStartValueCalc = parseInt($scope.value);
			$scope.savingsEndValueCalc = parseInt($scope.value);

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

			$scope.traditionalStartValueCalc = parseInt($scope.value);
			$scope.traditionalEndValueCalc = parseInt($scope.value);

			for(var i = 1; i <= $scope.analysisYear; i++) {

				if(year >= 35) {
					$scope.traditionalStartValueCalc = $scope.traditionalEndValueCalc;
					$scope.traditionalStartValue = parseInt($scope.traditionalStartValueCalc).toLocaleString('en-US');

					$scope.traditionalGrowthCalc = $scope.traditionalStartValueCalc * growthRate;
					$scope.traditionalGrowth = parseInt($scope.traditionalGrowthCalc).toLocaleString('en-US');

					$scope.traditionalIncomeTaxCalc = $scope.traditionalGrowthCalc * incomeTaxRate;

					$scope.traditionalIncomeTax = parseInt($scope.traditionalIncomeTaxCalc).toLocaleString('en-US');

					$scope.traditionalEndValueCalc = $scope.traditionalStartValueCalc + $scope.traditionalGrowthCalc - $scope.traditionalIncomeTaxCalc;
					$scope.traditionalEndValue = parseInt($scope.traditionalEndValueCalc).toLocaleString('en-US');
				} else {
					$scope.traditionalStartValueCalc = $scope.traditionalEndValueCalc;
					$scope.traditionalStartValue = parseInt($scope.traditionalStartValueCalc).toLocaleString('en-US');

					$scope.traditionalGrowthCalc = $scope.traditionalStartValueCalc * growthRate;
					$scope.traditionalGrowth = parseInt($scope.traditionalGrowthCalc).toLocaleString('en-US');
					
					$scope.traditionalIncomeTaxCalc = $scope.traditionalGrowthCalc * (incomeTaxRate + 0.1);

					$scope.traditionalIncomeTax = parseInt($scope.traditionalIncomeTaxCalc).toLocaleString('en-US');

					$scope.traditionalEndValueCalc = $scope.traditionalStartValueCalc + $scope.traditionalGrowthCalc - $scope.traditionalIncomeTaxCalc;
					$scope.traditionalEndValue = parseInt($scope.traditionalEndValueCalc).toLocaleString('en-US');
				}
			}

			$scope.rothStartValueCalc = parseInt($scope.value);
			$scope.rothEndValueCalc = parseInt($scope.value);

			for(var i = 1; i <= $scope.analysisYear; i++) {

				if(year >= 35) {
					$scope.rothStartValueCalc = $scope.rothEndValueCalc;
					$scope.rothStartValue = parseInt($scope.rothStartValueCalc).toLocaleString('en-US');

					$scope.rothGrowthCalc = $scope.rothStartValueCalc * growthRate;
					$scope.rothGrowth = parseInt($scope.rothGrowthCalc).toLocaleString('en-US');

					$scope.rothIncomeTaxCalc = 0;

					$scope.rothIncomeTax = parseInt($scope.rothIncomeTaxCalc).toLocaleString('en-US');

					$scope.rothEndValueCalc = $scope.rothStartValueCalc + $scope.rothGrowthCalc - $scope.rothIncomeTaxCalc;
					$scope.rothEndValue = parseInt($scope.rothEndValueCalc).toLocaleString('en-US');
				} else {
					$scope.rothStartValueCalc = $scope.rothEndValueCalc;
					$scope.rothStartValue = parseInt($scope.rothStartValueCalc).toLocaleString('en-US');

					$scope.rothGrowthCalc = $scope.rothStartValueCalc * growthRate;
					$scope.rothGrowth = parseInt($scope.rothGrowthCalc).toLocaleString('en-US');

					$scope.rothIncomeTaxCalc = $scope.rothGrowthCalc * rothTaxRate;

					$scope.rothIncomeTax = parseInt($scope.rothIncomeTaxCalc).toLocaleString('en-US');

					$scope.rothEndValueCalc = $scope.rothStartValueCalc + $scope.rothGrowthCalc - $scope.rothIncomeTaxCalc;
					$scope.rothEndValue = parseInt($scope.rothEndValueCalc).toLocaleString('en-US');
				}
			}
			$scope.data = {
			    series: ["Value"],
			    data: [{
			      x: "Stocks",
			      y: [parseInt($scope.stockEndValueCalc)]
			    }, {
			      x: "Savings",
			      y: [parseInt($scope.savingsEndValueCalc)]
			    }, {
			      x: "Traditional",
			      y: [parseInt($scope.traditionalEndValueCalc)]
			    }, {
			      x: "Roth",
			      y: [parseInt($scope.rothEndValueCalc)]
			    }]
			};

		};

		$scope.config = {
		    title: '',
		    tooltips: true,
		    labels: true,
		    mouseover: function() {},
		    mouseout: function() {},
		    click: function() {},
		    legend: {
		      display: false,
		      //could be 'left, right'
		      position: 'right'
		    },
		    colors: ["#85A7C8", "#DCA34F", "#3A658F", "#FFD9A3"],
		    waitForHeightAndWidth: true
		  };

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

	$scope.register = function(credentials, userProfile) {
		$scope.error = Validate.credentials(credentials);
		$scope.errorProfile = Validate.userProfile(userProfile);
		
		if(!Validate.hasError($scope.error) && !Validate.hasError($scope.errorProfile)) {
			var registerObj = {
				username: credentials.identifier,
				email: credentials.identifier,
				password: credentials.password
			};

			var data = {
				user: '',
				firstName: userProfile.firstName,
				lastName: userProfile.lastName,
				dateOfBirth: userProfile.dateOfBirth,
				mobilePhone: userProfile.mobilePhone,
				email: credentials.identifier,
				password: credentials.password,
			};

			console.log(registerObj);
			
			$http.post('/auth/local/register', registerObj)
			.success(function(res) {
				data.user = res.user.id;
				console.log('Success!');
				console.log(res);

				$http.post('/UserProfile', data)
				.success(function(newUserProfile) {
					console.log(newUserProfile);
					$state.go('userData');
				})
				.error(function(err){
					console.log(err);
				});
				console.log(data);
			})
			.error(function(err){
				console.log('ERROR!!!');
				console.log(err);
				$scope.err = err;
			});	
		}
	};
})
.controller('LoginCtrl', function($scope, $state, $http, Validate, $rootScope) {
	$scope.error = {
		identifier: '',
		password: '',
		generic: []
	};
	$scope.htmlCredentials = {
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

				$state.go('userData');

				$rootScope.$emit('login_event');

			})
			.error(function(err){
				console.log('error');
				$scope.errorValidate = 'ERROR';
				return $scope.errorValidate
			});
		}
	};
})
.controller('UserDataCtrl', function($scope, $http, $interval) {

	$http.get('auth/user')
	.success(function(res) {
		$scope.userId = res.id;
	});

	$scope.stores = [];

	$scope.storageLoad = function() {

		$http.get('/Storage')
		.success(function(res) {
			console.log(res);
			for(var i = 0; i < res.length; i++) {
				if(res[i].user.id === $scope.userId) {
					$scope.stores.push(res[i]);
				}
			};
		});
	}();

	$scope.storageDelete = function() {

	};

	$interval( function() {
		$http.get('/Income')
		.success(function(res) {
			$scope.incomes = res;
		});
	}, 1000);
	$scope.incomeDelete = function() {

	};

	$interval( function() {
		$http.get('/Outcome')
		.success(function(res) {
			$scope.outcomes = res;
		});
	}, 1000);
	$scope.outcomeDelete = function() {

	};

	$scope.modals = {
		storage: false,
		income: false,
		outcome: false
	};

	$scope.storage = {
		name: '',
		balance: '',
		user: ''
	};
	$scope.income = {
		name: '',
    	frequency:'',
    	hours: 0,
	    dueDay: '',
   		dueDate: '',
    	amount: '',
    	taxes: '',
    	location: '',
   		user: ''
	};
	$scope.outcome = {
		name: '',
    	frequency: '',
	    dueDay: '',
   		dueDate: '',
	    amount: '',
	    months: '',
	    interest: '',
    	location: '',
		user: ''
	};

	$scope.storageSubmit = function(storage) {
		console.log(storage);
		var store = {
			name: storage.name,
			balance: storage.balance,
			user: ''
		};

		$http.get('auth/user')
		.success(function(res) {
			console.log(res);
			store.user = res.id;
			$http.post('/Storage', store)
			.success(function() {
				console.log(store.user);
			});
		});
		$scope.storageLoad();
	};

	$scope.incomeSubmit = function(income) {
		console.log(income);
		var inc = {
			name: income.name,
    		frequency: income.frequency,
    		hours: income.hours,
	    	dueDay: income.dueDay,
   			dueDate: income.dueDate,
    		amount: income.amount,
    		taxes: income.taxes,
    		location: income.location,
   			user: ''
		};

		$http.get('auth/user')
		.success(function(res) {
			console.log(res);
			inc.user = res.id;
			$http.post('/Income', inc)
			.success(function() {
				console.log('Added Income!');
			});
		});
	};
	$scope.outcomeSubmit = function(outcome) {
		console.log(outcome);
		var out = {
			name: outcome.name,
    		frequency: outcome.frequency,
	    	dueDay: outcome.dueDay,
   			dueDate: outcome.dueDate,
    		amount: outcome.amount,
    		months: outcome.months,
		    interest: outcome.interest,
    		location: outcome.location,
   			user: ''
		};

		$http.get('auth/user')
		.success(function(res) {
			console.log(res);
			out.user = res.id;
			$http.post('/Outcome', out)
			.success(function() {
				console.log('Added Outcome!');
			});
		});
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

})
.controller('UserLifetimeCtrl', function($scope) {

});

