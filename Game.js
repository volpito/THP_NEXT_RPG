//Bienvenue dans notre RPG maison !

class Game {
  constructor(paladin, fighter, monk, assassin, berzerker, turnLeft = 10) {
    this.paladin = paladin;
    this.fighter = fighter;
    this.monk = monk;
    this.assassin = assassin;
    this.berzerker = berzerker;
    this.turnLeft = turnLeft;
  }

  newTurn = () =>{
    gaming.startTurn();
    this.turnLeft--;
  }
}

const game1 = new Game (paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker]

