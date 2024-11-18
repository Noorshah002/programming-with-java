// console.log("hello world")

// //alert//

// window.alert("dont touch the button")

// alert("kesa laga mera mazak")

// //document write//

// document.write(" welcome in our new aptech" + "<br>")

// document.write(25+25)

// //types of ///

// var product="scales";  //string//

// var isvalidid =true;   //boolen//

// var year = 2025;     //number//


// console.log(typeof(product))    
// console.log(typeof(isvalidid ))   
// console.log(typeof(year))



// var firstname; //DECLARE//
// var firstname="Noor Shah"; // initailize


// console.log(firstname)



// //DATA TYPES 6 PRIMITIVE//

// //  01 . string //
// //  02 . boolen//
// //  03 . number//
// //  04 . null//
// //  05 . undefined//
// //  06 . symbol//


// ///complex data type 
// ///array 
// //object
// //function

// var fname="noor-shah"
// console.log(fname);


// fname="syeda-noor-shah"
// console.log(fname)


// fname="noor"
// console.log(fname)

// //var in number

// var marks = 100;
// var weight = 60.5;
// var salary = 4000;

// console.log(marks)

// //var in boolen 

// var isvalid = true;
// var isnot = false;

// console.log(isvalid)


// //statments

// var a = 20;  //statment
// var b = "open";  //statment
// var c = false;  //statment
// var d = 50;  //statment

// console.log(c)


// //statment end with semi-colon (;)


//   i="syeda"; j="noor"; k="shah";

//   console.log(i)
//   console.log(j)
//   console.log(k)

//   //new line will break the statement

//   var a = 20 
//   var b = a*10

//   console.log(a)
//   console.log(b)

//   //expression

//   2+3;  //expression
//   4/4;    //expression
//   var a = 40;   //statment
//   a*4;    //expression
//   "syeda"+"noor"+"shah"   //expression
  
  
// //multiline comment and single line comment

// /* 
// a = 3;
// a = 3;
// a = 3;
// */

// console.log(a)


// // Variable legal or illegal names
// // legal names

// // var hello = 'goodmorning';
// // var _abc = 23;
// // var $work = true;
// // var user2 = 'Owais';
// // var my$team = 45;
// // var car_registered = 'abc-456'
// // var isPassed = false;

// // // illegal names
// // var 3user = 'abc'; 
// // var my-fname = 'owais';
// // var my name = 'abc';
// // var car#register = 'sedan';
// // var user&isavaible = 'abc';
// // var user*isavaible = 'abc';
// // var user?isavaible = 'abc';








// //case sensitive

// var tulip = "pink"
// var Tulip = " red"
// var TULIP = "white"

// console.log(tulip)
// console.log(Tulip)
// console.log(TULIP)


// //camel  case 
// var responsivetime;
// var timeline;
// var userresonsetimelimit;



// //arthematic operator
// var a = +prompt("Enter first number")
// var b = +prompt("Enter second number")

// var add = a+b
// console.log(  " add result is " +add)



// //subtract


// var subtract = a-b
// console.log(   " subtract result is " +subtract)

// //multiply


// var multiply = a*b
// console.log(   " multiply result is " +multiply)


// //divide


// var divide = a/b
// console.log( " divide result is " +divide)

// //power


// var power = a**b
// console.log(  " power result is " +power)


// var reminder = a%b
// console.log(  " reminder result is " +reminder)



//EXAMPLE                  //SAME AS 





//amibiguity BODMAS

// var bodmas  = 5+2-3*2/2;
//  console.log(bodmas)  


 //5 + 2 - 3 * 1
 // 5 + 2 - 3
 //7 - 3
 // 4
 

//  var a = "2" + 4 ;
//  console.log(a)

//  var b = 2 + "3";
// console.log(b)

// var c = "hello" + 2;
// console.log(c)

// var d = 2 + "hello" ;
// console.log(d)

// var e = "hello" + 4 + 2;
// console.log(e)

// var f = 2 + 2 + "hello";
// console.log(f)

// var g = "hello" + (4 + 2);
// console.log(g)




///prompt//

// var ques = "whats your full name ?";
// var defaultAns = "syeda noor shah .";
// var userresponse = prompt(ques,defaultAns)

// alert("your name is :" + userresponse);


// var age = +prompt ("whats your age ?" ,15 );
// var calage = 15 + age;
// alert(calage)




 //method parseIn , parsefloat , number

//  var age = prompt("whats your age ?");
//  var sum = parseIn(age) + 10;

//  alert(sum);



 
//  var temp = prompt("whats your age ?");
//  var Ttemp = parseFloat(temp) + 10.10;

//  alert(Ttemp);



 
//  var marks = prompt("how many marks you obtain in physics ?");
//  var Tmarks = Number(marks) + 10;

//  alert(Tmarks);



//  var a =Number(true)  // 1
//  var b =Number(false)  //0
//  var a =Number(444)  //444
//  var d =Number(" hello js") //NaN (not a number)
//  var c =Number("123 456")   //NaN (not a number)

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);



// var a = '5';

// console.log(a == 5);   //(==  cheak equal numbers)
// console.log(a === 5);  //(===  cheak equal numbers and types)
// console.log(a != 5);    //(!=  cheak not equal numbers)
// console.log(a !== 5);   //(!== not equal number and types)
// console.log(a >= 5);     //(>= cheak greater number and type)
// console.log(a <= 5);      //(>= cheak less numbers and type)
// console.log(a > 5);       //(>  cheak grather  numbers)
// console.log(a < 5);        //(< cheak less number)




//logical operator

//and && , or ||


 //(kahi pr bhi false ho to false hojay ha )

// console.log(true&&true) //true
// console.log(false&&true) //false
// console.log(true&&false) //false
// console.log(false&&false) //true


// //or ||  //(kahi pr bhi true ho to true hojay ha )

// console.log(true||true) //true
// console.log(false||true) //false
// console.log(true||false) //false
// console.log(false||false) //true



// var a =  60;
// var b = a > 50 && a < 70;
// console.log(b);    //true


// var c =  80;
// var d = a < 50 && c < 70;
// console.log(d);  //false


// var e =  60;
// var f = a  >50 && e < 70;
// console.log(f);    //false


// var g =  80;
// var h = a > 50 || g < 70;
// console.log(h);     //true


// var i =  60;
// var j = a > 50 || i < 70;
// console.log(j);     //true

// var k = 50;
// var l = ! (k > 50);
// console.log(l);   //false




//double not 

// console.log (! 1); //false
// console.log ( ! 0); //true

// console.log (!! 1); //true
// console.log ( !! 0); //false




//short-circuit

// var a = false&&true&&false;  //false


// var b = true&&true&&false; //false


// var c = true&&false&&true;  //false


// var d = false||true||false; //true


// var e = true||true||false; //true


// var f = false||false||true; //true



//conditional 

// var age = prompt("whats your age");


// if (age >= 18)  {
//     alert("you are eligible for driving lisence")
// }

//     else{
//         alert ("you are not eligible for driving lisence")
//     }

    


// }

//   var vowels = prompt("Enter a vowels")

//   vowels=vowels.toLowerCase()

//   if(vowels == "a" || vowels =="e" ||  vowels =="i" ||  vowels =="o"  ||vowels =="u" )
//     {
//         alert ("its a vowels letter")
//     }
//     else{
//     alert("its a consonant")
//     }


    //loops
    //initialize
    //condition
    //expression

    // for (var i = 1; i<= 50; i++)
        
    //     console.log(i)

    

    //tables
    //  var num = + prompt ("enter a number")
    //  for (var i = 1; i<=10; i++)
    //     console.log(num * i)

// var num = +prompt("enter any number for table")
// var limit = +prompt("enter any limit for table")


// //2x1=2
// for(var i =1; i <= limit; i++){
//     console.log( num + 'x'   + i + '='   +  num * i)
// }




//arrays



//  var employeeName = [ 'zawash','arshman','sheryar','salar','faris','zaviyar','aliyan','ikrash']

//  for (var i = 0 ; i < employeeName.length; i++){
//      console.log(employeeName[3])
// }



//multiple array datatypes


// var arr1 =[100,90,80,70,60,50];
// var arr2 = ["hello" , "hye", "bye" ,"shy"];
// var arr3 =[true,false,false,true,true]
// var arr4 = [{name:"zawash"},{name:"zawash"},{name:"zawash"},{name:"zawash"}]
// var arr5 = [23,"hye",true ,{name:"zawash"}]
    
//method in array

// var marks = [26,98,90,70,76];
// console.log(marks)

//add element at last 
// var a = 50;
// var b = 60;
// var c = 70;

// marks.push(a , b , c )
// console.log(marks)


//shift

// var std = ["syeda noor shah","hafsa mughal","maheen sherazi","ansa sherazi"];
// console.log(std)

// //remove element for start " shift"

// std.shift()
// std.shift()


// //unshift for add in start

// std.unshift("syeda","noor","shah")
// console.log(std)

//slice


// var employeeName = [ "zawash","arshman","sheryar","salar","faris","zaviyar","aliyan","ikrash","wali shah","aliyan","arbish khan","parishe shah","palwashy khan","anaya mughal","saadi yousuf","zamar faris","aas alam","mahir fareed","birbal fareed","amal shah"];
// console.log(employeeName)


// var slicearray1 = employeeName.slice(4,9);
// var slicearray2 = employeeName.slice(14,19);
//               //slice =(start index , end length)

// console.log(slicearray1)
// console.log(slicearray2)


//reverse method 


// var Names = [ "zawash","arshman","sheryar","salar","faris","zaviyar","aliyan","ikrash","wali shah","aliyan","arbish khan","parishe shah","palwashy khan","anaya mughal","saadi yousuf","zamar faris","aas alam","mahir fareed","birbal fareed","amal shah"];

// var revarray=Names.reverse()
// console.log(revarray)


// var a=["syeda" ,24, "noor" ,25,"shah",26];
// var b=["syeda" ,24, "ansa" ,25,"sherazi",26];
// var c = b.concat(a)

// console.log(c)


//includes

// var num =[1,7,10,19,75,8,4,78,3,4,6];

// var incarr = num.includes(8);
// console.log(incarr)

// //splice

// //3 parameter
// //starting index
// //delete count
// //adding element

// var names = ["palwashy khan","anaya mughal","saadi yousuf","zamar faris"];

// var splicearr = names.splice(1,0,"faris","haadi");
// console.log(splicearr)


//to string

// var num = [2,4,6,8,0];


// console.log(typeof(num)); //obj
// var stringnum = num. toString();
// console.log(typeof(stringnum));
// console.log(stringnum);


//filter

// var num = [1,2,3,4,5,6,7,8,9,10];
// var oddnum = num.filter(num) => num % 2 != 0);
// console.log(oddnum);



// var num = [1,2,3,4,5,6,7,8,9,10];
// var num = [1,,3,,5,,7,,9,];

//some()

// var evenNum = num.some((num) => num  % 2 == 0);
// console.log(evenNum);
 

// //every()

// var evenNum = num.some((num) => num  % 2 != 0);
// console.log(evenNum);


//find()

// var findNum = num.find((num) => num > 9) ;
// console.log(findNum);


//map

// var doubleNum = num.map((num) => num * 2);
// console.log(doubleNum);

// num.forEach((num) => console.log(num*2))


//reduce


//index-of

// var names =["noor shah" , "hafza gul" ," maheen sherazi" , "ansa sherazi"];
// var nameIndex = names.indexOf('noor shah');
// console.log(nameIndex);


// //last-index

// var nameIndexof = names.lastIndexOf('noor shah');
// console.log(nameIndex);



