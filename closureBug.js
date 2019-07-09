function makeArryfunction(){

    let i=2;
    const arr =[];
    for(let i=0 ; i <= 5 ; i++ )
    {
        arr.push(function(){console.log(i); return i;});
    }
    
    i=3;

    console.log(i);
    return arr;
    


}

const outArry = makeArryfunction();
//outArry['0']();
console.log(outArry[0]());

    
