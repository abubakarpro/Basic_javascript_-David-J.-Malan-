const x = [0,1,2,3];

function addone(num){
    num= num+1;
    return num;
}

console.log("function call :" , addone(1));
 // Using map;
const digit =23;
 console.log("Result of reduce function is :" , x.map(addone));
 console.log("type of map is : " , x.map);

 //using filter
 function greaterthanone(num)
 {
     return num > 1;
    
 }

 const output = x.filter(greaterthanone);
 console.log("Result of filter function is :", output);

 //Using Reduce
 function addtwonum(x,y)
 {
     return x+y;
 }
console.log("function call : " , addtwonum(1,2));
console.log("Result of reduce function is :" , x.reduce(addtwonum));
