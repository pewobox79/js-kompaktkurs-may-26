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

export class Auto {
    constructor(marke, modell, baujahr) {
        this.marke = marke
        this.modell = modell
        this.baujahr = baujahr
    }

    startCar() {
        console.log(`ich starte meinen ${this.marke}`)
    }

    stopCar() {
        console.log('stop the car')
    }
}

Auto.prototype.changeCarProto = function () {
    console.log(`changed the car via proto ${this.marke}`)
}
Object.freeze(Auto.prototype) //=> sperrt das Object prototype für veränderungen
