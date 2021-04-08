//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnCount, paladin, fighter, monk) {
    super(paladin, fighter, monk)
    this.turnCount = turnCount
  }

  fight = (paladin, fighter, monk) => {
    for(this.turnCount = 1; this.turnCount <= 10;this.turnCount++){

      const fighter = fighters.filter(a => a.status != "loser");

      let perso = fighter[Math.floor(Math.random() * fighter.length)];

      const pick = fighter.filter(c => c.name != perso.name && c.status != "loser");
      
      const name = pick.map(a => a.name);
      
      console.log("")
      console.log(`Round numéro ${this.turnCount}`)
      console.log("")
      console.log(`Pour ce tour tu vas incarner ${perso.name}`);
      console.log(`Choisi ta prochaine victime: ${name} ?`);
      console.log("")

//Conditions de mise en place d'un attaquant et d'une victime

      let foo = prompt(`Quel combattant choisis-tu d attaquer ? ${name} ?`);
      
      console.log(`Attaque éclair de ${perso.name} de ${perso.dmg} sur la victime ${foo}`)
      
      let victime = fighter.filter(d => d.name == foo);
      const others = fighter.filter(e => e.name != foo);

        perso.dealDamage(victime[0]);
        console.log(victime[0].name + " a désormais " + victime[0].hp + " HP ! BIM")
        if (victime[0].hp <= 0){
          victime[0].status = "loser";
          console.log(`${victime[0].name} est mort !`)
//$$$$$$$$$$$$$$$$ rajoute une boucle ici avec un [i] < others.length ? $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
          if (others[0].hp <= 0 || others[1].hp <= 0){
            break;
          }
        }
      }
    }
  }

      
      /*if (game1.firstPlayer.name == foo){

//Conditions de sélection d'un joueur à attaquer
     
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


