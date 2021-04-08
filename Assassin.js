class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, status = "playing") {
    super(hp, dmg, status);
    this.name = name;
  }
}

const assassin = new Assassin("Carl");