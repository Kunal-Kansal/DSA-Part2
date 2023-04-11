A = 'scaler'
B = 'relasc'

A = A.split("")
B = B.split("")

A.sort()
B.sort()

A = A.join("")
B = B.join("")

// console.log(A)

if(A == B){return 1}
return 0

if(A == B){console.log(1)}
else{
    console.log(0)
}