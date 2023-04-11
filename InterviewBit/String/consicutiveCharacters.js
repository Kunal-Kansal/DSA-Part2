let A = "aabcd"
let B = 2
// A = A.split("")
// console.log(A)

let ans = ""
for(let i = 0 ; i < A.length ;i++){
    let count = 1
    let flag = true
    let str = ""
    for(let j = 1 ; j < B ;j++){
        if(A[i] == A[i+j] && count < B){
            str += A[i] 
            count++
        }
        else{
            flag = false
            i = i+j
            ans += str 
            break
        }
    }
}
console.log(ans)