let A = 3990
A = A.toString()
let ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
let hund = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
let thou = ["","M","MM","MMM"]
let nums = [ones,tens,hund,thou]

A = A.split("").map(Number)

let str = []
for(let i = 0 ; i < A.length ;i++){
    str.push(nums[A.length-1-i][A[i]])
}
str = str.join("")
return str
console.log(str)