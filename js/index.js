// 2(getElementByTagName)
const liCollection = document.getElementsByTagName("li");
for (const li of liCollection) {
    // console.log(li.innerText);
}

// 3(getElementById and getElementsByClassName)
// getElementById
const fruitsTitle = document.getElementById("fruits-title");
fruitsTitle.innerText = "Fruits Collection";
fruitsTitle.style.color = "purple";

// getElementsByClassName
const fruitsItem = document.getElementsByClassName("fruits-item");
for (const fruits of fruitsItem) {
    // console.log(fruits.innerHTML);
}

// 4(querySelector and querySelectorAll)
// querySelector
const firstLi = document.querySelector(".fruits-container li");
// console.log(firstLi);

//  querySelectorAll
const allLi = document.querySelectorAll(".fruits-container li");
// console.log(allLi);
for (const li of allLi) {
    // console.log(li.innerHTML);
    li.style.backgroundColor = 'lightgray';
    li.style.padding = "10px";
    li.style.margin = "10px";
}

// 5(getAttribute, setAttribute, innerText, innerHTML)
// getAttribute
const players = document.getElementById("player-section");
// console.log(players.getAttribute("class"));

// Another way to get classes
// console.log(players.classList);

// way to remove and add a class name
// console.log(players.classList.add("d-flex"));
// console.log(players.classList.remove("bg-black"));

// setAttribute
players.setAttribute('title', 'Tooltip set by JS');

// innerText
// console.log(players.innerText);
// players.innerText = 'Heading element set by JS';


// innerHTML
// console.log(players.innerHTML);
// players.innerHTML = '<h1>Heading element set by JS</h1>';

// 6(Styling DOM Properties)
const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections) {
    // console.log(section);
    section.style.backgroundColor = "gray";
    section.style.padding = "20px";
    section.style.margin = "20px";
    section.classList.add("text-center");
}

// 7(createElement and appendChild)
const newList = document.createElement("li");
newList.innerText = "New List";
players.appendChild(newList);