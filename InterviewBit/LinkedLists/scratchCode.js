//================================== EDIT THE ARRAY VALUE HERE ===========================
// // let arr = readLine().split(" ").map(Number)


let arr = [2,4,5,7,3]

// ========================================================================================
var A;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

// ==================================== CODE HERE =======================================




// ====================================== END ==========================================

// ================================ARRAY TO LINKED LIST ================================

const arrToLL = (arr,node)=>{
    let i = 1
    while(i < arr.length){
        node.next = new Node(arr[i])
        node = node.next
        i++
    }
}


// =====================================================================================

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

// ===================================== Here A IS A LINKED LIST =========================

console.log(A)