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

	describe("Limits", function(){
		it('in power saving mode, max temp is 25º', function(){
			expect(thermostat.maxTemperature()).toBe(25);
		})

		it('in normal mode, max temp is 32º', function(){
			thermostat.powerSavingOff();
			expect(thermostat.maxTemperature()).toBe(32);
		})
	})
})