// function add(num1: number, num2: number, result: boolean) {
//   if (result === true) {
//     console.log(typeof (num1))
//     return num1 + num2;
//   }
//   return 8;
// }
// const numbera: number = 10;
// let numberx: number;
// numberx = 5;
// const numberb: number = 20;
// const printresult = true;
// const res: number = add(1, 2, printresult);
// console.log(res);
// object typos
var person = {
    name: 'manoj',
    age: 30,
    hobbies: ['cricket', 'videogame', 'coooking'] // typescript infered array[]
};
// ts infered as object we also explicitly assign a type.
//let typescript as infered
//infered is better than explicit type
//object infered by type script
console.log(person.name);
//object type can be creatd for nested object type
var hobbies;
var hobb; //loss all ts denifits.
hobbies = ['safds', 'sadfs'];
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    console.log(hobby);
}
