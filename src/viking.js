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
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
    
  }

  recieveDamage(damage) {
    this.health = this.health - damage
    if (this.health <= 0) {
      return `${this.name.toUpperCase()} has died in act of combat`
    }
    else {
      return `${this.name.toUpperCase()} has recieved ${damage} points of damage`
    }
  }

  battleCry() {
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier{

  recieveDamage(damage) {
    this.health = this.health - damage
    if (this.health <= 0) {
      return `A Saxon has died in combat`
    }
    else {
      return `A Saxon has received ${damage} points of damage`
    }



  }
  
  
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];

    
  }

  addViking(viking) {
    // const vikingname = `viking-${(Math.random()).toFixed(2) * 100}`
    const vikingname = viking
    const vikinghelth = Math.floor(Math.random() * 100)
    const vikinstrength = Math.floor(Math.random() * 100)
    viking = new Viking(vikingname, vikinghelth, vikinstrength)
    this.vikingArmy.push(viking)

  }

  addSaxon(saxon) {
    const saxonHealth = Math.floor(Math.random() * 100);
    const saxonStrength = Math.floor(Math.random() * 100)
    saxon = new Saxon(saxonHealth, saxonStrength)
    this.saxonArmy.push(saxon)

  }

  vikingAttack() {

    const attackedSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const attackedSaxon = this.saxonArmy[attackedSaxonIndex ];
    const attackerVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const attackerViking = this.vikingArmy[attackerVikingIndex];

    attackedSaxon.recieveDamage(attackerViking.strength)

    if (attackedSaxon.health <= 0) {
      this.saxonArmy.splice(attackedSaxonIndex, 1)
      return `${attackerViking.name} has dealth a damage of ${attackerViking.strength} to saxon and saxon has died`

    }
    else {
      return `${attackerViking.name} has dealth a damage of ${attackerViking.strength} to saxon and saxon is left with ${attackedSaxon.health}`
    }

    return

  }


  saxonAttack() {
    const attackedVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
    const attackedViking = this.vikingArmy[attackedVikingIndex];
    const attackerSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
    const attackerSaxon = this.saxonArmy[attackerSaxonIndex];

    attackedViking.recieveDamage(attackerSaxon.strength)

    if (attackedViking.health <= 0) {
      this.vikingArmy.splice(attackedVikingIndex, 1)
      return `Saxon has dealth a damage of ${attackerSaxon.strength} to viking and ${attackedViking.name} has died`

    }
    else {
      return `Saxon has dealth a damage of ${attackerSaxon.strength} to ${attackedViking.name} and viking is left with ${attackedViking.health}`
    }

    return



  }


  showStatus() {


  }


}


clash = new War()
clash.addViking("viking1")
clash.addViking("viking2")
clash.addViking("viking3")
clash.addSaxon("Saxon1")
clash.addSaxon("Saxon2")
clash.addSaxon("Saxon3")

// console.log("Hi")

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
