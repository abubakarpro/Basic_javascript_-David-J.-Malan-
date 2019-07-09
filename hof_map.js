function makingmap(arr,fun)
{
    const newArr = [];

    // Through foreach loop

    arr.forEach(function(value) {

        newArr.push(fun(value));
        
    });


    //Through for Loop


  // for (let i=0 ; i< arr.length ; i++)
    //{
        
      //  let value = arr[i];
        //newArr.push(fun(value));

    //}
    return newArr;
} 
function addone(num)
{
    return num+1;
}
const x= [0,1,2,3];
console.log("My map function is: " , makingmap(x,addone));
