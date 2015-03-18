/**
* UserProfile.js
*
* @description :: TODO: This is for the user information not covered nby the login.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	attributes: {
		user: {
		  model: 'User'
		},
		firstName: {
		  type: 'string',
		  required: true
		},
		lastName: {
		  type: 'string',
		  required: true
		},
		dateOfBirth: {
		  type: 'date',
		  required: true
		},
		mobilePhone: {
		  type: 'string',
		  required: true
		},
		email: {
		  type: 'string',
		  required: true
		},
		password: {
		  type: 'string',
		  required: true
		},
		storage: {
		    collection: 'storage',
		    via: 'user'
		},
		income: {
		  collection: 'income',
		  via: 'user'
		},
		outcome: {
		  collection: 'outcome',
		  via: 'user'
		}
	}
};

