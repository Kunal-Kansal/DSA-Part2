let A = ['abc', 'def' ,'ghi']

// const possibleCombination = (arr,str,i,j)=>{
//     // console.log(i , str ,j)
//     if(i == A.length){
//         arr.push(str)
//      return}
//     if(j == A[i].length){
//         return }
//     else{
//         console.log(j)
//         str += A[i][j]
//         // console.log(i, j, str, arr, "before")
//         possibleCombination(arr,str,i+1,j)

//         // console.log(i, j, str, arr, "after")
//         possibleCombination(arr,str.slice(0, str.length - 1),i,j+1)
        
//     }
// }

// let arr = []
// possibleCombination(arr,"",0,0)

// console.log(arr)

ans = []
function solve(i, str, arr){
    
    if (i == arr.length){
        ans.push(str)
        return}
    
    for (let j = 0 ; j < arr[i].length ;j++){
        str += arr[i][j]
        solve(i+1, str, arr)
        str = str.slice(0,str.length-1)
    }
}
solve(0,"",A)
return ans
console.log(ans)
