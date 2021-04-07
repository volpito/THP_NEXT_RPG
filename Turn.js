//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnCount, firstPlayer = player1, secondPlayer = player2, thirdPlayer = player3) {
    super(firstPlayer, secondPlayer, thirdPlayer)
    this.turnCount = turnCount
  }

  fight = (firstPlayer, secondPlayer, thirdPlayer) => {
    for(this.turnCount = 1; this.turnCount <= 10;this.turnCount++){
      let perso = fighters[Math.floor(Math.random() * fighters.length)];

      const pick = fighters.filter(c => c.name != perso.name);
      
      const name = pick.map(a => a.name);
      
      console.log("")
      console.log(`Round numéro ${this.turnCount}`)
      console.log("")
      console.log(`Pour ce tour vous allez incarner ${perso.name}`);
      console.log(`Choisi ta prochaine victime: ${name[0]} ou ${name[1]} ?`);
      console.log("")

      let foo = prompt(`Quel combattant choisissez-vous d attaquer ? ${name[0]} ou ${name[1]} ?`);
      console.log(`Attaque éclaire de ${perso.name} de ${perso.dmg} sur la victime ${foo}`)
      if (game1.firstPlayer.name == foo){
          firstPlayer.hp = firstPlayer.hp - perso.dmg;
          console.log("Ulder a désormais " + firstPlayer.hp + "HP ! BIM")
      }

      if (game1.secondPlayer.name == foo){
        secondPlayer.hp = secondPlayer.hp - perso.dmg;
        console.log("Grace a désormais " + secondPlayer.hp + "HP ! BIM")
      }

      if (game1.thirdPlayer.name == foo){
        thirdPlayer.hp = thirdPlayer.hp - perso.dmg;
        console.log("Moana a désormais " + thirdPlayer.hp + "HP ! BIM")
      }

      if (firstPlayer.hp <= 0){
        console.log("Player 1 Dead")
        break;
    }
      if (secondPlayer.hp <= 0){
        console.log("Player 2 Dead")
        break;
    }
      if (thirdPlayer.hp <= 0){
        console.log("PLayer 3 Dead")
        break;
      }
    
    }
}
}



