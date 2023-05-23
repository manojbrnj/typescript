// // function add(num1: number, num2: number, result: boolean) {

// //   if (result === true) {
// //     console.log(typeof (num1))
// //     return num1 + num2;
// //   }
// //   return 8;
// // }

// // const numbera: number = 10;
// // let numberx: number;
// // numberx = 5;
// // const numberb: number = 20;
// // const printresult = true;



// // const res: number = add(1, 2, printresult);
// // console.log(res);


// // object typos

// const person = {
//   name: 'manoj',
//   age: 30,
//   hobbies: ['cricket', 'videogame', 'coooking'] // typescript infered array[]

// }
// // ts infered as object we also explicitly assign a type.
// //let typescript as infered
// //infered is better than explicit type
// //object infered by type script
// console.log(person.name);


// //object type can be creatd for nested object type
// let hobbies: string[];
// let hobb: any; //loss all ts denifits.
// hobbies = ['safds', 'sadfs']
// //ts infered.
// for (const hobby of hobbies) {
//   console.log(hobby)
// }

// // arr =[2,'str' ]   type  string|number  this is a tuple,  [string,number] first should be a number second should be a string
// //tuple fixed length and type array.



// //enum is a list like move left right up down; like drop down choose one value at a time.
// // we can assign limit number of value to a var.

// enum Role { ADMIN, READONLY, AUTHOR }; // 1 means ADMIN , 2 READONLY, 3 Author
// enum author { 'suspense' = 0, 'scifi' = 1, 'drama' = 2 }; //enum is special type means no colon


// console.log(Role.ADMIN);

function combine(input1: number, input2: number) {

  return input1 + input2;
}



// what if i want to concat a number and string both pass string | number  to function .
// union  matlab string | number ye ek idea hai type nahi hai.

const abc = 2.8; //typescript infered it as type 2.8;









