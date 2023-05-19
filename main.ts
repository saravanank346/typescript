export{}
import { Engine } from "./engine";
 let message="hii welcome saravanan";
console.log(message);
// datatypes
// let a:any=123;
// a=1;
// a="hiii";

// let b:number=27.5;
// b=44;


// let str:string="saravanan";
// str="ragul";


// let c:boolean=true;


// let d:null=null;

// let e:undefined;



// let arr=[1,2,3,4,5,6,7];

// let arrstr:string[]=["saravanan",]

// let multitype:number|string;
// multitype=1;
// multitype="vig";


// let obj={
//     name:"vignesu",
//     age:80,
// }

// conditional statement same as javascript
// loops same as javascript
// functions    :typeannotaton
// function sum(a:number,b:number):number {
//     return a+b;
    
// }


// function changesum(a) {
//     return a.toLowerCase();  //no worked intelsence 
    
// }


// function changesum2(a:string,b?:string) {  //? is optional

//     if(b){

//         return a+b;
//     }
//     else{
//         return a;
//     }
    
    
// }

// console.log(
//     changesum2('janani','vignesh'));






// function changesum3(a:string,b:string='vig') { 

//     if(b){

//         return a+b;
//     }
//     else{
//         return a;
//     }  
  
// }
// console.log(
//     changesum3('janani'));

    // function also takes objects
// function add(point:{x:number,y:number}) {
//     return point.x+point.y;   
// }
// let p={
//     x:10,
//     y:1,
//     z:2,   
// }
// console.log(add(p));
////////////////////////////////////////////////////
// interface Point{
//     x:number;
//     y:number;
//     z:number;
// } 
// function add2(point:Point) {
//     return point.x+point.y+point.z;    
// }
// console.log(add2(p));

// class.....................................
  

class greeter {
    greeting:string;
    constructor(message:string) {
        this.greeting=message;
        
    }
    greet(){
        return "hello,"+this.greeting;
    }
}
// class

// class Car {
//     engine:string;  //field
//     constructor(engine:string) {   //constructor
//         this.engine=engine;
        
//     }
    
// }
// let s =new Car("aude");
// console.log(s.engine);




// class
// class car1 {
//     constructor(public engine:string) {
        
//     }
// }
// let v =new car1("benzz");
// console.log(v.engine);



// getter setter...................................get set

class car3{
    private _engine: string;  //field
    constructor(engine:string) {   //constructor
        this.engine = engine;
    }
    
     get engine() : string {
        console.log("inside get");
        
        return this._engine;
    }
    
     set engine(value : string) {
        console.log("inside set");
        
        if (value == undefined) throw "supply on engine";
        this._engine = value;
    }
 
}

let obj1=new car3("honda");
console.log(obj1.engine);




// inheritance

// class Engine {
    

//     constructor(public power:number ,public engine:string) {
        
//     }

// }
class Auto {
    engine :Engine
    constructor(engine:Engine) {
        this.engine=engine
        
    }
   
}

class Truck extends Auto {
    fourByFour:boolean;

    constructor(engine:Engine,fourByFour:boolean) {
        super(engine);


        this.fourByFour=fourByFour;
        
    }
}

let bbj=new Engine(500,"v5")
console.log(bbj);

let bbj1=new Truck(bbj,true)
console.log(bbj1);

// interface...........................
 interface action{
    start(message:string);
    stop(message:string);

 }
 class Car7 implements action{
    constructor(public engine:string) {
        this.engine=engine
        
    }
    start(message:string){
        console.log(this.engine+message);
        
    }
    stop(message: string) {
        console.log(this.engine+message);
        
    }
 }

// enum .....................................

enum deprtment{
    mech,
    cse,
    ece,
    eee,
    it


}
console.log(deprtment.mech);


// genric function..............T for generic
// let  myfun = <T>(obj:T)=>{      // <T extends>
//     return {...obj,greet:"oii",partner:"janani"}
// }
// let b={
//     name:"vignesu",
//     age:"99"
// }
// let c=myfun(b)
// console.log(c.name);


let a:Array<number>

// ..........................
let value=[]

let myfun1 =< >(value:T)=>{
    return value
}
console.log(myfun1(value));

// ................................
let b={
        name:"vignesu",
        age:99,
        interest:["footbal","vollyball",0]

    }
let myfun =(b:any)=>{
    return b
}
console.log(myfun(b.age));






