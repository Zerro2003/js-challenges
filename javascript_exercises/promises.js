// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("sorry, something went wrong");
//   }, 2000);
// });
// promise1
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
// const delayer = (msg, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(msg);
//     }, delay);
//   });
// };
// delayer("hello", 2000).then((message) => {
//   console.log(message);
// });
// const delayer = (nbr) => {
//   return new Promise((resolve, reject) => {
//     if (nbr % 2 === 0) {
//       resolve("this number is okay");
//     } else {
//       reject("this number is not okay bcz it is odd");
//     }
//   });
// };
// delayer(2)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 1000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});

const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 resolved");
  }, 1500);
});

Promise.all([prom1, prom2, prom3])
  .then((messages) => {
    console.log("All promises resolved:", messages);
  })
  .catch((error) => {
    console.error("Error in one of the promises:", error);
  });
