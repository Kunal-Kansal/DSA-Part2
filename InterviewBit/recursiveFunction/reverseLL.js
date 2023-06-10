//================================== EDIT THE ARRAY VALUE HERE ===========================
// // let arr = readLine().split(" ").map(Number)


let arr = [1,2,3,4,5,6]

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

// ==================================REVERSE THE LL ==================================

const reverseLL = (curr,prev) =>{
    if(curr.next == null){
        A = curr;
        curr.next = prev
        return
    }
    else{
        let next = curr.next 
        curr.next = prev
        reverseLL(next,curr)
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

// ===================================== Here A IS A LINKED LIST =========================

if(A != null){
    reverseLL(A, null)
}
// reverseLL(A)

console.log(printLL(A))