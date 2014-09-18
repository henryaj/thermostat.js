function Thermostat(){
	this.temperature = 20;
	this.powerSaving = true;
}

Thermostat.prototype.powerSavingOff = function() {
	this.powerSaving = false;
};

Thermostat.prototype.maxTemperature = function() {
	if(this.powerSaving === true) return 25;
	return 32;
};



