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

// const prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise 1 resolved");
//   }, 1000);
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

// Promise.all([prom1, prom2, prom3])
//   .then((messages) => {
//     console.log("All promises resolved:", messages);
//   })
//   .catch((error) => {
//     console.error("Error in one of the promises:", error);
//   });

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

// async function downloadContents(urls) {
//   const promises = urls.map(async (url) => {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     return await response.text();
//   });

//   return Promise.all(promises);
// }

// const urls = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];

// (async () => {
//   try {
//     const contents = await downloadContents(urls);
//     console.log("Downloaded contents:", contents);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// })();

// function poke(id) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error("oops");
//       }
//       return res.json();
//     })
//     .then((result) => {
//       setTimeout(() => {
//         console.log(result);
//       }, 5000);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
// poke(4);

// const postIds = [1, 5, ooo];

// // 1. Map IDs to an array of fetch promises
// const promises = postIds.map((id) =>
//   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
//     res.json(),
//   ),
// );

// // 2. Execute them all at once
// Promise.all(promises)
//   .then((results) => {
//     // 'results' is an array of the 3 post objects
//     console.log("Post 1:", results[0]);
//     console.log("Post 5:", results[1]);
//     console.log("Post 10:", results[2]);
//   })
//   .catch((error) => {
//     // IMPORTANT: If ANY single request fails, the whole thing fails!
//     console.error("One of the fetches failed!", error);
//   });

// let myfun = (num) => {
//   if (num > 5) {
//     return Promise.reject("sorry dear");
//   }
//   return Promise.resolve("the number is " + num);
// };
// myfun(4)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((er) => {
//     console.log(er);
//   });

async function fastWay() {
  try {
    const userPromise = fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    ).then((r) => r.json());
    const postsPromise = fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1",
    ).then((r) => r.json());

    const [userData, postsData] = await Promise.all([
      userPromise,
      postsPromise,
    ]);

    console.log("User Info:", userData);
    console.log("User Posts:", postsData);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

fastWay();
