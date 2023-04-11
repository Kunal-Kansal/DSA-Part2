let str = [-180,10]
// let t = readLine()
// while(t--){
    // let str = readLine().split(" ").map(Number)

    let A = Math.max(Math.abs(str[0]),Math.abs(str[1]))
    let B = Math.min(Math.abs(str[0]),Math.abs(str[1]))
    function gcd(A,B){
        for(let i = B ; i > 0 ;i--){
            if(A%i == 0 && B%i == 0){
                console.log(i)
                break
            }
        }
    }
    gcd(A,B)
// }