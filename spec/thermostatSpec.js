describe("Thermostat", function() {
	var thermostat;

	beforeEach(function(){
		thermostat = new Thermostat;
	});

	describe("Thermostat by default", function(){
		it('is set to 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20);
		})

		it('is in power saving mode', function(){
			expect(thermostat.powerSaving).toBe(true);
		})
	})
})