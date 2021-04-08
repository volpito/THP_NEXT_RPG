//Bienvenue dans notre RPG maison !

class Character {
  constructor(hp, dmg) {
    this.hp = hp;
    this.dmg = dmg;
  }

  takeDamage = (damage) => {
    if (this.hp > 0){
      this.hp = this.hp - damage;
    } else {
      console.log(`vous ne pouvez pas taper ${this.name} car il a été tué`)
    }
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.dmg);
  }
}
