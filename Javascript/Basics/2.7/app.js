// var,const,let
var Name='John';
console.log(Name);
Name="Vyshnavi";
console.log(Name);

// Init var
var greeting;
console.log(greeting);
greeting ="hello";
console.log(greeting);

// variables should be a combination of letters,numbers,_,$
// can't start with number
// var 2num=4

// Multi word vars
var firstName="Vyshnavi"  //CamelCase
var first_name="Vyshnavi"  //Underscore
var FirstName="Vyshnavi"   //Pascal Case
var firstname;

// LET
let a;
a=10;
console.log(a);
a=11;
console.log(a);

// CONST
const q=1;
console.log(q);
  //we can't reassign a value  X(q=2)
  //we have to assign a value  X(const greet;)

  const person={
    q1:10,
    q2:11
  }
person.q1=12;
console.log(person);

const num=[1,2,3,4,5]
num.push(6);
console.log(num)