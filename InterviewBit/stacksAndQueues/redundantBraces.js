// let A = "((a+b))"

// A.split("").forEach(cha =>{
//     console.log(cha)
// })

function checkRedundancy(str)
{

    var st = [];
    var ans = false;
    str.split('').forEach(ch => {
         
        if (ch == ')') {
            var top = st[st.length-1];
            st.pop();
 
            var flag = true;
 
            while (st.length!=0 && top != '(') {
 
                if (top == '+' || top == '-' ||
                    top == '*' || top == '/'){
                    flag = false;
 }
                top = st[st.length-1];
                st.pop();
            }

            if (flag == true)
                ans = true;
        }
 
        else{
            st.push(ch)}; 
                //   console.log(st)
    });
    return ans;
}
 
// Function to check redundant brackets
function findRedundant(str)
{
    var ans = checkRedundancy(str);
    if (ans == true)
        console.log( "Yes");
    else
        console.log( "No");
}
 
// Driver code
 
var A = "(a*(a)/b)";
findRedundant(A);
 
 