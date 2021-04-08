class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, status = "playing") {
    super(hp, dmg, status);
    this.name = name;
  }
}

const berzerker = new Berzerker("Draven");