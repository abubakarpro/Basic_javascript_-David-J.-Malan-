class Person {
    constructor(name,username){
        this.name=name;
        this.username=username;
    }
    print(){
        console.log(this.name,this.username);
    }
}

///  class

class Student extends Person {
    constructor(name, username, roll) {
        super(name, username);
        this.roll = roll;
    }
    
    print() {
        console.log(this.name,this.username,this.roll)
    }
}
const s = new Student("Mohsin","abc", "1223");
s.print();