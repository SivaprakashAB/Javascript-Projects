//document.getElementById("count-el").innerText = 5

//let count = 0

//console.log(count)

// 1.create a variable , myAge and set its value to value age
// let myAge = 25

// 2. log the myAge variable to the console
// console.log(myAge)

// let firstbatch = 5
// let secondbatch = 10
// count = firstbatch + secondbatch
// console.log(count)

// 1.create two variables myAge and human
// 2.Multiply the two together and store the result in myDog
// 3.log myDog to the console

// let myAge = 2
// let human = 3
// let myDog = myAge + human
// console.log(myDog)

// newly alteration is printed
// let count = 50
// count = count + 50
// count = count - 75
// count = count + 45
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to relect the new count

let count = 0
function increment() {
    count += 1
    document.getElementById("count-el").textContent = count;
}

// THE DOM  - how you use Javascript to modify a website
function save(){
    let countstr = count + " - "
    document.getElementById("save-el").textContent += countstr
    document.getElementById("count-el").textContent = 0
    count = 0
}

//string
// let username = "per"
// let message = "you have tree new notifications"
// let messageToUser = message + " " + username + "!"
// console.log(messageToUser)
// output = you have tree new notifications per!
