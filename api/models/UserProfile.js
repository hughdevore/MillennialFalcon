/**
* UserProfile.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
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

