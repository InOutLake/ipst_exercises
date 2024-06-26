obj = { a: 1, b: 2 }
console.log(Object.entries(obj));


function entries(obj) {
    result = [];
    for (var key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}
console.log(entries(obj));