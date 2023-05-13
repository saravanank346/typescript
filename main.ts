 export{}
 let message="hii welcome saravanan";
console.log(message);
// datatypes
let a:any=123;
a=1;
a="hiii";

let b:number=27.5;
b=44;


let str:string="saravanan";
str="ragul";


let c:boolean=true;


let d:null=null;

let e:undefined;



let arr=[1,2,3,4,5,6,7];

let arrstr:string[]=["saravanan",]

let multitype:number|string;
multitype=1;
multitype="vig";


let obj={
    name:"vignesu",
    age:80,
}

// conditional statement same as javascript
// loops same as javascript
// functions    :typeannotaton
function sum(a:number,b:number):number {
    return a+b;
    
}


function changesum(a) {
    return a.toLowerCase();  //no worked intelsence 
    
}


function changesum2(a:string,b?:string) {  //? is optional

    if(b){

        return a+b;
    }
    else{
        return a;
    }
    
    
}

console.log(
    changesum2('janani','vignesh'));






function changesum3(a:string,b:string='vig') { 

    if(b){

        return a+b;
    }
    else{
        return a;
    }  
  
}
console.log(
    changesum3('janani'));



    // function also takes objects

function add(point:{x:number,y:number}) {
    return point.x+point.y;
    
}

let p={
    x:1,
    y:1,
    
}

console.log(add(p));
////////////////////////////////////////////////////

interface Point{
    x:number;
    y:number;
    z:number;
} 

function add2(point:Point) {
    return point.x+point.y;
    
}
console.log(add2(x:1,y:3,z:3));

