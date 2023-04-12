A = "qxkpvo  f   w vdg t wqxy ln mbqmtwwbaegx   mskgtlenfnipsl bddjk znhksoewu zwh bd fqecoskmo"
A = A.split(" ")

let arr = []

for(let i = 0 ; i < A.length ;i++){
    let num = i
    if(A[i] == ""){
        A.splice(i,1)
        i = num-1
    }
}

for(let i = A.length-1 ;i >= 0 ;i-- ){
    arr.push(A[i])
}

arr = arr.join(" ")
return arr
console.log(arr)