A = [1, 3, -1, -3, 5, 3, 6, 7]
let B 

let arr = []
if(!B){return A}
let ans = []
for(let i = 0 ; i <= A.length ;i++ ){
    if(arr.length == B){
        let num = Math.max(...arr)
        ans.push(num)
        arr.splice(0,1)
    }
    arr.push(A[i])
}
// return ans
console.log(ans)