let A = "abcabc"

const addAns = (ans,mp,set) =>{
    for(let j = 0 ; j < set.length ;j++){
        if(mp.get(set[j]) == 1){
            return set[j]
            break
        }
        else{
            continue
        }
    }
    return "#"
    // console.log(ans)
}

let ans = ""

let mp = new Map()
let st = new Set()

for(let i = 0 ; i < A.length ;i++){
    if(mp.has(A[i])){mp.set(A[i],mp.get(A[i]) + 1)}
    else{
        mp.set(A[i],1)
    }
    if(st.has(A[i])){}
    else{st.add(A[i])}
    // console.log(0)
    let set = [...st]
    let word = ""
    ans += addAns(word,mp,set)
}
return ans
console.log(ans)
