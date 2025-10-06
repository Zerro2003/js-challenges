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
const delayer = (msg, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(msg);
    }, delay);
  });
};
delayer("hello", 2000).then((message) => {
  console.log(message);
});
