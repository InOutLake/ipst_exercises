class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }
    
    ucFirst(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    }
}

ms = new MyString();
console.log(ms.ucWords('This is a test case'));