class Fighter extends Character {
  constructor(name, hp = 16, dmg = 3, status = "playing") {
    super(hp, dmg, status);
    this.name = name;
  }
}

const player2 = new Fighter("Grace");