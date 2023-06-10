//================================== EDIT THE ARRAY VALUE HERE ===========================
// // let arr = readLine().split(" ").map(Number)


let arr = [1,2,3,4,5,6,7]

// ========================================================================================
var A;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

// ================================ Linked List To Array ================================= 

const llToArr = (node,arr) =>{
    let current = node
    let i = 0
    while(current != null){
        arr[i] = current.data
        current = current.next
        i++
    }
}

// ==================================== CODE HERE ========================================

// const sortBinaryList = (node) =>{
//     current = node
//     next = current.next
//     let flag = false
//     let solve
//     while(next != null){
//         if(current.data == 1){
//             if(next.data == 0){
//                 current.data = 0
//                 next.data = 1
//             }
//             else{
//                 next = next.next
//             }
//         }
//         if(current.data == 0){
//             if(flag == false){
//                 solve = current
//                 flag = true
//             }
//             current = current.next
//         }
//     }
//     return solve
// }

// ====================================== END ==========================================

const arrToLL = (arr,node)=>{
    let i = 1
    while(i < arr.length){
        node.next = new Node(arr[i])
        node = node.next
        i++
    }
}

// =============================== PRINT LINKED LIST =================================


const printLL = (node) =>{
    let str = ""
    current = node
    while(current.next != null){
        str += current.data
        str += " => "
        current = current.next
    }
    str += current.data
    return str
}


// =====================================================================================

A = new Node(arr[0]);
arrToLL(arr,A)

// ===================================== Here A is a LINKED LIST =========================

// let ans = sortBinaryList(A)

let arra = []
llToArr(A,arra)
let subArr = []
let num = parseInt((arra.length)/2)
subArr = arra.slice(0,num)
let subArr2 = [] 
subArr2 = arra.slice(num,arra.length)
let ans = []
if(arra.length % 2 != 0){
    for(let i = 0 ; i < subArr.length ;i++){
        ans.push(subArr2[subArr.length-i]-subArr[i])
    }
}
else{
    for(let i = 0 ; i < subArr.length ;i++){
        ans.push(subArr2[subArr.length-i-1]-subArr[i])
    }
}
for(let i = 0 ; i < subArr2.length ;i++){
    ans.push(subArr2[i])
}

let solve = new Node(ans[0])
arrToLL(ans,solve)
console.log(solve)
// console.log(num)
// let string = printLL(ans)
// console.log(printLL(A))
// console.log(printLL(ans))
// console.log(ans)n