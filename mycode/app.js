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

// const Student = [
//     {Name: 'Shyam', Age: 25, Edu: 'Graduation', id:1},
//     {Name: 'Ram', Age:19, Edu: 'HSC', id:2},
//     {Name: 'Kapil', Age: 20, Edu: 'BSc', id:3}
// ];

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

// const youngStudent = Student.filter(function (stud){
//     return stud.Age <= 20;
// });

// console.log(youngStudent);

// const educated = Student.filter(function (stud){
//     return stud.Edu === 'Graduation'
// })
// console.log(educated);

// const names = ['bob', 'peter']

// console.log(
//     name.find(function (name){
//         return name === 'Shyam';
//     })
// );

// const person = people.find(function (person){
//     return person.id === 3;
// });

// console.log(person);

// const Student = [
//     {Name: 'Shyam', Age: 25, Edu: 'Graduation', id:1, Salary:1500},
//     {Name: 'Ram', Age:19, Edu: 'HSC', id:2, Salary: 1000},
//     {Name: 'Kapil', Age: 20, Edu: 'BSc', id:3, Salary: 500}
// ];

// const total = Student.reduce(function (acc, currItem){
//     console.log(`Total ${acc}`);
//     console.log(`current money: ${currItem.Salary}`);

//     acc += currItem.Salary;
//     return acc;
// },500);
// console.log(total)

// const Dates =[
//     'sunday',
//     'Monday',
//     'Tuesday',
//     'Wensday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ]
// const Months =[
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
// ]

// const date = new Date();
// const month = date.getMonth();
// console.log(Months[month]);

// const day = date.getDay();
// console.log(Dates[day]);

// console.log(date.getDate())
// console.log(date.getFullYear())

// const sentence = `${Dates[day]}, ${date.getDate()} ${Months[month]} ${date.getFullYear()}`;

// document.body.innerHTML = sentence;

// document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'Yellow';
// document.getElementById('btn1').style.color = 'gray';

// const element =document.getElementById('element');

// const h1 = document.getElementById("title");
// h1.style.color = "red";

// document.getElementById("btn").style.backgroundColor = "blue";

// const listItems = document.getElementsByTagName("special");
// listItems[1].style.color = "blue";

// const items = document.getElementsByClassName(li);

// const betterItems = [...items];

// betterItems.forEach(function(item){
//     console.log(item);
// });

// const listItems =document.getElementsByClassName('special');
// console.log(listItems);

// const lastItem = document.querySelector('.special');
// console.log(lastItem)
// const item = document.querySelector('li.last-child')
// console.log(item)

// const list = document.querySelectorAll('.special');

// list.forEach(function(item){
//     console.log(item);
//     item.style.color = 'yellow';
// })

// const result = document.querySelector('#Result');
// const allChildren = result.childNodes;

// const children = result.children;
// console.log(children)

// console.log(result.firstChild);
// console.log(result.lastChild);

// const first = document.querySelector('.first')
// console.log(first)
// const second = (first.nextSibling.nextSibling.style.color = 'red');
// // console.log(second);
// first.nextElementSibling.style.color ='red';

// const last = document.querySelector('#last')
// const third = last.previousSibling.previousSibling;
// console.log(third);

// const item = document.getElementById('special')
// const value = item.firstChild.nodeValue;
// const easyValue = item.textContent;

// console.log(easyValue)

//getAttribute();
//setAttribute();

// const first = document.querySelector('.first')
// const idValue = first.getAttribute('id')
// // console.log(idValue);

// const link = document.getElementById('link');
// const showLink = link.getAttribute('href')
// console.log(showLink)

// const last = link.nextElementSibling;
// last.setAttribute('class', 'first');
// last.textContent = 'i also have a last of fist'
// console.log(last);

// const links = document.querySelectorAll('.first')
// console.log(links)

//className
//classList

// const first = document.getElementById('first')
// const second =  document.getElementById('second')
// const third = document.getElementById('third')

// const classValue = first.className;
// console.log(classValue)

// third.classList.add('colors')
// third.classList.add('text')
// third.classList.remove('text')
// second.className = 'colors text';
// second.className = 'text';
// third.className = 'colors';

//createElement('element')
//createTextNode('text context')
//element.appendChil(childElement)

// const result = document.querySelector('#result');

//create empty element

// const bodyDiv = document.createElement('div');

//create text node

// const text = document.createTextNode('a simple body div');
// bodyDiv.appendChild(text);
// document.body.appendChild(bodyDiv);

// const heading = document.createElement('h2');
// const headingText = document.createTextNode('dynamic heading');
// heading.appendChild(headingText);
// heading.classList.add('blue')


// result.appendChild(heading);

// console.log(result.children);

// const numbers = arrayFromRange(-10, 10);

// console.log(numbers)

// function arrayFromRange(min, max){
//     const output = [];
//     for(let i=min;i<max;i++){
//         console.log(i);
//     }
// }

// const number = [1, 2, 3, 4, 5]

// console.log(includes(number, 1));

// function includes(array, searchElement){
//     for (let element of array)
//     if(element === searchElement)
//         return true;
//     return false
// }

// let number = [1, 2,3,4,5];

// let output = except(number, [1,2]);

// console.log(output);

// function except(array, excluded){
//     const output = [];
//     for (let element of array)
//         if(!excluded.includes(element))
//             output.push(element);
//             return output;
// }

// const number = [1,2,3,4,5];

// const output = move(number, 1, 4)

// console.log(output);

// function move(array, index, offset){
//     const position = index + offset;
//     if(position >= array.lenght || position<0){
//         console.error('invalid...');
//         return;
//     }

//     const output = [...array]
//     const element = output.splice(index, 1)[0];
//     output.splice(position, 0, element);
//     return output;
// }

// const number = [1,4,5,6,3]

// let max = getMax([1,2]);

// console.log(max);

// function getMax(array) {
//     if(array.length === 0 ) {return undefined; } 

//     let max = array [0];

//     for(let i =1; i< array.length; i++){
//         if (array[i]>max)
//         max = array[i];

//         return max;
//             }
//         }

// const movies = [
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5},
// ];

//all the movies in 2018 with rating > 4 
//sort them by their rating
//Descending order
//pick their title

// const titles = movies.filter(m=> m.year === 2018 && m.rating>=4).sort((a, b) => a.rating - b.rating).reverse().map(m =>m.title)

// console.log(titles)

// const person = {
//     firsName:'Kshitija',
//     lastName:'Sen',
//     get fullname(){
//         return `${person.firsName} ${person.lastName}`;
//     }, 
//     set fullName (value){
//         const parts = value.split(' ');
//         this.firsName = parts[0],
//         this.lastName = parts[1];
//     }
// };

// person.fullName = 'john smith';

// console.log(person);

// const readline = require("readline-sync");

const readline = require('readline-sync');
  
// Enter the number
let a = Number(readline.question());
let number = [];
for (let i = 0; i < a; ++i) {
  number.push(Number(readline.question()));
}
console.log(number);