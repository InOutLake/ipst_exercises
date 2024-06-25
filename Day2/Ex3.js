const { readline_for } = require('../input');

/* input format is 'dd.MM.yyyy'*/

const SEASONS = {
    0: 'winter',
    1: 'spring',
    2: 'summer',
    3: 'fall',
    4: 'winter',
}

function explain_date(s) {
    s = s.split('.');
    const month = s[1];
    const year = s[2];

    return SEASONS[Math.floor(month/3)] + " " + (year%4 == 0 ? 'leap year' : 'non-leap year')
}

readline_for(explain_date)