function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumRange(1, 4));
console.log(sumRange(4, 6));
