const visitsDisplay = document.querySelector(".visits");

let numVisits = parseInt(window.localStorage.getItem("numVisits-ls")) || 0;

numVisits ++;

visitsDisplay.textContent = numVisits;


localStorage.setItem("numVisits-ls", numVisits);