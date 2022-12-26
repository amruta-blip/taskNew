// document.write('hello world')
// alert('hi mumbai')
// console.log('Hello Nimap')

// const Name = "udemy"
// const url = "www." + Name + ".com"
// console.log(url)

// const person = {
//     Name: 'uday',
//     age: 38,
//     education: 'graduation',
//     siblings:['rohan', 'shanaya', 'sweeti'],
//     greetings(){
//         console.log('Hello I am uday')
//     },
// };

// console.log(person.age);
// console.log(person.siblings[0])

// const num0 =12;
// const num1 = 13;
// const value = true;



// if(!value){
//     console.log("no0 is greater that num2");
// }

// const dice= 8;

// switch(dice){
//     case 1:
//         console.log('you got one')
//         break;
//     case 2:
//         console.log('you got two')
//         break;
//     case 3:
//         console.log('you got three')
//         break;
//     case 4:
//         console.log('you got four')
//         break;
//     case 5:
//         console.log('you got five')
//         break;
//     case 6:
//         console.log('you got six')
//         break;
//     default:
//         console.log('you didnt get anything roll dice again')
//         break;
// }
    // const name = 'Peter';
    // const age = 23;
    // const surname = 'Parkar';

    // console.log('My name is ' + name + " " + surname + ".i'm" + age + ' years old.')

    // let Data = `My name is ${name} ${surname} and I'm ${age} years old.`
    // console.log(Data);

    // let Person = ' Mark Sunday '

    // console.log(Person.concat(' Shark'))

    // console.log(Person.includes('Mark'))

    // console.log(Person.startsWith(' Mark'))
    // console.log(Person.trim().toLocaleLowerCase().startsWith('mark'))

// let Name = ['loki', 'thor', 'mark', 'susan']
// let Surname = ['park', 'odinSon', 'zukeberk', 'san']
// let surname = ['Parker']

// let fullname = []

// for(let i=0; i< Name.length; i++){

//     console.log(Name.length)

    // function isPresent(Name){  //doitleter
    //     return Name.isPresent
    // }
    // console.log(Name.findIndex(0))

    // console.log(Name[i])
    
    // fullname.push(`${Name[i]}  ${Surname[i]}`)

    //  console.log(fullname)

    // const newArray = `${Name[i]}  ${surname[i]}`
    // const newArray = `${Name[i]}  ${surname}`

    // fullname.push(newArray)
//}

//  const home = [1000, 500, 500, 200]
//  const outdoor = [1200, 455, 67]

//  function calculateTotal(arr){
//     let Total=0;
//     for(let i=0; i<arr.length; i++){
//         Total += arr[i]
//     }
//     return Total;
//  }

//  const homeTotal = calculateTotal(home)
//  const outdoorTotal = calculateTotal(outdoor)
//  const otherTotal = calculateTotal([466,789,344])

//  console.log({
//     Home:homeTotal,
//     Outdoor:outdoorTotal,
//     OtherTotal:otherTotal,
//  });

// const arr1 = [1, 2, 3];
// let arr2 = [];

// console.log(arr2.push(5,6,7,8))

// console.log(arr1)
// console.log(arr2)

// let newArr = (arr1.concat(arr2))
// console.log(newArr)


// Global and local 
// const num = 1;

// function number(){
//     let num2= 2;
//     becomeGlobal = 'GlobalVal';
// }
// number();
// console.log(becomeGlobal)
// console.log(num)
// // console.log(num2)

// function morning(name){
//     return `Good Morning ${name}`;
// }

// function afternoon(name){
//     return `Good Afternoon ${name}`
// }

// function Greet(name, cb){
//     const Myname = 'Charu'
//     console.log(`${cb(name)}, I am ${Myname} `)
// }

// Greet('Joy', morning);
// Greet('mohan', afternoon);

// let Name= (shishui);

// function asa(name){
//     return `ohayo gozai masu ${name} `;
// }

// function gogo(name){
//     return `Kon'nichiwa​ ${name}`
// }

// function greet(name, cb){
//     const Myname = 'Itachi';
//     console.log(`${cb(name)} watashi no namae wa ${Myname}`)
// }

// greet('shishui', asa)
// greet('karin', gogo)

const Student = [
    {Name: 'Shyam', Age: 25, Edu: 'Graduation'},
    {Name: 'Ram', Age:19, Edu: 'HSC'},
    {Name: 'Kapil', Age: 20, Edu: 'BSc' }
];

// function showStudent(stud){
//     console.log(stud.Name);    
// }

// Student.forEach(showStudent)

//     Student.forEach(function data(person){
//         console.log(person.Edu);
//     })

// const ages = Student.map(function (item){
//    return item.Age;
// });
// console.log(ages)
// const newStudent = Student.map(function(person){
//     return{
//         firstName: person.Name,
//         oldAge: person.Age,
//     };
// });
// console.log(newStudent);

const youngStudent = Student.filter(function (stud){
    return stud.Age <= 20;
});

console.log(youngStudent);

const educated = Student.filter(function (stud){
    return stud.Edu === 'Graduation'
})
console.log(educated);