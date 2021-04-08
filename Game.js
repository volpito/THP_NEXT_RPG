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

  watchStats = () =>{
    console.log("");
    if(paladin.status == "loser"){
      console.log("le paladin " + paladin.name + " is 👻👻👻")
    } else{
      console.log("le paladin " + paladin.name + " à "+ paladin.hp + " HP 😀")
    }
    
    if(monk.status == "loser"){
      console.log("le monk " + monk.name + " is 👻👻👻")
    } else{
      console.log("le monk " + monk.name + " à "+ monk.hp + " HP 😀")
    }

    if(assassin.status == "loser"){
      console.log("l'assassin " + assassin.name + " is 👻👻👻")
    } else{
      console.log("l'assassin " + assassin.name + " à "+ assassin.hp + " HP 😀")
    }

    if(berzerker.status == "loser"){
      console.log("le berzerker " + berzerker.name + " is 👻👻👻")
    } else{
      console.log("le berzerker " + berzerker.name + " à "+ berzerker.hp + " HP 😀")
    }

    if(fighter.status == "loser"){
      console.log("le fighter " + fighter.name + " is 👻👻👻")
    } else{
      console.log("le fighter " + fighter.name + " à "+ fighter.hp + " HP 😀")
    }
  }
}

const game1 = new Game (paladin, fighter, monk, assassin, berzerker);
const fighters = [paladin, fighter, monk, assassin, berzerker]

