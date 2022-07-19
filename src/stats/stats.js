exports.max = numbers => Math.max(...numbers);
exports.min = numbers => Math.min(...numbers);
exports.avg = numbers => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return (sum / numbers.length);
}
exports.sort = numbers => numbers.sort((a, b) => a - b);
exports.getOddCnt = numbers => numbers.filter((val) => val % 2 == 1).length;
exports.median = numbers => {
    const middle = Math.floor(numbers.length / 2);  // 내림
    if (numbers.length % 2 == 1) { // 홀수
        return numbers[middle];
    } else { // 짝수
        return (numbers[middle - 1] + numbers[middle]) / 2;
    }
}