
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