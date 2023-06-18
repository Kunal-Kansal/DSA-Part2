let A = 4
let B = 3

const permute = (arr,ans,str) =>{
    if(ans.length == B){
        str.push(ans)
    }

    for(let i = 0;i<arr.length ;i++){
        let left = []
        let right = arr.slice(i+1)
        left = left.concat(right)
        permute(left,ans.concat(arr[i]),str)
    }
}

let arr = []
for (let i = 1 ; i <= A ;i++){
    arr.push(i)
} 
let ans = []
let str = []
permute(arr,ans,str)
return str
console.log(str)
// console.log(arr)