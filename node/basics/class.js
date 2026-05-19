class Job {
    constructor(job) {
        this.job = job
    }
    myJob() {
        console.log(`My job is ${this.job}`)
    }
}
const newJob = new Job()

class User extends Job {
    //private values
    #name
    constructor(name, age, height, job) {
        super(job)
        this.#name = name
        this.age = age
        this.height = height
    }

    greet() {
        console.log(`hallo ${this.#name}`)
    }

}


