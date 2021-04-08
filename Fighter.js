class Fighter extends Character {
  constructor(name, hp = 16, dmg = 3) {
    super(hp, dmg);
    this.name = name;
  }
}

const fighter = new Fighter("Grace");