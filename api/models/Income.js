/**
* Income.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
    	type: 'string',
        required: true
        },
    frequency: {
      type: 'string',
      required: true
    },
    hours: {
      type: 'integer',
      required: false
    },
    weekday: {
      type: 'string',
      required: false
    },
    amount: {
      type: 'integer',
      required: true
    },
    taxes: {
      type: 'string',
      required: true
    },
    location: {
      type: 'string',
      required: true
    },
    user: {
      model: 'UserProfile'
    }
  }
};

