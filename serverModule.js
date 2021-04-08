const event = require('Events');
const primeTest = new event();



function primeCheck(num) {
    for(let x=2;x<=Math.sqrt(num); x++) {
        if(num % x == 0)
            return false;
    } return true;
}


module.exports.primeFinder = function (low, high) {
    if(high < low || high < 2) {
        primeTest.emit("Error");
        return; }

    let coverage = 0;
        for(let x = low; x <= high; x++) {
            if(primeCheck(x)) {
                coverage = Math.round(((x-low) * 100)/(high - (low-1)));
                if(coverage > 100)
                    coverage =100;
                    primeTest.emit("primeFound", x, coverage);
                if(coverage >= 100)
                    clearInterval();
            }
        }
}


exports.primeEvent = primeTest;