//iife concept yeh h k yeh function usi wqt declare hota h or usi wqt exection hoti h
//yahan pe yeh call huwa or message return huwa or us ki value callfun main chali gyi as as a string

const callfun = (function (){
    const message = "Hello!";

    

    return message;
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














