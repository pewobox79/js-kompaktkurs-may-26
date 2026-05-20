const posts = [
    { title: "first post", body: "first post body" },
    { title: "second post", body: "second post body" }
];

function getPosts() {
    setTimeout(() => {
        let output = ""
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = `<ul>${output}</ul>`
    }, 1000)
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            //simulation error
            const err = true

            if (!err) {
            
            resolve()
    
            } else {
                reject("error: something went wrong")
            }

        }, 2000)

    })
}

async function init(){
    const res = await createPost({title: "post 3", body: "body post 3"})
    console.log("res", res)
    getPosts()

}

init()