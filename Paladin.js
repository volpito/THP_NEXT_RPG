//Bienvenue dans notre RPG maison !

class Paladin extends Character {
  constructor(name, hp = 10, dmg = 2) {
    super(hp, dmg);
    this.name = name;
  }
}

const player1 = new Paladin("Michel");
const player2 = new Paladin("Micheline");


