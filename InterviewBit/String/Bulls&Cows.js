A = "1807"
B = "7810"

A = A.split("")
B = B.split("")

let bulls = 0
let cows = 0

let str = ""

for(let i = 0 ;i< A.length ;i++){
    let num = i
    if(A[i] == B[i]){
        A.splice(i,1)
        B.splice(i,1)
        bulls++
        i = num-1
    }
}

str += bulls
str += "A"

// console.log(A)

for (let i = 0 ; i < A.length ;i++){
    let num = i
    for(let j = 0 ; j < B.length ;j++){
        if(A[i] == B[j]){
            A.splice(i,1)
            B.splice(j,1)
            cows++
            i = num - 1
            break
        }
    }
}
str += cows
str += "B"

return str
console.log(str)
