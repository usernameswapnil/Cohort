// function sum(no1:number,no2:number){
//     const ans:number=no1+no2;
//     console.log("ans is:" + ans);
// }
// sum(7,11);

// function ageCheck(age:number):boolean{ //even if u dont write ":boolean" it will work coz the compiler automatically assigns the return type of a function but its a good practise to write it.
// //this is called Type inference.
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// const ans=ageCheck(8);
// console.log(ans);

// function runAfter1Sec(fn:()=> void){ //function with no argumnets and return type
//     setTimeout(fn,1000);
// }
// runAfter1Sec(function(){
//     console.log("HELLO");
// })

//interfaces
// interface User{
//     firstname:string,
//     lastname:string,
//     age:number
// }
// function ageCheck(user:User){
//     if(user.age>=18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const user1: User = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 20
// };

// console.log(ageCheck(user1));

//implementing interfaces
// interface Person{
//     name:string;
//     age:number;
//     greet(phrase:string):void;
// }
// class Employee implements Person{
//     name:string;
//     age:number;
//     constructor(n:string, a:number){
//         this.name=n;
//         this.age=a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`);
//     }
// }
// const e=new Employee("swapnil",22); 
// e.greet("Hello, my name is");


//difference between interfaces and types:
//1.) Syntax difference
//2.) types cannnot be used to implement classes whereas interfaces can be used.

// type User={
//     firstName:string,
//     lastname:string,
//     age:number
// }

// //Unions:
// //u cannot do this with interfaces
// type GreetArg= number | string;
// function greet (id:GreetArg){
//     return id;
// }
// //console.log(greet(1));
// console.log(greet("swapnil"));
