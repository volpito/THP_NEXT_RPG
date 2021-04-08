class Monk extends Character {
  constructor(name, hp = 8, dmg = 2) {
    super(hp, dmg);
    this.name = name;
  }
}

const monk = new Monk("Moana");