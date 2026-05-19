const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("good bye")
    }, 2000)
})

const promise4 = fetch("https://dummyjson.com/posts")
    .then(res => res.json())


    Promise.all([promise1, promise2, promise3, promise4])
    .then(res => console.log(res))