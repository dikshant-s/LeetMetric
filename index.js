// // console.log("Hello bhai kya haal chal");
// // let x = 10;
// // x = "hello";
// // console.log(x);

// // const a = 10;
// // // a = 30;
// // console.log(a);
// // // let age;
// // // console.log(typeof(age));
// // let age = 23;
// // let status = (age > 18) ? "eligible for vote" : "not eligible for vote";
// // console.log(status);
// // for (let i = 1;i<=10;i++){
// //     console.log("hello world");
// // }
// // for (let i = 1;i<=10;i++){
// //     console.log(i);
// // }
// // for (let i = 5;i >=0;i--){
// //     console.log(i);
// // }
// // for (let i = 1;i <= 6;i++){
// //     if(i == 4){
// //         break;
// //     }
// //     else{
// //         console.log(i);
// //     }
// // }
// // for (let i = 1;i <= 6;i++){
// //     if(i == 4){
// //         continue;
// //     }
// //     else{
// //         console.log(i);
// //     }
// // }
// // let i = 1;
// // console.log("counting");
// // while (i <= 10){
// //     console.log(i);
// //     i++;
// // }
// // // let itr = 1;
// // // while (itr <= 10){
// // //     console.log(itr);
// // //     if (itr == 8){
// // //         break;
// // //     }
// // //     itr++;    
// // // }
// // let itr = 1;
// // while (itr <= 10){
// //     console.log(itr);
// //     if (itr == 8){
// //         itr++;
// //         continue;
// //     }
// //     itr++;
// // }
// // let i = 1;
// // do {
// //     console.log(i);
// //     i ++;
// // }while(i <= 10);

// // let firstName = "John";
// // let lastName = "Doe";
// // // console.log(firstName + " " + lastName);
// // let fullName = `${firstName} ${lastName}`;
// // console.log(fullName);

// // let userName = new String("john");
// // console.log(userName);

// // let str = "Hello my name is john and i am learning js";
// // console.log(str.substring(4));
// // console.log(str.substring(4,10));


// // let sentence = "hello my name is john and i am learning js";
// // let words = sentence.split(" ");
// // console.log(words);
// // console.log(words.join(" "));

// // //functions in js
// // function myFunction(userName){
// //     console.log("Hello! " + userName);
// // }
// // myFunction("Dikshant singh");

// // function counting(num){
// //     for (num; num <= 10; num++){
// //         console.log(num);
// //     }
// // }
// // counting(1);

// // // function getUserName(firstName, lastName){
// // //     console.log(`Hello! ${firstName} ${lastName}`);
// // // }
// // // getUserName("Dikshant", "Singh");

// // // function userNameFunction(firstName,lastName){
// // //     let fullName = `${firstName} ${lastName}`;
// // //     return fullName;
// // // }
// // // let ans = userNameFunction("Dikshant", "singh");
// // // console.log(ans);

// // // const userData = function(name,age){
// // //     console.log("User name is " + name + " and age is " + age);
// // // }

// // // userData("Dikshant", 22);

// // const UserData = (name,age) => {
// //     console.log("User name is " + name + " and age is " + age);
// // }
// // UserData("Dikshant", 22);

// // function fetchData(callback){
// //     setTimeout(() => {
// //         const data = "data fetched successfully";
// //         callback(data);
// //     },2000);
// // }
// // function proessData(data){
// //     console.log("processing the data: ",`${data}`);
// // }
// // fetchData(proessData)

// // setTimeout(() => {
// //     console.log("Hello after 3 seconds");
// // },3000);

// class meriClass{
//     name;
//     age;
//     #phoneno = 1234567890; //private variable

//     constructor(newName = "John Doe", newAge = 18){
//         this.name = newName;
//         this.age = newAge;
//     }

//     getUserDetails(){
//         return `User name is ${this.name} and age is ${this.age}`;
//     };
//     set setValue(val){
//         this.#phoneno = val;
//     };
//     get getValue(){
//         return this.#phoneno;
//     };
// }
// // let obj = new meriClass();
// let obj = new meriClass("rahul",24);

// console.log(obj.getUserDetails());
// // console.log(obj.getValue);
// // obj.setValue = 9876543210;
// console.log(obj.getValue);


// function getAge(){
//     return 18;
// }
// function UserDetails(uname = "Alice", age = getAge()){
//     console.log(`User name is ${uname} and age is ${age}`);
// }
// // UserDetails("Dikshant",21);
// UserDetails();

// // console.log(Math.round(1.4));
// // console.log(Math.round(1.6));
// // console.log(Math.ceil(1.2));
// // console.log(Math.floor(1.9));
// // console.log(Math.abs(-4));


// //Dynamic nature of objects ---> 

// // let obj1 = {
// //     name: "Dikshant",
// //     age: 22,
// //     color: "red",
// // }

// // console.log(obj1);

// // let a = {val: 10};
// // let b = a; //reference copy here both the and b are pointing to same memory location, they are not actually copying the value.

// let src = {
//     name: "Dikshant",
//     age: 22,    
//     color: "red",
// };
// // let dest = {...src}; //spread operator
// // console.log(src);
// // console.log(dest);
// // src.age = 23;
// // console.log(src);
// // console.log(dest);

// // let dest = Object.assign({},src);
// // console.log(src);
// // console.log(dest);
// let dest = {};
// for (let key in src){
//     let newKey = key;
//     let newValue = src[key];
//     dest[newKey] = newValue;
// }
// src.age = 23;
// console.log(src);
// console.log(dest);


// try{
//     console.log("starting of try block");
//     console.log(x);
//     console.log("hello ji");
// }
// catch(err){
//     // console.log("error has been caught",err);
//     throw new Error("pehle declare kar fir use kar");
// }
// finally{
//     console.log("finally block will execute always");
// }

// function changeText(){
//     let element = document.getElementById("fpara");
//     element.textContent = "Hello saare";
// }

// let element = document.getElementById("fpara");
// element.addEventListener('click',changeText);

// function rokoDefault(event){
//     event.preventDefault();
//     console.log("default action roki gayi");
//     anchorElement.textContent = "clicked";
// }

// // let anchorElement = document.getElementById("myAnchor");
// // anchorElement.addEventListener('click',rokoDefault);
// let paras = document.querySelectorAll('p');
// function alertPara(event){
//     alert("you clicked on para " + event.target.textContent);
// }

// // for (let i = 0; i < paras.length; i++){
// //     let para = paras[i]
// //     console.log("Event listener added to para ");
// //     para.addEventListener('click',alertPara);
// // }

// let mydiv = document.getElementById("wrapper");
// mydiv.addEventListener('click',alertPara);
// const t1 = performance.now();
// for(let i = 1; i <= 100; i ++){
//     let para = document.createElement('p');
//     para.textContent = `This is para ${i+1}`;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();
// console.log(`Time taken in first approach is ${t2 - t1} milliseconds`);
// const t3 = performance.now();
// let mydiv = document.createElement('div');
// for (let i = 0; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = `This is para ${i+1}`;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);
// const t4 = performance.now();
// console.log(`Time taken in second approach is ${t4 - t3} milliseconds`);

// let temp = document.getElementById('fpara');
// function handleEvent(){
//     let ele = document.getElementById('fpara');

// }

// function printName(){
//     console.log("Dikshant singh");
// }
// console.log("script start");
// console.log("content");
// setTimeout(printName,3000);
// console.log("script end");

let newPromise = new Promise((resolve,reject) => {
    let success = true;
    // let success = false;
    if (success){
        resolve("promise resolved successfully");
    }
    else{
        reject("Internal server error");
    }
});

// newPromise.then((message) => {
//     console.log("Promise message is :",message);
// }).catch((error) => {
//     console.log("Error :",error);
// })
// newPromise.then((message) => {
//     console.log("Promise message is :",message);
//     return 10;
// }).then((message) => {
//     console.log("message is :",message);
//     return 20;
// }).then((message) => {
//     console.log("message is :",message);
//     return 30;
// }).catch((err) => {
//     console.log("Error :",err); 
// })\



// let promise1 = new Promise((resolve,reject) => {
//     setTimeout(resolve,1000, "First");
// })
// let promise2 = new Promise((resolve,reject) => {
//     setTimeout(resolve,1000, "second");
// })
// let promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve,1000, "third");
// })

// Promise.all([promise1,promise2,promise3]).then((message) => {
//     console.log("All promises are resolved ",message);
// });


// async function fetchData(){
//     setTimeout(() => {
//         console.log("data fetched");
//     },3000);
// };

// let ans = fetchData();
// console.log(ans);

// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/postshttps://jsonplaceholder.typicode.com/posts');
//     response = await response.json();
//     console.log("Response: ",response);
// }
// getData();


const url = 'https://jsonplaceholder.typicode.com/posts';
const myHeaders = new Headers();
const options = {
    method: 'POST',
    body: JSON.stringify({username: "Dikshant sigh"}),
    headers: myHeaders,
};

async function getData(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(url);
    response = await response.json();
    console.log("get data response: ",response);
}

async function postData(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(url,options);
    response = await response.json();
    console.log("Post data response: ",response);
}
async function processData(){
    await postData();
    await getData();
}
processData();