//Bienvenue dans notre RPG maison !

class Paladin extends Character {
  constructor(name, hp = 16, dmg = 4) {
    super(hp, dmg);
    this.name = name;
  }
}

const paladin = new Paladin("Ulder");



