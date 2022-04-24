// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength

  }

  recieveDamage(damage) {
    this.health = this.health - damage
  }

}

// Viking
class Viking {}

// Saxon
class Saxon {}

// War
class War {}

// console.log("Hi")

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
