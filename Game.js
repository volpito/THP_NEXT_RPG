//Bienvenue dans notre RPG maison !

class Game {
  constructor(paladin, fighter, monk, turnLeft = 10) {
    this.paladin = paladin;
    this.fighter = fighter;
    this.monk = monk;
    this.turnLeft = turnLeft;
  }

  newTurn = () =>{
    gaming.startTurn();
    this.turnLeft--;
  }
}

const game1 = new Game (paladin, fighter, monk);
const fighters = [paladin, fighter, monk]

