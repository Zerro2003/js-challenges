// const f = async () => {
//     let x = new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("done")
//         },2000)
//     })
//     let m = await x
//     console.log(m)
// }
// f()

const g = async () =>{
    try{
        let info = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await info.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
g()