function readline_for(f) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.on('line', (input) => {
        console.log(f(input));
    });
}

exports.readline_for = readline_for

