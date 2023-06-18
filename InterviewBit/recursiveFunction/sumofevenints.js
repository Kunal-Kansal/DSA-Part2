let n = 6
let ans = 0
const sumOfEven = (n,sum)=>{
    if(n == 0){
        ans = sum
        return
    }
    // if(n % 2 == 0){
        sum = sum+n
    // }
    // console.log(sum)
    sumOfEven(n-1,sum)
}
let sum = 0
sumOfEven(n,sum)
console.log(ans)
