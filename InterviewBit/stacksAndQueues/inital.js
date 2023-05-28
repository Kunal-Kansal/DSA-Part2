

//======================================= online solve =======================================

// function areBracketsBalanced(expr) {

//     let stack = [];

//     for (let i = 0; i < expr.length; i++) {
//         let x = expr[i];

//         // console.log(expr[i])
//         if (x == '(' || x == '[' || x == '{') {
//             stack.push(x);
//             continue;
//         }

//         if (stack.length == 0)
//             return false;

//         let check;
//         switch (x) {
//             case ')':
//                 check = stack.pop();
//                 if (check == '{' || check == '[')
//                     return false;
//                 break;

//             case '}':
//                 check = stack.pop();
//                 if (check == '(' || check == '[')
//                     return false;
//                 break;

//             case ']':
//                 check = stack.pop();
//                 if (check == '(' || check == '{')
//                     return false;
//                 break;
//         }
//         // console.log(stack, i)
//     }
//     // Check Empty Stack
//     return (stack.length == 0);
// }

// let A = "([{}])";

// areBracketsBalanced(A)
// if (areBracketsBalanced(A) == true) { console.log(1) }
// else { console.log(0) }

// ============================================ My Solve ================================================

let A = "{[()]}"

let arr = []

let flag = true

for(let i = 0 ; i < A.length ;i++){

    let x = A[i]

    if( x == "{" || x == "[" || x == "("){
        arr.push(x)
        continue
    }
    if(arr.length == 0){
        flag = false
        break
    }
    let mark 
    if(x == ")"){
        mark = arr.pop()
        if(mark == "{" || mark == "["){
            flag = false
            break
        }
    }
    if(x == "}"){
        mark = arr.pop()
        if(mark == "(" || mark == "["){
            flag = false
            break
        }
    }    if(x == "]"){
        mark = arr.pop()
        if(mark == "{" || mark == "("){
            flag = false
            break
        }
    }
}
if(arr.length != 0){flag = false}

if(flag == false){return 0}
else{return 1}