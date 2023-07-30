// function hourToMinutes(hours) {
//     let result = hours * 60;
//     return result;
// }

// let a = hourToMinutes(10)
// console.log(a);


// function dayToHours(days) {
//     let result2 = days * 24;
//     return result2;
// }
// let b = dayToHours(3);

// console.log(b)

// function secondsToMinutes(seconds) {
//     let result3 = seconds/60;
//     return result3;
// }

// let c = secondsToMinutes(120);
// console.log(c);

// let daystomonths = function(months) {
//     let result4 = months * 25
//     console.log(result4)
//     return result4
// }

// let d = daystomonths(3)


// let balance = 100;
// let stock = 50;
// let price = 5;



// function sellItem(quantity){
//     if(quantity <= stock) {
//         stock = stock - quantity;
//         balance = balance + price * quantity;

//         console.log('Purchase Completed', balance, stock);
//     }

//     else{
//         console.log('Boo')
//     }
// }

// sellItem(55);



//   // Create warrior and monster objects
// const warrior = {
//     attackPower: 10, // Example attack power value
//   };
  
//   const monster = {
//     health: 20, // Example initial health value
//   };


//   function attackMonster(monster, warrior) {
//     monster.health -= warrior.attackPower;
  
//     if (monster.health <= 0) {
//       console.log('The monster died!');
//     }
//   }
  
//   // Call the attackMonster function with the warrior and monster objects
//   attackMonster(monster, warrior);
//   console.log(monster.health)





//   // const attackMonster = (monster, warrior) => {
//   //   monster.health -= warrior.attackPower;
  
//   //   if (monster.health <= 0) {
//   //     console.log('The monster died!');
//   //   }
//   // };
  


//   const fighter = {
//     health: 20,
//     AP: 5,
//     Mana: 2
//   };

//   const goblin = {
//     health: 12,
//     AP: 1,
//     Mana: 1,
//   };

//   const attackGoblin = (fighter, goblin) => {
//     goblin.health -= fighter.AP 

//     if(goblin.health <= 0) {
//       console.log("the Goblin is dead")
//     }
//   }
  
//   attackGoblin(fighter, goblin);
//   attackGoblin(fighter, goblin);
//   attackGoblin(fighter, goblin);


// var maxHealth = 100;
// var health = maxHealth;
// var healthBar = document.getElementById("health");

// function decreaseHealth() {
// health -= 10;
// if (health < 0) {
//     health = 0;
// }
// updateHealthBar();

// if (health === 0) {
//     alert("The monster is dead you may now proceed forward");
// }
// }


// function updateHealthBar() {
// var healthPercentage = (health / maxHealth) * 100;
// healthBar.style.width = healthPercentage + "%";

// if (healthPercentage <= 25) {
//     healthBar.style.backgroundColor = "red";
// } else if (healthPercentage <= 50) {
//     healthBar.style.backgroundColor = "yellow";
// } else {
//     healthBar.style.backgroundColor = "green";
// }
//  }


let firstName = "Michael";
let lastName = "Cook";

let fullName = firstName +" " + lastName

console.log(fullName)




let tip = "8.50";
let total = 40;
let tax = 0;
 
let orderTotal = parseFloat(tip) + tax + total;

console.log(orderTotal)

let Michael = {
    hair: "blonde",
    skin: "white",
    eyes: "blue",
    age: 24,
    isFun: true
}
console.log(Michael.eyes)


// let x =+ 1;
// console.log(x)


// num = 19;
// result = num % 1 === 0 ? 'even' : 'odd';
// console.log(`The number is ${result}`);


// const dt = new Date();
// const month = dt.getMonth();

// let msg;
// switch (month) {
//     case 0:
//         msg = 'January 4 is National Spaghetti Day!';
//         break
//     case 1:
//         msg = "February 9 is National Pizza Day!";
//         break
//     case 2:
//         msg = "March 18th is my birthday!!";
//         break
//     case 3:
//         msg = "April 26 is National Pretzel Day!!!"
//         break
//     default:
//         msg = "No Holidays this month :(";
// }
// const el = document.getElementById('message');
// el.innerHTML = msg


let guessNumber = 0;

let numberToGuess = 71;
let guess;

do {
    guess = Math.floor(Math.random()*100);
    guessNumber++;
} while (guess != numberToGuess)

document.getElementById('root').innerHTML = `<h2> I guessed it!</h2>
<p> It only took me ${guessNumber} guesses!</p>`;
