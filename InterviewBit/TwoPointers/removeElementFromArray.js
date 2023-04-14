A = [4, 1, 1, 2, 1, 3]
let B  



for(let i = 0 ; i < A.length ;i++){
    if(A[i] == B){
        A.splice(i,1)
        i--
    }
}
return A
console.log(A)