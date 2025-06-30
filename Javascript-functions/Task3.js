function findAverage(arr) {
    let s = 0;
    arr.forEach(function(num) {
        s += num;
    });
    return s / arr.length;
}

console.log(findAverage([1,2,3])) // Average: 2
console.log(findAverage([15,25,10,30])) // Average: 20