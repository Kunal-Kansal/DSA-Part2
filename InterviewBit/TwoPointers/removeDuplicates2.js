A = [1,1,1,2,2,2,3,4,4]

// let arr = []
// let count = 1

// // arr.push(A[0])
// for(let i = 0 ; i < A.length ;i++){
//     if(A[i] == A[i+1] && count < 2){
//         count++
//     }
//     if(A[i] != A[i+1]){
//         for(let j = 0 ; j < count ; j++){
//             arr.push(A[i])
//         }
//         count = 1
//     }
// }
// // return arr.length
// console.log(arr.length)

let count = 1
for(let i = 0 ; i < A.length ;i++){
    if(A[i] == A[i+1] && count < 3){
        if(A[i] == A[i+2]){
            i++
            count++
        }
        count++
        continue
    }
    if(A[i] == A[i+1] && count < 3){
        A.splice(i,1)
    }
    if(A[i] != A[i+1]){
        count = 0
    }
}

console.log(A)