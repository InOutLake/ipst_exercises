const { readline_for } = require('../input');

function extract_unique_characters(s) {
    let unique_chars = new Set();
    for (let i = 0; i < s.length; i++) {
        unique_chars.add(s[i].toUpperCase());
    };
    return Array.from(unique_chars).join("");
}

readline_for(extract_unique_characters)