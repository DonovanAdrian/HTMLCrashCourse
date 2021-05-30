//For starters, there are a couple ways to make comments in JavaScript!
//This particular kind can only be placed on one line at a time
/*
And this one will work
with multiple lines similarly
to the HTML and CSS files!



Anywho! In this file, you'll learn about the basics with JavaScript functions,
variables, as well as simple ways to interact with your webpage.



To begin, it's important to note all the important functionality that your web
browser offers you, as a developer. No matter which operating system or browser
you use, there is some sort of way to access the juicy technical data that helps
a developer get their job done! You can feel free to explore on your own, but we
will only be referring to the "console" in this lesson. This can be accessed a
couple of ways, as seen in this webpage:

https://balsamiq.com/support/faqs/browserconsole/
*/



/*
Below are the three most basic variables in JavaScript!
An integer, string, and boolean. Also take note that
I alternate between "let" and "var" at the beginning of
the variables. This tells the JavaScript that you want to...
    "let <text> be equal to <some expression>"
or, in simpler terms...
    "this <text> is a variable I want to use!"

Why do I use let or var?? Well, it's just for your reference.
Without going into too much detail, the usage of "let"
is a bit more strict, but also better practice in some
cases. I will typically only use "let" moving forward in
lessons.
 */

var intExample = 10; //Numbers!
let textExample = "Hello World!"; //Text!
var booleanExample = false; //True or False!



//Below are some examples of functions that you can use in JavaScript!
//This kind of function will run when the webpage is starting to load.
window.onload = function initializeFunction () {
    exampleFunction1(); //This is a function call, which references the function below!

    exampleFunction2();
}



//This function simply outputs a message to the web browser's console!
//A console is great for debugging your code, or just for spitting out
//information that is important to know!
function exampleFunction1() {
    console.log("The webpage loaded!");
}



//This function utilizes the variables we "declared" at the top of the
//file and... adjusts them a bit.
function exampleFunction2() {
    console.log(textExample);

    //The following expression "!=" means "not equal to".
    //The opposite of this is "==", instead of "=" which is used to declare variables.
    //Expressions are how we check on the variables that we created, and direct the
    //program where we want it to go.
    if (booleanExample != true) {
        intExample = intExample + 10;
    } else {
        console.log("You shouldn't be able to see this since the boolean is always false!");
        //However, if we wanted to, we can change the boolean to "true" and then you can see the above text.
    }

    textExample = textExample + " How are you?";

    console.log(intExample + textExample);
    /*
    Above are some simple examples of how you can use your variables.
    In particular, we displayed the "textExample" that we set up initially,
    checked to see if booleanExample is false, added 10 to "intExample",
    and added some text on to the end of the "textExample" string.
    The text and string examples are called "concatenation" which is somewhat
    of a rabbit-hole which I won't delve too much into. What you need to know
    is that this is how you will put 2 and 2 together!

    Furthermore, you can also use multiplication, division, mod functions,
    remainders, and many more mathematical functions. We will dive into this
    a little more later!
     */
}



//This is the only function that is referenced in the webpage and is
//activated any time you click the button.
function buttonFunction () {
    alert("You clicked me!");
}