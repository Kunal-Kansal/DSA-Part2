A = 3

let binary = (A >>> 0).toString(2)

let len = 32 - binary.length

let str = ""

for(let i = 0 ; i < len ;i++){
    str += "0"
}

str += binary

str = str.split("")
str = str.reverse()
str = str.join("")
// console.log(str)
let ans = parseInt(str,2)

return ans
