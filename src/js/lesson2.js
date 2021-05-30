/*
In this particular JavaScript lesson, we will be learning about a whole
slew of "new" things. For example, we'll introduce a couple more data types,
how to use them, and also build on some of our old topics from lesson 1.
 */

let btn;
let textExample1 = "Hello World!";
let textExample2 = 20; //Hmmm... This is weird... We'll look at this later ;)
let intExample1 = 10;
let boolExample1 = false;
let nullExample1 = null;
let arrayExample1 = [];
//Above are our new data types, null and arrays!



function exampleFunction1 () {
    exampleFunction2(textExample1);

    //Here we are telling the code to look in the (HTML) document for the btn ID, which maps to the button element!
    btn = document.getElementById("btn");

    btn.onclick = function () { //Not all functions need names! You can also do btn.onclick = exampleFunction();

        btn.innerHTML = "You clicked me!"; //This goes to the text that is displayed on the button and changes it!

        intExample1 = intExample1 + 5; //This addition calculation
        console.log(intExample1);
        intExample1 += 5; //And this addition calculation do the same thing!
        alert(intExample1);

        /*
        This next console output will only temporarily add 10 to the intExample, because we dont tell
        the code to save the calculation to the integer variable, like seen in "int = int + 5;" AND "int += 5;"
         */
        console.log(intExample1 + 10);
        console.log(intExample1);

        /*
        Note: You'll tend to see similar "short-hand" expressions like seen above with "int += 5" if
        you decide to delve into online coding forums. This tactic to write calculations in a much simpler
        manner not only is faster to type, but also takes up less space in the completed algorithm or program.
         */

        btn.innerHTML = "Button"; //And we'll change this back to the original text to keep things consistent.
    }
}

function exampleFunction2 (outputText) {
    if (!boolExample1) {
        boolExample1 = true;
    }

    if (boolExample1)
        console.log(outputText);

    return boolExample1;
}


//This kind of function will run when the webpage is starting to load.
window.onload = function initializeFunction () {
    exampleFunction1();
}
