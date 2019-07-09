const person = {
    name : "Abubakar",
    greet : function (){console.log('Hi '+this.name)
}

}
person.greet();

const a = person.greet;
a(); // Hi uundefined   ku k "a" ki koi key value ni h greet so wo this is ko refer ni kry ga



const frind = {
    name : "Ali"
}

frind.greet = person.greet; // we can assign like this ... mtlb k object k bhair b hm keys wgra create kr skty h  

frind.greet();



const greet = person.greet.bind({name : "bakar"}); // it is used to refer "this" to object 


greet();
const b = person.greet; // Not bind so undefined 
b();


