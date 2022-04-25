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
    viking = new Viking()
    this.vikingArmy = this.vikingArmy.push()

  }

  addSaxon(saxon) {
    saxon = new Saxon()
    this.saxon = this.saxonArmy.push(saxon)

  }

  vikingAttack() {

  }


  saxonAttack() {


  }


  showStatus() {


  }


}

// console.log("Hi")

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
