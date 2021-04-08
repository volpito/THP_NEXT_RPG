class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, status = "playing") {
    super(hp, dmg, status);
    this.name = name;
  }
}

const player4 = new Berzerker("Draven");