let A = 'interviewbit12~'

// A = A.split("~")

// A.pop()

let arr = []
let str = ""
let num = ""
for(let i = 0 ; i < A.length ;i++){
    if(A[i].charCodeAt(0) > 47 && A[i].charCodeAt(0) < 58){  
        num += A[i]
        if(str.length == num){
            arr.push(str)
            continue
        }
        else{
            continue
        }
    }
    if(A[i] == "~"){
        num = ""
        str = ""
        continue
    }
    str += A[i]
}
// if(console.log("9".charCodeAt(0)))
// if(typeof 1 == "number"){console.log(true)}
return arr
console.log(arr)