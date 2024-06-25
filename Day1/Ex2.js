const { readline_for } = require('../input');

function turn_word_first_letter(s) {
    for (let word of s.split(' ')) {
        s = s.replace(word, word.charAt(0).repeat(word.length));
    }
    return s;
}

readline_for(turn_word_first_letter)