class myset {
    constructor(arr){
        this.arr = arr;
        // this.print= this.print.bind(this);
    }

    addfun = (val)=> {
        this.arr.push(val);
    }

    print = () =>{
        this.arr.forEach(element => { console.log(this.arr.elements);
            
        });
    }
    
}
const s = new myset([1,2,3,4,5]);
s.addfun(6);
s.print();
  
//const buttons = document.queryElementAll('.button'); // here this given a nodes we want to convert
//into Array so use Array.from(button) convert nodes into Array

//Array.from(buttons).forEach()          //use of Array.from this return a array

//Class vs Object .... Objects : objects k methods and keys bhair se update or create kr kr skty h or bhair
//se bind wgra krty h ... Classes : classes main hun hr function ko bind kren gy jis k andr this use ho
//rha ho ga .or class main koi new key wgra bhair se ni create or edit ni kr skty ...
//Bind krne two methods h ... 1. constructor main hr function bind kr den , 2. Arrow function