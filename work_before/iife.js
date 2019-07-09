const callfun = (function (){
    const message = "Hello!";

    function sayhello(){
        console.log(message);
    }

    return sayhello;
})();

console.log("type of message which is used into function is :", typeof message);
console.log(callfun.toString());
callfun();

// how iife is useful

const counter = (function(){
    let count=0;

    return{
        inc : function(){count=count+1} ,
        get : function(){return console.log(count)} ,
    }

})();

counter.get();
counter.inc();
counter.get();














