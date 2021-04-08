//Bienvenue dans notre RPG maison !

class Turn extends Game {
  constructor(turnLeft, paladin, fighter, monk) {
    super(paladin, fighter, monk, turnLeft)
  }


  startTurn = () => {
   
    
      const fighter = fighters.filter(a => a.status != "loser");

      let perso = fighter[Math.floor(Math.random() * fighter.length)];

      const pick = fighter.filter(c => c.name != perso.name && c.status != "loser");
      
      const name = pick.map(a => a.name);
      
      console.log("")
      console.log(`Round numéro ${this.turnLeft}`)
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
            
          }
        }
      
      }
      
  }
  

  const gaming = new Turn();
  for(i = 0; i < 10; i++){
  gaming.newTurn();
  }