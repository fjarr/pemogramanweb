// Promise
// const coba = new Promise(resolve => {
//     setTimeout (() => {
//     resolve('selesai')
//     },3000)
    
// });
// coba.then(console.log(coba));
// await
// async function f() {
//     return Promise.resolve(1);
//   }
  
//   f().then(alert);

// Berikut ini contoh promise yang diselesaikan dalam 3 detik:
// async function f() {

//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => resolve("done!"), 3000)
//     });
  
//     let result = await promise; // wait until the promise resolves (*)
  
//     alert(result); // "done!"
//   }
  
//   f();

//   async function f() {
//     let promise = Promise.resolve(1);
//     let result = await promise; // Syntax error
//   }

