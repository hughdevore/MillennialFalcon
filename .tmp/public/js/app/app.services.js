angular.module('app.services',[])
.factory('Validate', function() {
	return {
		credentials: function(credentials) {
			var error = {
				identifier: '',
				password: ''
			};
			
			// If identifier property of credentials object above = falsey (null, undefined, 0)
			if(!credentials.identifier) {
				error.identifier = 'Enter your email address.';
			}
			// If identifier property of credentials object above is not an email 
			// (using validator.js method isEmail)
			else if(!validator.isEmail(credentials.identifier)) {
				error.identifier = 'You must enter a valid email.';
			}
			// If identifier property of credentials object above = falsey (null, undefined, 0)
			if(!credentials.password) {
				error.password = 'You must enter a password.';
			}
			return error;
		},

		hasError: function(error) {
			for(var i in error) {
				if(error.hasOwnProperty(i) && error[i]) {
					return true;
				}
			}
			return false;
		},

		userProfile: function(userProfile) {
			var errorProfile = {
				firstName: '',
				lastName: '',
				dateOfBirth: '',
				mobilePhone: ''
			};
			
			// If url property of credentials object above = falsey (null, undefined, 0)
			if(!userProfile.firstName) {
				errorProfile.firstName = 'You must enter your first name.';
			}
			// If url property of credentials object above = falsey (null, undefined, 0)
			if(!userProfile.lastName) {
				errorProfile.lastName = 'You must enter your last name.';
			}
			if(!userProfile.mobilePhone) {
				errorProfile.mobilePhone = 'You must enter your mobile phone number.';
			}

			if(!userProfile.dateOfBirth) {
				errorProfile.dateOfBirth = 'You must enter a date of birth.';
			}
			return errorProfile;
		}
	};
});
