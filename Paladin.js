//Bienvenue dans notre RPG maison !

class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, status = "playing") {
    super(hp, dmg, status);
    this.name = name;
  }
}

const paladin = new Paladin("Ulder");



