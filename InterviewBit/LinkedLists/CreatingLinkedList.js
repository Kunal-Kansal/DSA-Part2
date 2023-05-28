// // let arr = readLine().split(" ").map(Number)
let arr = [2,4,5,7,3]

var A;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const arrToLL = (arr,node)=>{
    let i = 1
    while(i < arr.length){
        node.next = new Node(arr[i])
        node = node.next
        i++
    }
}

A = new Node(arr[0]);

arrToLL(arr,A)
console.log(A)

