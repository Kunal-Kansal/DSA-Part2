A = [ -259, -825, 459, 825, 221, 870, 626, 934, 205, 783, 850, 398 ]
B = -42
A = A.sort((a, b) => a - b)
let flag = false
// // console.log(A)
// for (let i = 0; i < A.length; i++) {
//     for (let j = i + 1; j < A.length; j++) {
//         let ans = Math.abs(A[i] - A[j])
//         if (ans == Math.abs(B)) {
//             flag = true
//             break
//         }
//         else { continue }
//         // console.log(ans)
//     }
// }
// // if(flag == true){return 1}
// // else{return 0}
// console.log(flag)
let arr = []
for(let i = 0 ; i < A.length-1 ;i++){
    arr.push(A[i+1] - A[i])
}
for(let i = 0 ; i < arr.length ;i++){
    if(arr[i] == Math.abs(B)){
        flag = true
    }
}
let sum = arr[0]
let arr1 = []
for(let i = 1 ; i< arr.length ;i++){
    if(sum == Math.abs(B) && flag == false){
        flag = true
        break
    }
    sum += arr[i]
    arr1.push(sum)
}
sum = arr[arr.length -1]
let arr2 = []
for(let i = arr.length -2 ;i>= 0 ;i--){
    if(sum == Math.abs(B) && flag == false){
        flag =true
        break
    }
    sum += arr[i]
    arr2.push(sum)
}

console.log(flag)