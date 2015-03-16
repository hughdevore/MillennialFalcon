this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/Login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Login';

}
return __p
};

this["JST"]["assets/templates/Register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Register';

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
__p += 'User - Data';

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
__p += '<section id="welcome-analysis" ng-controller="WelcomeAnalysisCtrl">\n\t<div id="analysis-menu">\n\t\t<div id="millennials">\n\t\t\t<h2>The Average Millennial</div></h2>\n\t\t\t\n\t\t</div>\n\t\t\t\n\t\t<div>\n\t\t<hr>\n\t\t\t<h2 id="menu-text">Select a Year</h2>\n\t\t</div>\n\t\t<div class="input-group" id="analysis-input">\n\t\t\t<div class="input-group-addon" id="basic-addon1">Year</div>\n\t\t\t<input ng-change="update()" ng-model="analysisYear" id="analysis-year" type="text" class="form-control" placeholder="Year for Estimation" aria-describedby="basic-addon1">\n\t\t</div>\n\t\t<hr>\n\n\t\t<div id="analysis-output">\n\t\t\t<h3> Visualize the Estimated Data</h3>\n\t\t\t<button type="button" class="btn btn-primary btn-lg analysis-output-btn" ng-click="onTableClick()">Table</button>\n\t\t\t<button type="button" class="btn btn-primary btn-lg analysis-output-btn" ng-click="onGraphClick()">Graph</button>\n\t\t</div>\n\t\t<hr>\n\t</div>\n\n\t<div id="analysis-tables">\n\t\t<div id="stocks" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">\n\t\t  \t<section class="storage-modal">\n\t\t  \t\t<a class="storage-modal-header" ng-click="onModalClick()">Stocks</a>\n\t\t\t\t<div class="content" ng-hide="modalContent">\n\t                <div><strong>Overview:</strong></div>\n\t                <p class="text"><small>This is a synopsis of stocks.</small></p>\n\t                <div><strong>Taxes:</strong></div>\n\t                <p class="text"><small>This is a synopsis of the tax ramifications on stocks.</small></p>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t  </div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="savings-account" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">Savings Account</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="401K" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">401K</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="roth-401k" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">ROTH 401K</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="ira" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">IRA</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="roth-ira" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">ROTH IRA</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="universal-life" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">Universal Life Insurance</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\n\t\t<div id="ul-trust" class="panel panel-default analysis-table" ng-show="analysisTable">\n\t\t  <!-- Default panel contents -->\n\t\t  <div class="panel-heading">Universal Life Insurance & Dynasty Trust</div>\n\n\t\t  <!-- Table -->\n\t\t  <table class="table">\n\t\t    <th class="table-header">Year</th>\n\t\t    <th class="table-header">Start of Year</th>\n\t\t    <th class="table-header">Gain/Loss</th>\n\t\t    <th class="table-header">Taxes</th>\n\t\t    <th class="table-header">End of Year</th>\n\t\t    <tr>\n\t\t    \t<td class="table-data"><strong>{{ analysisYear }}</strong></td>\n\t\t    \t<td class="table-data">{{ stockStartValue }}</td>\n\t\t    \t<td class="table-data">{{ growth }}</td>\n\t\t    \t<td class="table-data">{{ capitalGains }}</td>\n\t\t    \t<td class="table-data">{{ stockEndValue }}</td>\n\t\t    </tr>\n\t\t  </table>\n\t\t</div>\n\t</div>\n\n\t<div id="analysis-graphs" ng-hide="analysisGraph">\n\t\t<div class="analysisGraph">Graphs</div>\n\t</div>\n\n</section>\n\n<div id="footer">\n\t\t<p id="disclaimer">\n\t\t\tThese calculators are designed to be informational and educational tools only, and when used alone, do not constitute investment advice. We strongly recommend that you seek the advice of a financial services professional before making any type of investment. We also encourage you to review your investment strategy periodically as your financial circumstances change. This model is provided as a rough approximation of future financial performance. The results presented by this calculator are hypothetical and may not reflect the actual growth of your own investments. Millennial Falcon and its affiliates are not responsible for the consequences of any decisions or actions taken in reliance upon or as a result of the information provided by these tools. Millennial Falcon is not responsible for any human or mechanical errors or omissions.\n\n\t\t</p>\n</div>\n';

}
return __p
};