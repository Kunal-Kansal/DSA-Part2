A = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ]

// let mp = new Set()
// for(let i = 0 ; i < A.length ;i++){
//     if(mp.has(A[i])){continue}
//     else{
//         mp.add(A[i])
//     }
// }
// // return mp.size
// console.log(mp.size)

// for(let i = 0 ; i < A.length ;i++){
//     let nums = i
//     if(A[i] == A[i+1]){
//         A.splice(i,1)
//         i = nums-1
//     }
// }

// return A.length


for(let i = 0 ; i < A.length ; i++){
    if(A[i] == A[i+1]){
        A.splice(i,1)
        i--
    }
    else{
        continue
    }
}
// return count
console.log(A)