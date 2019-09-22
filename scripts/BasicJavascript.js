console.log("Test Javascript");

function TestMethod() {
   console.log("Test Method");
};

function Basic(){
   var add = null;

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);

   add = 'hello string';

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);

   add = true;

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);
}

function BasicLet(){
   let add = 1;

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);

   add = 'hello string';

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);

   add = true;

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);
}

function TestVariable(){
   var sum = 20;
   let sum1 = 30;

   console.log("Printing Sum");
   console.log(typeof sum);
   console.log(sum);

   console.log("Printing Sum1");
   console.log(typeof sum1);
   console.log(sum1);
}

function TestSum(){
   var sum = 20;
   console.log("Print Sum");
   console.log(typeof sum);
   console.log("Sum Before Loop - " + sum);
   
   {
      var sum = 30;
   }

   console.log("SUm -" + sum);


   for (var sum = 0; sum < 10; sum++) {
      console.log("Sum Inside Loop - " + sum);
   }
   console.log("Sum After Loop - " + sum);
}

function TestSum1(){
   let sum1 = 20;
   console.log("Print Sum1"); 
   console.log(typeof sum1);
   console.log("Sum1 Before Loop - " + sum1);

   {
      let sum1 = 50;
      console.log("Inside block scope - " + sum1);
   }

   console.log("Outside block scope - " + sum1);

   for (let sum1 = 0; sum1 < 10; sum1++) {
      console.log("Sum1 Inside Loop - " + sum1);
    }
    console.log("Sum1 After Loop - " + sum1);
}

function TestConstant(){
   const add = 5;

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);

   // add = 'Test String';

   console.log("Value of add - " + add);
   console.log("Type of add - " + typeof add);
}

function TestString(){
   let myString = 'Test String';

   console.log("Value of myString - " + myString);
   console.log("Type of myString - " + typeof myString);

   myString = new String('Update striing');

   console.log("Value of myString - " + myString);
   console.log("Type of myString - " + typeof myString);

   myString = new Number(5);

   console.log("Value of myString - " + myString);
   console.log("Type of myString - " + typeof myString);

   myString = new Boolean(true);

   console.log("Value of myString - " + myString);
   console.log("Type of myString - " + typeof myString);
}