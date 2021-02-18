module.exports = function reverse(n) {
    let arr = Math.abs(n).toString().split("").reverse();
    if (arr[0] == "0") {
        arr.splice(0, 1);
    }
    return arr.join("");
}
