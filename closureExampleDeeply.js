function makehellofunction(){
    const message = "Hello!";

    function sayhello(){
        console.log(message);
       
    }

    return sayhello;
}

function makehellofunction(){
    const message = "Hello Bakar!";

    function sayhello(){
        console.log(message);
        return;
    }

    return sayhello;
}


const callfun = makehellofunction();
callfun();
console.log("type of message which is used into function is :", typeof message);
console.log(callfun.toString());









