var Part = require('./part.js')
var Being = require('./being.js')


class Ship {
  constructor(vessel) {
    this.name = vessel.name
    this.type = vessel.type 
    if(vessel.type === 'wooden' || 
      vessel.type ==='tin' ||
      vessel.type === 'plastic') {
      return this.type = undefined
    }
    this.maxCrew = vessel.maxCrew
    this.odometer = vessel.odometer || 0
    this.fuelCapacity = vessel.fuelCapacity || 10
    this.fuel = vessel.fuel || 0
    this.captain = vessel.captain
    this.crew = vessel.crew || []
    this.cargo = vessel.cargo || []
    this.parts = vessel.parts || {}
    }

  addCrew(crew) {
      for (let i = 0; i < crew.length; i++) {
        if (this.crew.length < this.maxCrew && crew[i] instanceof Being)
        this.crew.push(crew[i]) 
      // }
      }
  }


  loadCargo(partCargo) {
    if (partCargo instanceof Part) {
    this.cargo.push(partCargo)
  }
  }
  updatePart(part) {
    if(part instanceof Part && part.isValid()) {
      var firstPart = this.parts[part.type]
      var partValue = firstPart ? firstPart.value : 0
      var differenceInValues = partValue - part.value
      this.parts[part.type] = part
      return differenceInValues
    } else { 
      return {}
    }
  }
  checkReadiness(readyToFly, notes) {
    var status = {
      readyToFly: true,
      notes: 'Good to go!'
    }
   if (this.captain === undefined) {
        status.readyToFly = false
        status.notes = 'Cannot fly without a captain'
      return status
    } else if (this.fuel < 1) {
        status.readyToFly = false
        status.notes = 'Cannot fly without fuel'
      return status
   } else {
    return status
   }

 }
}






module.exports = Ship;