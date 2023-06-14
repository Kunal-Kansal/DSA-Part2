// let A = [1,2,3]

// const swap = (A,i,j) =>{
//     let temp 
//     temp = A[i]
//     A[i] = A[j]
//     A[j] = temp
//     return A
// }

// const permutation = (arr,A,start,end)=>{
//     if(start == end){
//         arr.push(A)
//         return
//     }
//     else{
//         for(let i = start ; i <= end ;i++){
//             A = swap(A,i,start);    
//             permutation(A,start+1,end);
//             A = swap(A,i,start)
//         }
//     }
// }
// let arr = []

// permutation(arr,A,0,A.length-1)
// console.log(arr)

function permute(A, ans, arr) {
    if (A.length == 0) {
        arr.push(ans)
    }

    for (let i = 0; i < A.length; i++) {
        let ch = A[i];
        let left = A.slice(0, i);console.log(left)
        let right = A.slice(i + 1);console.log(right)
        left = left.concat(right);
        permute(left, ans.concat(ch), arr);
    }
}

// Driver Cod"e
let A = [1, 2, 3];
let ans = [];
let arr = []

permute(A, ans, arr);
return arr
console.log(arr)