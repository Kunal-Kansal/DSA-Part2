A = [4, 5, 6, 7, 0, 1, 2, 3]
B = 8
let ans = -1
if(A.includes(B)){
    for(let i = 0 ; i < A.length ;i++){
        if(A[i] == B){ans = i ; break}
    }
}
return ans
console.log(ans)