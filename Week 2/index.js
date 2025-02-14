/*let firstName="Swapnil";
let lastname="singh";
let isRich=0;
if(isRich==false){
  console.log("he is poor asf");
}
else{
  console.log("he is rich asf omg");
}*/
/*let sum=0;
for(let i=0;i<10;i++){
  sum=sum+i;
  console.log(sum);
}*/
/*let arr=[1,2,3,4,45,56,6];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    console.log(arr[i]);  
  }
}*/



/*let arr=[1,2,3,4,45,56,6];
let max=arr[0];
for(let i=0;i<arr.length;i++){
  if(arr[i]>max){
    max=arr[i];
  }
}
console.log("the max element is"+max);*/
//object
/*const user={
  name:"swapnil",
  age:20,
  gender:"male",
  isMarried:false,
  hobbies:["cricket","football","chess","coding"],
  address:{
    city:"pune",
    state:"maharashtra",
    country:"india"
  }
}
console.log(user.gender);
console.log(user.address.state);*/
//array of objects
/*const users=[{
  sport:"cricket",
  player:"virat"
},{
  sport:"football",
  player:"ronaldo"
},{
  sport:"ludo",
  player:"sonu"  
}]
for(let i=0;i<users.length;i++){
  if(users[i]["sport"]=="ludo"){
    console.log(users[i]["player"]+"uaaaaa");
  }
}*/
/*function sum(a,b){
  let ans=a*b;
  return ans;
}
const value=sum(10,20);
console.log(value);
*/
//set timeout
/*function greet(){
  console.log("hello");
}
setTimeout(greet,3*1000);//every 3 seconds*/
//set interval
/*function add(a,b,ohyes){
  const ans=ohyes(a,b);
  return ans;
}
function greet(a,b){
  return a+b;
}
const res=add(1,2,greet);
console.log(res);*/
/*function good(str){
  console.log("original string:",str);
  console.log("length:",str.length);
}
good("heelo world");*/
//function greed(str,target){
//console.log("original string:",str);
//console.log("index:",str.indexOf(target));
//}
//greed("hello world","world");
//let arr=[1,2,34,5,6,7];
//function hoe(str){
//console.log("yes",str);
//}
//let um=arr.forEach(hoe);
/*class Animal{
  constructor(name,legscount,speaks){
    this.name=name;
    this.legscount=legscount;
    this.speaks=speaks;
  }
  speak(){
    console.log(this.speaks);
  }
}
const dog=new Animal("dog",4,"bhow bhow");
dog.speak();*/
/*class player{
  constructor(name,age,role){
    this.name=name;
    this.age=age;
    this.role=role;
  }
  selection(){
    console.log(this.name+" " + "of age" +" " +this.age+ " "+ "is selected for" +" "+        this.role);
  }  
}
const p1= new player("AbhiSharma",24,"opening batsman");
p1.selection();*/
/*const user={
  name:"swapnil",
  age:"20",
  gender:"male"
}
//converts object to string
const ans=JSON.stringify(user);
console.log(ans);*/
/*const user='{"name":"swapnil","age":22,"gender":"male"}'; //string
//console.log(user["name"]) //undefined coz not an object
//string to object
const ans=JSON.parse(user);
console.log(ans["name"]);
console.log(ans["age"]);*/
//asynchronous programming
/*function findsum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}
function findSumTill100(){
  console.log(findsum(100)) ;
}
const res=setTimeout(findSumTill100,1000);

console.log("hello");*/
/*const fs=require("fs");
fs.readFile("txt","utf-8",function(err,data){
  console.log(data);
})
console.log("hello");*/
/*function hard(){
  let p=new Promise(function(resolve){
    resolve("hi there");
  })
  return p;
}
const value=hard();
value.then(function(data){
  console.log(data);
});*/
/*function hard(){
  let p=new Promise(function(resolve){
    setTimeout(resolve,2000);
  });
  return p;
}
const res=hard().then(function(){
  console.log("hello");
}) */
/*function swapnil(){
  let swap=new Promise(function(resolve){
    //setTimeout(resolve,2000);
    //console.log("gooood");
    resolve("gooood");
  })
  return swap;
}
const ans=swapnil();
ans.then(function(data){
  console.log(data);
})*/
/*function virat() {
  let kohli = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("GOAT");
    }, 2000);
  });
  return kohli;
}
async function main() {
  let player = await virat();
  console.log("thikhai");
}
main();*/

//player.then(function(){
//console.log("data");
//})