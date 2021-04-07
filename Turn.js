//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnCount, firstPlayer, secondPlayer) {
    super(firstPlayer, secondPlayer)
    this.turnCount = turnCount
  }
}

const gaming = new Turn("0");