//Bienvenue dans notre RPG maison !

class Character {
  constructor(hp, dmg, status) {
    this.hp = hp;
    this.dmg = dmg;
    this.status = status;
  }

  takeDamage = (damage) => {
    if (this.hp > 0){
      this.hp = this.hp - damage;
    } else {
      //this.status = "loser";
      console.log(`Vous ne pouvez pas taper ${this.name} car il a été tué`)
    }
  }

  dealDamage = (victim) => {
    if (this.status != "loser"){
      victim.takeDamage(this.dmg);
    }
  }
}
