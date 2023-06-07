//Node  is a runtime environment for excuting and developing javaScript code for server side
// data types is the actual type of data used in presenting data eg, strings, boolean, numbers, undefined etc
//data types can be divided into primitive eg number, strings,characters ,boolean,symbols, not a number (NON)
// the 2nd type of data type is non primitive eg array, objects,maps
// while data structure is the way the data is arranged eg array, objects, map
// Express is a framework that gives javaScript app network capabilities

//Variables; they act as place holders and they also assign address to data
//types of variable ; local can only be called within the code block while global variables once declared anywhere, it can be called within the file 
// FUNCTION: Are

//Function Expression.
//Anonymous Functions.
//Immediately Invoked Function Expression.
//Constructor Functions.
//Hoisting.
//Arrow Functions.

// bubbleSort function below is an example of a function expression. 
function bubbleSort(array) {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) {
        return array;
    }
};

// Anonymous function example below
exports.bubbleSort2 = (array) => {
    let sort = true;
    do {
        sort = false;
        for (let i = 0; i <= array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sort = true;
            }
        }
    } while (sort) {
        console.log(array);
    }
};

setImmediate(() => {

});


// Constructor functions
uic-yxih-pdz

class Fruit {
    constructor (name, type, seed, colour, shape) {
        this.name = name;
        this.type = type;
        this.seed = seed;
        this.colour = colour;
        this.shape = shape;
    }

    growth () {
        return "sprout from the " + this.seed;
    };
};


setTimeout(() => {
    console.log("set timeout finished")
   }, 10000); 
   
   //example containing callback

   //NODE PACKAGE 
   //https://www.npmjs.com/

   // NPM = its a tool that helps us to manage and install packages
// NPM = its a tool that helps us to manage and install packages
// npm uninstall "name of package" this uninstalls a package.
// the numbers on the node package version. e.g a.b.c : a is a major version change which is the patch version number, 
// b is major version number which changes when new are features are added. c is the minor version number
// which changes when there is a bug fix. 
//  the symbol "^" is used to lock the module to the patch version(a). it is added by default.
// the symbol "*" is used to allow only the (c) minor version number for only bug fixes.



   