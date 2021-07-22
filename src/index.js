module.exports = function reverse (n) {
    let a = (Math.abs(n).toString().split('').reverse().join(''));
    return Number(a);
}



