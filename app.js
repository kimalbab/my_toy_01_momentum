const calculator = {
        add : function(a, b) {
            return  a + b;
        },

        minus : function(a, b) {
            return a - b;
        },

        multi : function(a, b) { 
            return a * b;
        },

        div : function(a, b) {
            return a / b;
        },

        times : function(a) {
            return a * a;
        }

};


const resultAdd = calculator.add(3,4);
const resultMinus = calculator.minus(3,4);
const resultMulti = calculator.multi(3,4);
const resultDiv = calculator.div(3,4);
const resultTimes = calculator.times(3,4);

console.log(resultAdd);
console.log(resultMinus);
console.log(resultMulti);
console.log(resultDiv);
console.log(resultTimes);




const age = 50;

function calculateKrAge(ageOfForiener) {
    return ageOfForiener + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);


const ageage = parseInt(prompt("how old are you?"));
console.log(ageage);
console.log(isNaN(ageage));


if(isNaN(ageage) || ageage < 0) {
    console.log("please write real positive number");
} else if (ageage < 18) {
    console.log("you are too young");
} else if (ageage >= 18 && ageage <= 50) {
    console.log("you can drink");
} else if (ageage > 50 && ageage <= 80) {
    console.log("you should exercise");
} else {
    console.log("you can do what ever you want");
}