//
// Calculator for Exercise 2
//
function add() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 + num2;

    document.getElementById("result").value = result;
}

function subtract() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 - num2;

    document.getElementById("result").value = result;
}

function multiply() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 * num2;

    document.getElementById("result").value = result;
}

function divide() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let result = num1 / num2;

    document.getElementById("result").value = result;
}

function clearFields() {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").value = "0";
}
// end of Calculator
//
////////////////////////////////////
// For Lab#3 - Templates 
//    -addCard functions, arrays & dynamic processings
//////////////////////////////////////
//
function addCard(title, url) {

    let container = document.getElementById("gallery");

    container.innerHTML += `
        <div class="card">
            <h3>${title}</h3>
            <img src="${url}" alt="${title}">
        </div>
    `;
}
//
// Artist Data
//
const artist = {
    name: "Van Gogh",
    portfolio: [
        {
            title: "Portrait",
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
        },
        {
            title: "Chrysanthemums",
            url: "https://images8.alphacoders.com/407/thumb-1920-407337.jpg"
        }
    ]
};
//
// to Render the Page DYNAMICALLY
//
document.getElementById("artistName").innerText = artist.name;

for (let item of artist.portfolio) {
    addCard(item.title, item.url);
}
//
// end of Lab3
//
///////////////////////////////////////////////////////////