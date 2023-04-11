A = 4
let num = A
let arr = []
let subarr = new Array(7).fill(num)
for(let i = num*2-1 ; i > 0 ; i--){
    [...subarr] = [...subarr]
    for(let j = num*2 - 2 ; j >= 0 ;j--){
        subarr[j] = num
    }
    arr.push(subarr)
}
console.log(...arr)
