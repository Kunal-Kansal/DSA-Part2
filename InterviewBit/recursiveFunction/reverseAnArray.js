let arr = [1,2,3,4,5]

const reverseAnArray = (arr,i) =>{
    if(i == parseInt(arr.length/2)){return}
    else{
        let num = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = num
        reverseAnArray(arr,i+1)
    }
}


reverseAnArray(arr,0)

console.log(arr)