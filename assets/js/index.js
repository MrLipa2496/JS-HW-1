// Ex_1

let a = 8;
let b = 2;

const result1 = a * b;
console.log(result1);

// Ex_2
let c = 12;
let d = 3;

const result2 = c / d;
console.log(result2);

// Ex_3
let e = 12;
let f = 21;

const result3 = e + f;
console.log(result3);

// Ex_4
let n = 11;
let isProgrammer = true;
let programmingLanguage = "java script";
let numStr = "100";

console.log(
  "Number:",
  n,
  "You are programmer?",
  isProgrammer,
  "Yor programming language:",
  programmingLanguage,
  "Number as  string:",
  numStr
);

// Ex_5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num += 1;
num -= 1;

console.log(num);

// Завдання на введення/виведення

// Ex_1

let inputNum = Number(prompt("Input your number: ", "0"));
const square = inputNum ** 2;

alert("Square your number: " + square);

// Ex_2

let firstNum = Number(prompt("Input your first number: ", "0"));
let secondNum = Number(prompt("Input your seond number: ", "0"));

const average = (firstNum + secondNum) / 2;
alert(average);

// Ex_3

let inputMinutes = Number(prompt("Input minutes: ", "0"));

const minutesPerSeconds = inputMinutes * 60;
alert(minutesPerSeconds);

// Ex_4

let greeting = "Hello, ";
let userName = prompt("Input user name:", "noName");

alert(greeting + userName + "!");
document.write("<p>" + greeting + userName + "</p>");

// Ex_5

const firstName = prompt("Enter your first name:", "noname");
const lastName = prompt("Enter your last name:", "anonymous");
const email = prompt("Enter your email:", "anonymous@gmail.com");
const phone = prompt("Enter your phone number:", "+0000000000");
const age = prompt("Enter your age:", "0");
const imageURL = prompt(
  "Enter image URL:",
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
);

const htmlContent = `
  <div>
    <p style = "font-weight:600;font-size:24px;">First Name: ${firstName}</p>
    <p style = "font-weight:600;font-size:24px;">Last Name: ${lastName}</p>
    <p style = "font-weight:600;font-size:24px;">Email: ${email}</p>
    <p style = "font-weight:600;font-size:24px;">Phone Number: ${phone}</p>
    <p style = "font-weight:600;font-size:24px;">Age: ${age}</p>
    <img src="${imageURL}" alt="User Image">
  </div>
`;

document.write(htmlContent);
