A = ["This", "is", "an", "example", "of", "text", "justification."]
B = 16

let arr =[]
if(A == ""){
    return ""
}
let str = ""
for(let i = 0 ; i < A.length ;i++){
    if(str.length + A[i].length > 16){
        arr.push(str)
        str = ""
    }
    str += A[i]
    str += " "
}
arr.push(str)
let ans = []
for(let i = 0 ; i < arr.length ;i++){
    let num = arr[i].split(" ")
    num.pop()
    let subarrlength = arr[i].length - num.length 
    // console.log(subarrlength)
    let diff = 16-subarrlength
    let join = ""
    if(num.length > 1){
        diff = parseInt(((16-subarrlength)/(num.length-1)))
        for(let j = 0 ; j < diff ;j++){
            join += " "
        }
    num = num.join(join)}
    if(num.length == 1){
        for(let j = 0 ; j < diff ;j++){
            join += " "
        }
        num += join
    }
    ans.push(num)
}
return ans
console.log(ans)