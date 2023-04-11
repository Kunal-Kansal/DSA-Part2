let A = "1a2"

let S = A.toLowerCase()
let str = ''
for(let i = 0 ; i < A.length ;i++){
    if(S.charCodeAt(i) > 96 && S.charCodeAt(i) < 123){
        str+= S[i]
    }
    if(S.charCodeAt(i) > 47 && S.charCodeAt(i) < 58){
        str+= S[i]
    }
}
let flag = true
for(let i = 0 ; i < str.length ;i++){
    if(str[i] == str[str.length-1-i]){
        continue
    }
    else{
        flag = false;
        break
    }
}

if(flag == true){
    console.log(1)
}
if(flag == false){
    console.log(0)
}
// console.log('10'.charCodeAt(0))
// console.log("z".charCodeAt(0))