let A = "aba"
let count = 0

let S = A.toLowerCase()

let vowels = ["a","e","i","o","u"]

for(let i = 0 ; i < S.length ; i++){
    if(vowels.includes(S[i])){
        for(let j = i+1 ; j < S.length ;j++){
            if(vowels.includes(S[j])){continue}
            else{count++}
        }
    }
}
for(let i = 0 ; i < S.length ;i++){
    if(vowels.includes(S[i])){continue}
    else{
        for(let j = i +1 ; j< S.length ; j++){
            if(vowels.includes(S[j])){count++}
        }
    }
}
let vo = new Set()
let co = new Set()
for(let i = 0 ; i < S.length ; i++){
    if(vowels.includes(S[i])){
        vo.add(i)
    }
    else{
        co.add(i)
    }
}

let vow = [...vo]
let con = [...co]



// return count
console.log(vow,con)

// console.log(count)