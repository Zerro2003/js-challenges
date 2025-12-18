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


// function calculate(a, b, callback) {
//   const result = a + b;
//   callback(result);
// }

// calculate(2, 3, (res) => {
//   console.log("Answer:", res);
// });


// // -----------
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

// const prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 1 resolved");
//   }, 3000);
// });

// const prom2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 2 resolved");
//   }, 2000);
// });

// const prom3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 3 resolved");
//   }, 1500);
// });

// Promise.race([prom1, prom2, prom3])
//   .then((messages) => {
//     console.log("All promises resolved:", messages);
//   })
//   .catch((error) => {
//     console.error("Error in one of the promises:", error);
//   })

// const promo = () => {
//   const prom1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("promise 1 resolved");
//     }, 4000);
//   });
//   const resolver = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject("promise took long to respond");
//     }, 3000);
//   });
//   return Promise.race([prom1, resolver])
//     .then((message) => {
//       console.log("All promises resolved:", message);
//     })
//     .catch((error) => {
//       console.error("Error in one of the promises:", error);
//     });
// };
// promo();

// const transformer = new Promise((resolve) => {
//   let curNum = 1;
//   resolve(curNum);
// });
// transformer
//   .then((num) => {
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(num);
//     return num * 2;
//   })
//   .then((num) => {
//     console.log(num);
//   })
//   .then(() => {
//     console.log("done");
//   });

// const whatToFetch = { name: "mohamed", age: 30 };
// const getUserData = (objt) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(objt);
//     }, 3000);
//   });
// };
// getUserData(whatToFetch)
//   .then((output) => {
//     output.location = "Egypt";
//     return output;
//   })
//   .then((finalOutput) => {
//     console.log(finalOutput);
//   });
// const data = function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("User data loaded"), 1000);
//   });
// };

// const Upost = function fetchPosts() {
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(" sorryPost did not load"), 3000);
//   });
// };
// const trier = Promise.allSettled([data(), Upost()]);
// const fetcher = async () => {
//   try {
//     const check = await trier;
//     console.log(check);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// fetcher();
