A = 3


count = 0

for(let j = 1 ; j <= A ;j++){
    let binary = (j >>> 0).toString(2)
    for(let i=0 ;i<binary.length ;i++){
        if(binary[i] == "1"){count++}
    }

}
let ans = (count)% ((10**9) + 7)
return ans
console.log(ans)