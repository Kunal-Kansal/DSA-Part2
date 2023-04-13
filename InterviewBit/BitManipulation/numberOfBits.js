A = 11

let binary = (A >>> 0).toString(2)

count = 0
for(let i=0 ;i<binary.length ;i++){
    if(binary[i] == "1"){count++}
}
return count
console.log(count)