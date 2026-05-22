//second Threat

self.onmessage = (message)=>{

    console.log(message)
    let sum = 0
    const totalNumber = 10_000_000_000
    for (let i = 0; i < totalNumber; i++) {
        sum += i
    }

    self.postMessage(sum)

}