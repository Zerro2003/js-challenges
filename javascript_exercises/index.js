// ```jsx
// function fetchUser(callback) {
//   setTimeout(() => {
//     const user = { id: 1, name: "Adeline" };
//     callback(null, user);
//   }, 1000);
// }
// function clb(){}

// ```

// ### Tasks

// Refactor the above function to return a **Promise** instead of using a callback.

// 1. Using fetchSimulator, simulate fetching data from three different URLs in parallel.
//  Each “fetch” will be represented by a Promise that resolves after a delay taken from the delays
//  array. Use **`Promise.all()`** to wait for all these Promises to resolve and then process
//  the results.

// ```jsx
// //Input

const fetchSimulator = () => {
  const delays = [800, 1200, 1000];
  const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts/4",
    "https://jsonplaceholder.typicode.com/posts/5",
    "https://jsonplaceholder.typicode.com/posts/6",
  ];

  const finder = apiUrls.map((e, ind) => {
    return new Promise((res, rej) => {
      let getUser = fetch(e).then((o) => o.json());
      setTimeout(() => {
        res(getUser);
      }, delays[ind]);
    });
  });
  return Promise.all(finder).then((dd) => console.log(dd));
};
fetchSimulator();
