// console.log('Before');
// // getUser(1, (user) => {
// //   getRepositories(user.gitHubUsername, (repos) => {
// //     getCommits(repos[0], (commits) => {
// //       console.log(commits);
// //     })
// //   })
// // });

// // getUser(1)
// //     .then(user => console.log(user))
// //     .then(repos => getCommits[0])
// //     .then(commits => console.log('commits', commits))
// //     .catch(err => console.log('Error', err.message));

// async function displayCommits(){
//     try{
//     const user = await getUser(1);
//     const repos =await getRepositories(user.gitHubUsername);
//     const commits = await getCommits(repos[0])
//     console.log(commits);
//     }

//     catch(err){
//         console.log(err)
//         // console.log('Error', err.message);
//     }
// }

// displayCommits();

// console.log('After');

// function getUser(id) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log('Reading a user from a database...');
//             resolve({ id: id, gitHubUsername: 'mosh' });
//           }, 2000);
//     });
  
// }

// function getRepositories(){
//     return new Promise((resolve, reject) =>
//     {
//         setTimeout(() => {
//             console.log('Calling GitHub API...');
//             resolve(['repo1', 'repo2', 'repo3']);
//           }, 2000);
//     })
  
// }

// function getCommits() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log('Calling GitHub API...');
//             resolve(['commit']);
//           }, 2000);
//     })
// } 

//Examle used 

// const p1 = new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('Async operation 1...');
//         resolve(1);
//     }, 2000);
// });

// const p2 = new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('Async operation 2...');
//         resolve(2);
//     }, 2000);
// });

// Promise.race([p1, p2])
// .then(result => console.log(result))
// .catch(err => console.log('Error', err.message));


// function sum() {
//     return this.a + this.b + this.c;
//   }
  
//   var o = {
//     a: 1,
//     b: 2,
//     c: 3,
//     get average() {
//       return (this.a + this.b + this.c) / 3;
//     }
//   };
  
//   Object.defineProperty(o, 'sum', {
//       get: sum, enumerable: true, configurable: true});
  
//   console.log(o.average, o.sum);

let a=({function (){
    return this.a
}})