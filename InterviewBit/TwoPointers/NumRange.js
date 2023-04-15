A = [10, 5, 1, 0, 2]
B = 6
C = 8

// A = A.sort((a,b)=>a-b)

// for(let i = 0 ; i < A.length ;i++){
//     if( A[i] > C){
//         A.splice(i,A.length-i)
//         break
//     }
// }
// // console.log(A)
// let count = 0
// let arr = []
// let sum = 0
// for(let i = 0;i < A.length ;i++){
//     for(let j = i ; j < A.length ;j++){

//     }
// }
// // console.log(arr)

let i = 0
let j = 0
let sum = 0
let count = 0
while(i<A.length){
    sum+= A[j]
    if(sum >= B && sum <= C){
        count++
        j++
    }
    else if(sum < B){
        j++
    }
    else if(sum >C){
        i++
        j = i
        sum = 0
    }
    if(j== A.length ){
        sum = 0
        i++
        j = i
    }
}
return count
console.log(count)