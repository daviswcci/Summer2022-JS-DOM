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
})