const o = {
    a:"a",
    b:'b',
    obj : {
        s:'new'
                 }

}
o.a="asd";
console.log(o.a);
const o2= Object.assign({},o);
o2.obj = Object.assign({},o.obj);
console.log(o2.obj.s);
console.log(o2.a)

const arr = ['ab' , 'asd' , 'obj'];


const o1 = {
    "name": "Mohsin"
}
var o2 = {
    name: "Mohsin"
}
var o3 = {
    1: "Mohsin"
}
o1["name"];
o1.name;
o3['1']
Object.keys(o3); // ["1"]