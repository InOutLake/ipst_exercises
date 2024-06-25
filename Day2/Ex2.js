const { readline_for_int } = require('../input')

function fibonacci(n) {
    let series = [1, 2];
    let i = 1 
    for (let i = 1; series[i] < n; i++) {
        series.push(series[i] + series[i - 1]);
    }
    series.pop()
    return series;
}

readline_for_int(fibonacci)