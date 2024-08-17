console.log("Hello JAvascript");

//let veriable
let name = "Raviraj";
console.log("Name =",name);

//Constant Varibale
const intrestRate = 2;
console.log("Intrest Rate =",intrestRate);

//primitive Datatypes
/*
1.strings
2.Boolean
3.Numbers
4.undefined
5.null
*/

let uName = "Raviraj";//string
let age = 22;//number
let isVoter = true;// boolean
let fName; //undefined
let lName  = null; // null 


//Referance types
/*
1. Object 
2. Arrays
3. Functions
*/

//object creation ->

let student = {
    fullName : "Raviraj",
    rollNo : 107
};


// Dot Notation
student.fullName ="Ashish";

// Bracket Notation
student['rollNo'] = 110;


console.log(student);


//Array Creation ->

let colors = ['red','blue'];
console.log(colors);
console.log(colors[1]);
console.log(colors[0]);

// adding element in array 
colors[2]= 1; 

//checking Length of the Array 
console.log(colors.length);


//Functions ->

function msg(fN,lN) {
    console.log("Hello "+ fN +" "+lN);
}

msg("Raviraj",'Shinge');
msg("Ashish",'Agam');
msg("Kuldeep",'Lagade');
msg("Biresh",'Khandekar');

//calculating values

function square (num){
    return num * num;
}

console.log(square(2));