//arrow function returning a promise
const dividenumber = (num1 , num2) => {

   return new Promise((resolve, reject) => {
      if(num2 === 0) {
         reject("Error: Division by zero is not allowed");
      }
      else{
         resolve(num1 / num2);
      }
   });
};

//case1
console.log("Divide 10 by 2");

dividenumber(10,2)

.then((result) => {

console.log("Result=", result);

console.log("Divide 10 by 0");
return dividenumber(10,0);
})
.catch((error) => {
   console.log(error);

console.log("Divide 20 by 5");
return dividenumber(20,5);
})
.then((result) => {
   if(result !==undefined){
      console.log("Result=",result)
   }
console.log("Divide 15 by 3");
return dividenumber(15,3);
})
.then((result) => {
   console.log("Result=", result);

console.log("Divide 9 by 4");
return dividenumber(9,4);
})
.then((result) => {
   console.log("Result=", result);
});