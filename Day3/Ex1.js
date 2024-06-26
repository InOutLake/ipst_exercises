arr = [6,1,7,3,5,8,0,-1,3,2,4,5];
find_num = 0;


function simple_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                min = j;
            };
        };
    
        [arr[i], arr[min]] = [arr[min], arr[i]];
    };
    return arr;
};

function binary_search(arr, find_num) {
    if (arr.length == 0) return null;
    if (arr.length == 1) return 1;
    let left = 0;
    let right = arr.length;

    while (left < right) {
        let mid = Math.floor((right - left) / 2);

        if (arr[mid] < find_num) {
            left = mid - 1;
        }
        if (arr[mid] > find_num) {
            right = mid + 1;
        }
        if (arr[mid] === find_num) {
           return mid;
        }
    };
};


arr = simple_sort(arr);
console.log(arr);
console.log(`${find_num} index is ${binary_search(arr, find_num)}`)
