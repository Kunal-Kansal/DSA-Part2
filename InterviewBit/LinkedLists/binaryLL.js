//================================== EDIT THE ARRAY VALUE HERE ===========================
// // let arr = readLine().split(" ").map(Number)


let arr = [0,1,1,1,1,0,0,1,0,1,0,1]

// ========================================================================================
var A;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

// ==================================== CODE HERE =======================================

const sortBinaryList = (node) =>{
    current = node
    next = current.next
    let flag = false
    let solve
    while(next != null){
        if(current.data == 1){
            if(next.data == 0){
                current.data = 0
                next.data = 1
            }
            else{
                next = next.next
            }
        }
        if(current.data == 0){
            if(flag == false){
                solve = current
                flag = true
            }
            current = current.next
        }
    }
    return solve
}

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

let ans = sortBinaryList(A)

let string = printLL(ans)
console.log(string)