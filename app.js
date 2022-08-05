function welcome(name){
    console.log("Your first node app " + name);
}

welcome('ObiWan')




const path = require('path');

var pathObj = path.parse(__dirname);

console.log(pathObj);




// sort in MG & GB 

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);



// const fs = require('fs');

// Syncronus
// const files = fs.readdirSync('./');
// console.log(files);


// Asyncronus
// fs.readdir('./', function(err,files){

//     if(err){
//         console.log('Directory Not Found', err)
//     }else{
//         console.log('File', files);
//     }

// });




// listener

const eventEmitter = require('events');

const emitter = new eventEmitter();

// emitter.on('sentMessage', function(){
//     console.log("The message has been sent");
// });

// emitter.on('sentGreeting', function(){
//     console.log("Hello there");
// });

emitter.on('sentMessage', (arg) => {
    console.log('The message has been sent: ', arg);
});

emitter.emit('sentMessage', {id: 1, message:"Hello There"});

// emitter.emit('sentGreeting');



//Timer

setTimeout(() => {
    console.log('5 Seconds Later')
}, 5000);



// Readline 

const readline = require('readline');
const rl = readline.createInterface({input : process.stdin,
output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1 );
let num2 = Math.floor((Math.random() * 10) + 1 );
let answer = num1 + num2;

rl.question('What is ${num1} + ${num2}? \n',
(userInput) => {
    if(userInput.trim() == answer){
        rl.close();
    }
})