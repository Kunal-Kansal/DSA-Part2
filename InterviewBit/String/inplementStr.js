let A = "bbaabbbbbaabbaabbbbbbabbbabaabbbabbabbbbababbbabbabaaababbbaabaaaba"   
let B = "babaaa"

let ans = false
let solve = -1
if(A.includes(B)){ans = true}

if(ans == true){
    solve = A.indexOf(B)
}

return solve

console.log(solve)

// const string = "foo";
// const substring = "oo";

// console.log(string.includes(substring)); // true