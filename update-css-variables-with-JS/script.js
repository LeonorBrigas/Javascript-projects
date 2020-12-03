const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  // for the color input there is no dataset
  const suffix = this.dataset.sizing || '';
  console.log(this.name);
  // set root properties to the ones defined in teh range
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener("change",handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove",handleUpdate));
