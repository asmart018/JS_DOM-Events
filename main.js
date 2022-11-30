console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");
node1.textContent = 'I used the getElementById("node1") method to access this';
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2");
node2[0].textContent =
  'I used the getElementByClassName("node2") method to access this';
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let allH3 = document.getElementsByTagName("h3");
for (let ele of allH3) {
  ele.textContent =
    'I used the getElementByTagName("h3") method to access all of these';
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let para2 = document.createElement("p");
para2.textContent = "This node was created using the createElement() method";

// TODO: Append the created node to the parent node using the element.appendChild() method
let para2Parent = document.querySelector("#parent");
para2Parent.appendChild(para2);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let a = document.createElement("a");
a.textContent = "I am a <a> tag";

// BONUS: Add a link href to the <a>
a.setAttribute("href", "https://www.google.com");

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
let aParent = document.getElementById("parent");
aParent.insertBefore(a, para2);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let para3 = document.createElement("p");
para3.textContent = "New Child Node";
let paraBeingReplaced = document.querySelector("#N1");
let para3Parent = document.querySelector("#exercise-container3");
para3Parent.replaceChild(para3, paraBeingReplaced);
// TODO: Remove the "New Child Node"
para3Parent.removeChild(para3);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
let uList = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for (let ele of list) {
  let item = document.createElement("li");
  // TODO: Append the new list items to the unordered list element
  item.textContent = ele;
  uList.appendChild(item);
}

// TODO: Append the unordered list to the `div#container` under exercise 4
let listParent = document.querySelector("#container");
listParent.appendChild(uList);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"

function show() {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "modal");
  let newModal = document.createElement("div");
  newModal.setAttribute("class", "modal-card");
  let modalText = document.createElement("p");
  let closeBtn = document.createElement("button");
  closeBtn.setAttribute("id", "btn");
  closeBtn.setAttribute("class", "btnClose");

  modalText.textContent =
    "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  closeBtn.textContent = "Close alert";

  newModal.append(modalText, closeBtn);
  newDiv.appendChild(newModal);

  document.body.appendChild(newDiv);

  closeBtn.onclick = () => {
    document.body.removeChild(newDiv);
  };
}

let button = document.querySelector("#btn");
button.onclick = show;

// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
