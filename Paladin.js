//Bienvenue dans notre RPG maison !

class Paladin extends Character {
  constructor(name, hp = 10, dmg = 2) {
    super(hp, dmg);
    this.name = name;
  }
}

const player1 = new Paladin("Michel");
const player2 = new Paladin("Micheline", 10, 1);
const player3 = new Paladin("DUCON", 100, 6);

let fighters = [player1, player2, player3];

