let A = "ABeC"

A = A.toUpperCase()

let vow = ["A","E","I","O","U"]

let count = 0

for(let i = 0 ; i < A.length ;i++){
    if(vow.includes(A[i])){count += A.length-i}
}

return count%10003
console.log(count)