// console.log(2+3);

// b="hello";
// c=50;
// dont use var unless absolutely neccessary as it can be used even before initialization and it can also be redeclared
// var a=10;
// var a=30;
// b=10; // not allowed
// let b="h1";
// let b=10; // not allowed
// const c=30.5; // cannot change the value or the datatypes when declared with const
//c = 50;
// let a=true;
// console.log(c);

// arrays - is a datatype that stores multiple elements of the same datatype
// let a=[12,13,15];
// console.log(a);
// const c=[10,"hello",30,5,true]; // can change or add or remove elements from the array even its constant as  we care not 
// redeclaring the variable and we are not changing the datatypes
// c=[1,2,3] // not allowed
// c.push(15,17,19); // we can either insert one element or multiple  elements.
// c[2]=40;  //is allowed
// console.log("before:",c);
// c.pop();
// console.log("after:",c);
// c.pop();
// console.log(c.length); //returns the length of the array
// c.unshift(11,12,13); // unshift(element) adds the element at the start
// console.log(c);
// c.shift(); // shift() removes the element from the start
// console.log(c);// splice(startIndex,declaration,item1,item2,item3,..,item) //helps us to add,remove,and,array;
// c.splice(1,3,); //delete
// console.log(c);
// c.splice(2,0,"world"); // add
// console.log(c);
// c.splice(2,1,50);
// console.log(c);
//c.splice(2);
// c.splice(-1,1);
// console.log(c);
//const arr=[1,2,3,4,5];
// console.log("before map function: ",arr);
// Array map: adds a function to each elements of the said array.
// const newarr=arr.map(num =>num*5);
// console.log("after map function: ",newarr);
//array filter: create a new array with the element that passes the said conditions/tests.
//const newarr=arr.filter(num=>num%2===0);
//console.log("after filter: ",newarr);
//const courses=["Mongodb","Express.js","postgress","react.js","node.js"];
//console.log("courses: ",courses);
//const newcourse=courses.filter(c=>c!=="postgress");
//console.log('updated courses:',newcourse);
//const arr=[1,2,3,4,5];
//const sum=arr.reduce((store,num)=>num+store);
//console.log(`Addition of: ${arr}= ${sum}`);
//objects in javascript
//const user={
//    firstname:"john",
//   lastname:"doe",
//    company:{
//       salary:10000,
//       position:"developer",
 //   }
//}
//const user2={} // empty object
//console.log(user.firstname);
//console.log(user['lastname']);

//user.age=34; // add keys and values in object
//user['lastname']= "Singh";  // we can update in object
//delete user.firstname;   // we can delete a keyvalue pair in object
//console.log(user);

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

//spread operator
//const arrr=[10,20,30,40,50];
//const arrr2=[1,2,3,4,5];
//const merge=[...arrr,...arrr2];
//console.log(merge);

//function add(a,b){ // hoisted function
//    const c=a+b;
 //   return c;
//}
//console.log(add(5,6));

//const add=function(a,b){  // not hoisted
 //   const c=a+b;
  //  return c;
//}
//const user={
 //   add: function(a,b){
 //       return a+b;
 //   }
//}
//const fact=function factorial(num){
  //return num<=1?1:factorial(num-1);
 // if(num<=1){
  //  return 1;
  //}
 // else{
  //  return num*factorial(num-1);
  //}
//}
// const arr=[12,53,23,76,56];
//function addArr(arr){
 //   const sum=arr.reduce((acc,num)=>acc+num);
 //   return num;
//}
//console.log(addArr(arr));
// const sum=(a,b)=> {return a+b};  //arrow function
// const subs=(a,b)=>{return a-b};
// console.log(sum(5,6));
// console.log(subs(7,5));
// function greet(name="guest"){
//   console.log(`hello to you,${name}`);
// }
// //greet("carrie");
// greet();

//loops
// for(let i=1;i<=10;i++){
//   console.log(`5 x ${i} = ${5*i++}`);
// }

// let i=1;
// while(i<=10){
//   console.log(`5 x${i}=${5*i++}`);
// }
// do{
//   console.log(`5 x ${i}=${5*i++}`);
// }while(i<=10)
//const arr=[12,2,3,43,54,64]
// for(let i=0;i<=arr.length;i++){
//   console.log(arr[i]);
// }
// for(const item of arr){
//   console.log(item);
// }
// const user={
//   fname:"john",
//   lname:"doe",
//   age:45,
//   occupation:"developer",
// }
// for(const key in user){
//   console.log(`${key}:${user[key]}`);
// }
//for-each
const arr=[12,54,67,44,81,78];
arr.forEach(x=>console.log(x));