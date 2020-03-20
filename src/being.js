class Being {
	constructor(name, species) {
		this.name = name
		this.isAlive = true
		this.species = species
		this.credits = 0 
		this.updateCredits = function(creditValue) {
			return (this.credits += creditValue)
		}
	}

	}




module.exports = Being;
