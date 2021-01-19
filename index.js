

 let john = (1.88, 77);
 let mike = (1.55, 77);
 let bmi = (num, num1)=>{
     return num / num1 * num1;
 };
 console.log(bmi(1.55, 77));
 let johnm = (1.88);
 let mikem = (1.55);
 let bool = johnm > mikem;
 console.log(`Is Mark’s BMI higher than John’s?
  Why yes, it’s ${bool}, it is`);
  if (johnm > mikem) {
    console.log("john is the winner");
  } else {
    console.log("mike is the winner");
  }

  const user = (name, age)=>{
      let status = "";
      if (age < 12){status = "child";}
      else if (age >=12 && age <= 20){status = "teen";}
      else if (age >= 20 && age <= 30 ){status = "young adult";}
      else {status = "adult";}
      return `${name} is a ${status}`
  };
  let name = "bas";
  let age = 33;
  console.log(user(name, age));
      
      console.log(user("moh", 12));

      const arrayToStr = (arr) => {
        let str = "";
        for (let i = 0; i < arr.length; i++) {
          str += arr[i];}
          return arr;
        
        };

        console.log(arrayToStr(["sad", "dfg"]));

  const dsa =(arr)=>{
    let str = "";
  for (let i = 0; i < arr.length; i++){
  str += arr[i];

if (i == arr.length -1){str += ".";}
else{
  str += ",";}
}
return str;
  };
  console.log(dsa(["Berlin", "Paris", "Prague", "Rome"]));

  const hallo = (arry) => {
    for (let i = 0; i < arry.length; i++) {
      console.log(`Hallo ${arry[i]} ,I am the index of ${i} `);
    }
  };
  hallo(["Susan", "Rezvane", "Mark"]);

  const number = (arrarr)=>{
let current;
for (let i=0; i< arrarr; i++){
  current = arrarr[i];
  if (current % 2) {
    console.log(curren - 1);
  } else {
    console.log(current + 1);
  }
}
};

const names = ["Zain", "Olga", "Nancy"];
const workOrHa = ["WebDev", "Sleep", "Eat"];
for (let i = 0; i < names.length; i++) {
  console.log(`hi I am ${names[i]}, I will be ${workOrHa[i]} `);
}
