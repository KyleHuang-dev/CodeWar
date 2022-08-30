// 1) Create a cat class that takes in a name, age, and breed

// 2) Have the ability to change the age using getters and setters

// 3) Have the ability to display all info about that cat

// 4) Create two cats. Add functionality after they are created to Purr. Call this Purr function on both.

// 5) Add a Meow function to only one cat. Try to call it on both cats

class Cat {
    #_age;
    constructor(name, age, breed){
        this.name = name;
        this.breed = breed;
        this.#_age = age;
    }

    get age (){
        return this.#_age;
    }
    set age(value){
        this.#_age = value;
    }

    displayInfo (){
        console.log(`This cat's name is ${this.name}, and it is ${this.age} old, and it is ${this.breed}.`)
    }

}

let cat1 = new Cat ("Mi", 2, "notSure");
let cat2 = new Cat ("MiTwo", 4, "American Curl")
cat1.displayInfo();
cat2.displayInfo();

Cat.prototype.purr = function (){
    console.log(`${this.name} "Purr..."`)
}

cat1.purr();
cat2.purr();
cat1.meow = function(){
    console.log(`${this.name} meow meow` )
}
cat1.meow();
cat2.meow();