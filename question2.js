const A = [1, 1, 1, 1, 1, 1];
// const A = [1, 0, 1, 0, 1, 0];


var n = A.length;

console.log("length : ",n);

var result = 0;
var i;
for (i = 0; i < n - 1; i++) {
    if (A[i] == A[i + 1])
        result = result + 1;
}
console.log("initial result : ",result);

var r = -1;
for (i = 0; i < n; i++) {
    var count = 0;
    if (i > 0) {
        if (A[i - 1] != A[i])
            count = count + 1;
        else
            count = count - 1;
    }
    if (i < n - 1) {
        if (A[i + 1] != A[i])
            count = count + 1;
        else
            count = count - 1;
    }
    r = Math.max(r, count);
}
// console.log(result + r);
console.log("final : ",r);