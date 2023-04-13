A = [1, 2, 2, 3, 1]

let mp = new Map()

for(let i = 0 ; i < A.length ;i++){
    if(mp.has(A[i])){
        mp.set(A[i] , mp.get(A[i]) + 1 )
    }
    else{
        mp.set(A[i],1)
    }
}
let ans 
for(let i = 0 ; i < A.length ;i++){
    if(mp.get(A[i]) == 1 ){
        ans = A[i]
    }
}
return ans
console.log(ans)