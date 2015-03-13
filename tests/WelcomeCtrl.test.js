describe('Unit: Testing Controllers', function() {

	beforeEach(module('App'));

	it('should have a welcome conroller', function() {
		expect(App.WelcomeCtrl).not.to.equal(null);
	});
});