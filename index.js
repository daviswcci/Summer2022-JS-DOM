// JavaScript DOM Manipulation 
console.log("hello world!");

// Query Selectors - ways to select HTML elements from the webpage

//queryAelectorAll - grab all items similar to how CSS does
let listItems = document.querySelectorAll("li");
console.log(listItems);

listItems.forEach((element) => {
    element.style.color = "blue";
});

//getElementById - grabs a single html element with a certain id
let cornNutOpinionText = document.getElementById("cornNutOpinion");
cornNutOpinionText.style.fontWeight = "bold"; 

//getElementsByClassName - grabs every html element with a certain class
// let facts =         document.querySelectorAll(".fact");
let facts = Array.from(document.getElementsByClassName("fact")); // converting an HTMLCollection into an array
facts.forEach((fact) => {
    fact.innerText = "hello";
});

// Event Listeners - when this event occurs, perform this function.
cornNutOpinionText.addEventListener("click", cornNutFunction);

function cornNutFunction(){
    cornNutOpinionText.style.fontSize = "10px";
}

listItems.forEach((element) =>{
    element.addEventListener("mouseover", () => {
        element.style.color = "white";
    });
    
    element.addEventListener("mouseleave", () =>{
        element.style.color = "blue";
    })
});

// DOM Manipulation - Using JS to edit the content on our webpage
// Step 1 - We need to figure out what content we want to edit.
//        - We need to notice if the content has an id/class/tag - Notice HOW we can access that content
//        - Grab that content using a query selector
// Step 2 - We need to make a change of some kind.
//        - This could be by changing a CSS property, updating innertext, or even adding an eventlistener to the content
//        - Remove old or add new content to the webpage
//        - .remove() on an html element - removes content from the webpage
//        - .prepend() or .appendChild() - add content to the webpage
// Step 3 - Prosper. 

cornNutOpinionText.remove(); // showcases removing an HTML element from the list

let orderedList = document.querySelector("ol"); // grabbing

let newListItem = document.createElement("li"); // anipulating
newListItem.id = "new"; //adds an id to an element
newListItem.classList.add("fact"); //adds a class
newListItem.innerText = "I'm new here!";
orderedList.append(newListItem);