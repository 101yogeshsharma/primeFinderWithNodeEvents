const serverModule = require('./serverModule.js');
const primeFinder = serverModule.primeEvent;

let primes = [];

primeFinder.on("primeFound", (prime, percentage) => {
    console.info(`${"*".repeat(percentage)} ${percentage}`);
    primes.push(prime);
    
});

primeFinder.on("Error", ()=> console.log("Invalid Values Passed"));





serverModule.primeFinder(10, 20);
console.info(`${"*".repeat(100)} ${100}`);
console.table(primes);


