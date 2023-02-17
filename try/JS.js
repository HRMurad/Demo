// The Intro of js-Function
console.log("my name is masud")
// Ans:my name is masud



// By starting LET
let nam="Murad"
console.log(nam+ " is a programmer")



// first type writing of js function

function fun(){
    console.log("Hello Murad");
}
fun();
// Ans:Hello Murad




// next type of writing finction

function greet(name){
    console.log('Hello' + name);
}
greet(' Murad');
// Ans:Hello Murad



// next
function final(name, lastName){
    console.log("Hello" + name + lastName);
}
final(" Murad", " Hawlader");
// Ans:Hello Murad Hawlader


// // next one for Return value 
// function numbs(num1, num2){
//     console.log(num1 * num2);
// }
// numbs(5, 5);
// // Ans:25


// For returning it
function numbs(num1, num2){
    return num1 + num2;
}
console.log(numbs(5, 5));
// #So here ans is 10, not above 15

