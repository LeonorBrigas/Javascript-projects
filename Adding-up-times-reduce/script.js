const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    // here they are still strings (must use parseFloat)
    const [mins, secs] =
    timeCode
    .split(":")
    .map(parseFloat)

    return (mins * 60) + secs
    // console.log(mins, secs);
  })
  .reduce((total, vidSeconds) => total + vidSeconds)

  let secondsLeft = seconds;
  let hours = Math.floor(seconds / 3600);
  secondsLeft = secondsLeft % 3600
  let mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

console.log({hours});
console.log({secondsLeft});
console.log({mins});
