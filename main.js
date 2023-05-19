"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var engine_1 = require("./engine");
var message = "hii welcome saravanan";
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
var greeter = /** @class */ (function () {
    function greeter(message) {
        this.greeting = message;
    }
    greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return greeter;
}());
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
var car3 = /** @class */ (function () {
    function car3(engine) {
        this.engine = engine;
    }
    Object.defineProperty(car3.prototype, "engine", {
        get: function () {
            console.log("inside get");
            return this._engine;
        },
        set: function (value) {
            console.log("inside set");
            if (value == undefined)
                throw "supply on engine";
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return car3;
}());
var obj1 = new car3("honda");
console.log(obj1.engine);
// inheritance
// class Engine {
//     constructor(public power:number ,public engine:string) {
//     }
// }
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var bbj = new engine_1.Engine(500, "v5");
console.log(bbj);
var bbj1 = new Truck(bbj, true);
console.log(bbj1);
var Car7 = /** @class */ (function () {
    function Car7(engine) {
        this.engine = engine;
        this.engine = engine;
    }
    Car7.prototype.start = function (message) {
        console.log(this.engine + message);
    };
    Car7.prototype.stop = function (message) {
        console.log(this.engine + message);
    };
    return Car7;
}());
// enum .....................................
var deprtment;
(function (deprtment) {
    deprtment[deprtment["mech"] = 0] = "mech";
    deprtment[deprtment["cse"] = 1] = "cse";
    deprtment[deprtment["ece"] = 2] = "ece";
    deprtment[deprtment["eee"] = 3] = "eee";
    deprtment[deprtment["it"] = 4] = "it";
})(deprtment || (deprtment = {}));
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
// a:Array<number>
// ..........................
// let value=[1,2,34,"v",true]
// let myfun =<T>(value:T)=>{
//     return value
// }
// console.log(myfun(value));
// ................................
var b = {
    name: "vignesu",
    age: 99,
    interest: ["footbal", "vollyball", 0]
};
var myfun = function (b) {
    return b;
};
console.log(myfun(b.interest));
