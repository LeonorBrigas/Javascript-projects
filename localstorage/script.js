const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// in case you have data on localStorage you want to load it
// JSON.parse to turn into objects
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  // this here its the same as document as we are already in the form element
  const text = (this.querySelector('[name=item]')).value;

  // console.log(text);
  const item = {
    text: text,
    done: false
  }
  // console.log(item);
  items.push(item);
  // call function to add item to list
  populateList(items, itemsList)
  // store data in localStorage (getItem, setItem, removeItem)
  // JSON.stringify => to make the objects a string
  localStorage.setItem("items", JSON.stringify(items));
  // to clear input
  this.reset();
}

function populateList(plates = [], platesList) {
  // map transforms in array
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `
    // join is needed to transform in a big string
  }).join("");
};

function toggleDone(e) {
  if(!e.target.matches('input')) return; //skip this unless its input
  // console.log(e.target);
  const element = e.target;
  // dataset.index to access data-index
  console.log(element.dataset.index)
  const index = element.dataset.index;
  // change property
  items[index].done = !items[index].done;
  // save in localstorage
  localStorage.setItem("items", JSON.stringify(items));
  // visual update list
  populateList(items, itemsList);
};

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
populateList(items, itemsList);
