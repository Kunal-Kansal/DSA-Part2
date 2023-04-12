A = [1, 3, 4, 4, 6]
B = 4

let count = 0
for(let i = 0 ; i < A.length ;i++){
    if(A[i] <= B){count++}
}
return count
console.log(count)