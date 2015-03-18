this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/Login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section id="login-container">\n\t<h2>Login</h2>\n\t<form>\n\t\t<div id="login-form">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="exampleInputEmail1">Email address</label>\n\t\t\t\t<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="exampleInputPassword1">Password</label>\n\t\t\t\t<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">\n\t\t\t</div>\n\t\t\t<button type="submit" class="btn btn-default">Submit</button>\n\t\t</div>\n\t</form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/Register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section id="register-container" ng-controller="RegisterCtrl">\n\t<h2>Register</h2>\n\t<form class="form" ng-submit="submit(credentials, userProfile)" novalidate>\n\t\t<div id="register-form">\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="firstName">First Name</label>\n\t\t\t\t<input type="text" class="form-control" id="first-name" placeholder="Enter Your First Name" ng-model="userProfile.firstName">\n\t\t\t\t<p class="error" ng-bind="errorProfile.firstName"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="lastName">Last Name</label>\n\t\t\t\t<input type="text" class="form-control" id="last-name" placeholder="Enter Your Last Name" ng-model="userProfile.lastName">\n\t\t\t\t<p class="error" ng-bind="errorProfile.lastName"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="lastName">Date of Birth</label>\n\t\t\t\t<input type="date" class="form-control" id="last-name" placeholder="For Lifetime Analysis" ng-model="userProfile.dateOfBirth">\n\t\t\t\t<p class="error" ng-bind="errorProfile.dateOfBirth"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="phone">Mobile Phone</label>\n\t\t\t\t<input type="tel" pattern="(?:\\(\\d{3}\\)|\\d{3})[- ]?\\d{3}[- ]?\\d{4}" class="form-control" id="mobile-phone" placeholder="(512)-512-5121" ng-model="userProfile.mobilePhone">\n\t\t\t\t<p class="error" ng-bind="errorProfile.mobilePhone"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t\t<label for="email">Email address</label>\n\t\t\t\t<input class="form-control" type="text" id="email" placeholder="Enter Your email" ng-model="credentials.identifier">\n\t\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group" ng-class="error.password ? \'error\' : \'\'">\n\t\t\t\t<label for="password">Password</label>\n\t\t\t\t<input class="form-control" type="password" id="password" placeholder="Enter Your Password" ng-model="credentials.password">\n\t\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t\t</div>\n\t\t\t<button type="submit" class="btn btn-default">Register</button>\n\t\t</div>\n\t</form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/UserAnnually.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'User - Annual';

}
return __p
};

this["JST"]["assets/templates/UserDaily.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'User - Daily';

}
return __p
};

this["JST"]["assets/templates/UserDashboard.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'User - Dashboard';

}
return __p
};

this["JST"]["assets/templates/UserData.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section id="user-data-container" ng-controller="UserDataCtrl">\n\t<h2>Your Falcon</h2>\n\t\n\t<section id ="storage" class="panel panel-default analysis-table">\n\t\t  <!-- Default panel contents -->\n\t\t<div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t  \t\t<a class="storage-modal-header" ng-click="modals.storage = !modals.storage">1. Add Info about your Nest\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.storage"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.storage"></span>\n\t\t  \t\t</a>\n\t\t  \t\t\n\t\t\t\t<div class="content" ng-show="modals.storage">\n\t                <div><strong>Storage:</strong></div>\n\t                <p class="text"><small>Where does your falcon keep it\'s eggs safe? Do you have a checking, savings or retirement account?</small></p>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</div>\n\t\t<div>\n\t\t\t<table class="table">\n\t\t\t    <th class="table-header">Income Storage</th>\n\t\t\t    <th class="table-header">Balance</th>\n\t\t\t    <th class="table-header">Remove</th>\n\t\t\t    <tr>\n\t\t\t    \t<td class="table-data"><strong>storageName</strong></td>\n\t\t\t    \t<td class="table-data">storageBalance </td>\n\t\t\t    \t<td class="remove"></td>\n\t\t\t    </tr>\n\t\t\t  </table>\n\t\t</div>\n\t\t<form class="form" ng-submit="" novalidate>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="storageName">Storage Name</label>\n\t\t\t\t<input type="text" class="form-control" id="storage-name" placeholder="enter an account name" ng-model="storage.name">\n\t\t\t\t<p class="error" ng-bind="error.storageName"></p>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="balance">Balance</label>\n\t\t\t\t<input type="text" class="form-control" id="balance" placeholder="enter the account balance" ng-model="storage.balance">\n\t\t\t\t<p class="error" ng-bind="error.storageBalance"></p>\n\t\t\t</div>\n\t\t</form>\n\t</section>\n</section>';

}
return __p
};

this["JST"]["assets/templates/UserMonthly.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'User - Monthly';

}
return __p
};

this["JST"]["assets/templates/UserWeekly.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'User - Weekly';

}
return __p
};

this["JST"]["assets/templates/Welcome.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="body" ng-controller="WelcomeCtrl">\n\t<h1>We Make Finances Understandable.</h1>\n\t<div id="header-text">\n\t\tThe mission of Millennial Falcon is to assist humans in understanding and estimating their financial lives. From debt, income, and goal mapping to connecting with someone who can help automate your interaction with finance and plan for your future.\n\t</div>\n\t<div id="welcome-query">\n\t\t<div id="welcome-input">\n\t\t\t<!-- <input type="integer" id="input" placeholder="Enter Amount to SAVE"></input> -->\n\t\t\t<div class="input-group">\n  \t\t\t\t<span class="input-group-addon">$</span>\n  \t\t\t\t<input ng-model="estimateValue" placeholder="Enter Amount to SAVE" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">\n  \t\t\t\t<span class="input-group-addon">.00</span>\n</div>\n\t\t</div>\n\t\t<div id="welcome-button">\n\t\t\t<button class="btn btn-primary" ng-click="onEstimateClick()">Estimate</button>\n\t\t</div>\n\t</div>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/WelcomeAnalysis.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section id="welcome-analysis" ng-controller="WelcomeAnalysisCtrl">\n\t<div id="analysis-menu">\n\t\t<div id="millennials">\n\t\t\t<h2>The Average Millennial</div></h2>\n\t\t\t\n\t\t</div>\n\t\t\t\n\t\t<div>\n\t\t<hr>\n\t\t\t<h2 id="menu-text">Enter a Year to Estimate</h2>\n\t\t</div>\n\t\t<div class="input-group" id="analysis-input">\n\t\t\t<div class="input-group-addon" id="basic-addon1">Year</div>\n\t\t\t<input ng-change="update()" ng-model="analysisYear" id="analysis-year" type="text" class="form-control" placeholder="Year for Estimation" aria-describedby="basic-addon1">\n\t\t</div>\n\t\t<hr>\n\n\t\t<div id="analysis-output">\n\t\t\t<h3> Select How to Interpret the Data</h3>\n\t\t\t<button type="button" class="btn btn-primary btn-lg analysis-output-btn" ng-click="onTableClick()">Table</button>\n\t\t\t<button type="button" class="btn btn-primary btn-lg analysis-output-btn" ng-click="onGraphClick()">Graph</button>\n\t\t</div>\n\t\t<hr>\n\t</div>\n\n\t<div id="analysis-tables">\n\t\t<div id="stocks" class="panel panel-default analysis-table">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t  \t\t<a class="storage-modal-header" ng-click="modals.stocks = !modals.stocks">Stock Portfolio\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.stocks"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.stocks"></span>\n\t\t  \t\t</a>\n\t\t  \t\t\n\t\t\t\t<div class="content" ng-show="modals.stocks">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a stock portfolio.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t  </div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="savings-account" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t<div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.savings = !modals.savings">Savings Account\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.savings"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.savings"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.savings">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="401K" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.fourk = !modals.fourk">401K Account\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.fourk"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.fourk"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.fourk">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="roth-401k" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t<div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.rothfourk = !modals.rothfourk">Roth 401K Account\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.rothfourk"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.rothfourk"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.rothfourk">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="ira" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.ira = !modals.ira">Individual Retirement Account (IRA)\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.ira"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.ira"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.ira">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="roth-ira" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t<div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.rothira = !modals.rothira">Roth Individual Retirement Account (Roth IRA)\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.rothira"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.rothira"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.rothira">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="universal-life" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.ul = !modals.ul">Universal Life Insurance\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.ul"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.ul"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.ul">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="ul-trust" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t\t\t<a class="storage-modal-header" ng-click="modals.uldynasty = !modals.uldynasty">Universal Life Insurance & Dynasty Trust\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-bottom" ng-hide="modals.uldynasty"></span>\n\t\t\t  \t\t<span class="glyphicon glyphicon-triangle-top" ng-show="modals.uldynasty"></span>\n\t  \t\t\t</a>\n\n\t  \t\t\t<div class="content" ng-show="modals.uldynasty">\n\t                <div><strong>Overview</strong></div>\n\t                <p class="text"><small>This is a synopsis of a savings account.</small></p>\n\t                <div><strong>Taxes</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t  \t\t</section>\n\t  \t</div>\n\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\t</div>\n\n\t<div id="analysis-graphs" ng-hide="analysisGraph">\n\t\t<div class="analysisGraph">Graphs</div>\n\t</div>\n\n</section>\n\n<div id="footer">\n\t\t<p id="disclaimer">\n\t\t\tThese calculators are designed to be informational and educational tools only, and when used alone, do not constitute investment advice. We strongly recommend that you seek the advice of a financial services professional before making any type of investment. We also encourage you to review your investment strategy periodically as your financial circumstances change. This model is provided as a rough approximation of future financial performance. The results presented by this calculator are hypothetical and may not reflect the actual growth of your own investments. Millennial Falcon and its affiliates are not responsible for the consequences of any decisions or actions taken in reliance upon or as a result of the information provided by these tools. Millennial Falcon is not responsible for any human or mechanical errors or omissions.\n\n\t\t</p>\n</div>\n';

}
return __p
};