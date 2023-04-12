A = [   [1, 3, 5],
        [2, 6, 9],
        [3, 6, 9]   ]
let arr = []
for(let i = 0 ; i < A.length ;i++){
    arr.push(...A[i])
}
arr = arr.sort((a,b)=>(a-b))

let ans 
if(arr.length % 2 == 0){
    ans = arr[arr.length/2] + arr[(arr.length/2) - 1]
}
else{
    ans = arr[(arr.length + 1)/2 - 1]
}
// console.log(A)
return ans
console.log(ans)
