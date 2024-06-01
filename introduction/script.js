// var a = 30
// console.log(a,typeof(a))//';' is already given in javaScript.
// /**
//  * static data type : int x = 10;
//  *                    x = "string" not happen
//  */
// x = 32.5687554
// console.log(x.toFixed(2))//read after the decimal
// console.log(x.toPrecision(3))//read from start
// x = 23
// console.log(x.toString(2))//to binary format
// console.log(Math.abs(-19))
// console.log(Math.sqrt(16))
// console.log(Math.cbrt(8))
// console.log(Math.ceil(-4.1))
// console.log(Math.floor(-4.1))
// console.log(Math.round(5.6))
// console.log(Math.random())
// console.log(Math.round(Math.random()*10000))
// console.log(Math.pow(2,3))

// var str = "This is a string"//string also decleard in single quote
// var str1 = 'The kalam said "think and dream big"'//also "\"
// console.log(str,typeof(str))
// var cost = 200,quentity = 5
// console.log("The cost of the product is "+cost)
// console.log(`the cost of the product is ${cost*quentity}`)

// var str = "JS is very easy"
// console.log(str.length)
// console.log(str.indexOf('e'))
// console.log(str.lastIndexOf('e'))
// console.log(str.charAt(3))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.startsWith('JS'))
// console.log(str.endsWith('y'))
// console.log(["Js is good"].join(' '))
// console.log(str.split(''))
// console.log(str.split(' '))
// console.log(str.split('').reverse().join(''))
// console.log(str.replace('e','a'))
// console.log(str.replaceAll('e','a'))
// console.log(str.slice(2))
// console.log("MalayMandal".slice(2,5))
// console.log("   fgdh rkej   ".trim())


// var demo = "this is js demo sentance"
// console.log(demo.split(" ").length)
// console.log(demo.split(" ").reverse().join(" "))
// let st = "";
// for(var i = 0; i<demo.length; i++){
//     st = st + demo[i].split(" ").reverse(" ").join(" ")
// }
// console.log(st)

// console.log(+true,+false)
// //null and undefined, both represents an absence of value but undefined except the value in future.
// // var x = null
// // var y = undefined


// //What is Hoisting????
// console.log(m)//undefined//Hoisting
// var m = 20//first execute-->global
// console.log(m)
// function display(){
//     //local execution content
//     var n = 24//second execute because of the function
//     console.log(n)
// }
// display()



//==================function=======================

// function display(){
//     var a = 10;
//     console.log(a)
// }
// display()
// // console.log(a)//it not defined at that point.
// //function can also take parameter
// function sum(a,b){
//     console.log(a+b)
// }
// sum(5,6)
// //waf to take a string and an integer n and print the nth letter in given string
// function printCharacter(str,n){
//     console.log(str.charAt(n - 1))
// }
// printCharacter("naresh",3)

// //funtion return also
// function printCharacter(str,n){
//     return str.charAt(n - 1)
// }
// var res = printCharacter("Malay",3)
// console.log(res)
// //sometime funtion won't have any name that function is anonymous function
// var printCharacter = function(str,n){
//     return str.charAt(n - 1)
// }
// console.log(printCharacter)


// function x(){
//     var a = 20
//     function y(){
//         a++
//         console.log(a)
//     }
//     return y;
// }
// var result = x()
// console.log(result)
// result();
// result();
//closures -- inner function can remember outer function value

// var createCounter = function(init){
//     var c = init
//     function increment(){
//         return ++c
//     }
//     function decrement(){
//         return --c
//     }
//     function reset(){
//         return init
//     }

//     return(increment,decrement,reset)
// }


// //Callback function :  giving one function as a parameter of another function
// function mad(){
//     console.log("sdfds")
// }
// function bad(){
//     console.log("hgdhs")
// }
// function xyz(a,b){
//     a();b();
// }
// xyz(mad,bad)//callback hell or pramid of doom

//=========================Operator=========================

//Arithmetic(+,-,*./,**,%)
//logical(||,&&,!)
//relational(>,<,>=,<=,==,===,!=,!==)
//ternary operator ...
//'==' or '!=' for content comparision 
//'===' or '!==' for comparision content and also data type.



//=====================control statement=========================

/*control statement or decision making statement will decide the control flow based on the condition

1.if
2.swith



*/
// var x = 19
// if(x%2 == 0){
//     console.log(`${x} is even`)
// }
// else{
//     console.log(`${x} is odd`)
// }

// function isEvenOdd(x){
    
//     if(x%2 == 0){
//         console.log(`${x} is even`)
//         return true
//     }
//     else{
//         console.log(`${x} is odd`)
//         return false
//     }
// }
// isEvenOdd(20)

// /*waf for voting*/ 
// function isEligible(x){
//     if(x>=18){
//         // console.log(`eligible for voting`)
//         return true
//     }else{
//         // console.log(`Not elegible for voting`)
//         return false
//     }
// }
// console.log(isEligible(17))

// //multiple condition check

// function checkNumber(num){
//     if(num>0)return "positive"
//     else if(num == 0)return "zero"
//     else return "negative"
// }
// console.log("Number is "+checkNumber(21))

// //nested if 

// //largest and smaller number between three
// function large(a,b,c){
//     //Math.max(Math.max(a,b),c)
//     //return ((a>b)?((a>c)?a:c):((b>c)?b:c))
//     return [
//         (a>b)?((a>c)?a:c):((b>c)?b:c),
//         (a<b)?((a<c)?a:c):((b<c)?b:c)
//     ]
// }
// console.log(large(5,8,9))


// //switch case

// function calc(a,b,choice){
//     switch(choice){
//         case "add":return a+b;break;
//         case "mul":return a*b;break;
//         case "sub":return a-b;break;
//         case "div":return a/b;break;
//         case "mod":return a%b;break;
//         case "pow":return a**b;break;
//         default:return "Invalid";
//     }
// }
// console.log(calc(5,6,"mul"))


// //=============================== loops ===========================

// /*2 types , entry Control,exit control 
// -- any loop contains 3 statement-- initialization,condition,updation*/

// //print 20 to 1 odd numbers in reverse using while loop


// function printOdd(x){
//     if(x%2==0)x--;
//     while(x>=1){
//         console.log(x)
//         x-=2;
//     }
// }
// printOdd(49)

// //do-while


// console.log(nemonicGenerator("this is js demo"))
// function nemonicGenerator(str){
//     var arr = str.split(" ");
//     var str1 = "";
//     var k = 0 ;
//     while(k<arr.length){
//         str1 += arr[k].charAt(0).toUpperCase();
//         k++;
//     }
//     return str1;
// }

//palindrome 

// function isPalindrome(str){

// }
// isPalindrome("")


//in let,const are not to be redeclared , they are block scop variable

// let x = 20;
// let x = 10;//can't declared same type
// const x = 30;
// x = 20;//can't redeclared

// function x(){
    //     var p = 20
    //     if(true){
//         var t = 20;
//     }
//     console.log(t)
// }
// x()

// function x(){
//     var p = 20
//     if(true){
//         let t = 20;
//     }
//     console.log(t)//t is not defined
// }
// x()


//=================== for loop =============================

//print five table values from 100 to 1 --> 

// for(let i = 100; i>=1;i-=5){
//     console.log(i)
// }

// const arr = [5,6,8,9,1,2,]
// for(let i of arr){//for of loop,,print the index-value// uses for arrays .
//     console.log(i)
// }

// for(let i in arr){//for in loop ,, print the index. uses for object .
//     console.log(i)
// }

//waf which accept a sentance and return an object which containts no of vowels,consonants,white space, words

// function myFunc(str){
//     let nv = 0,nc = 0,w = 0,ws = 0;
//     for(let i = 0;i<str.length;i++){
//         str.toLowerCase();

//         if(str[i] == ' '){
//             ws++;
//         }
//         else if(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u'){
//             nv++;
//         }
//         else{//nc = str.length -(nv+s)
//             nc++;
//         }
//     }

//     w = str.split(" ").length;

    

//     return {
//         vowels : nv,
//         consonants : nc,
//         white_space : ws,
//         words : w

//     }
// }
// let result = myFunc("this is my sentance")
// console.log(result.vowels)

//uniqe element on array-->
let arr = [5,4,8,9,4,2,2,1,8,5]

// function notRepeted(arr){
//     for(let i of arr){
//         let c = 0;
//         for(let j of arr){
//             if(i==j){
//                 c++;
//             }
//         }
//         if(c == 1)
//             console.log(i)
//     }
// }
// notRepeted(arr)





