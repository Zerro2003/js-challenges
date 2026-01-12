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

async function loadJson(url) {
  try {
    let Answer = await fetch(url);
    let data = await Answer.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
loadJson("https://javascript.info/no-such-user.json");
