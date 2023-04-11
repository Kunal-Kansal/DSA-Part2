A = "abbhuabcfghh"

let mp = new Map

for(let i = 0 ; i < A.length ;i++){
    if(mp.has(A[i])){
        mp.set(A[i],mp.get(A[i])+1)
    }
    else{
        mp.set(A[i],1)
    }
}
let arr = []


mp.forEach((key,value) => arr.push(value,key))

 let ans = arr.join("")


return ans
console.log(ans)