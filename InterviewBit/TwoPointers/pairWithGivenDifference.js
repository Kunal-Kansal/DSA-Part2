A = [ -259, -825, 459, 825, 221, 870, 626, 934, 205, 783, 850, 398 ]
B = -42
A = A.sort((a, b) => a - b)
let flag = false
console.log(A)
for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
        if (Math.abs(A[i] - A[j]) == B) {
            flag = true
            break
        }
        else { continue }
    }
}
// if(flag == true){return 1}
// else{return 0}
console.log(flag)