const { readline_for } = require('../input');

function mirror_and_add(s) {
    return s + s.split('').reverse().slice(1).join('');
}

readline_for(mirror_and_add)