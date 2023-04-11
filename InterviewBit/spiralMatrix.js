A = 
    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]

let R = A.length
let C = A[0].length
let SR = 0
let SC = 0

// console.log(C,R)

let N = R*C
let arr = []
let i
let j 
for(i = SR;i<R;){
    i = SR
    for(j = SC;j<C;){
        let k = i
        for(k ;k < R ;k++){
            arr.push(A[k][j])
            
        }
        j++
    }
    SR++
    SC++
    R--
    C--
    i = SR
}
console.log(arr)