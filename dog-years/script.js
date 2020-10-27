// 8 human years = 45 dog years.
//22 human years = 101 dog years.
// Create myAge => equal to your age as a number
let button = document.querySelector(".btn");

  // console.log(earlyYears);
  // console.log(laterYears);

button.addEventListener("click", ()=>{
  let myAge = document.querySelector(".humanyears").value;

  // early dog years
  let earlyYears = 2;

  earlyYears *= 10.5;
  // lateYears discount earlyYears
  let laterYears = myAge - 2;

  laterYears *= 4;
  let dogYears = document.querySelector(".dogyears");
  let myAgeInDogYears = earlyYears + laterYears;
  dogYears.innerHTML = "You are " + myAgeInDogYears + " years old in dog years";
});

