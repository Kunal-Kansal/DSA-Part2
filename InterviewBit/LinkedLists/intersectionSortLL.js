let arr = [2, 4, 5, 7, 3]

var A;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const intersectionSort = (node) => { // 2 4 6 1 4
    let current = node   // 2
    let next = null
    let base = null
    let solve
    let flag = false
    while (current != null) {
        base = current
        next = current.next  // 4 
        while (next != null) { // 1
            if (current.data > next.data) { // 2  1
                let num = current.data
                current.data = next.data
                next.data = num
                base = current
            }
            else{
                // console.log(current.data,next.data)
                next = next.next // 1
            }
        }
        if(flag == false){
            solve = current
            flag = true
        }
        current = current.next
    }
    return solve
}

const arrToLL = (arr, node) => {
    let i = 1
    while (i < arr.length) {
        node.next = new Node(arr[i])
        node = node.next
        i++
    }
}

A = new Node(arr[0]);

arrToLL(arr, A)
let ans = intersectionSort(A)
return ans
console.log(ans)