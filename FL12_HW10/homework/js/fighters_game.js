const maxProbability = 100;
function Fighter({name, damage, hp, strength, agility}){
    let fighter = {name:  name,
                    damage: damage,
                    hp: hp,
                    strength: strength,
                    agility: agility,
                    wins: 0,
                    losses: 0,
                    currentHp: hp};
    return {
        getMaxHp: function () {
            return fighter.hp;
        },
        getName: function () {
            return fighter.name;
        },
        getDamage: function () {
            return fighter.damage;
        },
        getStrength: function () {
            return fighter.strength;
        },
        getAgility: function () {
            return fighter.agility;
        },
        getHealth: function () {
            return fighter.currentHp;
        },
        getWins: function () {
            return fighter.wins;
        },
        getLosses: function () {
            return fighter.losses;
        },
        setHealth: function (health){
            fighter.currentHp = health;
        },
        setWins: function (newWins){
            fighter.wins = newWins;
        },
        setLosses: function (newLoss) {
            fighter.losses = newLoss;
        },
        attack: function (defender) {
            let probabilityOfSuccessfulAttack = maxProbability - (defender.getStrength() + defender.getAgility());
            let randomNumber = Math.round(Math.random() * maxProbability);
            if (randomNumber < probabilityOfSuccessfulAttack) {
                defender.dealDamage(this.getDamage());
                console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + defender.getName());
            } else {
                console.log(this.getName() + ' attack missed');
            }
        },
        logCombatHistory: function () {
            console.log('Name: ' + this.getName(), 'Wins: ' + this.getWins(), 'Losses: ' + this.getLosses());
        },
        heal: function (amountOfHealthPoints) {
            this.setHealth(this.getHealth() + amountOfHealthPoints);
            if (this.getHealth() > this.getMaxHp()) {
                this.setHealth(this.getMaxHp());
            }
        },
        dealDamage: function (amountOfHealthPoints) {
            this.setHealth(this.getHealth() - amountOfHealthPoints);
            if (this.getHealth() < 0) {
                this.setHealth(0);
            }
        },
        addWin: function () {
            this.setWins(this.getWins() + 1);
        },
        addLoss: function () {
            this.setLosses(this.getLosses() +1);
        }
    }
}

function battle(myFighterObject, myFighterObject2) {
   if (myFighterObject.getHealth() === 0) {
        console.log(`${myFighterObject.getName()} is dead and can't fight`);
    } else if (myFighterObject2.getHealth() === 0) {
        console.log(`${myFighterObject2.getName()} is dead and can't fight`);
    } else {
        do{
            myFighterObject.attack(myFighterObject2);
            if (myFighterObject2.getHealth() === 0) {
                break;
            }
            myFighterObject2.attack(myFighterObject);
        } while (myFighterObject.getHealth() > 0);
        if (myFighterObject.getHealth() === 0) {
            console.log(`${myFighterObject2.getName()} has won!`);
            myFighterObject2.addWin();
            myFighterObject.addLoss();
        } else {
            console.log(`${myFighterObject.getName()} has won!`);
            myFighterObject.addWin();
            myFighterObject2.addLoss();
        }
    }
}
