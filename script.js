// console.log("hello World!");

// let a = "10"; //string

// let b = 15;

// let sum = a + b;

// console.log("sum:", sum);

// if (a === "10") {
//   console.log("a is 10");
// } else {
//   console.log("a is not 10");
// }
// // ---------------------

// console.log("type of :", typeof a);
// console.log("type of :", typeof b);

// let c;
// console.log("type of :", typeof c);

// let d = null;

// let arr = ["muthu", 1, true, "data"];

// let obj = {
//   name: "muthu",
//   age: 26,
//   place: "coimbatore",
// };

// let bool = false;

// console.log("type of :", typeof arr);
// console.log("type of :", typeof obj);
// console.log("type of :", typeof bool);

// let val; //define panla so undefined value stored

// val = "muthu"; // define pannitom muthu string // assign =

// console.log("value of val:", val); // muthu

let obj = {
  firstName: "Muthu",
  lastName: "Manikandan",

  age: 26,
  height: "173cm",
  place: "Coimbatore",
  married: true,
  Languages: ["HTML", "CSS", "JS", { htmlIDE: "visual Studio", css: 3 }],
  subject: {
    Tamil: 50,
    English: 98,
    Maths: 100,
  },
};

console.log("css version:", obj.Languages[3].css);

console.log("lang:", obj.Languages[1]);
//dot
console.log("Maths :>> ", obj.subject.Maths);

// brack
console.log("subject :>> ", obj["subject"]["English"]);

let b = {};

let c = ["muthu", 3, true];

// dot notation ;

console.log("first Name:", obj.firstName);
console.log("fLast Name:", obj.lastName);

console.log(`Users full name is ${obj.firstName} ${obj.lastName}`);

console.log(`The users age is ${obj.age}`);

// bracket notaion;

console.log(obj["age"]);
