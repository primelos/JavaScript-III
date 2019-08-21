/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding -what a keyword is referrencing to in awindow object by default
* 2. Impicit Binding - left side of the dot for example: looks at myCar when you invoke myCar.car().   only objects with methods
* 3. New Binding -calling function with the new keyword the functions object keys are bound to the new function
* 4. Explicit Binding - uses the call, apply, bind.  we invoke a function inside of object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const homeType = function(){
 console.log(this.home);
};
const type = {
    home : "flat"
};
homeType()


// Principle 2

// code example for Implicit Binding
const race  = {
    car: "Ferrari",
    engine: "v8",
    wheel: "round",
    cheer: function(){
        console.log (`it has a ${this.engine} engine!`)
    }
}

race.cheer()



// Principle 3

// code example for New Binding 
const Me = function ( name, car, food){
    this.name = name,
    this.carType = car,
    this.favFood = food
};
const clone = new Me("antonio", "mustang", "pizza" )
console.log(clone)





// Principle 4

// code example for Explicit Binding
const study = function (){
    console.log(`${this.lan3} is hard`)
}
 const language = {
     lan1: "Python",
     lan2: "Java",
     lan3: "Javascript"
 };
 study.call(language);
