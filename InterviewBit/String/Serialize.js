let A = ['scaler', 'academy']

let str = ""

for(let i = 0 ; i < A.length ;i++){
    str += A[i]
    str +=  A[i].length 
    str += "~"  
}
return str
console.log(str)