let A = "/a/./b/../../c//A"

let main = A.split("/")
let arr = []
for(let i = 0 ; i< main.length ;i++){
    if(main[i] == "" || main[i] == "."){continue}
    arr.push(main[i])
}
let ansArr = []

for(let i = 0 ; i < arr.length ;i++){
    if(arr[i] == ".."){
        ansArr.pop()
        continue
    }
    ansArr.push(arr[i])
}
let ans = "/"
ansArr = ansArr.join("/")
ans += ansArr
// return ans
console.log(ans)