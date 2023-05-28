let A = '8.&8'

let str = ""
let bar = ""
let flag = false

for(let i = 0 ; i < A.length ;i++){
    if(A[i] == "&"){
        flag = true
        continue
    }
    if(flag == true){
        bar += A[i]
    }
    if(flag == false){
        str+= A[i]
    }
}

bar = str + bar
strsize = 0
strflag = false
barsize = 0
barflag = false
for(let i = 0 ; i < str.length ;i++){
    if(str[i] == "."){
        strflag = true
        continue
    }
    if(strflag == true){
        strsize++
    }
}
for(let i = 0 ; i < bar.length ;i++){
    if(bar[i] == "."){
        barflag = true
        continue
    }
    if(barflag == true){
        barsize++
    }
}


let strleng = 1
let barleng = 1

for(let i = 0 ; i < strsize ;i++){
    strleng *= 10
}
for(let i = 0 ; i < barsize ;i++){
    barleng *= 10
}

str = parseFloat(str) * strleng
bar = parseFloat(bar) * barleng

let string = bar-str
let num = barleng-strleng
let ans = ""

ans += string
ans += " / "
ans += num
console.log(ans)