//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnCount, firstPlayer = player1, secondPlayer = player2) {
    super(firstPlayer, secondPlayer)
    this.turnCount = turnCount
  }

  fight = (firstPlayer, secondPlayer) => {
    for(this.turnCount = 1; this.turnCount <= 10;this.turnCount++){
    secondPlayer.hp = secondPlayer.hp - firstPlayer.dmg;
    firstPlayer.hp = firstPlayer.hp - secondPlayer.dmg;
    if (firstPlayer.hp <= 0){
      console.log("Player 1 Dead")
      break
      
    }
    if (secondPlayer.hp <= 0){
      console.log("Player 2 Dead")
      break
    }
    console.log(`Round numéro ${this.turnCount}`)
    console.log(`${firstPlayer.name} inflige ${firstPlayer.dmg} de dégats à ${secondPlayer.name} à qui il reste ${secondPlayer.hp} de hp`);
    console.log(`${secondPlayer.name} inflige ${secondPlayer.dmg} de dégats à ${firstPlayer.name} à qui il reste ${firstPlayer.hp} de hp`);
    }
}
}



