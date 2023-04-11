A = "01"
B = "1"

A = A.split(".")
B = B.split(".")

let max = Math.max(A.length,B.length)

for(let i = 1 ;i < max ;i++){
    if(A.length < max){
        A.push("0")
    }
    else if(B.length < max){
        B.push("0")
    }
}
A = A.map(Number)
B = B.map(Number)

for(let i = 0 ; i < A.length ; i++){
    if(A[i] == B[i]){
        if(A.length-1 == i){
            ans = 0
        }
        continue}
    if(A[i] > B[i]){ans = 1}
    if(A[i] < B[i]){ans = -1}
}
return ans
console.log(ans)