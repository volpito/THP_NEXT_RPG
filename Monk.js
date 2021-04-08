class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, status = "playing") {
    super(hp, dmg, status);
    this.name = name;
  }
}

const monk = new Monk("Moana");