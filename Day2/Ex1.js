const { readline_for_int } = require('../input')

function eratoshphene(n) {
    n += 1
    let boolPrimes = Array.from({length: n}, () => 1)
    let primes = []
    for (let i = 2; i < n/2; i++) {
        if (boolPrimes[i]) {
            for (let j = i*2; j < n; j += i) {
                boolPrimes[j] = 0
            }        
        }
    }
    for (let i = 1; i < n; i++) {
        boolPrimes[i] ? primes.push(i) : null;        
    }
    return primes;
};

readline_for_int(eratoshphene)