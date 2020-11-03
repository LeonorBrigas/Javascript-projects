const getSleepHours = day => { 
  if(day === "Monday") {
    return 8;
  } else if(day === "Tuesday") {
    return 7;
  } else if(day === "Wednesday") {
    return 6;
  } else if(day === "Thursday") {
    return 5;
  } else if(day === "Friday") {
    return 6;
  } else if(day === "Saturday") {
    return 7;
  } else if(day === "Sunday") {
    return 8;
  } else {
    return "error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");
 

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;  
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log('You are sleeping the ideal hours');
} else if (actualSleepHours > idealSleepHours) {
  console.log(`You are sleeping" ${actualSleepHours-idealSleepHours} more than ideal`);
} else if (actualSleepHours < idealSleepHours) {
  console.log(`You are sleeping ${idealSleepHours-actualSleepHours} less than ideal`);
  } else {
    console.log("error!");
  }
}

calculateSleepDebt();
