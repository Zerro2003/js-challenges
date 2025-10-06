const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("sorry, something went wrong");
  }, 2000);
});
promise1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
