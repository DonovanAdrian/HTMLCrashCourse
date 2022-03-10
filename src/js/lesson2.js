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
  //Notice that we are "passing" this textExample1 variable into the exampleFunction2(). This is what allows data
  //to be passed from one function to another.
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
  }
}

function exampleFunction2 (outputText) {
  if (!boolExample1) {
    boolExample1 = true;
  }

  /*
  You may have noticed that much of the code is enveloped by brackets as well as being indented!
  While being bracketed and indented are both important for multiple reasons (both functionally
  and organizationally, to say a few reasons), it isn't always necessary! As seen below, we
  evaluate the boolean example and then output the outputText into the console. It should be noted
  that this only works for whatever line of code comes directly after the if statement in this case!!
  If you wanted to output multiple console outputs, then you'd need to use brackets ;)
   */
  if (boolExample1)
    console.log(outputText);

  return boolExample1;
}

function exampleFunction3 () {
  /*
  The following is an example of how to check multiple variable's initialized assignment within the
  same "if" statement. The example below uses &&, which refers to "and". There is also an "or" ||
  expression as well as a "not" ! expression. These can quickly become wildly complex, but can be
  used to calculate an incredibly specific use case!

  You can also utilize parenthesis to force certain expressions to be evaluated first, regardless of
  left-to-right order. Of course, in the below example, the first expression will always evaluate to
  "true", so you'll never see any of the subsequent expression's outputs... Unless you update an
  array like the last line in this function!
   */
  if (nullExample1 == null && arrayExample1[0] == undefined) {
    alert("Some of the variables in the JavaScript file are null!");
  } else if ((!boolExample1 || nullExample1 != null) && textExample2 == 20) {
    console.log("Hmmmm, this expression is a bit more complex!");
  } else {
    console.log("And this is just a catch-all in case the above two expressions are \"false\"");
    //Notice how I used the \ character in the above console output? This is called an "escape" character.
    //Normally, a set of quotations will be used to denote the beginning and the end of string, but what
    //if you wanted to output your favorite Shakespeare quote within quotation marks? Well, that's how!
    
    btn.innerHTML = "Don't forget to check out the console log!";
  }

  //And of course, we'll finally "push" something into the array! This is how you add something to an
  //array... You can also "pop" (pops the most recent/"top" variable off of the array), index (search)
  //in the array, splice (remove a variable) in the array, and so much more!
  arrayExample1.push("foo");
}


//This kind of function will run when the webpage is starting to load.
window.onload = function initializeFunction () {
  exampleFunction1();
}
