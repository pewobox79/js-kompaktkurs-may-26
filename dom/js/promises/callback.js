const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];

function getPosts(){
    setTimeout(()=>{
        let output = ""
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = `<ul>${output}</ul>`
    }, 1000)
}

//create post 
function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
        
    }, 2000)
}

createPost({title: "post 3", body: "body post 3"}, getPosts)