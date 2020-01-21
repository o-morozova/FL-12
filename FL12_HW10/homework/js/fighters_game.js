const maxProbability = 100;
class Fighter {
    constructor(){
        this._name = arguments[0].name;
        this._damage = arguments[0].damage;
        this._totalHp = arguments[0].hp;
        this._strength = arguments[0].strength;
        this._agility = arguments[0].agility;
        this._currentHp = this._totalHp;
        this._wins = 0;
        this._losses = 0;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._currentHp;
    }
    attack(defender) {
        if (!(defender instanceof Fighter)) {
            console.log('Error. This function requires an object of the Fighter class');
        } else {
            let probabilityOfSuccessfulAttack = maxProbability - (defender.getStrength() + defender.getAgility());
            let randomNumber = Math.round(Math.random() * maxProbability);
            if (randomNumber < probabilityOfSuccessfulAttack) {
                defender.dealDamage(this._damage);
                console.log(this._name + ' makes ' + this._damage + ' damage to ' + defender.getName());
            } else {
                console.log(this._name + ' attack missed');
            }
        }
    }
    logCombatHistory() {
        console.log('Name: ' + this._name, 'Wins: ' + this._wins, 'Losses: ' + this._losses);
    }
    heal(amountOfHealthPoints) {
        this._currentHp += amountOfHealthPoints;
        if (this._currentHp > this._totalHp) {
            this._currentHp = this._totalHp;
        }
    }
    dealDamage(amountOfHealthPoints) {
        this._currentHp -= amountOfHealthPoints;
        if (this._currentHp < 0) {
            this._currentHp = 0;
        }
    }
    addWin() {
        this._wins += 1;
    }
    addLoss() {
        this._losses += 1;
    }
}

function battle(myFighterObject, myFighterObject2) {
    if (!(myFighterObject instanceof Fighter) || !(myFighterObject2 instanceof Fighter)){
        console.log('Error. This function requires 2 objects of the Fighter class');
    } else if (myFighterObject.getHealth() === 0) {
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

const myFighterObject = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25});
const myFighterObject2 = new Fighter({name: 'Commodus', damage: 21, hp: 95, strength: 40, agility: 35});

