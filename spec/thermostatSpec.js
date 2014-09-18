describe("Thermostat", function() {
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat;
	});

	describe("Thermostat by default", function(){
		it('is set to 20 degrees', function(){
			console.log(thermostat);
			console.log(thermostat.temperature);
			expect(thermostat.temperature).toEqual(20);
		})
	})
})