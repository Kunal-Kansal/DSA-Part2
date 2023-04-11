let A = 4

let N = (A*2)-1
let ans = []
for(let i = 0 ; i < A ;i++){
    let arr = []
    for(let j = 0 ;j < A ;j++){
        if(j<= i){
            arr.push(A-j)
        }
        else{
            let num = j-i
            arr.push(A-j+num)
        }
    }
    for(let j = A-2 ; j >= 0 ;j--){
        if(j> i){
            let num = j -i
            arr.push(A-j+num)
        }
        else{
            arr.push(A-j)
        }
    }
    ans.push(arr)
}
for(let i = A-2 ; i >=0 ;i--){
    let arr = []
    for(let j = 0 ;j < A ;j++){
        if(j<= i){
            arr.push(A-j)
        }
        else{
            let num = j-i
            arr.push(A-j+num)
        }
    }
    for(let j = A-2 ; j >= 0 ;j--){
        if(j> i){
            let num = j -i
            arr.push(A-j+num)
        }
        else{
            arr.push(A-j)
        }
    }
    ans.push(arr)
}
return ans
console.log(ans)