//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnCount, firstPlayer = player1, secondPlayer = player2, thirdPlayer = player3) {
    super(firstPlayer, secondPlayer, thirdPlayer)
    this.turnCount = turnCount
  }

  fight = (firstPlayer, secondPlayer, thirdPlayer) => {
    for(this.turnCount = 1; this.turnCount <= 10;this.turnCount++){
      let perso = fighters[Math.floor(Math.random() * fighters.length)];

      const pick = fighters.filter(c => c.name != perso.name && c.status != "loser");
      
      const name = pick.map(a => a.name);
      
      console.log("")
      console.log(`Round numéro ${this.turnCount}`)
      console.log("")
      console.log(`Pour ce tour tu vas incarner ${perso.name}`);
      console.log(`Choisi ta prochaine victime: ${name} ?`);
      console.log("")
//Conditions de sélection d'un joueur à attaquer
      let foo = prompt(`Quel combattant choisis-tu d attaquer ? ${name} ?`);
      console.log(`Attaque éclair de ${perso.name} de ${perso.dmg} sur la victime ${foo}`)
      if (game1.firstPlayer.name == foo && game1.firstPlayer.status != "loser"){
          firstPlayer.hp = firstPlayer.hp - perso.dmg;
          console.log("Ulder a désormais " + firstPlayer.hp + "HP ! BIM")
      }

      if (game1.secondPlayer.name == foo && game1.secondPlayer.status != "loser"){
        secondPlayer.hp = secondPlayer.hp - perso.dmg;
        console.log("Grace a désormais " + secondPlayer.hp + "HP ! BIM")
      }

      if (game1.thirdPlayer.name == foo && game1.thirdPlayer.status != "loser"){
        thirdPlayer.hp = thirdPlayer.hp - perso.dmg;
        console.log("Moana a désormais " + thirdPlayer.hp + "HP ! BIM")
      }
//conditions de fin de partie si l'un meurt
      if (firstPlayer.hp <= 0){
        console.log(`${firstPlayer.name} est mort !`)
        firstPlayer.status = "loser";
        if (secondPlayer.hp <= 0 || thirdPlayer.hp <= 0){
          break;
        }
      }
      if (secondPlayer.hp <= 0){
        console.log(`${secondPlayer.name} est mort !`)
        secondPlayer.status = "loser";
        if (firstPlayer.hp <= 0 || thirdPlayer.hp <= 0){
          break;
        }
      }
      if (thirdPlayer.hp <= 0){
        console.log(`${thirdPlayer.name} est mort !`)
        thirdPlayer.status = "loser";
        if (secondPlayer.hp <= 0 || firstPlayer.hp <= 0){
          break;
        }
      }
    }
  }
}

/* 
      const current = fighters.filter(d => d.name == foo);
      const other = fighters.filter(e => e.name != foo);
      
      if (current.hp <= 0){
        console.log(`${current.name} est mort !`)
        if (other[0].hp <= 0 || other[1].hp <= 0){
          break;
        }
      }
    }
  }
}
*/


