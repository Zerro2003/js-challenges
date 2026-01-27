// const g = async () =>{
//     try{
//         let info = await fetch("https://jsonplaceholder.typicode.com/posts")
//         let data = await info.json()
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// g()

// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert);

// async function loadJson(url) {
//   try {
//     let Answer = await fetch(url);
//     let data = await Answer.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// loadJson("https://javascript.info/no-such-user.json");

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   });
// }

// // Ask for a user name until github returns a valid user
// function demoGithubUser() {
//   let name = prompt("Enter a name?", "iliakan");

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Full name: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert("No such user, please reenter.");
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

// let theController = new AbortController();
// let signal = theController.signal;
// let myF = async () => {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//       signal,
//     });
//     if (!res.ok) {
//       throw new Error("this will not be available");
//     } else {
//       let data = await res.json();
//       console.log(data);
//     }
//   } catch (err) {
//     if (err.name === "AbortError") {
//       console.log("this is taking too long to load");
//     } else {
//       console.error(err);
//     }
//   }
// };
// setTimeout(myF, 3000);

// setTimeout(() => {
//   theController.abort();
// }, 1000);

// Fetch 3 APIs sequentially and log results in order, then refactor to
// fetch them in parallel while preserving order.
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/comments/1

// const getData = async () => {
//   let post = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let user = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   let comment = await fetch("https://jsonplaceholder.typicode.com/comments/1");
//   let apiss = [post, user, comment];
//   try {
//     for (let ap of apiss) {
//       let getApi = await ap.json();
//       console.log(getApi);
//     }
//   } catch (error) {
//     console.log("something is not right");
//   }
// };
// getData();

// const getInParal = async () => {
//   let post = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   let user = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   let comment = await fetch("https://jsonplaceholder.typicode.com/comments/1");
//   let apis = [post, user, comment];
//   try {
//     const data = apis.map((a) => a.json());
//     const fin = await Promise.all(data);
//     console.log(fin);
//   } catch (Error) {
//     console.log("something is not right");
//   }
// };
// getInParal();

const xml = new XMLHttpRequest();
xml.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xml.responseType = "json";
xml.onload = () => {
  console.log(xml.response);
};
xml.onerror = () => {
  console.log("bra bra bra");
};
xml.send();
