class Set {
    constructor(arr){
        this.arr = arr;
        // this.print= this.print.bind(this);
    }

    add(val){
        if(!this.has(val)){        //class fun ko class main kahi b use kr skty h scope class k andr tk
            this.arr.push(val);

        }
        
    }

    delete(val){
        this.arr = this.arr.filter(x => x !== val);
        
    }

    has(val){
        return this.arr.includes(val)
    }

    get size(){
        return this.arr.length;
    }
    
}
const s = new Set([1,2,3,4,5]);
s.add(1);
s.add(1);
s.add(1);


console.log('s should contain 5 :' , s.has(5));
console.log('s size is', s.size);