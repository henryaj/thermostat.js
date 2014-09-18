function Thermostat(){
	this.reset();
}

Thermostat.prototype.powerSavingOff = function() {
	this.powerSaving = false;
};

Thermostat.prototype.maxTemperature = function() {
	if(this.powerSaving === true) return 25;
	return 32;
};

Thermostat.prototype.raiseTemperature = function() {
	this.temperature += 1;
};

Thermostat.prototype.lowerTemperature = function() {
	this.temperature -= 1;
};

Thermostat.prototype.reset = function() {
	// resets the temp and powersaving to default settings
	this.temperature = 20;
	this.powerSaving = true;
};


