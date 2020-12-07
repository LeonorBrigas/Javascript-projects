const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("click", handleCheck)
});

let lastChecked;

function handleCheck(e) {
  let inBetween = false;
  // check if shift key down
  // check if they are checking it or removing the check
  if(e.shiftKey && this.checked) {
    // loop through every checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("starting to check in between")
      }
      if(inBetween) {
        checkbox.checked = true;
      }

    })
  }
  lastChecked = this;
}
