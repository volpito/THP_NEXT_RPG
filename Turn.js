//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnCount, firstPlayer = player1, secondPlayer = player2) {
    super(firstPlayer, secondPlayer)
    this.turnCount = turnCount
  }

  fight = (firstPlayer, secondPlayer) => {
    secondPlayer.hp = secondPlayer.hp - firstPlayer.dmg;
    firstPlayer.hp = firstPlayer.hp - secondPlayer.dmg;
    this.turnCount++;
    console.log(`${firstPlayer.name} inflige ${firstPlayer.dmg} de dégats à ${secondPlayer.name} à qui il reste ${secondPlayer.hp} de hp`);
    console.log(`${secondPlayer.name} inflige ${secondPlayer.dmg} de dégats à ${firstPlayer.name} à qui il reste ${firstPlayer.hp} de hp`);
}
}



