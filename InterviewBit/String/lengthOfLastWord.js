A = "dsdd"

A = A.split(" ")

if(A == ""){
    return 0
}

if(A[A.length - 1] == ""){
    A.pop()
}

let ans = A[A.length -1].length

return ans
console.log(ans)
