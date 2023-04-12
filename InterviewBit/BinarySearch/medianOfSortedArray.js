A = [1,4,5,20]
B = [2,3]

for(let i = 0 ; i < B.length ;i++){
    A.push(B[i])
}

A = A.sort((a,b) => (a-b))

let ans 
if(A.length % 2 == 0){
    ans = A[A.length/2] + A[(A.length/2) - 1]
}
else{
    ans = A[(A.length + 1)/2 - 1]
}
// console.log(A)
console.log(ans)