var Shop = require('./shop.js')
var Ship = require('./ship.js')



class Planet {
  constructor (planet, initCoordinates) {
  this.name = planet.name,
  this.shop = planet.shop,
  this.coordinates = planet.coordinates


var coordinates = function(x, y, z) {
  x = this.x
  y = this.y
  z = this.y
  } 
var newCoordinates = function(x, y, z) {
  x = this.x
  y = this.y
  z = this.z
}
}

 calculateDistance(otherPlanet) {
  var distance = Math.sqrt(
    (Math.pow((otherPlanet.newCoordinates.x - planet.coordinates.x), 2))
    + (Math.pow((otherPlanet.newCoordinates.y - planet.coordinates.y), 2))
    + (Math.pow((otherPlanet.newCoordinates.z - planet.coordinates.z), 2)) )
  return distance
}
}

 
  
















module.exports = Planet;