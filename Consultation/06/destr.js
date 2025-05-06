const brothers = [
    {race:"hobbit", height: 110, age:45, name:"Frodo Baggins"},
    {race:"human", height: 185, age:46, name:"Aragorn"},
    {race:"elf", height: 189, age:110, name:"Legolas"},
    {race:"dworf", height: 140, age:150, name:"Gimly"},
    {race:"human", height: 195, age:200, name:"Gandalf"},
];
const brothers1 = [1,2,3];

// const frodo = brothers[0];
console.log(typeof brothers);
console.log(typeof brothers1);


const [frodo, aragorn, legolas, gimly, gandalf] = brothers;

const user ={id:1,email:"user@gmail.com", name:"Bob"};
const {email, name} = user;

console.log(email);
